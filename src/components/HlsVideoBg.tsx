import { useEffect, useRef } from 'react';

interface HlsVideoBgProps {
  src: string;
  poster?: string;
  desaturate?: boolean;
  className?: string;
}

export default function HlsVideoBg({
  src,
  poster = '',
  desaturate = false,
  className = '',
}: HlsVideoBgProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: any = null;
    let isCancelled = false;

    // Check if the URL is an HLS source
    const isHlsUrl = src.includes('.m3u8');

    if (isHlsUrl) {
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native support (Safari / iOS)
        video.src = src;
      } else {
        // Dynamically import hls.js only when needed to keep initial bundle light
        import('hls.js').then(({ default: Hls }) => {
          if (isCancelled || !videoRef.current) return;
          if (Hls.isSupported()) {
            const hls = new Hls({
              maxMaxBufferLength: 10,
              enableWorker: false,
              lowLatencyMode: true,
            });
            hlsInstance = hls;
            hls.loadSource(src);
            hls.attachMedia(videoRef.current);

            hls.on(Hls.Events.ERROR, (_event, data) => {
              if (data.fatal) {
                switch (data.type) {
                  case Hls.ErrorTypes.NETWORK_ERROR:
                    hls.startLoad();
                    break;
                  case Hls.ErrorTypes.MEDIA_ERROR:
                    hls.recoverMediaError();
                    break;
                  default:
                    break;
                }
              }
            });
          }
        }).catch(() => {
          // Fallback if dynamic import fails
        });
      }
    } else {
      // Normal MP4 video
      video.src = src;
    }

    return () => {
      isCancelled = true;
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      style={{
        filter: desaturate ? 'grayscale(1) saturate(0) contrast(1.15) brightness(0.6)' : 'brightness(0.55)',
      }}
      className={`w-full h-full object-cover select-none pointer-events-none ${className}`}
      id={`v-bg-${src.substring(src.lastIndexOf('/') + 1, src.indexOf('?') > -1 ? src.indexOf('?') : undefined)}`}
    />
  );
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [react(), tailwindcss()],
    build: {
      outDir: 'docs'
    },
    resolve: {

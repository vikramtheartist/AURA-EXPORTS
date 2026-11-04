import React from 'react';
import InstitutionalRFQModal from './InstitutionalRFQModal';

export interface AgroEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialCategory?: string;
  initialForm?: string;
  initialOrigin?: string;
  initialInquiryType?: 'quotation' | 'sample' | 'specifications' | 'packaging';
}

export default function AgroEnquiryModal({
  isOpen,
  onClose,
  initialProduct = 'Salem Turmeric (Erode & Salem)',
  initialForm = 'Whole Fingers / Powder',
  initialOrigin = 'Erode & Salem, Tamil Nadu, India',
}: AgroEnquiryModalProps) {
  return (
    <InstitutionalRFQModal
      product={null}
      isOpen={isOpen}
      onClose={onClose}
      customTitle={initialProduct}
      customOrigin={initialOrigin}
      customGrade={initialForm}
      initialForm={initialForm}
    />
  );
}

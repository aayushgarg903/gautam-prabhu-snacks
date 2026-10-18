import React, { useState, useEffect } from 'react';
import { X, QrCode, Copy, Check, Download, Printer } from 'lucide-react';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrCodeModal: React.FC<QrCodeModalProps> = ({ isOpen, onClose }) => {
  const [targetUrl, setTargetUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTargetUrl(window.location.origin);
    }
  }, []);

  if (!isOpen) return null;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Build clean QR Code API image using quickchart/google charts standard clean generator
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
    targetUrl || 'https://gautamprabhusnacks.com'
  )}&color=073D29&bgcolor=FFF8E7&margin=1`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby="qr-modal-title">
      <div className="bg-[#FFF8E7] border-2 border-[#C99A32] rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-[#27251F] space-y-4">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#71695C] hover:text-[#790F1C] hover:bg-[#E8DDBF]/40 rounded-full transition-colors cursor-pointer"
          aria-label="Close QR dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1.5 pt-2">
          <div className="w-12 h-12 rounded-full bg-[#073D29]/10 border border-[#073D29]/30 text-[#073D29] flex items-center justify-center mx-auto">
            <QrCode className="w-6 h-6 text-[#073D29]" />
          </div>
          <h3 id="qr-modal-title" className="font-serif text-2xl font-bold text-[#073D29]">
            Paper Bag QR Code
          </h3>
          <p className="text-xs text-[#71695C]">
            Scan with any smartphone camera to preview the live mobile customer journey.
          </p>
        </div>

        {/* QR Code Graphic Box with High Contrast & Quiet Zone */}
        <div className="bg-white p-4 rounded-xl border border-[#E8DDBF] shadow-inner text-center max-w-[240px] mx-auto">
          <div className="relative inline-block">
            <img
              src={qrImageUrl}
              alt="Gautam Prabhhu Snacks Paper Bag QR Code"
              className="w-48 h-48 mx-auto object-contain rounded"
              width="192"
              height="192"
            />
            {/* Center Monogram Pin */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-9 h-9 rounded-full bg-[#073D29] border-2 border-[#C99A32] flex items-center justify-center shadow">
                <span className="font-serif font-bold text-xs text-[#E5C56A]">GP</span>
              </div>
            </div>
          </div>
          <p className="text-[11px] font-semibold text-[#073D29] mt-2">
            Target: {targetUrl || 'Live Site'}
          </p>
        </div>

        {/* URL Controller */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-[#71695C]">
            Destination Link (Editable for testing):
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              className="flex-1 bg-white border border-[#E8DDBF] rounded-lg px-3 py-1.5 text-xs text-[#27251F] focus:outline-none focus:ring-2 focus:ring-[#073D29]"
              placeholder="https://gautamprabhusnacks.com"
            />
            <button
              onClick={handleCopyUrl}
              className="flex items-center gap-1 bg-[#073D29] text-[#FFF8E7] px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#052B20] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#E5C56A]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Paper Bag Print Guidelines Box */}
        <div className="bg-[#FDFBF7] p-3.5 rounded-xl border border-[#E8DDBF] text-xs text-[#71695C] space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-[#790F1C]">
            <Printer className="w-4 h-4 text-[#790F1C]" />
            <span>Bag Print Production Rules:</span>
          </div>
          <ul className="list-disc list-inside space-y-0.5 text-[11px]">
            <li>Minimum printed size: <strong>25 mm x 25 mm (1 x 1 inch)</strong> for effortless scanning.</li>
            <li>Maintain clear <strong>white quiet zone</strong> (margin) around the QR code.</li>
            <li>Never stretch, skew, or print on reflective gold foil without high contrast.</li>
            <li>Always test-print on actual kraft paper before printing a 5,000 bag batch!</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <a
            href={qrImageUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Gautam-Prabhhu-Snacks-QR.png"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#C99A32] hover:bg-[#E5C56A] text-[#052B20] text-xs font-bold py-2.5 rounded-xl transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Save QR Image</span>
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#71695C] hover:text-[#27251F] border border-[#E8DDBF] rounded-xl hover:bg-white transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};

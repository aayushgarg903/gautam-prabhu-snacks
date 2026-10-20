import React, { useState } from 'react';
import { X, QrCode, Copy, Check, Download, Printer, AlertTriangle, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { evaluateQrDestination } from '../utils/qrValidation';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrCodeModal: React.FC<QrCodeModalProps> = ({ isOpen, onClose }) => {
  // Initialize with the current window origin for quick testing, but let user freely edit
  const [targetUrl, setTargetUrl] = useState(() =>
    typeof window !== 'undefined' ? window.location.origin : ''
  );
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const cleanTargetUrl = targetUrl.trim();
  const validation = evaluateQrDestination(cleanTargetUrl);

  const handleCopyUrl = () => {
    if (!cleanTargetUrl) return;
    navigator.clipboard.writeText(cleanTargetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Build clean QR Code API image using exact target destination displayed to the user
  const qrImageUrl = cleanTargetUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
        cleanTargetUrl
      )}&color=073D29&bgcolor=FFF8E7&margin=1`
    : '';

  const handleSaveQr = (e: React.MouseEvent) => {
    if (!validation.isValid) {
      e.preventDefault();
      alert('⚠️ Cannot save QR code: Please enter a valid URL destination first.');
      return;
    }

    if (!validation.isPrintSafe) {
      const confirmed = window.confirm(
        `⚠️ PRINT PRODUCTION WARNING:\n\n` +
        `Current destination: ${cleanTargetUrl}\n` +
        `Notice: ${validation.warningMessage}\n\n` +
        `Physical carry bags printed with this QR code will not work for customers once this local session or temporary host expires.\n\n` +
        `Do you want to download this temporary preview file for screen testing anyway?`
      );
      if (!confirmed) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby="qr-modal-title">
      <div className="bg-[#FFF8E7] border-2 border-[#C99A32] rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-[#27251F] space-y-4 max-h-[90vh] overflow-y-auto">
        
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
            Paper Bag QR Code Utility
          </h3>
          <p className="text-xs text-[#71695C]">
            Generate and test the QR destination printed on physical store carry bags.
          </p>
        </div>

        {/* QR Code Graphic Box with High Contrast & Quiet Zone */}
        <div className="bg-white p-4 rounded-xl border border-[#E8DDBF] shadow-inner text-center max-w-[240px] mx-auto">
          {validation.isValid && qrImageUrl ? (
            <div className="relative inline-block">
              <img
                src={qrImageUrl}
                alt={`QR code pointing to ${cleanTargetUrl}`}
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
          ) : (
            <div className="w-48 h-48 mx-auto flex flex-col items-center justify-center text-[#71695C] p-4 text-center border-2 border-dashed border-[#E8DDBF] rounded">
              <QrCode className="w-10 h-10 opacity-40 mb-2" />
              <p className="text-xs font-semibold">No QR Generated</p>
              <p className="text-[10px] mt-1 text-[#71695C]">Enter a valid URL below</p>
            </div>
          )}

          {/* Exact Destination Display */}
          <div className="mt-2 text-center">
            <p className="text-[11px] font-semibold text-[#073D29] break-all">
              Destination: {cleanTargetUrl || '(None set)'}
            </p>
            <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded border ${validation.badgeColor}`}>
              {validation.badgeLabel}
            </span>
          </div>
        </div>

        {/* Destination URL Input Controller */}
        <div className="space-y-1.5">
          <label htmlFor="qr-destination-input" className="block text-xs font-semibold text-[#71695C]">
            Destination Link (Exact Target Encoded in QR):
          </label>
          <div className="flex items-center gap-2">
            <input
              id="qr-destination-input"
              name="qrDestinationUrl"
              type="text"
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
              className="flex-1 bg-white border border-[#E8DDBF] rounded-lg px-3 py-1.5 text-xs text-[#27251F] focus:outline-none focus:ring-2 focus:ring-[#073D29]"
              placeholder="https://your-registered-domain.com"
              autoComplete="url"
            />
            <button
              type="button"
              onClick={handleCopyUrl}
              disabled={!cleanTargetUrl}
              className="flex items-center gap-1 bg-[#073D29] text-[#FFF8E7] px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#052B20] transition-colors cursor-pointer disabled:opacity-50"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#E5C56A]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <p className="text-[11px] text-[#71695C]">
            * Enter the confirmed public domain (with active SSL) once registered by the business owner.
          </p>
        </div>

        {/* Visible Warning Callout for Non-Print-Safe URLs */}
        {!validation.isPrintSafe && (
          <div className="bg-[#FFF1F2] border border-[#F43F5E] p-3 rounded-xl text-left space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#9F1239]">
              <AlertTriangle className="w-4 h-4 text-[#E11D48] flex-shrink-0" />
              <span>DO NOT PRINT CARRY BAGS WITH THIS LINK</span>
            </div>
            <p className="text-[11px] text-[#881337] leading-relaxed">
              {validation.warningMessage}
            </p>
            <p className="text-[10px] text-[#9F1239] font-medium pt-0.5">
              Physical carry bags must use a permanently registered custom domain. QR codes on thousands of printed bags cannot be changed once manufactured.
            </p>
          </div>
        )}

        {validation.isPrintSafe && (
          <div className="bg-[#F0FDF4] border border-[#86EFAC] p-2.5 rounded-xl text-left flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
            <p className="text-[11px] text-emerald-900 leading-relaxed">
              Domain format looks valid for production. Ensure you have verified domain registration and DNS before authorizing large physical print runs.
            </p>
          </div>
        )}

        {/* Paper Bag Print Guidelines Box */}
        <div className="bg-[#FDFBF7] p-3.5 rounded-xl border border-[#E8DDBF] text-xs text-[#71695C] space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-[#790F1C]">
            <Printer className="w-4 h-4 text-[#790F1C]" />
            <span>Bag Print Production Rules:</span>
          </div>
          <ul className="list-disc list-inside space-y-0.5 text-[11px]">
            <li className="text-[#9F1239] font-semibold">
              Never print bags with localhost, internal IP addresses, or temporary preview URLs.
            </li>
            <li>Minimum printed size: <strong>25 mm x 25 mm (1 x 1 inch)</strong> for effortless scanning.</li>
            <li>Maintain clear <strong>white quiet zone</strong> (margin) around the QR code matrix.</li>
            <li>Never stretch, skew, or print on reflective metallic foil without sufficient contrast.</li>
            <li>Always test-print a sample bag on actual kraft paper before bulk batch production.</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-1">
          {validation.isPrintSafe && qrImageUrl ? (
            <a
              href={qrImageUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Gautam-Prabhhu-Snacks-QR.png"
              onClick={handleSaveQr}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#C99A32] hover:bg-[#E5C56A] text-[#052B20] text-xs font-bold py-2.5 rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Save Print-Ready QR Image</span>
            </a>
          ) : (
            <a
              href={qrImageUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              download="preview-qr.png"
              onClick={handleSaveQr}
              className={`flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 rounded-xl transition-colors cursor-pointer border ${
                validation.isValid
                  ? 'bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-300'
                  : 'bg-gray-100 text-gray-400 border-gray-200 pointer-events-none'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Download Preview Only (Not Print-Safe)</span>
            </a>
          )}
          <button
            type="button"
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

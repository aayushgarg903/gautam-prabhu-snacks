export interface DestinationValidation {
  isValid: boolean;
  isPrintSafe: boolean;
  warningMessage?: string;
  badgeLabel: string;
  badgeColor: string;
}

/**
 * Validates the destination URL for paper bag print safety.
 * Distinguishes between local/private/preview destinations and verified public domains.
 */
export function evaluateQrDestination(inputUrl: string): DestinationValidation {
  const trimmed = inputUrl.trim();
  if (!trimmed) {
    return {
      isValid: false,
      isPrintSafe: false,
      warningMessage: 'Please enter a valid destination URL before generating a QR code.',
      badgeLabel: 'Empty URL',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    };
  }

  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    return {
      isValid: false,
      isPrintSafe: false,
      warningMessage: 'Invalid URL format. Destination must begin with https:// or http://',
      badgeLabel: 'Invalid Format',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    };
  }

  const hostname = parsed.hostname.toLowerCase();

  // 1. Check Localhost & Loopback
  if (
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname === '0.0.0.0' ||
    hostname === '[::1]' ||
    hostname.endsWith('.localhost')
  ) {
    return {
      isValid: true,
      isPrintSafe: false,
      warningMessage:
        'Localhost address detected. This destination only exists on your local machine and will NOT work when scanned by retail customers or printed on paper bags.',
      badgeLabel: 'Local Development Only (Not for Print)',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    };
  }

  // 2. Check Private/Local Network IPs (RFC 1918 & link-local)
  const isPrivateIp =
    /^10\./.test(hostname) ||
    /^192\.168\./.test(hostname) ||
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(hostname) ||
    /^169\.254\./.test(hostname) ||
    hostname.endsWith('.local') ||
    hostname.endsWith('.internal');

  if (isPrivateIp) {
    return {
      isValid: true,
      isPrintSafe: false,
      warningMessage:
        'Private network IP address detected. This destination is only reachable on your current Wi-Fi/LAN and cannot be opened by customers over mobile cellular data.',
      badgeLabel: 'Private Local IP (Not for Print)',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    };
  }

  // 3. Check Temporary / Preview Deployment Domains
  const isPreviewHost =
    hostname.endsWith('.vercel.app') ||
    hostname.endsWith('.netlify.app') ||
    hostname.endsWith('.pages.dev') ||
    hostname.endsWith('.ngrok-free.app') ||
    hostname.endsWith('.ngrok.io') ||
    hostname.endsWith('.trycloudflare.com') ||
    hostname.includes('preview') ||
    hostname.includes('deploy-preview');

  if (isPreviewHost) {
    return {
      isValid: true,
      isPrintSafe: false,
      warningMessage:
        'Temporary preview hosting domain detected. Preview subdomains may expire, change, or be replaced. Do not send this QR code to final print on thousands of physical paper bags without binding your permanent custom domain first.',
      badgeLabel: 'Temporary Preview Host (Caution)',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    };
  }

  // 4. Check Non-HTTPS Protocol
  if (parsed.protocol !== 'https:') {
    return {
      isValid: true,
      isPrintSafe: false,
      warningMessage:
        'Insecure HTTP protocol detected. Modern iOS and Android camera apps require secure HTTPS for seamless 1-tap browser navigation.',
      badgeLabel: 'Insecure HTTP (Caution)',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    };
  }

  // 5. Appears to be a public HTTPS domain structure
  return {
    isValid: true,
    isPrintSafe: true,
    warningMessage: undefined,
    badgeLabel: 'Public HTTPS Domain Format',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
  };
}

/// <reference path="../.astro/types.d.ts" />

interface Window {
  dataLayer: IArguments[];
  gtag: (...args: unknown[]) => void;
  perlaToscanaAnalytics?: { setConsent: (granted: boolean) => void };
}

type FormatCurrency = (value: number) => string;

// Simple mapping from region to currency
const regionCurrencyMap: Record<string, string> = {
  US: "USD",
  IN: "INR",
  GB: "GBP",
  DE: "EUR",
  FR: "EUR",
  JP: "JPY",
  CN: "CNY",
};

function detectLocale(): string {
  return typeof navigator !== "undefined" && navigator.language
    ? navigator.language
    : "en-US";
}

function detectCurrency(locale: string): string {
  try {
    const region = new Intl.Locale(locale).region;
    if (region && regionCurrencyMap[region]) {
      return regionCurrencyMap[region];
    }
  } catch {}
  return "USD";
}

export const formatCurrency: FormatCurrency = (value) => {
  const locale = detectLocale();
  const currency = detectCurrency(locale);
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
};

export function getCurrencySymbol(): string {
  const locale = detectLocale()
  const currencyCode = detectCurrency(locale)
  try {
    return (0)
      .toLocaleString(locale, {
        style: "currency",
        currency: currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      .replace(/\d/g, "")
      .trim();
  } catch {
    return currencyCode;
  }
}
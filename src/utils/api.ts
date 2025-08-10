const API_BASE_URL = "https://dev.api.neurolover.com";

export interface BillingOption {
  code: string;
  name: string;
  discount: number;
}

export interface CostData {
  originalMonthlyPrice: number;
  accountDiscount: number;
  billings: BillingOption[];
}

export interface CostResponse {
  status: string;
  data: CostData;
}

export interface PrognosisData {
  monthlyPriceUSD: number;
  monthlyPriceWithDiscountUSD: number;
  accountsCount: number;
  billingPeriod: string;
  billingPeriodName: string;
  billingPeriodAsDays: number;
  accountDiscountRate: number;
  accountDiscountUSD: number;
  totalAccountsDiscountRate: number;
  totalAccountsDiscountUSD: number;
  billingDiscountRate: number;
  billingDiscountUSD: number;
  totalDiscountRate: number;
  totalDiscountUSD: number;
  totalPriceUSD: number;
  totalPriceWithDiscountUSD: number;
}

export interface PrognosisResponse {
  status: string;
  data: PrognosisData;
}

export type BillingPeriod =
  | "MONTHLY"
  | "THREE_MONTHLY"
  | "SIX_MONTHLY"
  | "YEARLY";

export const billingPeriodMap: Record<number, BillingPeriod> = {
  1: "MONTHLY",
  3: "THREE_MONTHLY",
  6: "SIX_MONTHLY",
  12: "YEARLY",
};

export const fetchCostData = async (): Promise<CostData> => {
  const response = await fetch(`${API_BASE_URL}/admin/pub/subscription/cost`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cost data");
  }

  const data: CostResponse = await response.json();
  return data.data;
};

export const calculatePrognosis = async (
  billingPeriod: BillingPeriod,
  accountsCount: number
): Promise<PrognosisData> => {
  const response = await fetch(
    `${API_BASE_URL}/admin/pub/subscription/prognosis`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        billingPeriod,
        accountsCount,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to calculate prognosis");
  }

  const data: PrognosisResponse = await response.json();
  return data.data;
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
};

export const submitPreregistration = async (
  email: string
): Promise<{ status: string }> => {
  const response = await fetch(`${API_BASE_URL}/admin/pub/preregistration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit preregistration");
  }

  return response.json();
};

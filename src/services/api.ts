export interface QuoteSubmissionPayload {
  services: string[];
  roofType: string;
  storeys: string;
  approxAge: string;
  isLeaking: boolean;
  uploadedPhotoNames?: string[];
  suburb: string;
  postcode: string;
  streetAddress: string;
  preferredDate: string;
  preferredTimeWindow: string;
  urgency: string;
  name: string;
  mobile: string;
  email: string;
  preferredContactMethod: "Call" | "SMS" | "Email";
  notes?: string;
}

export interface QuoteSubmissionResult {
  success: boolean;
  referenceNumber: string;
  message: string;
  submittedAt: string;
}

export interface OrderSubmissionPayload {
  contact: {
    fullName: string;
    email: string;
    phone: string;
  };
  deliveryType: "delivery" | "pickup";
  shippingAddress?: {
    street: string;
    suburb: string;
    postcode: string;
  };
  paymentMethod: "card" | "apple_pay" | "direct_deposit";
  items: Array<{
    productId: string;
    name: string;
    quantity: number;
    price: number;
    variantName?: string;
  }>;
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
}

export interface OrderSubmissionResult {
  success: boolean;
  orderNumber: string;
  message: string;
  placedAt: string;
}

/**
 * Submit Quote Request
 * TODO: Connect to backend API or CRM / Webhook (e.g. Resend, SendGrid, Zapier, or Google Sheets)
 */
export async function submitQuote(payload: QuoteSubmissionPayload): Promise<QuoteSubmissionResult> {
  // Simulate network latency (250ms)
  await new Promise((resolve) => setTimeout(resolve, 300));

  const referenceNumber = `MRS-${Math.floor(10000 + Math.random() * 90000)}`;

  console.log("[Marco's Roofing Solutions] New Quote Request Received:", {
    referenceNumber,
    timestamp: new Date().toISOString(),
    payload
  });

  return {
    success: true,
    referenceNumber,
    message: "Quote request successfully received. Miri or Arthur will call you within 1 business day.",
    submittedAt: new Date().toLocaleString("en-AU", { timeZone: "Australia/Melbourne" })
  };
}

/**
 * Submit Shop Order
 * TODO: Connect Stripe Elements / Payment Intent backend and inventory management
 */
export async function submitOrder(payload: OrderSubmissionPayload): Promise<OrderSubmissionResult> {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const orderNumber = `MRS-ORD-${Math.floor(20000 + Math.random() * 80000)}`;

  console.log("[Marco's Roofing Solutions] New Trade Supplies Order Received:", {
    orderNumber,
    timestamp: new Date().toISOString(),
    payload
  });

  return {
    success: true,
    orderNumber,
    message: "Thank you for your order! Your confirmation and receipt have been issued.",
    placedAt: new Date().toLocaleString("en-AU", { timeZone: "Australia/Melbourne" })
  };
}

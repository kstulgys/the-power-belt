/* eslint-disable @typescript-eslint/ban-ts-comment */
import { proxy, useSnapshot, subscribe } from "valtio";
import { derive, proxyWithComputed, devtools } from "valtio/utils";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React from "react";
import { origin } from "src/utils/products";

export const beltColors = [
  { color: "white", name: "white" },
  { name: "lightGrey", color: "#BBC2D1" },
  { name: "grey", color: "#7E858E" },
  { name: "sand", color: "#C5C1AA" },
  { name: "buckskin", color: "#9E815F" },
  { name: "rust", color: "#8B4932" },
  { name: "brown", color: "#3A2D2D" },
  { name: "forestGreen", color: "#2A4147" },
  { name: "loden", color: "#657743" },
  { name: "mint", color: "#C0EECD" },
  { name: "lineGreen", color: "#E2ED9F" },
  { name: "yellow", color: "#ECDE7F" },
  { name: "peach", color: "#EDC2A3" },
  { name: "orange", color: "#E8AD6B" },
  { name: "pink", color: "#E9C0CE" },
  { name: "lavender", color: "#B3ACE7" },
  { name: "aqua", color: "#9ADCF6" },
  { name: "turquoise", color: "#5292D7" },
  { name: "royalBlue", color: "#0A32AE" },
  { name: "navyBlue", color: "#111A37" },
  { name: "purple", color: "#4F286F" },
  { name: "maroon", color: "#532732" },
  { name: "red", color: "#CC514B" },
  { name: "fuchsia", color: "#C850AF" },
  { name: "black", color: "#0E161B" },
];

export const beltSizes = [
  { lable: "S-90cm/35in", value: "S" },
  { lable: "M-100cm/39in", value: "M" },
  { lable: "L-110cm/43in", value: "L" },
  { lable: "XL-120cm/47in", value: "XL" },
  { lable: "2XL-125cm/49in", value: "2XL" },
  { lable: "3XL-130cm/51in", value: "3XL" },
];

export const beltTypes = [
  { value: "Powerbelt 13mm", id: "B-102", imagePath: `${origin}/images/pwb/b-102.png` },
  { value: "Deadliftbelt 13mm", id: "B-101", imagePath: `${origin}/images/pwb/b-101-103.png` },
  { value: "Deadliftbelt 10mm", id: "B-103", imagePath: `${origin}/images/pwb/b-101-103.png` },
];

const state = proxy({
  beltType: beltTypes[0],
  writing: "never give up",
  beltSize: beltSizes[2].value,
  beltColor: beltColors[24],
  beltStitchedColor: beltColors[24],
});

export function useBeltSelection() {
  const snap = useSnapshot(state);
  return {
    snap,
    setBeltColor: (color: string) => {
      //@ts-ignore
      state.beltColor = color;
    },
    setBeltStitchedColor: (color: string) => {
      //@ts-ignore
      state.beltStitchedColor = color;
    },
    setBeltSize: (size: string) => {
      state.beltSize = size;
    },
    setWriting: (e: { target: { value } }) => {
      state.writing = e.target.value;
    },
    setBeltType: (type) => {
      state.beltType = type;
    },
  };
}

let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  }
  return stripePromise;
};

enum Currencies {
  usd = "usd",
  aud = "aud",
  cad = "cad",
  eur = "eur",
}

type CurrencyName = keyof typeof Currencies;

type Currency = {
  [key in Currencies]: {
    value: number;
    symbol: string;
  };
};

const eurToCurrency: Currency = {
  usd: { value: 1.19, symbol: "USD" },
  aud: { value: 1.6, symbol: "AUD" },
  cad: { value: 1.49, symbol: "CAD" },
  eur: { value: 1, symbol: "EUR" },
};

interface ILineItem {
  price_data: {
    currency: string;
    product_data: {
      metadata: { [key: string]: string };
      name: string;
      description: string;
      images: string[];
    };
    unit_amount: number;
  };
  quantity: number;
}

export interface ICartItem {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  updatedPrice: number;
  quantity: number;
  variantId: string;
  descriptor?: string;
  variant: {
    size: string;
    color: string;
    stitchedColor: string;
  };
  meta: {
    size: string;
    color: string;
    stitchedColor: string;
  };
}

function createLineItems({ items, currency }: { items: ICartItem[]; currency: CurrencyName }): ILineItem[] {
  return items.map(({ name, price, quantity, description, variant, images, descriptor, meta, updatedPrice }) => ({
    price_data: {
      currency,
      product_data: {
        metadata: { quantity: String(quantity), name, variant: JSON.stringify(meta) },
        name,
        description: descriptor,
        images,
      },
      unit_amount: updatedPrice,
    },
    quantity,
  }));
}

function getVariantId(item) {
  return Object.values(item.variant).reduce((acc: string, val: string) => {
    return acc.concat(val);
  }, "");
}

const cartState = proxy({
  is20discount: false,
  is10discount: false,
  isOpen: false,
  symbol: "USD",
  currency: "usd",
  totalPrice: 0,
  cartCount: 0,
  items: [],
  onOpen: () => {
    cartState.isOpen = true;
  },
  onClose: () => {
    cartState.isOpen = false;
  },
  onToggle: () => {
    cartState.isOpen = !cartState.isOpen;
  },
  addItem: (item: ICartItem) => {
    //@ts-ignore
    item.variantId = getVariantId(item);
    const itemExist = cartState.items.some(({ id, variantId }) => id === item.id && variantId === item.variantId);
    if (!itemExist) {
      cartState.items = [...cartState.items, { ...item, quantity: 1 }];
    } else {
      cartState.incrementItem(item.variantId);
    }
    cartState.onOpen();
  },
  removeItem: (variantId: string) => {
    cartState.items = cartState.items.filter((item) => item.variantId !== variantId);
  },
  incrementItem: (variantId: string) => {
    cartState.items = cartState.items.map((item) => ({
      ...item,
      quantity: item.variantId === variantId ? item.quantity + 1 : item.quantity,
    }));
  },
  decrementItem: (variantId: string) => {
    cartState.items = cartState.items.map((item) => ({
      ...item,
      quantity: item.variantId === variantId && item.quantity > 1 ? item.quantity - 1 : item.quantity,
    }));
  },
  updateItem: ({ key, value, variantId }) => {
    cartState.items = cartState.items.map((item) => {
      return item.variantId === variantId ? { ...item, [key]: value } : item;
    });
  },
  clearCart: () => {
    cartState.items = [];
  },
  updateCurrency: (currency: CurrencyName) => {
    // cartState.currency = currency;
    // cartState.symbol = eurToCurrency[currency].symbol;
    // const multiplier = eurToCurrency[currency].value;
    // cartState.items = cartState.items.map((item) => ({
    //   ...item,
    //   price: item.price * multiplier,
    // }));
  },
  apply10percent: (code: string) => {
    if (code.toLowerCase() !== "power10")
      if (!cartState.is10discount) {
        cartState.items = cartState.items.map((item) => ({
          ...item,
          price: item.price * 0.9,
        }));
        cartState.is10discount = true;
      }
  },
  handleCheckout: async () => {
    const line_items = createLineItems({ items: cartState.items, currency: cartState.currency as CurrencyName });
    const { data: checkoutSession } = await axios.post("/api/checkout_sessions", { line_items });
    if ((checkoutSession as any).statusCode === 500) {
      console.error((checkoutSession as any).message);
      return;
    }
    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    console.warn(error.message);
  },
});

const unsub = devtools(cartState, "cartState");

function updateTotalPriceAndCount() {
  let totalPrice = 0;
  let cartCount = 0;
  cartState.items.forEach(({ price, quantity, updatedPrice }) => {
    totalPrice += updatedPrice * quantity;
    cartCount += quantity;
  });
  cartState.totalPrice = totalPrice;
  cartState.cartCount = cartCount;
  // apply20percent();
}

function apply20percent() {
  if (cartState.cartCount > 1) {
    cartState.items = cartState.items.map((item) => ({
      ...item,
      price: item.price,
      updatedPrice: item.price * 0.8,
    }));
    cartState.is20discount = true;
  } else {
    cartState.items = cartState.items.map((item) => ({
      ...item,
      price: item.price,
      updatedPrice: item.price,
    }));
    cartState.is20discount = false;
  }
}

export function useCart() {
  const snap = useSnapshot(cartState);

  React.useEffect(() => {
    updateTotalPriceAndCount();
  }, [snap.items]);

  React.useEffect(() => {
    apply20percent();
  }, [snap.cartCount]);

  return snap;
}

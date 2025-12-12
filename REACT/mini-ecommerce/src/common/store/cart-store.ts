import { create } from "zustand";
import type { Product } from "../types";

interface CartStore {
  //cart: Product[];
  cart: Array<Product & { quantity: number }>;
  addProductToCart: (value: Product) => void;

  removeProduct: (id: number) => void;
  addOne: (id: number) => void;
  removeOne: (id: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  //addProductToCart: (newProduct) =>
  //  set((state) => ({ cart: [...state.cart, newProduct] })),

  addProductToCart: (newProduct) =>
    set((state) => {
      const exists = state.cart.find((product) => product.id === newProduct.id);

      if (exists) {
        return {
          cart: state.cart.map((product) =>
            product.id === newProduct.id ? { ...product, quantity: product.quantity + 1 } : product
          ),
        };
      }

      return {
        cart: [...state.cart, { ...newProduct, quantity: 1 }],
      };
    }),

  removeProduct: (id) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== id),
    })),

  addOne: (id) =>
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      ),
    })),

    removeOne: (id) =>
    set((state) => ({
      cart: state.cart
        .map((product) =>
          product.id === id ? { ...product, quantity: product.quantity - 1 } : product
        )
        .filter((product) => product.quantity > 0),
    })),
}));

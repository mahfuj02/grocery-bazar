import create from "zustand";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface CartStore {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (product) => {
    set((state) => ({
      cartItems: [...state.cartItems, product],
    }));
  },
  removeFromCart: (productId: number) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
    }));
  },
  incrementQuantity: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      }),
    }));
  },
  decrementQuantity: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) => {
        if (item.id === productId) {
          if (item.quantity <= 1) {
            return { ...item, quantity: 0 };
          }
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      }),
    }));
  },
  clearCart: () => {
    set(() => ({
      cartItems: [],
    }));
  },
}));

export default useCartStore;

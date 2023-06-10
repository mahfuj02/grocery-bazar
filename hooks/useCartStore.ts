import CartItem from "@/utils/CartItem";
import create from "zustand";

interface CartStore {
  totalMoney: number;
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>((set) => ({
  totalMoney: 0,
  cartItems: [],
  addToCart: (product) => {
    set((state) => ({
      cartItems: [...state.cartItems, product],
    }));
  },
  removeFromCart: (productId: number) => {
    set((state) => {
      let removeItem = state.cartItems.find((item) => item.id === productId);
      if (!removeItem) return state;
      return {
        cartItems: state.cartItems.filter((item) => item.id !== productId),
        totalMoney: state.totalMoney - (removeItem?.price * removeItem?.quantity),
      };
    });
  },

  incrementQuantity: (productId) => {
    set((state) => {
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return {
        cartItems: updatedCartItems,
        totalMoney:
          state.totalMoney + getItemPriceById(state.cartItems, productId),
      };
    });
  },
  decrementQuantity: (productId) => {
    set((state) => {
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity - 1;
          return { ...item, quantity: newQuantity >= 0 ? newQuantity : 0 };
        }
        return item;
      });

      return {
        cartItems: updatedCartItems,
        totalMoney:
          state.totalMoney - getItemPriceById(state.cartItems, productId),
      };
    });
  },

  clearCart: () => {
    set(() => ({
      cartItems: [],
    }));
  },
  calculateTk: () => {
    set(() => ({}));
  },
}));

export default useCartStore;

function getItemPriceById(cartItems: CartItem[], id: number): number {
  const item = cartItems.find((item) => item.id === id);
  return item ? item.price : 0;
}

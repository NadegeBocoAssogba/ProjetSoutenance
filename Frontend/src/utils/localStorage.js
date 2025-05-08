export const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  export const loadCartFromLocalStorage = () => {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : undefined;
  };
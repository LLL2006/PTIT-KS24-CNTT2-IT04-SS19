import { useMemo } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function ShoppingCart() {
  const cartItems: CartItem[] = useMemo(
    () => [
      { id: 1, name: "Sản phẩm A", price: 100000, quantity: 5 },
      { id: 2, name: "Sản phẩm B", price: 200000, quantity: 1 },
    ],
    []
  );

  const total = useMemo(() => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div>
      <h2>Giỏ hàng</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price.toLocaleString()} × {item.quantity}
          </li>
        ))}
      </ul>
      <h3>
        Tổng đơn hàng: <span>{total.toLocaleString()}</span>
      </h3>
    </div>
  );
}

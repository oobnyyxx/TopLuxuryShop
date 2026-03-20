import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Rolex Submariner",
    brand: "Rolex",
    price: 8000,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Rolex Daytona",
    brand: "Rolex",
    price: 12000,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Tissot PRX",
    brand: "Tissot",
    price: 600,
    image: "https://via.placeholder.com/200",
  },
];

const translations: any = {
  ro: {
    title: "LUXURY WATCH",
    cart: "Coș",
    buy: "Cumpără",
    total: "Total",
  },
  en: {
    title: "LUXURY WATCH",
    cart: "Cart",
    buy: "Buy",
    total: "Total",
  },
  de: {
    title: "LUXURY WATCH",
    cart: "Warenkorb",
    buy: "Kaufen",
    total: "Gesamt",
  },
};

export default function App() {
  const [cart, setCart] = useState<any[]>([]);
  const [lang, setLang] = useState("ro");

  const t = translations[lang];

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>{t.title}</h1>

      {/* LIMBA */}
      <div>
        <button onClick={() => setLang("ro")}>RO</button>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("de")}>DE</button>
      </div>

      {/* PRODUSE */}
      <h2>Produse</h2>
      {products.map((p) => (
        <div
          key={p.id}
          style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}
        >
          <img src={p.image} width="150" />
          <h3>{p.name}</h3>
          <p>{p.brand}</p>
          <p>€{p.price}</p>
          <button onClick={() => addToCart(p)}>{t.buy}</button>
        </div>
      ))}

      {/* COS */}
      <h2>{t.cart}</h2>
      {cart.map((item, i) => (
        <p key={i}>
          {item.name} - €{item.price}
        </p>
      ))}

      <h3>
        {t.total}: €{total}
      </h3>
    </div>
  );
}

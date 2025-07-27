
import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { name: "Sabão líquido", price: 15, image: "https://a-static.mlcdn.com.br/1500x1500/sabao-liquido-omo-lavagem-perfeita-3l/magazineluiza/220976600/c2ccaabe976e715b8d8fe9234ffc1ebc.jpg" },
    { name: "Amaciante concentrado", price: 18, image: "https://cdn.awsli.com.br/2500x2500/1358/1358824/produto/247053411/esqu-0662-11-yv8b62opp3.jpg" },
    { name: "Desinfetante", price: 12, image: "https://prezunic.vtexassets.com/arquivos/ids/208268/65f8a2b399c6b7113a1fa230.jpg?v=638463901966370000" },
    { name: "Multiuso", price: 10, image: "https://protelimp.com.br/wp-content/uploads/limpador-multiuso-500ml-veja-original.jpg" },
    { name: "Aromatizador", price: 20, image: "https://images.tcdn.com.br/img/img_prod/613137/odorizador_de_ambientes_campos_de_lavanda_bom_ar_1583_1_6bec53331f1de15cb9426df7676e5400.jpg" },
    { name: "Detergente", price: 8, image: "https://cdn.b4c.inf.br/storage/fcwdistribuidora/1000/detergente-liquido-500-ml-coco-ype-1706101404.webp" },
    { name: "Limpa vidro", price: 14, image: "https://a-static.mlcdn.com.br/1500x1500/limpa-vidro-veja-vidrex-cristal-multiuso-500ml/magazineluiza/218653100/4a86e77915e93f59d46e2340243ce075.jpg" },
    { name: "Pano multiuso", price: 6, image: "https://www.lotshomeshop.com.br/arquivos/ids/160094-1000-1000/Pano-Multiuso-Antibacteriano-Almofada-Azul-EsfreBom-Bettanin.jpg?v=637884999372000000" }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  const pointsEarned = Math.floor(totalPrice * 0.1);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>🧽 Marketplace de Produtos de Limpeza</h1>
        <input
          type="text"
          placeholder="Buscar produto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <main>
        <section className="products">
          {filteredProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>R$ {product.price.toFixed(2)}</p>
              <button onClick={() => addToCart(product)}>Adicionar</button>
            </div>
          ))}
        </section>

        <section className="cart">
          <h2>🛒 Carrinho</h2>
          {cart.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - R$ {item.price.toFixed(2)}
                  <button onClick={() => removeFromCart(index)}>Remover</button>
                </li>
              ))}
            </ul>
          )}
          <p>Total: R$ {totalPrice.toFixed(2)}</p>
          <p>🎯 Pontos acumulados: {pointsEarned}</p>
        </section>
      </main>
    </div>
  );
}

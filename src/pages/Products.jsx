import { useEffect, useState } from "react";
import API from "../api";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
  });

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      console.log(res.data);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    try {
      const productData = {
        name: form.name,
        description: form.description,
        price: Number(form.price),
        quantity: Number(form.quantity),
        category: form.category,
      };

      console.log(productData);

      const res = await API.post("/products", productData);

      console.log(res.data);

      fetchProducts();

      setForm({
        name: "",
        description: "",
        price: "",
        quantity: "",
        category: "",
      });
    } catch (err) {
      console.log(err.response?.data || err);
    }
  };

  return (
    <div>
      <h1>Products</h1>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <input
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <input
        placeholder="Quantity"
        value={form.quantity}
        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
      />

      <input
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <button onClick={addProduct}>Add Product</button>

      <hr />

      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Category: {product.category}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;

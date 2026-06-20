import { useEffect, useState } from "react";
import API from "../api";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    userId: "",
    productId: "",
    quantity: 1,
  });

  const fetchOrders = async () => {
    try {
      const res = await API.get("/orders");
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
    fetchUsers();
    fetchProducts();
  }, []);

  const addOrder = async () => {
    try {
      const selectedProduct = products.find((p) => p._id === form.productId);

      if (!selectedProduct) {
        alert("Select Product");
        return;
      }

      const total = selectedProduct.price * Number(form.quantity);

      const orderData = {
        userId: form.userId,
        products: [
          {
            productId: form.productId,
            quantity: Number(form.quantity),
            price: selectedProduct.price,
          },
        ],
        totalAmount: total,
        status: "pending",
      };

      console.log(orderData);

      await API.post("/orders", orderData);

      fetchOrders();
    } catch (err) {
      console.log(err.response?.data || err);
    }
  };

  return (
    <div>
      <h1>Orders</h1>

      <select onChange={(e) => setForm({ ...form, userId: e.target.value })}>
        <option>Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      <br />
      <br />

      <select onChange={(e) => setForm({ ...form, productId: e.target.value })}>
        <option>Select Product</option>
        {products.map((product) => (
          <option key={product._id} value={product._id}>
            {product.name}
          </option>
        ))}
      </select>

      <br />
      <br />

      <input
        type="number"
        placeholder="Quantity"
        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
      />

      <br />
      <br />

      <button onClick={addOrder}>Add Order</button>

      <hr />

      {orders.map((order) => (
        <div key={order._id}>
          <p>Order ID: {order._id}</p>
          <p>Total Amount: {order.totalAmount}</p>
          <p>Status: {order.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default OrdersPage;

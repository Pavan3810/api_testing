import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UsersPage from "./pages/Users";
import ProductsPage from "./pages/Products";
import OrdersPage from "./pages/Orders";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Users</Link> | <Link to="/products">Products</Link> |{" "}
        <Link to="/orders">Orders</Link>
      </nav>

      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

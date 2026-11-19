import { Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 pt-40 text-center">
      <h1 className="text-[48px] text-[#0071f8]">404</h1>
      <p>This page doesn’t exist.</p>
      <Link to="/" className="rounded-[25px] bg-[#ee626b] px-[30px] py-3 text-sm font-semibold uppercase text-white transition-all hover:bg-[#0071f8]">
        Back to home
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
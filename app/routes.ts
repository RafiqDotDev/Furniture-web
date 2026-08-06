import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("categories", "routes/categories.tsx"),
  route("collections", "routes/collections.tsx"),
  route("products/:id", "routes/product-detail.tsx"),
  route("cart", "routes/cart.tsx"),
  route("checkout", "routes/checkout.tsx"),
  route("confirmation", "routes/confirmation.tsx"),
  route("wishlist", "routes/wishlist.tsx"),
  route("heritage", "routes/heritage.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;

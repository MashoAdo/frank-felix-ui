import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authLayout/products")({
	component: Products
});


export function Products() {
  return (
	<div>Products</div>
  )
}

export default Products
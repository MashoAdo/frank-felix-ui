import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authLayout/orders")({
	component: Orders
});


export default function Orders(){
	return <div>Orders</div>
}
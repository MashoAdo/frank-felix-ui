import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authLayout/transactions")({
	component: Transactions,
});

export default function Transactions() {
	return <div>Transactions</div>;
}

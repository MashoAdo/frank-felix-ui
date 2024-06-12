import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authLayout/")({
	component: Index,
});

export default function Index() {
	return <div>Dashboard page</div>;
}

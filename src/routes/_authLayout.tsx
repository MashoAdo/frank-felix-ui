import { createFileRoute, Outlet } from "@tanstack/react-router";


export const Route = createFileRoute("/_authLayout")({
	component: LayoutComponent,
});

function LayoutComponent() {
	return (
		<div>
			layout
			<div>
				<Outlet />
			</div>
		</div>
	);
}

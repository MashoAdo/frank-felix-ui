import { createLazyFileRoute,  } from "@tanstack/react-router";
import { Box } from "@mantine/core";

export const Route = createLazyFileRoute("/_authLayout/")({
	component: Index,
});

export default function Index() {

	return (
		<Box>
			Dashboard page
		</Box>
	);
}

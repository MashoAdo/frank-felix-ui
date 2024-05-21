import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppShell, Avatar, Badge, Burger, Group, NavLink, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import { Link } from "@tanstack/react-router";
import { IconGauge, IconChevronRight } from "@tabler/icons-react";

export const Route = createFileRoute("/_authLayout")({
	component: LayoutComponent,
});

function LayoutComponent() {

	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
			padding="md"
		>
			<AppShell.Header  style={{display:'flex',alignItems:"center",justifyContent:"space-between",padding:10}}>

				<Group h="100%"  >
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
					<MantineLogo size={30} />
				</Group>

				<Group>
					<Group>
					<Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>
					<Text>Vitaly Rtishchev</Text>
					</Group>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar p="md">
				<Stack>
				<NavLink
						component={() => (
							<Link to="/" className="[&.active]:font-bold">
								Dashboard
							</Link>
						)}
						label="With description"
						description="Additional information"
						leftSection={
							<Badge size="xs" color="red" circle>
								3
							</Badge>
						}
					/>
					<NavLink
						component={() => (
							<Link to="/orders" className="[&.active]:font-bold">
								Orders
							</Link>
						)}
						label="With right section"
						leftSection={<IconGauge size="1rem" stroke={1.5} />}
						rightSection={<IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />}
					/>
					<NavLink
						component={() => (
							<Link to="/products" className="[&.active]:font-bold">
								transactions
							</Link>
						)}
						label="With right section"
						leftSection={<IconGauge size="1rem" stroke={1.5} />}
						rightSection={<IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />}
					/>

					<NavLink
						component={() => (
							<Link to="/products" className="[&.active]:font-bold">
								Producs
							</Link>
						)}
						label="With right section"
						leftSection={<IconGauge size="1rem" stroke={1.5} />}
						rightSection={<IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />}
					/>


					<NavLink
						component={() => (
							<Link to="/products" className="[&.active]:font-bold">
								Log out
							</Link>
						)}
						label="With right section"
						leftSection={<IconGauge size="1rem" stroke={1.5} />}
						rightSection={<IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />}
					/>
					
				</Stack>
			</AppShell.Navbar>
			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
}

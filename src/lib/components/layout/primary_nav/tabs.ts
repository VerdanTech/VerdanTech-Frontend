import GardensIcon from 'virtual:icons/mdi/planet';
import GardenIcon from 'virtual:icons/material-symbols/home-and-garden-outline-rounded';
import GardenDashboardIcon from 'virtual:icons/material-symbols/space-dashboard-outline';
import GardenMembersIcon from 'virtual:icons/ph/users-three';
import GardenMetricsIcon from 'virtual:icons/material-symbols/bar-chart-4-bars-rounded';
import PlannerIcon from 'virtual:icons/mdi/planner-outline';
import PlannerWorkbookIcon from 'virtual:icons/material-symbols/checklist-rounded';
import PlannerVerdagraphIcon from 'virtual:icons/material-symbols/leaf-spark-outline-rounded';
import WorkspacesIcon from 'virtual:icons/tabler/tools';
import WorkspaceIcon from 'virtual:icons/tabler/tools';
import CultivarsIcon from 'virtual:icons/tabler/plant-2';
import CultivarIcon from 'virtual:icons/tabler/plant-2';
import EnvironmentIcon from 'virtual:icons/material-symbols/sunny-outline-rounded';
import DeviceIcon from 'virtual:icons/material-symbols/network-node';
import ResourcesIcon from 'virtual:icons/material-symbols/book-2-outline-rounded';
import ResourcesGuidesIcon from 'virtual:icons/mdi/file-document-multiple-outline';
import ResourcesProjectIcon from 'virtual:icons/mdi/github';
import ResourcesDonateIcon from 'virtual:icons/material-symbols/attach-money-rounded';
import ProfileIcon from 'virtual:icons/material-symbols/account-circle-outline';
import ProfileAccountIcon from 'virtual:icons/material-symbols/account-circle-outline';
import ProfileSettingsIcon from 'virtual:icons/mdi/cog-outline';
import { externalLinks } from '$lib/external';
/**
 * @brief   Specifies the entries to the submenu of primary navigation tabs.
 */
export type PrimaryTabItemSpec = {
	label: string;
	url: string;
	icon;
};

let garden = { name: 'GardenName', key: 'GARDEN_KEY', description: 'rst' };

/**
 * @brief   Specifies the primary navigation tabs between feature domains.
 */
export type PrimaryTabSpec = {
	id: string;
	label: string;
	icon;
	url: string;
	submenu_items: PrimaryTabItemSpec[];
};

export let tabs: PrimaryTabSpec[] = [
	{
		id: 'gardens',
		label: 'Gardens',
		icon: GardensIcon,
		url: 'app/gardens/',
		submenu_items: [{ label: 'Garden1', url: 'app/gardens/u28SeS/', icon: GardenIcon }]
	},
	{
		id: 'garden',
		label: 'Garden',
		icon: GardenIcon,
		url: 'app/gardens/eFuSuF/',
		submenu_items: [
			{
				label: 'Dashboard',
				url: '/app/gardens/' + garden.key + '/dash/',
				icon: GardenDashboardIcon
			},
			{
				label: 'Members',
				url: '/app/gardens/' + garden.key + '/members/',
				icon: GardenMembersIcon
			},
			{ label: 'Metrics', url: '/app/gardens/' + garden.key + '/metrics/', icon: GardenMetricsIcon }
		]
	},
	{
		id: 'planner',
		label: 'Planner',
		icon: PlannerIcon,
		url: 'planner/',
		submenu_items: [
			{
				label: 'Workbook',
				url: '/app/gardens/' + garden.key + '/planner/workbook',
				icon: PlannerWorkbookIcon
			},
			{
				label: 'Verdagraph',
				url: '/app/gardens/' + garden.key + '/attributes/verdagraph',
				icon: PlannerVerdagraphIcon
			}
		]
	},
	{
		id: 'workspaces',
		label: 'Workspaces',
		icon: WorkspacesIcon,
		url: 'app/gardens/' + garden.key + '/workspaces/',
		submenu_items: [
			{
				label: 'Workspace1',
				url: '/app/gardens/' + garden.key + '/workspaces',
				icon: WorkspaceIcon
			}
		]
	},
	{
		id: 'cultivars',
		label: 'Cultivars',
		icon: CultivarsIcon,
		url: '/app/gardens/' + garden.key + '/cultivars/',
		submenu_items: [
			{ label: 'Cultivars', url: '/app/gardens/eFuSuF/cultivars', icon: CultivarIcon }
		]
	},
	{
		id: 'environments',
		label: 'Environments',
		icon: EnvironmentIcon,
		url: '/app/gardens/' + garden.key + '/environment/',
		submenu_items: []
	},
	{
		id: 'devices',
		label: 'Devices',
		icon: DeviceIcon,
		url: '/app/gardens/' + garden.key + '/devices/',
		submenu_items: []
	},
	{
		id: 'resources',
		label: 'Resources',
		icon: ResourcesIcon,
		url: '/',
		submenu_items: [
			{ label: 'Guides', url: '/guides', icon: ResourcesGuidesIcon },
			{ label: 'Project', url: externalLinks.project, icon: ResourcesProjectIcon },
			{ label: 'Donate', url: externalLinks.donation, icon: ResourcesDonateIcon }
		]
	},
	{
		id: 'profile',
		label: 'ProfileName',
		icon: ProfileIcon,
		url: 'app/gardens/eFuSuF/cultivars/',
		submenu_items: [
			{ label: 'Account', url: '/app/profile/', icon: ProfileAccountIcon },
			{ label: 'Settings', url: '/app/settings/', icon: ProfileSettingsIcon }
		]
	}
];

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.onlooker.dev',
	integrations: [
		starlight({
			title: 'Onlooker',
			description: 'Documentation for the Onlooker ecosystem.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/onlooker-community',
				},
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [{ autogenerate: { directory: 'getting-started' } }],
				},
				{ label: 'Daemon', link: '/daemon/' },
				{ label: 'Configuration', link: '/configuration/' },
				{ label: 'Commands', link: '/commands/' },
				{ label: 'Schema', link: '/schema/' },
				{ label: 'Event Reference', link: '/event-reference/' },
				{ label: 'Payload Types', link: '/payload-types/' },
				{
					label: 'Plugins',
					items: [{ autogenerate: { directory: 'plugins' } }],
				},
				{
					label: 'Adapters',
					items: [{ autogenerate: { directory: 'adapters' } }],
				},
				{ label: 'Waypoint', link: '/waypoint/' },
				{ label: 'Scout', link: '/scout/' },
				{ label: 'Beacon', link: '/beacon/' },
				{
					label: 'Playbook',
					items: [{ autogenerate: { directory: 'playbook' } }],
				},
			],
		}),
	],
});

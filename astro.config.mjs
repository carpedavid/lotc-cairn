import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Land of the Crane',
			social: {
				discord: 'https://discord.gg/r72BBj2Rcy',
				github: 'https://github.com/carpedavid/lotc-cairn',
				mastodon: 'https://dice.camp/@carpedavid'
			},
			sidebar: [
				{
					label: 'Setting',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/setting/example/' },
					],
				},
				{
					label: 'Yōkai',
					autogenerate: { directory: 'yokai' },
				},
			],
		}),
	],
});

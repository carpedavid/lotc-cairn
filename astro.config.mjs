import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://landofthecrane.com',
	integrations: [
		starlight({
			title: 'Land of the Crane',
			customCss: [
				'@fontsource/kaushan-script',
				'./src/styles/custom.css'
			],
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/carpedavid/lotc-cairn',
				discord: 'https://discord.gg/r72BBj2Rcy',
				mastodon: 'https://dice.camp/@carpedavid'
			},
			sidebar: [
				{
					label: 'Setting',
					items: [
						{ label: 'Introduction', link: '/setting/introduction/' },
						{ label: 'Getting started', link: '/setting/getting_started/' },
						// { label: 'Creating a character', link: '/setting/creating_a_character/'},
						// { label: 'Ancestries', collapsed: true, autogenerate: {directory: 'setting/ancestries'}},
						// { label: 'Backgrounds', collapsed: true, autogenerate: {directory: 'setting/backgrounds'}}
					],
				},
				{
					label: 'Yōkai',
					autogenerate: { directory: 'yokai' },
					collapsed: true,
				},
				{ label: 'Credits', link: '/credits/'},
				{ label: 'Amalara Game Studio', link: 'https://amalara.com', icon: ''}
			],
		}),
	],
});

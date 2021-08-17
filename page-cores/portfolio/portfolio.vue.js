
import roof from '../../blocks/_roof/_roof.vue.js';
import footer from '../../blocks/_footer/_footer.vue.js';

import works from './_page-elements/_works/_works.vue.js';
import leftBar from './_page-elements/_left-bar/_left-bar.vue.js';

export default {
	components: {
		roof,
		'index-footer': footer,
		works,
		'left-bar': leftBar,
	},

	template:
	`<link rel="stylesheet" href="page-cores/portfolio/portfolio.css">
	<header class="header">
		<roof></roof>
	</header>
	<main class='wrapper'>
		<left-bar></left-bar>
		<works></works>
	</main>
	<index-footer></index-footer>`
}
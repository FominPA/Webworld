
import roof from '../../blocks/_roof/_roof.vue.js';
import footer from '../../blocks/_footer/_footer.vue.js';

import works from './_page-elements/_works/_works.vue.js';
import leftBar from './_page-elements/_left-bar/_left-bar.vue.js';

const portfolio = Vue.createApp({
	components: {
		roof,
		'index-footer': footer,
		works,
		'left-bar': leftBar,
	}
}).mount('body');
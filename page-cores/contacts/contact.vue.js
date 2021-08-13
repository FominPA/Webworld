import roof from '../../blocks/_roof/_roof.vue.js';
import footer from '../../blocks/_footer/_footer.vue.js';

import headerContent from './_page-elements/_header-content/_header-content.vue.js';
import map from './_page-elements/_map/_map.vue.js';
import info from './_page-elements/_info/_info.vue.js';
import form from './_page-elements/_form/_form.vue.js';

const contact = Vue.createApp({
	components: {
		roof,
		'header-content': headerContent,
		'contact-map': map,
		info,
		'contact-form': form,
		'index-footer': footer,
	}
}).mount("body");
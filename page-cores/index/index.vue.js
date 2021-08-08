import headerSlider from '_page-elements/_header-slider/_header-slider.vue.js';
import roof from '../../blocks/_roof/_roof.vue.js';
import footer from '../../blocks/_footer/_footer.vue.js';

import aboutUs from '_page-elements/_about-us/_about-us.vue.js';
import ourFeatures from '_page-elements/_our-features/_our-features.vue.js';
import flatCamera from '_page-elements/_flat-camera/_flat-camera.vue.js';
import latestProject from '_page-elements/_latest-project/_latest-project.vue.js';
import clientTestimonials from '_page-elements/_client-testimonials/_client-testimonials.vue.js';

let index = Vue.createApp({
	components: {
		'header-slider': headerSlider,
		roof,
		'about-us': aboutUs,
		'our-features': ourFeatures,
		'flat-camera': flatCamera,
		'index-footer': footer,
		'latest-project': latestProject,
		'client-testimonials': clientTestimonials,
	}
}).mount('body');
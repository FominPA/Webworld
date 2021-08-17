import headerSlider from './_page-elements/_header-slider/_header-slider.vue.js';
import roof from '../../blocks/_roof/_roof.vue.js';

import aboutUs from './_page-elements/_about-us/_about-us.vue.js';
import ourFeatures from './_page-elements/_our-features/_our-features.vue.js';
import flatCamera from './_page-elements/_flat-camera/_flat-camera.vue.js';
import latestProject from './_page-elements/_latest-project/_latest-project.vue.js';
import clientTestimonials from './_page-elements/_client-testimonials/_client-testimonials.vue.js';

export default {
	components: {
		'header-slider': headerSlider,
		roof,
		'about-us': aboutUs,
		'our-features': ourFeatures,
		'flat-camera': flatCamera,
		'latest-project': latestProject,
		'client-testimonials': clientTestimonials,
	},

	template:
	`<link rel="stylesheet" href="page-cores/home/home.css">
	<header class="header">
		<div class="wrapper">
			<roof></roof>
			<header-slider></header-slider>
		</div>
	</header>
	<main>
		<about-us></about-us>
		<our-features></our-features>
		<flat-camera></flat-camera>
		<latest-project></latest-project>
		<client-testimonials></client-testimonials>
	</main>`
}
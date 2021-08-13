import sectionTitle from '../../../../blocks/_section-title/_section-title.vue.js';

export default {
	components: {
		'section-title': sectionTitle,
	},

	template:
	`<section class="client-testimonials wrapper">

		<section-title
			class = "client-testimonials__title"
			iconClass = ""
			faIconClass = "fas fa-comment-dots"
			title = "Client <b>Testimonials</b>"
			description = ""
		></section-title>

		<div id="client-testimonials__slider">
			<div class="client-testimonials__slider-content">
				<div class="client-testimonials__slide">
					<p class="client-testimonials__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since type specimen book !!</p>
					<img src="page-cores/index/_page-elements/_client-testimonials/images/testimonials hr.png" alt="testimonials hr" class="client-testimonials__slide-hr">
					<p class="client-testimonials__author"><b>Robart Markel,</b> Company Name</p>
				</div>
			</div>
			<div class="client-testimonials__slides-selectors">
				<div class="client-testimonials__selector"></div>
				<div class="client-testimonials__selector"></div>
				<div class="client-testimonials__selector"></div>
				<div class="client-testimonials__selector"></div>
				<div class="client-testimonials__selector"></div>
			</div>
		</div>

	</section>`
}
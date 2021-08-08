import button from '../../../../blocks/_button/_button.vue.js';
import sectionTitle from '../../../../blocks/_section-title/_section-title.vue.js';

export default {
	components: {
		button,
		'section-title': sectionTitle,
	},

	template: 
	`<div class="our-features wrapper">
			<section-title
				iconClass = "section-title__icon_circle"
				class = "our-features__title"
				title = "Our <b>features</b>"
				faIconClass = "fas fa-check"
			></section-title>
			<div class="our-features__content">
				<img src="images/index/devices.png" alt="devices" class="our-features__content-image">
				<div class="our-features__content-text">
					<h3 class="our-features__content-title">Lorem Ipsum is simply !!</h3>
					<p class="our-features__content-description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.</p>
					<button :button-href="#" class="button_white button_our-features" title="Read more"></button>
				</div>
			</div>
	</div>`
}
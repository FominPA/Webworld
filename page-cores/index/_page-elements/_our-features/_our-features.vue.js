import button from '../../../../blocks/_button/_button.vue.js';
import sectionTitle from '../../../../blocks/_section-title/_section-title.vue.js';

export default {
	components: {
		'u-button': button,
		'section-title': sectionTitle,
	},

	template: 
	`<section class="our-features wrapper">
			<section-title
				class = "our-features__title"
				iconClass = "section-title__icon_circle"
				faIconClass = "fas fa-check"
				title = "Our <b>features</b>"
				description = ""
			></section-title>
			<div class="our-features__content">
				<img src="images/index/devices.png" alt="devices" class="our-features__content-image">
				<div class="our-features__content-text">
					<h3 class="our-features__content-title">Lorem Ipsum is simply !!</h3>
					<p class="our-features__content-description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.</p>
					<u-button buttonHref="#" class="button_white button_our-features" title="Read more"></u-button>
				</div>
			</div>
	</section>`
}
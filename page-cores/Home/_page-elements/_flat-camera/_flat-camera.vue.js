import button from '../../../../blocks/_button/_button.vue.js';

export default {
	components: {
		'u-button': button,
	},

	template: 
	`<section class="flat-camera wrapper">
			<div class="flat-camera__text">
				<h3 class="flat-camera__title">A flat Camera</h3>
				<p class="flat-camera__description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
				<u-button buttonHref="#" class="button_white button_flat-camera" title="Read more"></u-button>
			</div>
			<img src="page-cores/home/_page-elements/_flat-camera/images/camera.png" alt="camera" class="flat-camera__image">
	</section>`
}
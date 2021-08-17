export default {
	props: ['imageUrl', 'faIconClass', 'title', 'description'],

	computed: {
		bgImageStyle() { return ('background-image: url(' + this.imageUrl + ');') }
	},

	template: 
	`<article class="about-us__item">
		<div class="about-us__item-icon"><i :class="faIconClass"></i></div>
		<div class="about-us__item-photo" :style="bgImageStyle"></div>
		<div class="about-us__item-textbox">
			<h3 class="about-us__item-title">{{ title }}</h3>
			<p class="about-us__item-description">{{ description }}</p>
		</div>
	</article>`
}
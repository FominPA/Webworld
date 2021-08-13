export default {
	props: ['imageUrl', 'title', 'description', 'hrefItem'],

	computed: {
		bgImageStyle() { return ('background-image: url(' + this.imageUrl + ');') }
	},

	template: 
	`<article class="works__item">
		<div class="works__item-photo" :style="bgImageStyle"></div>
		<a :href='hrefItem' class="works__item-textbox">
			<h4 class="works__item-title">{{ title }}</h4>
			<p class="works__item-description">{{ description }}</p>
		</a>
	</article>`
}
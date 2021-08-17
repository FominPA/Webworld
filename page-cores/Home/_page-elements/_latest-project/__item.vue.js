export default {
	props: ['imageUrl', 'title', 'description'],

	computed: {
		bgImageStyle() { return ('background-image: url(' + this.imageUrl + ');') }
	},

	template:
	`<div class="latest-project__item">
		<div class="latest-project__item-photo" :style="bgImageStyle">
			<a href="#" class="latest-project__item-scale"><i class="fas fa-search"></i></a>
		</div>
		<div class="latest-project__item-text">
			<h3 class="latest-project__item-title">{{ title }}</h3>
			<p class="latest-project__item-description">{{ description }}</p>
		</div>
	</div>`
}
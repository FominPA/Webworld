export default {
	props: ['imageUrl', 'title', 'description'],

	template:
	`<div class="latest-project__item">
		<div class="latest-project__item-photo" :style="'background-image: url(' + imageUrl + ');'">
			<a href="#" class="latest-project__item-scale"><i class="fas fa-search"></i></a>
		</div>
		<div class="latest-project__item-text">
			<h3 class="latest-project__item-title">{{ title }}</h3>
			<p class="latest-project__item-description">{{ description }}</p>
		</div>
	</div>`
}
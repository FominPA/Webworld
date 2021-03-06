export default {
	props: ['title', 'iconClass', 'faIconClass', 'description'],

	template: 
	`<div class="section-title">
		<div class="section-title__hr"></div>
		<div :class="iconClass" class="section-title__icon"><i :class="faIconClass"></i></div>
		<div class="section-title__hr"></div>
		<div class="section-title__text">
			<h2 class="section-title__title"><span v-html='title'></span></h2>
			<p v-if="description" class="section-title__description">{{ description }}</p>
		</div>
	</div>`
}
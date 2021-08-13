export default {
	props: ['title'],

	template:
	`<div class="block-title">
		<div class="block-title__hr"></div>
		<p class="block-title__description">{{ title }}</p>
		<div class="block-title__hr"></div>
	</div>`
}
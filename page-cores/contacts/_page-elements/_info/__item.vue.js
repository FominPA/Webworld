export default {
	props: ['faIconClass', 'title', 'description'],

	template:
	`<div class="info__item">
		<div class="info__item-icon-wrapper"><i class="info__item-icon" :class='faIconClass'></i></div>
		<h4 class="info__item-title">{{ title }}</h4>
		<p class="info__item-description"><span v-html="description"></span></p>
	</div>`
}
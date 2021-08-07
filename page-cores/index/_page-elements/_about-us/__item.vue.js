export default {
	props: ['imageUrl', 'faIconClass', 'title', 'description'],

	template: 
	`<article class="about-us__item">
		<div class="about-us__item-icon"><i :class="faIconClass"></i></div>
		<div class="about-us__item-photo" :style="'background-image: url(' + imageUrl + ');'"></div>
		<div class="about-us__item-textbox">
			<h3 class="about-us__item-title">{{ title }}</h3>
			<p class="about-us__item-description">{{ description }}</p>
		</div>
	</article>`
}
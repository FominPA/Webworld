export default {
	props: ['buttonHref', 'title'],

	template: 
	`<a :href='buttonHref' class="button">{{ title }}</a>`
}
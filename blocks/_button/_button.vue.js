export default {
	props: ['button-href', 'title'],

	template: 
	`<a :href='button-href' class="button">{{ title }}</a>`
}
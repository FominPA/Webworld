export default {
	props: ['tagHref', 'description'],
	
	template:
	`<a :href="tagHref" class="left-bar__tag">{{ description }}</a>`
}
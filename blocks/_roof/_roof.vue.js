import logo from '../_logo/_logo.vue.js';

export default {
	data() { return {
		currentTab: 'Home',
		tabs: ['Index', 'Portfolio', 'Contact'],
	}},

	components: {
		logo,
	},

	template:
	`<div class="roof wrapper">
		<logo class='logo_roof'></logo>
		<div class="roof__menu">
			<a :href="tab + '.html'"
				v-for="tab in tabs"
				class="roof__menu-item"
				@click='currentTab = tab'
			>{{ tab }}</a>
		</div>
	</div>`
}
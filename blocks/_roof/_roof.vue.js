import logo from '../_logo/_logo.vue.js';

export default {
	data() { return {
		tabs: ['Home', 'Portfolio', 'Contacts'],
	}},

	components: {
		logo,
	},

	template:
	`<div class="roof wrapper">
		<logo class='logo_roof'></logo>
		<nav class="roof__menu">
			<a  
				v-for="tab in tabs"
				class="roof__menu-item"
				@click='this.$store.commit("changePage", tab)'
			>{{ tab }}</a>
		</nav>
	</div>`
}
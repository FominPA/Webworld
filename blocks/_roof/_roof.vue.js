import logo from '../_logo/_logo.vue.js';

export default {
	components: {
		logo,
	},

	template:
	`<div class="roof wrapper">
		<logo class='logo_roof'></logo>
		<div class="roof__menu">
			<a href="index.html" class="roof__menu-item">Home</a>
			<a href="portfolio.html" class="roof__menu-item">Portfolio</a>
			<a href="contact.html" class="roof__menu-item">Contact</a>
		</div>
	</div>`
}
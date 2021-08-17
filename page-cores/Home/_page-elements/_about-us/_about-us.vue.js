import item from './__item.vue.js';

export default {
	components: {
		item,
	},

	template:
	`<section class="about-us wrapper">
		<p class="about-us__title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since type specimen book !!</p>
		<div class="about-us__content">

			<item
				imageUrl = 'page-cores/home/_page-elements/_about-us/images/swing.png'
				faIconClass = 'fas fa-camera'
				title = 'What We Are'
				description = 'Lorem Ipsum is simply dummy text the printing and typesetting.'
			></item>

			<item
				imageUrl = 'page-cores/home/_page-elements/_about-us/images/bycicle.png'
				faIconClass = 'fas fa-edit'
				title = 'Start Our Project'
				description = 'Lorem Ipsum is simply dummy text the printing and typesetting.'
			></item>

			<item
				imageUrl = 'page-cores/home/_page-elements/_about-us/images/grass.png'
				faIconClass = 'fas fa-shopping-cart'
				title = 'Our Team'
				description = 'Lorem Ipsum is simply dummy text the printing and typesetting.'
			></item>
		</div>
	</section>`
}
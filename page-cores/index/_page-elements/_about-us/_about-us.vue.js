import item from '__item.vue.js';

export default {
	components: {
		item,
	},

	template:
	`<section class="about-us wrapper">
		<p class="about-us__title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since type specimen book !!</p>
		<div class="about-us__content">

			<item
				imageUrl = 'page-cores/index/_about-us/images/swing.png'
				faIconClass = 'fas fa-camera'
				title = 'What We Are'
				description = 'Lorem Ipsum is simply dummy text the printing and typesetting.'
			></item>

			<item
				imageUrl = 'page-cores/index/_about-us/images/bycicle.png'
				faIconClass = 'fas fa-edit'
				title = 'Start Our Project'
				description = 'Lorem Ipsum is simply dummy text the printing and typesetting.'
			></item>

			<item
				imageUrl = 'page-cores/index/_about-us/images/grass.png'
				faIconClass = 'fas fa-shopping-cart'
				title = 'Our Team'
				description = 'Lorem Ipsum is simply dummy text the printing and typesetting.'
			></item>
		</div>
	</section>`
}

			// <div class="item">
			// 	<div class="icon"><i class="fas fa-camera"></i></div>
			// 	<div class="photo" style="background-image: url('images/index/swing.png');"></div>
			// 	<div class="textbox">
			// 		<h3>What We Are</h3>
			// 		<p>Lorem Ipsum is simply dummy text the printing and typesetting.</p>
			// 	</div>
			// </div>

			// <div class="item">
			// 	<div class="icon"><i class="fas fa-edit"></i></div>
			// 	<div class="photo" style="background-image: url('images/index/bycicle.png');"></div>
			// 	<div class="textbox">
			// 		<h3>Start Our Project</h3>
			// 		<p>Lorem Ipsum is simply dummy text the printing and typesetting.</p>
			// 	</div>
			// </div>

			// <div class="item">
			// 	<div class="icon"><i class="fas fa-shopping-cart"></i></div>
			// 	<div class="photo" style="background-image: url('images/index/grass.png');"></div>
			// 	<div class="textbox">
			// 		<h3>Our Team</h3>
			// 		<p>Lorem Ipsum is simply dummy text the printing and typesetting.</p>
			// 	</div>
			// </div>
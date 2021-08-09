import sectionTitle from '../../../../blocks/_section-title/_section-title.vue.js';
import item from './__item.vue.js';

export default {
	components: {
		'section-title': sectionTitle,
		item,
	},

	template:
	`<div class="latest-project wrapper">

		<section-title
			class = "latest-project__title"
			iconClass = ""
			faIconClass = "fas fa-trophy"
			title = "Our latest <b>projects</b>"
			description = "Lorem ipsum is simply dummy text the printing and typesetting."
		></section-title>

		<div class="latest-project__content">
			<item
				imageUrl = "'page-cores/index/_page-elements/_latest-project/images/Lorem Ipsum.png'"
				title = "Lorem Ipsum"
				description = "Photography"
			></item>
			
			<item
				imageUrl = "'page-cores/index/_page-elements/_latest-project/images/Bonorum et Malorum.png'"
				title = "Bonorum et Malorum"
				description = "Print Designing"
			></item>
			
			<item
				imageUrl = "'page-cores/index/_page-elements/_latest-project/images/Injected humour.png'"
				title = "Injected humour"
				description = "E-marketing"
			></item>
			
			<item
				imageUrl = "page-cores/index/_page-elements/_latest-project/images/Embarrassing.png"
				title = "Embarrassing"
				description = "Best Marketplace"
			></item>
		</div>

	</div>`
}
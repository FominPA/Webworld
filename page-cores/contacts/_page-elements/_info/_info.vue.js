import sectionTitle from '../../../../blocks/_section-title/_section-title.vue.js';
import item from './__item.vue.js';

export default {
	components: {
		'section-title': sectionTitle,
		item,
	},

	template:
	`<section class="info wrapper">
		<section-title
			iconClass = ''
			title = 'Our <b>Contact Info</b>'
			faIconClass = 'fas fa-map-marker-alt'
			description = ''
		></section-title>
		<div class="info__content">
			<item
				faIconClass = 'fas fa-map-marker-alt'
				title = 'Address Details'
				description =  'Address Line 1 <br/>
								Street Details 2 <br/>
								More details 3'
			></item>
			<item
				faIconClass = "fas fa-mobile-alt"
				title = 'Telephone'
				description =  '+xxx-xxxxx-xxxxx <br/>
								+xxx-xxxxx-xxxxx <br/>
								+xxx-xxxxx-xxxxx'
			></item>
			<item
				faIconClass = "far fa-calendar"
				title = 'Working Time'
				description =  'Monday - Fri &mdash; 08:00 - 16:00 <br/>
								Saturday &mdash; Closed <br/>
								Sunday &mdash; Closed'
			></item>
			<item
				faIconClass = "icon fas fa-envelope"
				title = 'Email Address'
				description =  'info@yoursite.com <br/>
								support@yoursite.com <br/>
								Admin@yoursite.com'
			></item>
		</div>
	</div>`
}
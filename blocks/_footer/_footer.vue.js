import basement from '../_basement/_basement.vue.js';
import descriptionColumn from './__description-column.vue.js';
import contacts from './__contacts-column/__contacts-column.vue.js';
import subscribe from './__subscribe-column/__subscribe-column.vue.js';
import twits from './__twits-column/__twits-column.vue.js';

export default {
	components: {
		basement,
		descriptionColumn,
		contacts,
		subscribe,
		twits,
	},

	template:
	`<footer class="footer">
		<div class="footer__inner wrapper">
			<descriptionColumn></descriptionColumn>
			<contacts></contacts>
			<twits></twits>
			<subscribe></subscribe>
		</div>
		<basement></basement>
	</footer>`
}
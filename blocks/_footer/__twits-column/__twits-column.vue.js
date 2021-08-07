import twit from './__twit.vue.js';

export default {
	components: {
		twit,
	},

	template:
	`<article class="footer__column">
		<h4 class="footer__column-title">Latest tweets</h4>
		<div class="footer__column-content">
			<twit
				text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has'
				timeAgo = '1 Hour Ago'
			></twit>

			<twit
				text = 'Lorem Ipsum is simply dummy text of the printing and typeset'
				timeAgo = '1 Hour Ago'
			></twit>
		</div>
	</article>`
}
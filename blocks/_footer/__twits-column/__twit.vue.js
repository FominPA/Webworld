export default {
	props: ['text', 'timeAgo'],

	template:
	`<div class="footer__twit">
		<div class="footer__twit-icon"><i class="fab fa-twitter"></i></div>
		<div class="footer__twit-content">
			<p class="footer__twit-text">{{ text }}</p>
			<p class="footer__twit-time">{{ timeAgo }}</p>
		</div>
	</div>`
}
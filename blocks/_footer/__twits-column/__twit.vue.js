export default {
	props: ['text', 'timeAgo'],

	template:
	`<div class="twit">
		<div class="twit__icon"><i class="fab fa-twitter"></i></div>
		<div class="twit__content">
			<p class="twit__text">{{ text }}</p>
			<p class="twit__time">{{ timeAgo }}</p>
		</div>
	</div>`
}
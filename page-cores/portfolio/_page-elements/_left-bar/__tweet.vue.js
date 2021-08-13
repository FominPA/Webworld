export default {
	props: ['tweetHref', 'description', 'timeAgo'],

	template:
	`<a :href="tweetHref" class="left-bar__tweet">
		<div class="left-bar__tweet-icon"><i class="fas fa-quote-left"></i></div>
		<div class="left-bar__tweet-text">
			<p class="left-bar__tweet-description">{{ description }}</p>
			<p class="left-bar__tweet-time-ago">{{ timeAgo }}</p>
		</div>
	</a>`
}
import logo from '../../../../blocks/_logo/_logo.vue.js';
import blockTitle from './_block-title.vue.js';
import tweet from './__tweet.vue.js';
import tag from './__tag.vue.js';

export default {
	components: {
		logo,
		blockTitle,
		tweet,
		tag,
	},

	template:
	`<aside class="left-bar">
		<logo class="logo_left-bar"></logo>

		<article class="left-bar__search">
			<blockTitle title='Search'></blockTitle>

			<input type="text" name="search" id="Seacrh" placeholder="Search.." class='left-bar__search-input'>
		</article>

		<article class="left-bar__tweets">
			<blockTitle title='Tweet.Tweet'></blockTitle>

			<tweet
				tweetHref = '#'
				description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s"
				timeAgo = "4 hour's ago"
			></tweet>

			<tweet
				tweetHref = '#'
				description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s"
				timeAgo = "4 hour's ago"
			></tweet>

			<tweet
				tweetHref = '#'
				description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
				timeAgo = '4 days ago'
			></tweet>
		</article>

		<article class="left-bar__recent">
			<blockTitle title='Recent Posts'></blockTitle>

			<p><u>Lorem Ipsum is simply</u> dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
		</article>

		<article class="left-bar__tags">
			<blockTitle title='Blog Tags'></blockTitle>
			<div class="left-bar__tags-content">
				<tag tagHref = '#' description = 'Design'></tag>
				<tag tagHref = '#' description = 'Development'></tag>
				<tag tagHref = '#' description = 'Envato'></tag>
				<tag tagHref = '#' description = 'Themeforest'></tag>
				<tag tagHref = '#' description = 'Themes'></tag>
				<tag tagHref = '#' description = 'Uncategorized'></tag>
				<tag tagHref = '#' description = 'WordPress'></tag>
			</div>
		</article>
	</aside>`
}
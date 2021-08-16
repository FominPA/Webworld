import sectionTitle from '../../../../blocks/_section-title/_section-title.vue.js';

export default {
	components: {
		'section-title': sectionTitle,
	},

	template:
	`<section class="contact-form wrapper">
		<section-title
			iconClass = ''
			title = 'Contact <b>Form</b>'
			faIconClass = 'fas fa-envelope'
			description = ''
		></section-title>
		<form action="#" class="contact-form__form" method="POST">
			<input type="text" name="Name" id="Name" placeholder="Name" class="contact-form__name">
			<input type="email" name="Email" id="Email" placeholder="Email" class="contact-form__email">
			<textarea name="message" id="Message" cols="30" rows="10" placeholder="Your message" class="contact-form__message"></textarea>
			<input value="send" type="submit" class="button button_blue contact-form__submit">
		</form>
	</div>`
}
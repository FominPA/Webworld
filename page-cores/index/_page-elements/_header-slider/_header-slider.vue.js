import button from '../../../../blocks/_button/_button.vue.js';

export default {
	components: {
		button,
	},

	template: 
	`<div class="header-slider">
		<div class="header-slider__inner">
			<div class="header-slider__arrow  header-slider__arrow_left"><i class="fas fa-chevron-left"></i></div>
			<div class="header-slider__content">
				<div class="header-slider__slide">
					<h1 class="header-slider__slide-title">Clean, flat & polished design</h1>
					<p class="header-slider__slide-description">Proin facilisis aliquam nunc quis varius.</p>
				</div>
			</div>
			<div class="header-slider__arrow header-slider__arrow_right"><i class="fas fa-chevron-right"></i></div>
		</div>
		<button button-href='#' class="button_blue"></button>
		<div class="header-slider__slides-selectors">
			<div class="header-slider__selector"><div class="header-slider__dot"></div></div>
			<div class="header-slider__selector"><div class="header-slider__dot"></div></div>
			<div class="header-slider__selector"><div class="header-slider__dot"></div></div>
		</div>
	</div>`
}

// <script src="js/index Header_Slider.js"></script>
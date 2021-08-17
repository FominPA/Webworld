import Home from '../Home/Home.vue.js';
import Portfolio from '../portfolio/portfolio.vue.js';
import Contacts from '../contacts/contacts.vue.js';
import footer from '../../blocks/_footer/_footer.vue.js';

const store = Vuex.createStore({
	state() { return {
		currentTab: 'Home',
	}},

	mutations: {
		changePage(store, newPage) {
			this.state.currentTab = newPage;
		}
	}
});

const app = Vue.createApp({
	data() { return {
		store,
	}},

	computed: {
		currentTab() { return this.$store.state.currentTab }
	},

	components: {
		Home,
		Portfolio,
		Contacts,
		'index-footer': footer,
	}
})
.use(store)
.mount('body')
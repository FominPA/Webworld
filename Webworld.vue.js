import index from './page-cores/index/index.vue.js';
import Portfolio from './page-cores/portfolio/portfolio.vue.js';
import Contacts from './page-cores/contacts/contacts.vue.js';

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
		'Home': index,
		Portfolio,
		Contacts,
	}
})
.use(store)
.mount('body')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseCard from './components/UI/BaseCard.vue'
import BaseDialog from './components/UI/BaseDialog.vue'
import BaseSpinner from './components/UI/BaseSpinner.vue'
import store from './store/index.js'
const app = createApp(App);
app.component('baseCard',BaseCard);
app.component('baseSpinner',BaseSpinner);
app.component('baseDialog',BaseDialog);


app.use(router);
app.use(store);
app.mount('#app');

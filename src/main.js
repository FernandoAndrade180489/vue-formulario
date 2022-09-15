import { createApp } from "vue";
import App from "./App.vue";
import Maska from "maska";
import moment from "moment";

// createApp(App).mount('#app')
const app = createApp(App);

app.use(Maska); // plugin criado para o Vue
app.config.globalProperties.$moment = moment; // Lib JS com propriedade global

app.mount("#app");

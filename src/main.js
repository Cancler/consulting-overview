import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sequelize } from "@/stores/db";

sequelize.authenticate()
    .then(() => {

        console.log("connected");
    })
    .catch((err) => {
        console.log(err);
    });
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');

import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

import { sequelize } from "./getdb"
sequelize.authenticate()
    .then(() => {
        console.log("connected")
    })
    .catch((err) => {
        console.log(err)
    })

createApp(App).mount('#app')

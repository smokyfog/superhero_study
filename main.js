import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.serverUrl = "https://www.imovietrailer.com/superhero"
Vue.prototype.qq = "lee19649030"

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

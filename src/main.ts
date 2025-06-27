import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { canvasDirective } from './directives/canvas'

const app = createApp(App)
app.directive('canvas', canvasDirective)
app.mount('#app')

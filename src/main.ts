import 'vuetify/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import { en } from './locals/home/en.js'
import { AOSDirective } from './directives/Aos.js'
import AOS from 'aos'

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
})

app.use(createPinia())
app.use(vuetify)

app.use(createI18n({
    locale: 'en',
    fallback: 'en',
    messages: en,
    legacy: false
}))

app.directive('aos', AOSDirective)
app.mount('#app')
AOS.init()
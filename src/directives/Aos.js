import 'aos/dist/aos.css'
import AOS from 'aos'

export const AOSDirective = {
    mounted(el, binding) {
        // Re-init if new global AOS configuration is passed
        // <div v-aos="{ offset: 100, duration: 800, type: 'fade' }">
        if (Object.keys(binding).length) {
            AOS.init({ ...binding })
        }
    },
    updated() {
        AOS.refreshHard()
    }
}

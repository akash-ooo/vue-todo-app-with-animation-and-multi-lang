import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

export const useExampleSetupStore = defineStore('exampleSetup', () => {
    const userId = ref(1)
    const userSettings = computed(() => `${userId.value} User setting updated!`)

    const user = ref(null)
    watch(
        userId,
        (nValue, oldValue) => {
            if (!localStorage.getItem('user')) {
                fetch('https://randomuser.me/api/')
                    .then((r) => r.json())
                    .then((d) => {
                        localStorage.setItem('user', JSON.stringify(d))
                        user.value = d
                        // console.log('New fetch request done')
                    })
            } else {
                user.value = JSON.parse(localStorage.getItem('user'))
            }
        },
        { immediate: true }
    )

    function updateUserId() {
        userId.value = Math.floor(Math.random() * 100)
        localStorage.removeItem('user')
    }

    return { userId, userSettings, updateUserId, user }
})

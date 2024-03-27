<script lang="ts" setup>
import { ref } from 'vue'
import gsap from 'gsap'

const show = ref(true)

function handleBeforeEnter(el) {
    gsap.set(el, {
        scaleX: 0.25,
        scaleY: 0.25,
        opacity: 0.5
    })
}

function handleEnter(el, done) {
    gsap.to(el, {
        duration: 1,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        ease: 'elastic.inOut(2.5, 1)',
        onComplete: done
    })
}

function handleLeave(el, done) {
    gsap.to(el, {
        duration: 0.7,
        scaleX: 1,
        scaleY: 1,
        x: 300,
        ease: 'elastic.inOut(2.5, 1)'
    })

    gsap.to(el, {
        duration: 0.2,
        delay: 0.5,
        opacity: 0,
        onComplete: done
    })
}
</script>

<template>
    <div class="my-7">
        <h2>GSAP Animation</h2>
        <Transition
            name="gsap"
            @enter="handleEnter"
            @leave="handleLeave"
            @before-enter="handleBeforeEnter"
        >
            <div v-if="show" class="animation-item">Arif</div>
        </Transition>
        <button class="d-block my-3 bg-amber-accent-3 pb-2" @click="show = !show">Animate</button>
    </div>
</template>

<style scoped>
.animation-item {
    display: inline-block;
    padding: 16px;
    border-radius: 16px;
    background-color: orange;
}
</style>

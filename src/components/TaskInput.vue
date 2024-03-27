<script lang="ts" setup>
import {useTaskStore} from '@/stores/TaskStore'
import {ref} from 'vue'

const taskStore = useTaskStore()
const task = ref('')

function addTask() {
    taskStore.add(task.value)
    task.value = ''
}
</script>

<template>
    <input v-model="task" type="text" @keydown.enter.lazy.prevent="addTask()">
</template>

<style scoped>

</style>
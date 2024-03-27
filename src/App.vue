<!-- A Vue.js application for managing tasks with internationalization support using vue-i18n.-->
<script lang="ts" setup>
import { useTaskSetupStore } from './stores/TaskSetupStore.js'
import { ref } from 'vue'
import AppHeading from './components/typography/AppHeading.vue'
import LanguageToggoler from './components/LanguageToggoler.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const taskStore = useTaskSetupStore()
const task = ref('')

function addTask() {
    taskStore.add(task.value)
    task.value = ''
}

</script>
<template>
    <div class="container">
        <div class="todo-app mt-10">
            <div class="d-flex justify-space-between">
                <AppHeading :text="t('title')" />
                <LanguageToggoler class="mb-3"></LanguageToggoler>
            </div>
            <v-text-field
                v-model="task"
                clearable
                label="Add new task"
                required
                type="text"
                variant="outlined"
                @keydown.enter.lazy.prevent="addTask()"
            ></v-text-field>
            <template v-if="taskStore.incompleted">
                <v-badge :content="taskStore.incompletedCount" class="mb-3" color="white">
                    <h2 class="text-h6">{{ t('pending') }}</h2>
                </v-badge>

                <v-list v-if="taskStore.incompletedCount" class="mb-3 rounded">
                    <TransitionGroup class="l-container" name="fade" tag="div">
                        <v-list-item
                            v-for="task in taskStore.incompleted"
                            :key="task.id"
                            class="w-100"
                            density="compact"
                        >
                            <div class="d-flex justify-space-between align-center">
                                <div>{{ task.name }}</div>
                                <div class="d-flex justify-space-between align-center">
                                    <v-btn
                                        class=""
                                        color="purple"
                                        variant="text"
                                        @click="taskStore.toggleComplete(task.id)"
                                    >
                                        <span class="material-symbols-outlined">done</span>
                                        {{ t('completeBtn') }}
                                    </v-btn>
                                    <button
                                        :class="[
                                            task.isFav ? 'text-purple' : 'text-grey',
                                            'material-symbols-outlined',
                                            'ma-1'
                                        ]"
                                        @click="taskStore.toggleFav(task.id)"
                                    >
                                        favorite
                                    </button>
                                </div>
                            </div>
                        </v-list-item>
                    </TransitionGroup>
                </v-list>
            </template>
            <template v-if="taskStore.completed">
                <div class="d-flex align-center">
                    <h2 class="text-h6 mr-2">{{ t('complete') }}</h2>
                    <button
                        class="material-symbols-outlined mr-2"
                        title="Delete all completed"
                        @click="taskStore.deleteAllCompleted()"
                    >
                        delete
                    </button>
                    <button
                        class="material-symbols-outlined"
                        title="Delete all completed"
                        @click="taskStore.toggleCompletedView()"
                    >
                        visibility
                    </button>
                </div>
                <div v-if="taskStore.completedViewIsShow">
                    <TransitionGroup class="l-container" name="fade" tag="div">
                        <v-list-item
                            v-for="task in taskStore.completed"
                            :key="task.id"
                            density="compact"
                        >
                            <div
                                class="d-flex justify-space-between align-center border-b border- pb-2"
                            >
                                <div>{{ task.name }}</div>
                                <div class="d-flex justify-space-between align-center">
                                    <button
                                        class="material-symbols-outlined mr-4"
                                        @click="taskStore.toggleComplete(task.id)"
                                    >
                                        undo
                                    </button>
                                    <button
                                        :class="[
                                            task.isFav ? 'text-purple' : 'text-grey',
                                            'material-symbols-outlined',
                                            'ma-1'
                                        ]"
                                        @click="taskStore.toggleFav(task.id)"
                                    >
                                        favorite
                                    </button>
                                </div>
                            </div>
                        </v-list-item>
                    </TransitionGroup>
                </div>
            </template>
        </div>
    </div>
</template>
<style>
body {
    animation: bg-gradient-animation 40s ease infinite;
    color: white;
    background: linear-gradient(231deg, #41e046, #5b08c2, #c38020);
    background-size: 240% 240%;
}
@keyframes bg-gradient-animation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
.container {
    display: block;
    width: 100vw;
    height: 100vh;
}
.todo-app {
    max-width: 700px;
    margin: auto;
}

.l-container {
    position: relative;
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}
.fade-leave-active {
    position: absolute;
    display: block;
    overflow: hidden;
    box-sizing: border-box;
    max-width: 100%;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(-5px, 0);
}
</style>
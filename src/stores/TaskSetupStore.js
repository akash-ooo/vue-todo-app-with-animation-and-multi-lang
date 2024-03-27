import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTaskSetupStore = defineStore('taskStore', () => {
    const tasks = ref([
        { id: 1, name: 'Fix bug in authentication module', isCompleted: false, isFav: false },
        { id: 2, name: 'Implement new feature using React hooks', isCompleted: true, isFav: false },
        {
            id: 3,
            name: 'Refactor database schema for improved performance',
            isCompleted: false,
            isFav: true
        },
        { id: 4, name: 'Write unit tests for API endpoints', isCompleted: true, isFav: false },
        { id: 5, name: 'Review and merge pull requests', isCompleted: false, isFav: false },
        { id: 6, name: 'Optimize code for mobile responsiveness', isCompleted: true, isFav: true },
        {
            id: 7,
            name: 'Update dependencies to the latest versions',
            isCompleted: false,
            isFav: false
        },
        { id: 8, name: 'Create documentation for the API', isCompleted: true, isFav: false },
        {
            id: 9,
            name: 'Investigate and resolve performance issues',
            isCompleted: false,
            isFav: true
        },
        { id: 10, name: 'Implement user authentication with JWT', isCompleted: true, isFav: false },
        {
            id: 11,
            name: 'Design user interface for admin dashboard',
            isCompleted: false,
            isFav: false
        },
        {
            id: 12,
            name: 'Set up continuous integration for the project',
            isCompleted: true,
            isFav: true
        },
        { id: 13, name: 'Create automated deployment scripts', isCompleted: false, isFav: false },
        {
            id: 14,
            name: 'Optimize front-end assets for faster loading',
            isCompleted: true,
            isFav: false
        },
        { id: 15, name: 'Conduct code reviews for team members', isCompleted: false, isFav: true }
    ])
    const completedViewIsShow = ref(true)

    const completed = computed(() => {
        return tasks.value.filter((task) => task.isCompleted)
    })
    const completedCount = computed(() => {
        return completed.value.length
    })
    const incompleted = computed(() => {
        return tasks.value.filter((task) => task.isCompleted === false)
    })
    const incompletedCount = computed(() => {
        return incompleted.value.length
    })

    function add(task) {
        tasks.value.unshift({
            id: Math.random().toString(36).substring(2),
            name: task,
            isCompleted: false,
            isFav: false
        })
    }

    function deleteTask(id) {
        tasks.value = tasks.value.filter((task) => task.id !== id)
    }

    function toggleFav(id) {
        tasks.value.map((task) => {
            if (task.id === id) {
                task.isFav = !task.isFav
                return task
            }
            return task
        })
    }

    function toggleComplete(id) {
        tasks.value.map((task) => {
            if (task.id === id) {
                task.isCompleted = !task.isCompleted
                return task
            }
            return task
        })
    }

    function deleteAllCompleted() {
        tasks.value = tasks.value.filter((item) => item.isCompleted === false)
    }

    function toggleCompletedView() {
        completedViewIsShow.value = !completedViewIsShow.value
    }

    return {
        tasks,
        completedViewIsShow,
        completed,
        completedCount,
        incompleted,
        incompletedCount,
        add,
        deleteTask,
        toggleFav,
        toggleComplete,
        deleteAllCompleted,
        toggleCompletedView
    }
})

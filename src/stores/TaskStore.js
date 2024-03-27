import {defineStore} from "pinia";

export const useTaskStore = defineStore('taskStore', {
        state: () => ({
                tasks: [
                        { id: 1, name: 'Fix bug in authentication module', isCompleted: false, isFav: false },
                        { id: 2, name: 'Implement new feature using React hooks', isCompleted: true, isFav: false },
                        { id: 3, name: 'Refactor database schema for improved performance', isCompleted: false, isFav: true },
                        { id: 4, name: 'Write unit tests for API endpoints', isCompleted: true, isFav: false },
                        { id: 5, name: 'Review and merge pull requests', isCompleted: false, isFav: false },
                        { id: 6, name: 'Optimize code for mobile responsiveness', isCompleted: true, isFav: true },
                        { id: 7, name: 'Update dependencies to the latest versions', isCompleted: false, isFav: false },
                        { id: 8, name: 'Create documentation for the API', isCompleted: true, isFav: false },
                        { id: 9, name: 'Investigate and resolve performance issues', isCompleted: false, isFav: true },
                        { id: 10, name: 'Implement user authentication with JWT', isCompleted: true, isFav: false },
                        { id: 11, name: 'Design user interface for admin dashboard', isCompleted: false, isFav: false },
                        { id: 12, name: 'Set up continuous integration for the project', isCompleted: true, isFav: true },
                        { id: 13, name: 'Create automated deployment scripts', isCompleted: false, isFav: false },
                        { id: 14, name: 'Optimize front-end assets for faster loading', isCompleted: true, isFav: false },
                        { id: 15, name: 'Conduct code reviews for team members', isCompleted: false, isFav: true },
                ],
                completedViewIsShow: true,
        }),
        getters: {
                completed() {
                        return this.tasks.filter(task => task.isCompleted)
                },
                completedCount() {
                        return this.completed.length
                },
                incompleted() {
                        return this.tasks.filter(task => task.isCompleted === false)
                },
                incompletedCount() {
                        return this.incompleted.length
                }
        },
        actions: {
                add(task) {
                        this.tasks.unshift({
                                id:  Math.random().toString(36).substring(2),
                                name: task,
                                isCompleted: false,
                                isFav: false,
                        })
                },
                delete(id) {
                        this.tasks = this.tasks.filter(task => task.id !== id)
                },
                toggleFav(id) {
                        this.tasks.map(task => {
                                if (task.id === id) {
                                        task.isFav = !task.isFav
                                        return task
                                }
                                return task
                        })

                },
                toggleComplete(id) {
                        this.tasks.map(task => {
                                if (task.id === id) {
                                        task.isCompleted = !task.isCompleted
                                        return task
                                }
                                return task
                        })

                },

                deleteAllCompleted() {
                        this.tasks = this.tasks.filter(item => item.isCompleted === false)
                },

                toggleCompletedView() {
                        this.completedViewIsShow = !this.completedViewIsShow
                }
        }
})

















































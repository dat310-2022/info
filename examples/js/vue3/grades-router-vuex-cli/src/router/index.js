import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Student from '../views/Student.vue'
import Course from '../views/Course.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/student/:student_no',
    name: 'Student',
    props: true,
    component: Student
  },
  {
    path: '/course/:course_id',
    name: 'Course',
    props: true,
    component: Course
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

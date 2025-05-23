import { createRouter, createWebHistory } from 'vue-router'
import Home    from '../views/Home.vue'
import Notes   from '../views/Notes.vue'
import Add     from '../views/Add.vue'
import Edit    from '../views/Edit.vue'
import Details from '../views/Details.vue'
import About   from '../views/About.vue'

const routes = [
  { path: '/',          name: 'Home',    component: Home },
  { path: '/notes',     name: 'Notes',   component: Notes },
  { path: '/add',       name: 'Add',     component: Add },
  { path: '/edit/:id',  name: 'Edit',    component: Edit,   props: true },
  { path: '/details/:id', name: 'Details', component: Details, props: true },
  { path: '/about',     name: 'About',   component: About }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

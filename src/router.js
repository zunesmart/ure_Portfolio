import Home from './comp/home.vue'
import About from './comp/about.vue'
import Projects from './comp/projects.vue'
import Contact from './comp/contact.vue'
import rhp from './comp/RHPWebsiteAnalyst.vue'


export const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/projects', component: Projects},
    {path: '/contact', component: Contact},
    {path: '/rhp-review', component: rhp},

    { path: '/', redirect: '/' },
    { path: '/home', redirect: '/' },
    { path: '/rhp-review', redirect: '/rhp-review' },
    { path: '/contact', redirect: '/contact' },
    { path: '/project', redirect: '/projects' },
    { path: '/projects', redirect: '/projects' },
    { path: '/about', redirect: '/about' },

]
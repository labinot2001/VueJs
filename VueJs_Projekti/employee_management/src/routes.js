import User from './components/user/User';
import EmployeeWithSignUp from './components/EmployeeWithSignUp.vue';
import UserEdit from './components/user/UserEdit';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import EmployeeWithLogin from './components/EmployeeWithLogin.vue';
import EmployeeHome from './components/EmployeeHome.vue';
import SingleEmployee from './components/SingleEmployee.vue';
//importojme gjithe ato komponenta qe do i regjistrojme si routes



export const routes = [
    // { path:'/', name:'home', component:Home},
    {path: '/', name:'home', component:EmployeeWithLogin},
    {path: '/employeehome', name:'employeehome', component:EmployeeHome},
//     {path: '/employeehome', name:'employeehome',component:EmployeeHome,
//     meta:{ 
//         requiresAuth: true
//     }
// },
    {path: '/singlemployee/:id', name:'singlemployee', component: SingleEmployee },
    { path: '/employeewithsignup', name:'about', component:EmployeeWithSignUp},
    { path: '/user', name:'user', component: User},
    { path: '/useredit', name:'useredit', component:UserEdit},
    { path: '/login', name:'login', component:Login},
    { path: '/register', name:'register', component:Register}
]



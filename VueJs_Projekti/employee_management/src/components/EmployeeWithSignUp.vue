<template>

        <div class="container-fluid p-0">
        <div class="row">
            <div class="col-lg-4 left__side">
            </div>
            <div class="col-lg-8 right__background">

            </div>
        </div>
    

    <div class="login">
        <employee-register></employee-register>
    </div>
    </div>

</template>

<script>
import Register from './auth/Register.vue';
export default {
    name: 'EmployeeHome',
    components:{ 
        employeeRegister: Register
    }
}
</script>

<style scoped>

.left__side{
    height:100vh;
    background-color:#BEBEBE;
    /* background-image: linear-gradient(253deg, rgb(51, 36, 175), rgb(197, 108, 214));  */
    background-size: 150% 150%; 
    background-position: 100% 100%;
    animation: bganimation 15s infinite;
}

@keyframes bganimation {
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
}

.right__background {
    background-image: url("../assets/employee.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
} 

.login{
    position: absolute;
    top: 400px;
    left:430px;
    width:600px;

}

</style>
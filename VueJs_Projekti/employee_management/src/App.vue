<template>

    <div class="container-fluid p-0">
        <!-- <app-Header></app-Header> -->
 
                <!--<h1 v-highlight="'red'">Routing</h1>
                <p >Hello World</p>
                <h3>Local Directive</h3>
                <p>{{text | toUpperCase | to-lowercase}}</p> -->
                
        <router-view></router-view>
        <!-- <app-Footer></app-Footer> -->

    </div>
</template>

<script>
/* eslint-disable */
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    export default {
        data(){
            return{
                text:'Hello World'
            }
        },filters:{
            toUpperCase(value){
                return value.toUpperCase();
            }
        },
        components:{
            appHeader:Header,
            appFooter:Footer
        },directives:{
            'local-hightlight':{
                bind(el, binding, vnode){
                el.style.color='blue';
            }
        }
    }
    }
</script>

<style>
@import '../src/assets/style.css';
</style>

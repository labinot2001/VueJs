<template>
    <div class="container-fluid p-0">
        <app-header></app-header>
        <todo-table></todo-table>
        <app-footer></app-footer>
        
    </div>
</template>


<script>
import Header from './Header.vue';
//import Footer from './Footer.vue';
import TodoTable from './TodoTable.vue';
export default {
    components:{
        appHeader: Header,
        //appFooter: Footer,
        todoTable: TodoTable,
        
    },

}
</script>

<style scoped>
</style>
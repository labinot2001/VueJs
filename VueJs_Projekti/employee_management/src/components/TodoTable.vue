<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="level">
          <b-button 
          class="is-primary" 
          @click="isAddModalActive = true"
           type="is-button"
           icon-left="account-plus">
            Add An Employee
          </b-button>
          <b-button 
          class="is-warning" 
          @click="deleteAllTodos"
           type="is-button"
           icon-right="delete">
            Delete All Employees
          </b-button>
        </div>

        <b-table :data="todos"   paginated per-page="5" default-sort="priority">
          <template scope="todos" >
            

            <b-table-column field="todo" label="Name Surname"  sortable >
              {{ todos.row.name }}
            </b-table-column>

            <b-table-column field="email" label="Email" sortable>
              {{ todos.row.email }}
            </b-table-column>

            <b-table-column field="priority" label="Position"  sortable>
              {{ todos.row.position }}
            </b-table-column>

             <b-table-column label="Details">
            
              <router-link v-bind:to="'singlemployee/' + todos.row._id">
                <b-button
              type="is-text"
              icon-left="account-card-details"
              ></b-button>
              </router-link>
              
            </b-table-column>

            <b-table-column label="Edit">
              <b-button
                type="is-text"
                icon-left="account-edit"
                @click="openEditModal(todos.row)"
              ></b-button>
            
            </b-table-column>

            <b-table-column label="Delete">
              <b-button
                type="is-text"
                icon-left="delete"
                @click="deleteTodo(todos.row)"
              ></b-button>
            </b-table-column>

           
          </template>
        </b-table>
      </div>
    </section>

    <b-modal :active.sync="isEditModalActive" has-modal-card>
      <todo-edit-modal
        :todo="selectedTodo"
        :priorities="priorities"
        @edit-todo="onEditTodo"
      ></todo-edit-modal>
    </b-modal>

    <b-modal :active.sync="isAddModalActive" has-modal-card>
      <todo-add-modal
        @add-employee="onAddEmployee"
        :priorities="priorities"
      ></todo-add-modal>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';
import TodoEditModal from "@/components/TodoEditModal";
import TodoAddModal from "@/components/TodoAddModal";

export default {
  name: "TodoTable",
  components: { TodoEditModal, TodoAddModal },
  data() {
    return {
      todos: [],
      employeeId: null,
      priorities: [
        { id: 1, name: "IT services" },
        { id: 2, name: "Web Developer" },
        { id: 3, name: "Database Administrator" }
      ],
      isEditModalActive: false,
      selectedTodo: {},
      isAddModalActive: false
    };
  },
    mounted () {
    axios.get(`http://localhost:4000/employees`)
    .then(response => {
      this.todos = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    openEditModal(todo) {
      this.selectedTodo = todo;
      this.isEditModalActive = true;
    },
    onAddEmployee(item){
        const highestId = Math.max.apply(Math, this.todos.map(item => item.id));
        this.todos.push({
          id: highestId + 1,
          position: item.position,
          name: item.name,
          email: item.email,
          review: item.review,
        })
        this.isAddModalActive = false;
    },
    onEditTodo(item) {
      const todo = this.findTodo(item);
      // Apply the updated values
      todo.name = item.name;
      todo.position = item.position;
      todo.email = item.email;
      todo.review = item.review;
      // save the updated array in localstorage
      axios.put(`http://localhost:4000/employees/${todo._id}`, todo)
      .then(function (response) {
        console.log(response);
        })
      // close the modal

      this.isEditModalActive = false;
    },
    deleteTodo(item) {
      this.$buefy.dialog.confirm({
        title: `Deleting Employee`,
        confirmText: "Delete Employee",
        type: "is-danger",
        hasIcon: true,
        message: `Are you sure you want to delete this employee? This cannot be undone.`,
        onConfirm: () => {
          // find in the array and remove
          const index = this.todos.indexOf(item);
          this.todos.splice(index, 1);
          axios.delete(`http://localhost:4000/employees/${item._id}`)  
              .then(function (response) {
                  console.log(response);
                })
        }
      });
    },
    deleteAllTodos() {
      this.$buefy.dialog.confirm({
        title: `Deleting Employees`,
        confirmText: "Delete Employees",
        type: "is-danger",
        hasIcon: true,
        message: `Are you sure you want to delete all the employees on your list? This cannot be undone.`,
        onConfirm: () => {
          this.todos = [];
          axios.delete(`http://localhost:4000/employees/all/employees`)
            .then(function(response){
              console.log(response);
            })
        }
      });
    },
    findEmployeeId(item){
      const employee = this.findTodo(item);
      this.employeeId = employee._id;
    },
    findTodo(item) {
      return this.todos.find(todo => todo.id === item.id);
    },
    //   saveLocalStorageTodos() {
    //   localStorage.setItem("todos", JSON.stringify(this.todos));
    //   this.todos = JSON.parse(localStorage.getItem("todos"));
    // }
  }
};
</script>

<style scoped>

#editIkona{
  cursor:pointer;
}

#editIkona:hover{
  background-color: grey;
}

</style>

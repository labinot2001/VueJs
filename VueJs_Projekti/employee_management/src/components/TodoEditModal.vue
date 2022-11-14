<template>
<form @submit="onSubmit">
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Edit {{ todo.name }}</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Name">
        <b-input type="text" v-model="title" placeholder="Your employee name">
        </b-input>
      </b-field>

      <b-field label="Email">
        <b-input type="email" v-model="email" placeholder="Your employee email">
        </b-input>
      </b-field>

      <b-field label="Position">
        <b-select placeholder="Select a position" v-model="priority">
          <option
            v-for="option in priorities"
            :value="option.name"
            :key="option.id"
          >
            {{ option.name }}
          </option>
        </b-select>
      </b-field>
       <b-field label="Review">
            <b-input maxlength="200" type="textarea" v-model="review"></b-input>
        </b-field>
      
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">
        Close
      </button>
      <button class="button is-primary" @click="editTodo">Save</button>
    </footer>
  </div>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  name: "TodoEditModal",
  props: {
    todo: {
      type: Object,
      required: true
    },
    priorities: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      title: "",
      priority: "",
      email:"",
      review: "",
    };
  },
  mounted() {
    this.title = this.todo.name;
    this.priority = this.todo.position;
    this.email = this.todo.email;
    this.review = this.todo.review;
  },
  methods: {
    editTodo() {
      const payload = {
        id: this.todo.id,
        name: this.title,
        email: this.email,
        position: this.priority,
        review: this.review,
      };
      this.$emit("edit-todo", payload);
    },
    onSubmit(evt){
      
      const updateEmployee = {
        name: this.title,
        email: this.email,
        position: this.priority,
        review: this.review,
      }
      evt.preventDefault();
      axios.put(`http://localhost:4000/employees/${this.todo.id}`, updateEmployee)
      .then(function (response) {
        console.log(response);
        })
    }
  }
};
</script>

<style scoped></style>

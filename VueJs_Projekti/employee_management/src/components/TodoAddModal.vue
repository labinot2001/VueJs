<template>
<form @submit="onSubmit">
  <div class="modal-card" style="width: 800px;">
    <header class="modal-card-head">
      <p class="modal-card-title">Add Employee</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Name/Surname">
        <b-input type="text" v-model="title" placeholder="Employee name/surname">
        </b-input>
      </b-field>
      <b-field label="Email">
        <b-input type="email" v-model="email" placeholder="Employee email">
        </b-input>
      </b-field>

      <!-- <b-field label="Image">
        <b-input type="file" @change="uploadFile"></b-input>
      </b-field> -->

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
      <button class="button is-primary" @click="addEmployee">Save</button>
    </footer>
  </div>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  name: "TodoAddModal",
  props: {
    priorities: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      priority: "",
      title: "",
      email: "",
      review: "",
      // image: null,
      // path: null,
    };
  },
  methods: {
    onSubmit(evt){
      evt.preventDefault();
      const employe = {
        position: this.priority,
        name: this.title,
        email: this.email,
        review: this.review,
      }
      axios.post(`http://localhost:4000/employees`, employe)
      .then(function (response) {
        console.log(response);
        })
    },
    //  uploadFile(e){
    //   let file = e.target.files[0];
    //   let path = URL.createObjectURL(file);
    //   this.image = file;
    //   this.path = path;
    // },
    addEmployee(){
      const payload = {
        position: this.priority,
        name : this.title,
        email: this.email, 
        review: this.review,
      }
      this.$emit("add-employee", payload);
    },
   
  }
};
</script>

<style scoped></style>

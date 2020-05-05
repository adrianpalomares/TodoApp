<template>
  <div id="app">
    <div class="container">
      <input class="form-control" type="text" placeholder="Enter todo" v-model="addTitleInput" @keyup.enter="addTodo"/>
      <ul class="list-group">
        <li class="list-group-item" v-for="t in arrayOfTodos" v-bind:todo-id="t._id" v-bind:key="t._id">
          {{t.title}}
          <button class="btn btn-danger" style="float:right;" @click="deleteTodo(t)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'App',
  components: {},
  data: function() {
    return {
      arrayOfTodos: [],
      addTitleInput: "",
      addContentInput: ""
    }
  },
  methods: {
    printValue: function() {
      console.log(this.addTitleInput, this.addContentInput);
    },
    addTodo: function() {
      const title = this.addTitleInput;
      axios({
        method: "POST",
        url: "api/todos",
        headers: {
          'Content-Type': "application/json"
        },
        data: {
          title: title
        }
      }).then(res =>  {
        this.arrayOfTodos.push(res.data);
      }).catch(err => console.log(err));
      // Clear the input
      this.addTitleInput = "";
    },
    deleteTodo: function(t) {
      axios({
        method: "DELETE",
        url: `api/todos/${t._id}`,
        headers: {
          'Content-Type': "application/json"
        }
      }).then(res => {
        this.arrayOfTodos.splice(this.arrayOfTodos.indexOf(res), 1)
      }).catch(err => console.log(err));
      
    }
  },
  created: async function() {
    const response = await axios('api/todos');
    this.arrayOfTodos = response.data;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

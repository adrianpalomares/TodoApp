<template>
  <div id="app">
    <div class="container">
      <input class="form-control" type="text" placeholder="Enter todo" v-model="addTitleInput" @keyup.enter="addTodo"/>
      <ul class="list-group">
        <li class="list-group-item" v-for="t in arrayOfTodos" v-bind:todo-id="t._id" v-bind:key="t._id">
          <span v-if="!t.isEditable">
            <span @click="setEditable(t)">{{t.title}}</span>
            <button class="btn btn-danger" style="float:right;" @click="deleteTodo(t)">Delete</button>
          </span>
          <span v-else>
            <input type="text"  v-bind:value="t.title" @keyup.enter="editTodo($event, t)"/>
            <button class="btn btn-success" style="float:right;" @click="editTodoButton($event, t)">Save</button>
          </span>
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
      addContentInput: "",
    }
  },
  methods: {
    /*
        For development purposes.
    */
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
      }).then(() => {
        t.isRemoved = true;
        this.arrayOfTodos = this.arrayOfTodos.filter(function(todo) {
          return !todo.isRemoved;
        })
      }).catch(err => console.log(err));
      
    },
    setEditable: function(t) {
      this.arrayOfTodos[this.arrayOfTodos.indexOf(t)].isEditable = true;
      this.$forceUpdate();
    },
    // Submitting edit through ENTER keypress
    editTodo: function(event, t) {
      // Grabbing the current title
      const todoTitle = event.currentTarget.value;
      axios({
        method: "PUT",
        url: `api/todos/${t._id}`,
        headers: {
          'Content-Type': "application/json"
        },
        data: {
          title: todoTitle
        }
      }).then(() => {
        t.title = todoTitle;
        t.isEditable = false;
        this.$forceUpdate();
      }).catch(err => console.log(err));
    },
    editTodoButton: function(event, t) {
      const todoTitle = event.currentTarget.previousSibling.value;
      //Send info to api
      axios({
        method: "PUT",
        url: `api/todos/${t._id}`,
        headers: {
          'Content-Type': "application/json"
        },
        data: {
          title: todoTitle
        }
      }).then(() => {
        t.title = todoTitle;
        t.isEditable = false;
        this.$forceUpdate();
      }).catch(err => {
        console.log(err);
      }) 
    }
  },
  /*
    This function will load the todos
  */
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

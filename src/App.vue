<template>
  <div id="app">
    <!-- <h1>Welocome To Vuex</h1>
    <h3>Total text decoration: {{ completedTodos }}</h3>
    <h3>Pending: {{ pendingTodos }}</h3> -->
    
    <!-- <todos-list />
    <todo-form /> -->
    <!-- <TodosList/>
    <TodoForm/> -->
    <dataArray/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import TodosList from "./components/TodosList";
// import TodoForm from "./components/TodoForm";
import dataArray from "./components/Array";

export default {
  name: "app",
  components: {
    // TodosList,
    // TodoForm,
    dataArray,
  },

  computed: {
    ...mapGetters({
      completedTodos: "completedTodos",    
      pendingTodos: "pendingTodos"
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

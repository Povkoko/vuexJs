<template>
  <div>
    <h1>get data from vuex</h1>
    <todo v-for="(todo, index) in todos" :key="index" :dataTodo="todo" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Todo from "./Todo";

export default {
  components: {
    Todo
  },

  computed: {
    ...mapState({
      todos: "todos"
    })
  }
};
</script>

<style>
</style>
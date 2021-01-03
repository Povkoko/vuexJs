<template>
<!-- Data show in TodosList Components -->
  <div style="width:250px; margin:5px auto;">
    <div style="display:flex; justify-content:space-between">
      <!-- <p>hello Todo page</p> -->
      <span :class="{completed: dataTodo.completed}" @click="toggleTodoStatus(dataTodo)">
        {{dataTodo.number}} .
        {{ dataTodo.title }}
        </span>
      <button @click="removeTodo(dataTodo)">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["dataTodo"],

  methods: {
    ...mapActions({
      removeTodo: "deleteTodo",  //deleteTodo call function from vuex set for removeTodo
      toggleTodoStatus: "toggleTodoStatus"
    })
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: brown;
}
</style>
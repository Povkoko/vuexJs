<template>
  <div>
    <input type="text" v-model="newTodoItem" />
    <button @click="addNewTodoItem()">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    };
  },

  methods: {
    addNewTodoItem() {
      if(this.newTodoItem === ""){
        alert("please input data before summit!")
      }else{
      this.$store.dispatch("addNewTodo", this.newTodoItem);
      this.newTodoItem = "";
      }
    }
  }
};
</script>

<style>
</style>
<template>
  <div>
      <input type="text" v-model="newTodoItem">
      <button v-on:click="addTodo">add</button>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            newTodoItem: "" //새롭게 입력되는 text
        }
    },
    methods: {
        addTodo: function() {
            localStorage.setItem(this.newTodoItem, this.newTodoItem);
            this.newTodoItem = "";
        }
    }
}
</script>

<style>

</style>
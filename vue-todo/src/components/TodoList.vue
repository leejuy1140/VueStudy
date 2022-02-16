<template>
  <div>
    <ul>
      <!-- todoItems를 todoItem에 담아서 중복되지 않는 한(Key) 담겠다 -->
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted:todoItem.completed}"    
           v-on:click="toggleComplete(todoItem)"></i>
        <span v-bind:class="{textCompleted:todoItem.completed}">
          {{ todoItem.item }}
        </span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fa-regular fa-trash-can"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  propsdata: ['propsdata'],
  methods: {
    removeTodo: function(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(todoItem) {
      todoItem.completed = !todoItem.completed;
      //로컬저장소는 삭제, 추가 밖에 없어서 지우고 다시 추가해야함
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
  .checkBtn {
    line-height: 45px;
    /* color: black; */
    color: #62acde;
    margin-right: 5px;
  }
  .checkBtnCompleted {
    /* color: #62acde; */
    color: gray;
  }
  .textCompleted {
    text-decoration: line-through;
    color: gray;
  }
</style>

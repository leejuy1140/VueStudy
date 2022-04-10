<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in this.storedTodoItems" 
        :key="todoItem.item"
        class="shadow"
      >
        <i
          class="checkBtn fa-solid fa-check"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete({todoItem, index})"
        ></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }">
          {{ todoItem.item }}
        </span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fa-regular fa-trash-can"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    })
  },
  computed: {
    ...mapGetters(['storedTodoItems'])
  }
};
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
/* list item transition 효과 */
.list-enter-active,
.list-leave-active {
  /* opcity 0->1 가는 시간이 1초 */
  transition: all 0.5s ease;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  /* y축으로 30px정도 움직인다 */
  transform: translateY(30px);
}
</style>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--
    HelloWorld라는 컴포넌트 등록 
    <hello-world></hello-world>와 동일 
  -->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  //인스턴스 옵션 속성 또는 컴포넌트 옵션 속성
  name: 'App',
  components: {
    // 'hello-world': HelloWorld의 축약
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

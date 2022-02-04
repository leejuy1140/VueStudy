<template>
  <!-- 
    submit 이벤트가 이벤트 버블링에 의해 <form>으로 올라감 
    submit 이벤트는 해당 폼을 action에 지정한 rul로 전달하는 동작을 함
    따라서 사용자가 정의한 다른 스크립트를 실행하려면 이 기본 행위를 중단해야함
    submit.prevent를 통해 이벤트 기본 동작을 막음
  -->
  <form v-on:submit.prevent="submitForm">
    <div>
      <!-- 
        input 태그를 위한 label
        label을 클릭하면 input에 자동으로 포커싱
      -->
      <label for="username">id: </label>
      <!-- 
        v-model: input에 있는 내용을 v-model을 이용해 연결
        input에 어떤 값을 입력할 때마다 자동으로 username에 반영
        username의 내용을 화면에 input에 그대로 연결해주는 two-way data binding 
       -->
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
//axios를 이용해 서버로 이벤트 데이터를 전달하기!
//axios는 브라우저에서 서버로 데이터를 주고받기 위한 라이브러리
import axios from 'axios';

export default {
  data: function() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm: function() {
      //폼의 이동 또는 새로고침을 막음
      //이벤트가 기본적으로 가지고 있는 행위를 멈추도록 함
      // event.preventDefault();
      console.log(this.username, this.password);
      //POST란, 데이터를 생성하거나 조작할 때 사용하는 HTTP 메소드
      //POST 규칙 1: URL을 보냄
      //REST API 규칙으로 인해 아래 url로 데이터를 보내고 받을 수 있음
      var url = 'https://jsonplaceholder.typicode.com/users';
      //POST 규칙 2: Data를 보냄
      var data = {
        username: this.username,
        password: this.password
      }
      //POST 요청
      axios.post(url, data)
        .then(function(response){
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
        })
    }
  }
}
</script>

<style>

</style>
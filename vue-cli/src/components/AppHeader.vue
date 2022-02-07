<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    //버튼을 누를 때마다 propsdata의 내용 변경하기!
    sendEvent: function () {
      this.$emit("renew");
    },
  },
};
</script>

<style></style>

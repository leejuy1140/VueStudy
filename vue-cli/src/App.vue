<template>
  <div>
    <!-- App이라는 컴포넌트에서 AppHeader컴포넌트로 propsdata로 str을 보냄 -->
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  data: function () {
    return {
      //이걸 AppHeader 컴포넌트로 Props 할 것!
      str: "Header",
    };
  },
  components: {
    "app-header": AppHeader,
  },
  methods: {
    renewStr: function () {
      this.str = this.str + "1";
    },
  },
};
</script>

<style></style>

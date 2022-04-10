<template>
  <div id="root">
      <p>{{ originalPrice }}</p>
      <p>{{ doublePrice }}</p>
      <p>{{ triplePrice }}</p>
  </div>
</template>

<script>
//Helper 함수가 주는 간편함
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice']),
        // originalPrice() {
        //     this.$store.getters.originalPrice
        // },
        // doublePrice() {
        //     this.$store.getters.doublePrice
        // },
        // triplePrice() {
        //     this.$store.getters.triplePrice
        // }
    }
}
</script>

<style>

</style>
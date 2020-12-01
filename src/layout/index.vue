<template>
  <div>
    <div>LEFT</div>
    <div>RIGHT</div>
  </div>
</template>

<script>

import index from "./minxi/index";
export default {
  name: "Layout",
  mixins: [index],
  mounted() {
    
    console.log(this.$store.state);
  },
  methods: {},
};
</script>

<style>
</style>
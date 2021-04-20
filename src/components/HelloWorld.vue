<template>
  <div class="recipe">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h1 {
  color: rgb(247, 108, 108);
  text-align: center;
  margin-bottom: 2rem;
}
</style>

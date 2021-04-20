<template>
  <footer>
    <p>
      {{ copyright }}
    </p>
  </footer>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },

  data() {
    return {
      copyright: "Copyright 2021 ~ Andreea Elena Barbu ~ Recipes",
    };
  },
};
</script>

<style scoped>
footer {
  background: rgb(158, 94, 94);
  padding: 6px;
}

p {
  color: rgb(231, 208, 76);
  text-align: center;
}
</style>

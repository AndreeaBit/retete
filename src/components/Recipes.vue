<template>
  <div id="recipes">
    <ul>
      <li v-for="recipe in recipes" :key="recipe['@id']">
        <router-link v-bind:to="'/reteta/' + recipe.id"
          ><h1>{{ recipe.name }}</h1></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["recipes"],
  data() {
    return {};
  },
};
</script>

<style scoped>
#recipes {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>

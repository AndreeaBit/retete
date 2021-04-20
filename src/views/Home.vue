<template>
  <div id="home">
    <nav>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/about" exact>About</router-link></li>
      </ul>
    </nav>
    <app-header v-bind:title="title"></app-header>
    <input type="search" v-model="search" placeholder="search recipe" />
    <app-recipes v-bind:recipes="recipes"> </app-recipes>

    <app-footer v-bind:title="title"> </app-footer>
  </div>
</template>

<script>
import Header from "/src/components/Header.vue";
import Footer from "/src/components/Footer.vue";
import Recipes from "/src/components/Recipes.vue";
export default {
  name: "Home",

  data() {
    return {
      recipes: [],
      search: "",
      title: "aa",
    };
  },

  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-recipes": Recipes,
  },
  computed: {
    filteredRecipes() {
      return this.recipes.filter((recipe) => {
        return recipe.name.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },

  mounted() {
    fetch("http://dumy91.go.ro/api/recipes.jsonld")
      .then((res) => res.json())
      .then((data) => (this.recipes = data["hydra:member"]))
      .catch((err) => console.log(err.messsage));
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: rgb(70, 12, 12);
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}

nav {
  background: rgb(158, 94, 94);
  padding: 15px 0;
  margin-bottom: 40px;
}

.router-link-active {
  background: #eee;
  color: #444;
}
</style>

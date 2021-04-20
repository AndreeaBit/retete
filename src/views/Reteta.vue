<template>
  <div class="reteta">
    <h1>{{ recipe.name }}</h1>
    <article>{{ recipe.description }}</article>
  </div>
</template>

<script>
export default {
  name: "caca",
  data() {
    return {
      recipe: {},
    };
  },

  created() {
    // this.$http.get("/reteta/" + this.slug).then(function (data) {
    //   console.log(data);
    //   this.reteta = data.description;
    // });
    console.log(this.$route.params.id);

    fetch(`http://dumy91.go.ro/api/recipes/${this.$route.params.id}.jsonld`)
      .then((res) => res.json())
      .then((data) => (this.recipe = data))
      .catch((err) => console.log(err.messsage));
  },
};
</script>

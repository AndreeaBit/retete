<template>
  <div class="about">
    <nav>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/about" exact>About</router-link></li>
      </ul>
    </nav>
    <h1>This is an about page</h1>
  </div>
</template>

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

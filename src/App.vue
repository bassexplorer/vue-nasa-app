<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b9b9b9;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #b8b8b8;
  text-decoration: none;

  &:hover{
    color:rgb(255, 255, 255)
  }
}

#nav a.router-link-exact-active {
  color: #b94242;

    &:hover{
    color:#b95e5e
  }
}

html{
  background-color: #0d0e0f;
}
</style>

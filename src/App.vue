<template>
  <div id="app" :light="lightMode">
    <header>
      <font-awesome-icon
        icon="fa-solid fa-sun"
        @click="lightMode = true"
        v-if="lightMode == false"
      />
      <font-awesome-icon
        icon="fa-solid fa-moon"
        @click="lightMode = false"
        v-else
      />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      lightMode: true,
    };
  },
};
</script>
<style lang="scss">
:root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 17px;
}
body {
  margin: 0;
  text-align: center;
}
h1 {
  font-size: 2em;
}
h1,
h2,
h3 {
  text-align: center;
}
button {
  cursor: pointer;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  //set variables for dark mode
  --background-color: linear-gradient(90deg, #000718 0%, #004654 100%);
  --second-background: #000718;
  --third-background: lightgrey;
  --text-color: rgb(245, 245, 245);
  --shadow-color: rgba(255, 255, 255, 0.2);
  --inverted-background: linear-gradient(90deg, white 40%, lightgrey 100%);
  --inverted-text: #000718;
  --mode-shadow: white;

  //init variables
  color: var(--text-color);
  background: var(--background-color);
}
#app[light="true"] {
  //set variables for light mode
  --background-color: linear-gradient(90deg, white 40%, lightgrey 100%);
  --second-background: white;
  --third-background: #004654;
  --text-color: #000718;
  --shadow-color: rgba(150, 150, 150, 0.4);
  --inverted-background: linear-gradient(90deg, #000718 0%, #004654 100%);
  --inverted-text: rgb(245, 245, 245);
  --mode-shadow: darkblue;
}
main {
  margin: 0px auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
a,
a:active {
  color: orange;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
// Styles applying to the fontawesome icon
.svg-inline--fa {
  margin: 10px;
  position: absolute;
  right: 1%;
  top: 1%;
  border: none;
  color: var(--text-color);
  font-size: 1.2rem;
  cursor: pointer;
}
</style>

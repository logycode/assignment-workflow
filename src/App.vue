<template>
  <div id="app" :light="lightMode">
    <header>
      <font-awesome-icon
        icon="fa-solid fa-sun"
        @click="lightMode = !lightMode"
        v-if="(lightmode = !lightmode)"
      />
      <font-awesome-icon
        icon="fa-solid fa-moon"
        @click="lightMode = !lightMode"
        v-else
      />
    </header>
    <main>
      <section>
        <h1>Checkout</h1>
        <h3>
          You can checkout your selected items in the next steps. <br />
          All we need are the following data. Please fill out the forms and
          adhere to the mandatory fields respectively. Thank you.
        </h3>
        <div class="steps">
          <div class="step">
            <h4>1st Step</h4>
            <div></div>
            <ul>
              <li>First Name</li>
              <li>Last Name</li>
              <li>Github User Name</li>
            </ul>
          </div>
          <div class="step">
            <h4>2nd Step</h4>
            <ul>
              <li>E-Mail Address</li>
              <li>Agreement of Terms and Conditions</li>
            </ul>
          </div>
        </div>
        <button class="checkout">Continue Checkout</button>
      </section>
    </main>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> 
    </nav> 
    <router-view /> -->
  </div>
</template>

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

  //set variables for default mode (dark)
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
  //set variables when light mode toggled
  --background-color: linear-gradient(90deg, white 40%, lightgrey 100%);
  --second-background: white;
  --third-background: #004654;
  --text-color: #000718;
  --shadow-color: rgba(150, 150, 150, 0.4);
  --inverted-background: linear-gradient(90deg, #000718 0%, #004654 100%);
  --inverted-text: rgb(245, 245, 245);
  --mode-shadow: darkblue;
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
main {
  margin: 0px auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
main section {
  width: 50%;
  padding: 2rem 5rem;
  background-color: var(--second-background);
  border-radius: 10px;

  // box-shadow parameters:
  // offset-x | offset-y | blur-radius | spread-radius | color
  box-shadow: 0px 0px 25px 1px var(--shadow-color);
}
.steps {
  display: flex;
  justify-content: space-evenly;
  margin: 70px 0;
}
.step {
  width: 30%;
  background: var(--second-background);
  box-shadow: 0px 0px 8px 1px var(--shadow-color);
  border-radius: 10px;
}
.step h4 {
  display: inline-block;
  padding-bottom: 0.8rem;
  margin-bottom: 0;
  border-bottom: 3px solid var(--text-color);
}
.step ul {
  padding: 0;
}
.step li {
  list-style-type: none;
  line-height: 2rem;
}
.checkout {
  background-image: var(--inverted-background);
  width: 50%;
  padding: 2em;
  margin-bottom: 28px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  box-shadow: var(--shadow-color);
  color: var(--inverted-text);
  font-weight: bold;
}
.checkout:hover {
  box-shadow: var(--third-background) 0 1px 30px;
  transition-duration: 0.2s;
}
</style>
<script>
export default {
  name: "App",
  data() {
    return {
      lightMode: false,
    };
  },
};
</script>

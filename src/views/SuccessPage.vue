<template>
  <section>
    <h1>Thank you for your purchase, {{ $store.state.user.firstName }}</h1>
    <h3>Your provided data</h3>
    <div>
      <img :src="$store.state.githubData.avatar_url" alt="" />
      <ul>
        <li v-for="(value, key) in $store.state.user" :key="key">
          <b> {{ key }} : </b> {{ value }}
        </li>
      </ul>
    </div>
    <button @click="resetStates">Start Over</button> &#128260;
  </section>
</template>

<script>
export default {
  name: "SuccessPage",
  methods: {
    resetStates() {
      this.$store.dispatch("resetData", {});
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 50%;
  padding: 2rem 5rem;
  background-color: var(--second-background);
  border-radius: 10px;

  // box-shadow parameters:
  // offset-x | offset-y | blur-radius | spread-radius | color
  box-shadow: 0px 0px 25px 1px var(--shadow-color);
}
div {
  margin-top: 2rem;
  display: flex;
  align-items: center;
}
p {
  text-align: left;
}
ul {
  margin: 0 -2rem;
  text-align: left;
  list-style-type: none;
}
img {
  display: block;
  width: 15%;
  margin-right: 2rem;
  border-radius: 100%;
}
button {
  background: none;
  border: none;
  font-size: inherit;
  font-family: inherit;
  color: orange;
  text-decoration: none;
  cursor: pointer;
}
button:hover {
  background: none;
  border: none;
  color: orange;
  text-decoration: underline;
}
</style>
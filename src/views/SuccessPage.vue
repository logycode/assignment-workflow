<template>
  <section>
    <h1>Success!</h1>
    <h3>Your order has been placed successfully.</h3>
    <p>Your entered data:</p>
    <ul>
      <li v-for="(value, key) in $store.state.user" :key="key">
        {{ key }} : {{ value }}
      </li>
    </ul>
    <img src="" alt="" />
  </section>
</template>

<script>
export default {
  name: "SuccessPage",
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
p,
ul {
  text-align: left;
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

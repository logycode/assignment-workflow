<template>
  <section>
    <h1>Checkout</h1>
    <h3>
      You can checkout your selected items in the next steps. <br />
      All we need are the following data. Please fill out the forms and adhere
      to the mandatory fields respectively. Thank you.
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
    <router-link to="/checkout-1">
      <button class="checkout">Continue Checkout</button>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "IntroSlide",
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

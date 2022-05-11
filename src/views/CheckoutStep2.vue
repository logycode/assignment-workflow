<template>
  <section>
    <h1>Terms & Conditions</h1>
    <h3>
      Please provide your email address and accept the terms and conditions.
    </h3>
    <form>
      <label for="mail-address">Your mail* </label>
      <input
        v-model="email"
        type="email"
        name="email"
        id="email"
        :class="{ filled: email != '' && error == false }"
      />
      <span v-if="error">Please enter a valid email address</span>
      <p>
        I have read the following
        <a href="https://www.homeday.de/de/datenschutz/">
          terms and conditions
        </a>
        and lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
      <label for="terms">Agreed to terms and conditions</label>
      <input type="checkbox" name="terms" id="terms" />
      <span v-if="error">Please enter a valid email address</span>
    </form>
    <!-- <router-link to="/checkout-2"> -->
    <button class="checkout" @click="nextStep()">Continue Checkout</button>
    <!-- </router-link> -->
  </section>
</template>

<script>
export default {
  name: "CheckoutStep2",
  data() {
    return {
      error: false,
      email: "",
    };
  },
  computed: {
    validEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.email.match(re)) {
        return true;
      }
      this.error == true;
      return false;
    },
  },
  methods: {
    // async and await can be used instead of then.
    async nextStep() {
      if (this.email === "" || this.validEmail === false) {
        return (this.error = true);
      }
      await this.$store.dispatch("fetchUserData", {
        firstName: this.$store.state.user.firstName,
        lastName: this.$store.state.user.lastName,
        githubUserName: this.$store.state.user.githubUserName,
        email: this.email,
      });
      this.$router.push({
        name: "SuccessPage",
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
form {
  padding: 2rem;
  text-align: left;
}
input {
  width: 100%;
  height: 2rem;
  padding: 0.3rem 0.7rem;
  outline: none;
  border: none;
  background-color: lightgrey;
  border-radius: 8px;
  font-size: inherit;
}
input:focus {
  background-color: white;
}
input.filled {
  border: 1px solid #00ff08;
  background-color: #deffe7;
}
form > #terms {
  justify-self: flex-start;
}
label:first-of-type {
  margin: 0 0 1rem 0;
}
label {
  display: flex;
  margin: 1rem 0;
  align-items: center;
  font-weight: bold;
}
form span {
  display: block;
  margin-top: 0.8rem;
  color: red;
  font-style: italic;
}
a,
a:active {
  color: orange;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.checkout {
  background-image: var(--inverted-background);
  width: 50%;
  padding: 2em;
  margin: 1rem 0;
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

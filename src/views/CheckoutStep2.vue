<template>
  <section>
    <h1>Terms & Conditions</h1>
    <h2>
      Please provide your email address and accept the terms and conditions.
    </h2>
    <form>
      <label for="email">Your mail* </label>
      <input
        v-model="email"
        type="email"
        name="email"
        id="email"
        :class="{ filled: isEmailValid }"
      />
      <span v-if="error && !isEmailValid">
        Please enter a valid email address
      </span>
      <div>
        <input type="checkbox" name="terms" id="terms" v-model="terms" />
        <label for="terms" :class="{ terms: error && !terms }">
          I have read the terms and conditions and lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.*
        </label>
      </div>
    </form>
    <router-link to="/checkout-1" class="backlink"> &#8592; back </router-link>
    <button
      class="checkout"
      @click="nextStep()"
      :disabled="error && !isStepValid"
    >
      Place Order
    </button>
  </section>
</template>

<script>
export default {
  name: "CheckoutStep2",
  data() {
    return {
      terms: false,
      error: false,
      email: "",
    };
  },
  computed: {
    isEmailValid() {
      // use regular expression to validate if a correct email address was entered
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!this.email.match(re) || this.email === "") return false;
      return true;
    },
    areTermsAccepted() {
      if (!this.terms) return false;

      return true;
    },
    isStepValid() {
      if (!this.isEmailValid) return false;
      if (!this.areTermsAccepted) return false;
      return true;
    },
  },
  methods: {
    async nextStep() {
      if (!this.isStepValid) {
        this.error = true;
        return false;
      }
      await this.$store.dispatch("fetchUserData", {
        ...this.$store.state.user,
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
  box-shadow: 0px 0px 25px 1px var(--shadow-color);
}
form {
  padding: 2rem;
  text-align: left;
}
input {
  box-sizing: border-box;
  width: 100%;
  height: 3rem;
  padding: 0.3rem 0.7rem;
  outline: none;
  border: 1px solid lightgrey;
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
label.terms {
  color: red;
}
form div {
  display: flex;
  flex-direction: row;
}
input#terms {
  margin: 1rem 1rem 1rem 0;
  min-width: 18px;
  max-width: 6%;
  height: 2rem;
  cursor: pointer;
}
label {
  display: flex;
  margin: 1rem 0;
  align-items: center;
  font-weight: bold;
}
label[for="terms"] {
  font-weight: normal;
}
form span {
  display: block;
  margin-top: 0.8rem;
  color: red;
  font-style: italic;
}
a.backlink {
  margin-right: 1rem;
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
.checkout:disabled {
  background-image: none;
  cursor: default;
  color: darkgrey;
  font-weight: normal;
  background-color: lightgray;
}
.checkout:disabled:hover {
  background-image: none;
  box-shadow: none;
}
@media only screen and (min-width: 320px) and (max-width: 740px) {
  section {
    width: 100%;
    padding: 3.5rem;
    border-radius: 0;
  }
  form {
    padding: 2rem 0;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .checkout {
    width: 100%;
  }
}
@media only screen and (min-width: 741px) and (max-width: 1200px) {
  section {
    width: 70%;
    padding: 3.5rem;
    border-radius: 0;
  }
}
</style>

<template>
  <section>
    <h1>Personal Data</h1>
    <h3>
      Please provide your personal data. Fields marked with * are mandatory.
    </h3>
    <form>
      <label for="first-name">Your first Name* </label>
      <input
        v-model="firstName"
        type="text"
        name="first-name"
        id="first-name"
        :class="{ filled: firstName != '' }"
      />
      <span v-if="error && firstName == ''">Please enter your first name</span>
      <label for="last-name">Your last Name*</label>
      <input
        v-model="lastName"
        type="text"
        name="last-name"
        id="last-name"
        :class="{ filled: lastName != '' }"
      />
      <span v-if="error && lastName == ''">Please enter your last name</span>

      <label for="github-user">Your Github User Name*</label>
      <input
        v-model="githubUserName"
        type="text"
        name="github-user"
        id="github-user"
        :class="{ filled: githubUserName != '' }"
      />
      <span v-if="error && githubUserName == ''">
        Please enter your Github user name
      </span>
    </form>
    <!-- <router-link to="/checkout-2"> -->
    <button class="checkout" @click="nextStep()">Continue Checkout</button>
    <!-- </router-link> -->
  </section>
</template>

<script>
export default {
  name: "CheckoutStep1",
  data() {
    return {
      error: false,
      firstName: "",
      lastName: "",
      githubUserName: "",
    };
  },
  methods: {
    // async and await can be used instead of then.
    async nextStep() {
      if (
        this.firstName === "" ||
        this.lastName === "" ||
        this.githubUserName === ""
      ) {
        return (this.error = true);
      }
      await this.$store.dispatch("fetchUserData", {
        firstName: this.firstName,
        lastName: this.lastName,
        githubUserName: this.githubUserName,
      });
      this.$store.dispatch("fetchGithubData", {
        githubData: this.githubData,
      });
      this.$router.push({
        name: "CheckoutStep2",
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
  border: 1px solid lightgrey;
  background-color: lightgrey;
  border-radius: 8px;
  font-size: inherit;
}
input:hover {
  background-color: white;
}
input:focus {
  background-color: white;
}
input.filled {
  border: 1px solid #00ff08;
  background-color: #deffe7;
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

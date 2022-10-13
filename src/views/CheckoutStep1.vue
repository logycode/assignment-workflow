<template>
  <section>
    <h1>Personal Data</h1>
    <h2>
      Please provide your personal data. Fields marked with * are mandatory.
    </h2>
    <form>
      <label for="first-name">Your first Name* </label>
      <input
        v-model="firstName"
        type="text"
        name="first-name"
        id="first-name"
        :class="{ filled: firstName }"
      />
      <span v-if="error && !firstName">Please enter your first name</span>
      <label for="last-name">Your last Name*</label>
      <input
        v-model="lastName"
        type="text"
        name="last-name"
        id="last-name"
        :class="{ filled: lastName }"
      />
      <span v-if="error && !lastName">Please enter your last name</span>

      <label for="github-user">Your Github User Name*</label>
      <input
        v-model="githubUserName"
        type="text"
        name="github-user"
        id="github-user"
        :class="{ filled: githubUserName }"
      />
      <span v-if="error && !githubUserName">
        Please enter your Github user name
      </span>
    </form>
    <div>
      <router-link to="/" class="backlink"> &#8592; back </router-link>
      <button
        class="checkout"
        @click="nextStep()"
        :disabled="error && !isStepValid"
      >
        Continue Checkout
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "CheckoutStep1",
  data() {
    return {
      error: false,
    };
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.user?.firstName;
      },
      set(newValue) {
        this.$store.dispatch("fetchUserData", {
          ...this.$store.state.user,
          firstName: newValue,
        });
      },
    },
    lastName: {
      get() {
        return this.$store.state.user?.lastName;
      },
      set(newValue) {
        this.$store.dispatch("fetchUserData", {
          ...this.$store.state.user,
          lastName: newValue,
        });
      },
    },
    githubUserName: {
      get() {
        return this.$store.state.user?.githubUserName;
      },
      set(newValue) {
        this.$store.dispatch("fetchUserData", {
          ...this.$store.state.user,
          githubUserName: newValue,
        });
      },
    },
    isStepValid() {
      if (!this.firstName) return false;
      if (!this.lastName) return false;
      if (!this.githubUserName) return false;
      return true;
    },
  },
  methods: {
    async nextStep() {
      if (!this.isStepValid) {
        this.error = true;
        return false;
      }
      this.$store.dispatch("fetchUserData", {
        firstName: this.firstName,
        lastName: this.lastName,
        githubUserName: this.githubUserName,
      });
      this.$router.push({
        name: "CheckoutStep2",
      });
      return (this.error = false);
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

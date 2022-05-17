<template>
  <section>
    <div v-if="isDataAvailable">
      <h1>
        Thank you for your purchase, {{ this.$store.state.user.firstName }}
      </h1>
      <h2>Your provided data</h2>
      <div class="data-response">
        <figure v-if="doesUserExist">
          <img :src="githubAvatarURL" alt="Avatar of the Github User" />
        </figure>
        <span v-else>No such Github user found.</span>
        <ul>
          <li v-for="(value, key) in $store.state.user" :key="key">
            <b> {{ key }}: </b> {{ value }}
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <h1 class="no-data">You did not provide any data. Please start over</h1>
    </div>
    <button @click="resetStates">Start Over</button> &#128260;
  </section>
</template>

<script>
// use axios client for calling the Github API
import axios from "axios";
// use lodash library to make use of _.isEmpty function and check for empty objects
import _ from "lodash";
export default {
  name: "SuccessPage",
  data() {
    return {
      githubAvatarURL: "",
      doesUserExist: true,
    };
  },
  computed: {
    isDataAvailable() {
      if (_.isEmpty(this.$store.state.user)) return false;

      return true;
    },
  },
  methods: {
    resetStates() {
      this.$store.dispatch("resetData", {});
      this.$router.push({
        path: "/",
      });
    },
  },
  created() {
    axios
      .get(
        "https://api.github.com/users/" + this.$store.state.user.githubUserName
      )
      .then((response) => {
        this.githubAvatarURL = response.data.avatar_url;
      })
      .catch((error) => {
        if (error.response.data.message === "Not Found")
          return (this.doesUserExist = false);
        console.warn(error);
      });
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
div {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.data-response {
  width: 100%;
  flex-direction: row;
}
.no-data {
  color: red;
  font-weight: bold;
}
ul {
  margin: 0 -2rem;
  text-align: left;
  list-style-type: none;
}
img {
  max-width: 150px;
  border-radius: 100%;
}
span {
  color: red;
  max-width: 150px;
}
button {
  margin-top: 2rem;
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
@media only screen and (min-device-width: 320px) and (max-device-width: 740px) {
  section {
    width: 100%;
    padding: 3.5rem;
    border-radius: 0;
  }
  .data-response {
    width: 100%;
    flex-direction: column;
  }
}
@media only screen and (min-device-width: 741px) and (max-device-width: 1200px) {
  section {
    width: 70%;
    padding: 3.5rem;
    border-radius: 0;
  }
}
</style>

<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-card outlined color="transparent"> Score: {{ score }} </v-card>
    </v-app-bar>

    <v-main>
      <Quiz />
    </v-main>
  </v-app>
</template>

<script>
import Quiz from "./components/Quiz";

export default {
  name: "App",

  components: {
    Quiz,
  },

  data: () => ({
    score: 5,
  }),
};
</script>

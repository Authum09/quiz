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
      </div>
      <v-spacer></v-spacer>
      <v-select
        style="margin-top: 1.5em; padding: 1em"
        :items="items"
        label="Bitte auswählen"
        single-line
      ></v-select>
      <v-spacer></v-spacer>

      <v-card outlined color="transparent"> Score: {{ score }} </v-card>
    </v-app-bar>

    <v-main>
      <Quiz @increaseScore="increaseScore" />
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
    score: 0,
    items: ["Test", "KEKW", "LUL"],
  }),
  methods: {
    increaseScore: function () {
      this.score += 1;
    },
  },
};
</script>

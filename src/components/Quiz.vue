<template>
  <v-container class="grey lighten-5" fill-height fluid>
    <v-row justify="center">
      <v-col sm="4">
        <v-card class="pa-4 text-center" outlined tile>
          {{ question["question"] }}
        </v-card>
        <v-row>
          <v-col cols="4" sm="6">
            <v-btn
              @click="checkAnswer('A')"
              class="ma-4"
              outlined
              style="background-color: lightgrey"
            >
              A: {{ question["answers"]["A"] }}
            </v-btn>
          </v-col>
          <v-col cols="4" sm="6">
            <v-btn
              @click="checkAnswer('B')"
              class="ma-4"
              outlined
              style="background-color: lightgrey"
            >
              B: {{ question["answers"]["B"] }}
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" sm="6">
            <v-btn
              @click="checkAnswer('C')"
              class="ma-4"
              outlined
              style="background-color: lightgrey"
            >
              C: {{ question["answers"]["C"] }}
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              @click="checkAnswer('D')"
              class="ma-4"
              outlined
              style="background-color: lightgrey"
            >
              D: {{ question["answers"]["D"] }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
import axios from "axios";
export default {
  data: () => ({
    question: null,
  }),
  methods: {
    getLinkData: function () {
      let vm = this;
      axios.get("http://localhost:3000/question/Math").then((response) => {
        vm.question = response.data;
        console.log(vm.question);
      });
    },

    checkAnswer: function (answer) {
      let vm = this;
      console.log(vm.question["correctAnswer"]);
      if (vm.question["correctAnswer"] == answer) {
        vm.$emit("increaseScore");
      }
      this.getLinkData();
    },
  },
  mounted() {
    this.getLinkData();
  },
};
</script>
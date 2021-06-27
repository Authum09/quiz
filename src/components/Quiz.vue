<template>
  <v-container class="grey lighten-5" fill-height fluid>
    <v-row justify="center">
      <v-col sm="4">
        <v-card class="pa-4 text-center" outlined tile> QUESTION </v-card>
        <v-row>
          <v-col cols="4" sm="6">
            <v-btn class="ma-4" outlined style="background-color: lightgrey">
              A
            </v-btn>
          </v-col>
          <v-col cols="4" sm="6">
            <v-btn class="ma-4" outlined style="background-color: lightgrey">
              B
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" sm="6">
            <v-btn class="ma-4" outlined style="background-color: lightgrey">
              C
            </v-btn>
          </v-col>
          <v-col>
            <v-btn class="ma-4" outlined style="background-color: lightgrey">
              D
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    alignments: ["start", "center", "end", "end"],
  }),
};
</script>
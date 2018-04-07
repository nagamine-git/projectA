<template>
<v-card>
  <v-container>
  <v-layout row align-center>
    <v-flex xs4 sm4 md4 class="space-right-x1">
      <v-text-field name="purpose" label="目的" id="purpose" />
    </v-flex>
    <v-flex xs4 sm4 md4 class="space-right-x1">
      <v-text-field name="todo" label="やること" id="purpose" />
    </v-flex>
    <v-flex xs4 sm4 md4>
      <v-text-field name="condition" label="達成条件" id="condition" />
    </v-flex>
    <v-btn color="blue" dark>追加</v-btn>
  </v-layout>
  </v-container>
</v-card>

</template>

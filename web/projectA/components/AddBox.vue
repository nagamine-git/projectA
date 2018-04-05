<template>
<v-card>
  <v-container>
  <v-layout row class="space-top">
    <v-flex xs4 sm4 md4 class="space-right">
      <v-text-field
      name="purpose"
      label="目的"
      id="purpose"
      ></v-text-field>
    </v-flex>
    <v-flex xs4 sm4 md4 class="space-right">
      <v-text-field
      name="todo"
      label="やること"
      id="purpose"
      ></v-text-field>
    </v-flex>
    <v-flex xs4 sm4 md4>
      <v-text-field
      name="condition"
      label="条件"
      id="condition"
      ></v-text-field>
    </v-flex>
    <v-btn color="info" class="space-top">追加</v-btn>
  </v-layout>
  </v-container>
</v-card>

</template>


<style>
.space-top {
  margin-top: 10px;
}
.space-right {
  margin-right: 5px;
}
</style>

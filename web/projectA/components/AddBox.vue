<template>

  <v-layout row>
    <v-flex xs4 sm4 md4>
      <v-text-field
      name="purpose"
      label="目的"
      id="purpose"
      ></v-text-field>
    </v-flex>
    <v-flex xs4 sm4 md4>
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
    <v-btn color="info">追加</v-btn>
  </v-layout>

</template>


<style>

</style>

<template>

<v-card class="space-top">
  <v-container>
    <v-text-field
    name="input-1"
    label="開発を円滑に進めるため"
    id="testing"
    value="モックを作成する"
    ></v-text-field>
  </v-container>
</v-card>

</template>


<style>
.space-top {
  margin-top: 10px;
}
</style>

<script>
export default {
  props: ["story"],
};
</script>

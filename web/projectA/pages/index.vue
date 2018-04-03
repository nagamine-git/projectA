<template>
  <v-card>
    <v-layout column justify-center align-center>
      <add-box />
    </v-layout>
  </v-card>
</template>

<script>
import AddBox from "~/components/AddBox.vue";

export default {
  components: {
    AddBox
  }
};
</script>

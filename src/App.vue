<template>
  <b-container id="app">
    <b-container max-width="100%"><Banner /></b-container>
    <b-row>
      <b-col> <navbar /> </b-col>
    </b-row>
    <b-row>
      <b-col> <router-view /> </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

export default {
  name: "App",
  components: {
    Navbar,
    Banner
  },
  data() {
    return {
      images: require("./assets/ck.jpg")
    };
  }
};
</script>

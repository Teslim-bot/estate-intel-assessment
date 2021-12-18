<template></template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("haka");
    next((vm) => {
      if (vm.$store.getters.isLoggedIn) {
        next("/");
      } else {
        next("/login");
      }
    });
  },
};
</script>

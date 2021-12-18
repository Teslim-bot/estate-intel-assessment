<template>
  <div class="tw-flex tw-justify-between">
    <div>
      <span>SHAPES</span>
    </div>
    <button @click="logOut()" class="tw-text-red-500">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.commit("logOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>

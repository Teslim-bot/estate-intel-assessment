<template>
  <svg
    fill="none"
    height="24"
    stroke="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle :fill="fillColor(color)" cx="12" cy="12" r="10" />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "green",
    },
  },
  
};
</script>

<style></style>

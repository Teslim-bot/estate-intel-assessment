<template>
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="12"
      cy="12"
      rx="8"
      ry="10"
      :fill="fillColor(color)"
      stroke="none"
      stroke-width="2"
    />
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
  computed: {
    fillColor() {
      return (color) => {
        switch (color) {
          case "slate":
            return "#868686";
          default:
            return color;
        }
      };
    },
  },
  
};
</script>

<style></style>

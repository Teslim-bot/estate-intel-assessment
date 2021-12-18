<template>
  <svg
    enable-background="new 0 0 32 32"
    id="Layer_4"
    version="1.1"
    viewBox="0 0 32 32"
    xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <polygon
      :fill="fillColor(color)"
      points="16,6 29,26 3,26"
      stroke="none"
      stroke-linejoin="round"
      stroke-miterlimit="10"
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

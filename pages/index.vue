<template>
  <div>
    <grid-selectors />
    <grid-display />
  </div>
</template>

<script>
import gridDisplay from "../components/gridDisplay.vue";
import GridSelectors from "../components/gridSelectors.vue";
export default {
  components: { gridDisplay, GridSelectors },
  name: "IndexPage",
};
</script>

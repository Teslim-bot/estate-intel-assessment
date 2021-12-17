<template>
  <div
    class="tw-container tw-mx-auto tw-py-4 tw-bg-neutral-300 tw-px-44 tw-mt-5"
  >
    <grid-selectors @update="updateQuery" />
    <grid-display :filters="filters" />
  </div>
</template>

<script>
import gridDisplay from "../components/gridDisplay.vue";
import GridSelectors from "../components/gridSelectors.vue";
export default {
  components: { gridDisplay, GridSelectors },
  name: "IndexPage",
  data() {
    return {
      filters: {
        color: [],
        shape: [],
      },
    };
  },
  methods: {
    updateQuery(filters) {
      this.filters = filters;
    },
  },
};
</script>

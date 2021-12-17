<template>
  <div class="tw-container tw-mx-auto">
    <app-header class="tw-px-14" />
    <div
      class="tw-py-4 tw-bg-neutral-300 tw-px-7 lg:tw-px-44 tw-mt-5"
    >
      <grid-selectors @update="updateQuery" />
      <grid-display :filters="filters" />
    </div>
  </div>
</template>

<script>
import gridDisplay from "../components/gridDisplay.vue";
import GridSelectors from "../components/gridSelectors.vue";
import Header from "../components/Header.vue";
export default {
  components: { gridDisplay, GridSelectors, "app-header": Header },
  name: "IndexPage",
  data() {
    return {
      filters: {
        color: [],
        shape: [],
        all: true,
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

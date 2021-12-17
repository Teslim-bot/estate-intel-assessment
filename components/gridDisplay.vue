<template>
  <div>
    <br />
    <!-- {{ filteredGridData }} {{ filteredGridData.length }} -->
    <div class="tw-inline-flex tw-justify-center tw-bg-white tw-p-5 tw-mb-10 tw-mt-5 tw-px-24">
      <img
        src="@/assets/shapes/circle.svg"
        height="120px"
        width="120px"
        alt=""
      />
    </div>
    <img src="@/assets/shapes/oval.svg" alt="" />
    <img src="@/assets/shapes/rectangle.svg" alt="" />
    <img src="@/assets/shapes/square.svg" height="100px" width="200px" alt="" />
    <img src="@/assets/shapes/triangle.svg" alt="" />
  </div>
</template>

<script>
import gridData from "../static/gridData.json";
export default {
  props: {
    filters: {
      type: Object,
      default: () => ({ shape: [], color: [] }),
    },
  },
  computed: {
    filteredGridData() {
      const { color, shape } = this.filters;
      if (color.length === 0 && shape.length === 0) {
        return gridData;
      }
      if (color.length === 0) {
        return gridData.filter((grid) => shape.includes(grid.shape));
      }
      if (shape.length === 0) {
        return gridData.filter((grid) => color.includes(grid.color));
      }
      return gridData.filter((gridItem) => {
        return color.includes(gridItem.color) && shape.includes(gridItem.shape);
      });
    },
  },
};
</script>

<style></style>

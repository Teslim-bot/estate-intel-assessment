<template>
  <div>
    {{ filters }}
    <br />
    {{ filteredGridData }} {{ filteredGridData.length }}
    <img src="@/assets/shapes/pic.png" alt="" />
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

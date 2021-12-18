<template>
  <div>
    <p id="grid-title">
      {{ computedTitle }}
    </p>
    <div
      class="tw-grid lg:tw-grid-cols-3 tw-gap-4"
      v-if="filteredGridData.length > 0"
    >
      <div
        v-for="data in filteredGridData"
        :key="data.id"
        class="tw-inline-flex tw-justify-center tw-bg-white tw-lg:tw-p-4 tw-mb-5 tw-px-24"
      >
        <component
          :is="resolveComponent(data.shape)"
          :color="data.color"
          class="tw-h-full tw-w-full tw-mx-auto"
        />
      </div>
    </div>
    <p v-else>No item matched the filter</p>
  </div>
</template>

<script>
import gridData from "../static/gridData.json";
import CircleShape from "./shapes/circleShape.vue";
import ovalShape from "./shapes/ovalShape.vue";
import rectangleShape from "./shapes/rectangleShape.vue";
import squareShape from "./shapes/squareShape.vue";
import triangleShape from "./shapes/triangleShape.vue";

export default {
  components: {
    CircleShape,
    ovalShape,
    rectangleShape,
    squareShape,
    triangleShape,
  },
  props: {
    filters: {
      type: Object,
      default: () => ({ shape: [], color: [], allSelector: true }),
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
    computedTitle() {
      const { color, shape, allSelector, allColors, allShapes } = this.filters;
      if (allSelector || (color.length === 0 && shape.length === 0)) {
        return "All items:";
      } else if (allColors || allShapes) {
        if (allShapes && color.length === 1) {
          return `All ${color} items:`;
        } else if (allColors && shape.length === 1) {
          return `All ${shape} items:`;
        }
        return `Multiple items:`;
      } else if (color.length === 1 && shape.length === 1) {
        return `${shape} ${color} items:`;
      } else if (color.length === 1) {
        if (!shape.length) return `All ${color} items:`;
        return `Multiple ${color} items:`;
      } else if (shape.length === 1) {
        if (!color.length) return `All ${shape} items:`;
        return `Multiple ${shape} items:`;
      }
      return `Multiple items:`;
    },
    resolveComponent() {
      return (shape) => {
        return `${shape}Shape`;
      };
    },
  },
};
</script>

<style></style>

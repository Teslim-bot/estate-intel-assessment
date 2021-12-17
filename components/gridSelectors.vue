<template>
  <div>
    <h2>Filters</h2>
    <h3>shapes</h3>
    <div>
      <button
        type="button"
        v-for="shape in shapes"
        :key="shape"
        :value="shape"
        @click="selectShape(shape)"
        class="tw-rounded-full tw-py-2 tw-px-3 tw-mx-2 tw-border-2"
      >
        {{ shape }}
      </button>
    </div>
    <h3>colors</h3>
    <div>
      <button
        type="button"
        v-for="color in colors"
        :key="color"
        :value="color"
        @click="selectColor(color)"
        :class="`tw-bg-${color}-500`"
        class="tw-rounded-full tw-py-3 tw-px-3 tw-mx-2 tw-border-2 tw-border-black"
      >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shapes: ["oval", "circle", "triangle", "square", "rectangle"],
      colors: ["red", "green", "blue", "yellow", "slate", "cyan"],
      selectedShapes: [],
      selectedColors: [],
    };
  },
  methods: {
    selectShape(shape) {
      if (this.selectedShapes.includes(shape)) {
        this.selectedShapes = this.selectedShapes.filter(
          (selectedShape) => selectedShape !== shape
        );
      } else {
        this.selectedShapes.push(shape);
      }
      this.$emit("shape", this.selectedShapes);
    },
    selectColor(color) {
      if (this.selectedColors.includes(color)) {
        this.selectedColors = this.selectedColors.filter(
          (selectedColor) => selectedColor !== color
        );
      } else {
        this.selectedColors.push(color);
      }
      this.$emit("color", this.selectedColors);
    },
  },
};
</script>

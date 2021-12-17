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
        :class="[
          isSelectedShape(shape) ? 'tw-bg-blue-100 tw-border-blue-300' : 'tw-bg-neutral-300',
          'tw-rounded-full tw-py-2 tw-px-3 tw-mx-2 tw-border-2 tw-border-neutral-500',
        ]"
      >
        {{ humanize(shape) }}
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
        :class="[
          shapeColor(color),
          isSelectedColor(color) ? 'tw-border-black' : 'tw-bg-white',
          'tw-rounded-full tw-py-3 tw-px-3 tw-mx-2 tw-border-2 ',
        ]"
      />
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
  computed: {
    humanize() {
      return (str) => str.charAt(0).toUpperCase() + str.slice(1);
    },
    shapeColor() {
      return (color) => `tw-bg-${color}-500`;
    },
    isSelectedColor() {
      return (color) => this.selectedColors.includes(color);
    },
    isSelectedShape() {
      return (shape) => this.selectedShapes.includes(shape);
    },
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
      this.emitFilters();
    },
    selectColor(color) {
      if (this.selectedColors.includes(color)) {
        this.selectedColors = this.selectedColors.filter(
          (selectedColor) => selectedColor !== color
        );
      } else {
        this.selectedColors.push(color);
      }
      this.emitFilters();
    },
    emitFilters() {
      if (
        this.selectedColors.length === this.colors.length &&
        this.selectedShapes.length === this.shapes.length
      ) {
        this.$emit("update", {
          shape: this.selectedShapes,
          color: this.selectedColors,
          all: true,
        });
      } else {
        this.$emit("update", {
          shape: this.selectedShapes,
          color: this.selectedColors,
          all: false,
          allColors: this.selectedColors.length === this.colors.length,
          allShapes: this.selectedShapes.length === this.shapes.length,
        });
      }
    },
  },
};
</script>

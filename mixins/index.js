export default {
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

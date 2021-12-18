import { mount } from "@vue/test-utils";
import gridDisplay from "@/components/gridDisplay.vue";

describe("gridDisplay", () => {
  test('Display "All Items" when all prop is passed', () => {
    const wrapper = mount(gridDisplay, {
      propsData: {
        filters: {
          color: [],
          shape: [],
          allColors: [],
          allShapes: [],
          allSelector: true,
        },
      },
    });
    expect(wrapper.find("#grid-title").text()).toBe("All items:");
  });
  test('Display "Multiple items:" When all the colors and a multiple shapes are selected:', () => {
    const wrapper = mount(gridDisplay, {
      propsData: {
        filters: {
          color: [],
          allShapes: false,
          allSelector: false,
          allColors: true,
          shape: ["circle", "square"],
        },
      },
    });
    expect(wrapper.find("#grid-title").text()).toBe("Multiple items:");
  });
  test('Display "Multiple items:" When all the shapes and a multiple colors are selected:', () => {
    const wrapper = mount(gridDisplay, {
      propsData: {
        filters: {
          color: ["red", "green"],
          allShapes: true,
          shape: [],
        },
      },
    });
    expect(wrapper.find("#grid-title").text()).toBe("Multiple items:");
  });
  test('Display "All red Items" when red color prop is passed', () => {
    const wrapper = mount(gridDisplay, {
      propsData: {
        filters: {
          color: ["red"],
          shape: [],
        },
      },
    });
    expect(wrapper.find("#grid-title").text()).toBe("All red items:");
  });
  test('Display "All oval Items" when red shape prop is passed', () => {
    const wrapper = mount(gridDisplay, {
      propsData: {
        filters: {
          color: [],
          shape: ["oval"],
        },
      },
    });
    expect(wrapper.find("#grid-title").text()).toBe("All oval items:");
  });
  test('Display "Multiple red items:" when red color prop and multiple shapes is passed', () => {
    const wrapper = mount(gridDisplay, {
      propsData: {
        filters: {
          color: ["red"],
          shape: ["oval", "circle"],
        },
      },
    });
    expect(wrapper.find("#grid-title").text()).toBe("Multiple red items:");
  });
  test('Display "Multiple oval items:" when oval and multiple colors is passed', () => {
    const wrapper = mount(gridDisplay, {
      propsData: {
        filters: {
          color: ["red", "green"],
          shape: ["oval"],
        },
      },
    });
    expect(wrapper.find("#grid-title").text()).toBe("Multiple oval items:");
  });
  test('Display "Round oval item:" when oval and round is passed', () => {
    const wrapper = mount(gridDisplay, {
      propsData: {
        filters: {
          color: ["red"],
          shape: ["oval"],
        },
      },
    });
    expect(wrapper.find("#grid-title").text()).toBe("oval red items:");
  });
});

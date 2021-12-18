import { mount } from "@vue/test-utils";
import gridSelectors from "@/components/gridSelectors.vue";

describe("gridSelectors", () => {
  test('Adds "oval" to selectedShape array and emitted correct object', async () => {
    const wrapper = mount(gridSelectors);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().update).toBeTruthy();
    expect(wrapper.emitted().update[0][0]).toEqual({
      color: [],
      shape: ["oval"],
      allColors: false,
      allShapes: false,
      allSelector: false,
    });
  });
  test('Adds "red" to selectedColor array and emitted correct object', async () => {
    const wrapper = mount(gridSelectors);
    await wrapper.findAll("button").at(5).trigger("click");
    expect(wrapper.emitted().update).toBeTruthy();
    expect(wrapper.emitted().update[0][0]).toEqual({
      color: ["red"],
      shape: [],
      allColors: false,
      allShapes: false,
      allSelector: false,
    });
  });
});

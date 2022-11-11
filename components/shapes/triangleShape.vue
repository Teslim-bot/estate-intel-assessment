<template>
  <img :src="src" alt="" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
  },
};
</script>

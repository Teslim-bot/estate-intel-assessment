<template>
  <div
    class="tw-h-screen tw-grid md:tw-grid-cols-2 tw-items-center tw-bg-gradient-to-r tw-from-neutral-500"
  >
    <div
      class="tw-h-full tw-hidden md:tw-grid tw-justify-around tw-items-center"
    >
      <NuxtLogo class="tw-text-white tw-text-logo" />
    </div>
    <div
      class="tw-p-4 tw-h-full tw-items-center tw-justify-around tw-flex tw-flex-grow tw-bg-white tw-shadow tw-rounded-2xl tw-mb-10 tw-mt-5"
    >
      <LoginForm />
    </div>
  </div>
</template>
<script lang="ts">
import NuxtLogo from "../components/NuxtLogo.vue";
import LoginForm from "../components/LoginForm.vue";
export default {
  components: {
    NuxtLogo,
    LoginForm,
  },
};
</script>

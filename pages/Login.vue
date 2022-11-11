<template>
  <div class="tw-h-screen tw-items-center">
    <div
      class="tw-p-4 tw-h-full tw-items-center tw-justify-around tw-flex tw-flex-grow tw-bg-white tw-shadow tw-rounded-2xl tw-mb-10 tw-mt-5"
    >
      <LoginForm />
    </div>
  </div>
</template>
<script lang="ts">
import LoginForm from "../components/LoginForm.vue";
export default {
  components: {
    LoginForm,
  },
};
</script>

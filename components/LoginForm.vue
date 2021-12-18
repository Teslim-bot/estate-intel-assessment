<template>
  <div>
    <NuxtLogo class="tw-text-white md:tw-hidden tw-text-logo tw-mb-6" />

    <form @submit.prevent="handleSignIn(email, password)" id="signInForm">
      {{ errorMessage }}
      <div class="field">
        <label class="label">Email</label>
        <p>
          <input
            :class="{ 'tw-border-l-orange-700': hasError }"
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </p>
      </div>
      <div class="field">
        <label for="password" class="label">Password</label>
        <p>
          <input
            :class="{ 'tw-border-l-orange-700': hasError }"
            v-model="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </p>
      </div>
      <button
        type="submit"
        :class="{ 'tw-border-l-orange-700': isLoading }"
        class="submit-btn tw-mt-5"
      >
        Log in
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      hasError: false,
      isLoading: false,
      errorMessage: "",
    };
  },
  methods: {
    async handleSignIn(email, password) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("signIn", {
          email,
          password,
        });
        this.$router.push("/");
      } catch (error) {
        this.hasError = true;
        this.errorMessage = error;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style></style>

<template>
  <div
    class="flex h-[100dvh] w-screen items-center justify-center bg-[#f2f2f2]"
  >
    <NuxtPage />
  </div>
</template>

<style scoped>
/**
 * You can use native CSS instead by removing the Tailwind utility classes
 * and add the id="app-container" on the div.
 * - by @paulo-pertierra
 */
#app-container {
  height: 100dvh;
  width: 100vw;
  display: grid;
  place-items: center;
}
</style>

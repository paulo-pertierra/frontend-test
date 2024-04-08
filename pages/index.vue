<template>
  <div class="max-w-4xl border w-full shrink-0 ">
    <input
      class="w-full mb-10 h-10 p-4" 
      type="text"
    >
    <div class="bg-white overflow-auto max-h-[80dvh]">
      <div 
        v-for="launch in data"
        class="h-40 flex p-6 items-center"
      >
        <NuxtImg
          class="h-full bg-slate-100" 
          :src="launch.links.patch.small || `https://placehold.co/50`" 
        />
        <div class="p-8">
          <h2 class="font-bold text-xl">Flight Number {{ launch.flight_number }} {{ launch.name }}</h2>
          <p class=" line-clamp-3">Details: {{ launch.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Launch } from "@/types/Launch"

const runtimeConfig = useRuntimeConfig();
const API_URL = runtimeConfig.public.API_URL;

const { data } = await useFetch<Launch[]>(API_URL);
</script>

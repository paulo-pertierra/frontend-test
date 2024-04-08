<template>   <div class="w-full max-w-4xl shrink-0 border">
    <input class="mb-10 h-10 w-full p-4" type="text" />
    <div class="max-h-[80dvh] overflow-auto bg-white">
      <div v-for="launch in data" class="flex h-40 items-center p-6">
        <NuxtImg
          class="h-full bg-slate-100"
          :src="launch.links.patch.small || `https://placehold.co/50`"
        />
        <div class="p-8">
          <h2 class="text-xl font-bold">
            Flight Number {{ launch.flight_number }} {{ launch.name }}
          </h2>
          <p class="line-clamp-3">Details: {{ launch.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Launch } from "@/types/Launch";

const runtimeConfig = useRuntimeConfig();
const API_URL = runtimeConfig.public.API_URL;

const { data } = await useFetch<Launch[]>(API_URL);
</script>

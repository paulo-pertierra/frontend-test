<template>
  <div class="max-h-[80dvh] overflow-y-scroll bg-white" ref="launchList">
    <div @click="navigateToWikipedia(launch.links.wikipedia)" v-for="launch in launchArray"
      class="flex h-40 items-center p-6 hover:cursor-pointer hover:bg-slate-100">
      <NuxtImg class="h-full bg-slate-100" :src="launch.links.patch.small || `https://placehold.co/50`" />
      <div class="p-8">
        <h2 class="text-xl font-bold">
          Flight Number {{ launch.flight_number }} {{ launch.name }}
        </h2>
        <p v-if="launch.details" class="line-clamp-3">
          Details: {{ launch.details }}
        </p>
        <p v-else>No details provided</p>
      </div>
    </div>
    <div v-if="isLoading">
      <IconsLoader class="mx-auto h-32" />
    </div>
    <div v-if="isLastPage">
      <p class="text-center text-lg my-4">You've reached the end.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Launch } from "@/types/Launch";
import type { Query } from "@/types/Query";

const page = ref(1);

const runtimeConfig = useRuntimeConfig();
const API_URL = runtimeConfig.public.API_URL;

const launchArray: Ref<Launch[]> = ref([])

onMounted(async () => {
  const { data, pending } = await useFetch<Query<Launch[]>>(API_URL, {
    method: "POST",
    body: {
      options: {
        page: page.value,
        limit: 5,
      },
    },
  });

  launchArray.value.push(...data.value?.docs!)
})

function navigateToWikipedia(url: string) {
  if (!url) {
    alert("This launch has no Wikipedia entry.");
    return;
  }

  navigateTo(url, { external: true });
}

// Infinite Scrolling
const launchList = ref<HTMLElement | null>(null);

const isLoading = ref(false);
const isLastPage = ref(false);
useInfiniteScroll(launchList, async () => {
  if (isLastPage.value) return;
  isLoading.value = true;
  page.value += 1;
  const data = await $fetch<Query<Launch[]>>(API_URL, {
    method: "POST",
    body: {
      options: {
        limit: 5,
        page: page.value
      }
    }
  })

  if (!data.hasNextPage) {
    isLoading.value = false;
    isLastPage.value = true;
    return;
  }
  launchArray.value.push(...data.docs);
  isLoading.value = false;
})
</script>

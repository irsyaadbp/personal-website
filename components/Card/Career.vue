<template>
  <div>
    <h3
      style="
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      "
    >
      {{theNumber}}
    </h3>
    <h4 class="font-serif font-bold text-2xl mt-1">{{ data.title }}</h4>
    <p
      style="
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #6a6a6a;
      "
      class="mt-1"
    >
      <span class="font-bold">{{ data.company }}</span> | {{ startDate }} -
      {{ endDate }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { CareerItem } from "@/types/careers";
const { isValidDate, formatMonthDate } = useDate();
const props = defineProps({
  data: {
    type: Object as PropType<CareerItem>,
    default: () => ({}),
  },
});

function formatDate(date: any) {
  if (["now", "present"].includes(date)) return "present";
  return isValidDate(date) ? formatMonthDate(date) : "";
}

const startDate = computed(() => formatDate(props.data.startDate));
const endDate = computed(() => formatDate(props.data.endDate));
const theNumber = computed(() => `${props.data.number}`.length < 2 ? `0${props.data.number}` : number)
</script>

<style scoped></style>

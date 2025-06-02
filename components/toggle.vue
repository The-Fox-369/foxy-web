<template>
  <button
    @click="toggleDark()"
    class="flex items-center gap-2 rounded-lg bg-[#0b0b0b] px-4 py-2 font-semibold shadow-lg duration-300"
  >
    <Icon
      class="text-white"
      :name="
        isDark
          ? 'material-symbols:dark-mode-rounded'
          : 'material-symbols:wb-sunny-rounded'
      "
    />
  </button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

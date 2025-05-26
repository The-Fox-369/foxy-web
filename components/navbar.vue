<template>
  <nav
    class="fixed top-0 right-0 left-0 z-1000 w-full shadow-2xl backdrop-blur-3xl"
  >
    <div class="flex items-center justify-between p-4">
      <img
        src="../public/imgs/fox.svg"
        alt="Fox Logo"
        class="h-12 w-12 rounded-full"
      />

      <button @click="toggleMenuHandler()" class="md:hidden">
        <img src="../public/imgs/menu.svg" alt="Menu" class="h-6 w-6" />
      </button>

      <div class="hidden gap-6 md:flex">
        <a href="#hero" class="text-gray-600 duration-300 hover:text-black"
          >Home</a
        >
        <a href="#about" class="text-gray-600 duration-300 hover:text-black"
          >About</a
        >
        <a href="#projects" class="text-gray-600 duration-300 hover:text-black"
          >Projects</a
        >
        <a href="#contact" class="text-gray-600 duration-300 hover:text-black"
          >Contact</a
        >
      </div>
    </div>

    <div
      v-if="toggleMenu"
      class="flex flex-col items-center p-4 shadow-md md:hidden"
    >
      <a href="#hero" class="py-2 text-gray-600 duration-300 hover:text-black"
        >Home</a
      >
      <a href="#about" class="py-2 text-gray-600 duration-300 hover:text-black"
        >About</a
      >
      <a
        href="#projects"
        class="py-2 text-gray-600 duration-300 hover:text-black"
        >Projects</a
      >
      <a
        href="#contact"
        class="py-2 text-gray-600 duration-300 hover:text-black"
        >Contact</a
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const toggleMenu = ref(false);
function toggleMenuHandler() {
  toggleMenu.value = !toggleMenu.value;
}
</script>

<style scoped></style>

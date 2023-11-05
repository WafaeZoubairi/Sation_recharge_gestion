<template>
  <div class="h-full">
    <Header />
    <div class="p-4">
      <div class="flex flex-col justify-center items-center gap-4 py-10">
        <h1 class="font-bold text-3xl">CONTACTEZ-NOUS</h1>
        <h3>Our team is ready to hear from you</h3>
      </div>
      <div class="flex flex-col items-center md:flex-row justify-center p-4">
        <div
          class="rounded-lg hover:bg-lime-200 hover:scale-105 hover:opacity-75 transition-all duration-300 ease-in p-10 border-2 border-lime-500 flex flex-col items-center justify-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
            />
          </svg>

          <label class="font-quicksand text-xl" for=""> par email </label>
          <p class="text-lg font-semibold text-slate-600">
            greenenergypark@gmail.com
          </p>
        </div>
        <div
          class="rounded-lg hover:bg-lime-200 hover:scale-105 hover:opacity-75 transition-all duration-300 ease-in p-10 border-2 border-lime-500 flex flex-col items-center justify-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>

          <label class="font-quicksand text-xl" for=""> par telephone </label>
          <p class="text-lg font-semibold text-slate-600">
            05376-82236
          </p>
        </div>
        <div
          class="rounded-lg hover:bg-lime-200 hover:scale-105 hover:opacity-75 transition-all duration-300 ease-in p-10 border-2 border-lime-500 flex flex-col items-center justify-center gap-3"
        >
          <svg
            class="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1); transform: ; msfilter: "
          >
            <path
              d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"
            ></path>
          </svg>

          <label class="font-quicksand text-xl" for=""> par facebook</label>
          <p class="text-lg font-semibold text-slate-600">
            www.facebook.com/GreenPark01
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/header.vue";
</script>

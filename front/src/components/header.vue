<script setup></script>

<template>
  <div class="flex flex-row w-full bg-black gap-80 items-center text-white">
    <div class="w-32 h-24 flex justify-center items-center">
      <img src="../assets/ismart-1024x573.jpeg" />
    </div>

    <div class="relative flex items-center w-1/2 bg-red-500 rounded-lg">
      <input
        type="text"
        placeholder="search"
        class="outline-lime-500 outline-4 w-full px-6 py-2 placeholder:text-gray-300 placeholder:font-mono rounded-lg text-black"
      />
      <div class="p-1 absolute right-0 top-1/6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-start gap-44 text-black">
    <div class="hidden lg:block">
      <p
        class="border-b-2 border-lime-500 flex text-xl font-semibold p-4 from-neutral-100"
      >
        Main Dashboard
      </p>
    </div>
    <div class="flex flex-row justify-between px-8 md:w-1/2 w-full">
      <router-link to="/overview  ">
        <button
          @click="redirectToOverview"
          class="duration-200 text-sm font-bold p-2 rounded-md hover:ring-2 hover:ring-lime-500 transition-all border-none shadow-2xl shadow-white flex gap-2"
        >
          Overview
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style="fill: black; transform: ; msfilter: "
          >
            <path
              d="M3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .913-.593.998.998 0 0 0-.17-1.076l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 3 14zm5.949-.316C8.98 13.779 9.762 16 12 16c2.269 0 3.042-2.287 3.05-2.311l1.9.621C16.901 14.461 15.703 18 12 18s-4.901-3.539-4.95-3.689l1.899-.627z"
            ></path>
          </svg>
        </button>
      </router-link>
      <router-link to="/cpo">
        <button
          class="duration-200 text-sm font-bold p-2 rounded-md hover:ring-2 hover:ring-lime-500 transition-all border-none shadow-2xl shadow-white flex gap-2"
        >
          Manage CPO
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style="fill: black; transform: ; msfilter: "
          >
            <path
              d="M4 18h2v4.081L11.101 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2z"
            ></path>
            <path
              d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"
            ></path>
          </svg>
        </button>
      </router-link>
      <router-link to="/statics">
        <button
          class="duration-200 text-sm font-bold p-2 rounded-md hover:ring-2 hover:ring-lime-500 transition-all border-none shadow-2xl shadow-white flex gap-2"
        >
          Statics
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style="fill: black; transform: ; msfilter: "
          >
            <path
              d="M19 22V4c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v18l7-4.666L19 22zM8.006 8.056c0-.568.224-1.083.585-1.456.361-.372.86-.603 1.412-.603 0 0 .996-.003 1.997 1.029 1.001-1.032 1.997-1.029 1.997-1.029.552 0 1.051.23 1.412.603s.585.888.585 1.456-.224 1.084-.585 1.456L12 13.203 8.591 9.512a2.083 2.083 0 0 1-.585-1.456z"
            ></path>
          </svg>
        </button>
      </router-link>
      <router-link to="/contact">
        <button
          class="duration-200 text-sm font-bold p-2 rounded-md hover:ring-2 hover:ring-lime-500 transition-all border-none shadow-2xl shadow-white flex gap-2"
        >
          Contact
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style="fill: black; transform: ; msfilter: "
          >
            <path
              d="M19 22V4c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v18l7-4.666L19 22zM8.006 8.056c0-.568.224-1.083.585-1.456.361-.372.86-.603 1.412-.603 0 0 .996-.003 1.997 1.029 1.001-1.032 1.997-1.029 1.997-1.029.552 0 1.051.23 1.412.603s.585.888.585 1.456-.224 1.084-.585 1.456L12 13.203 8.591 9.512a2.083 2.083 0 0 1-.585-1.456z"
            ></path>
          </svg>
        </button>
      </router-link>
      <router-link to="/paremetres">
        <button
          class="duration-200 text-sm font-bold p-2 rounded-md hover:ring-2 hover:ring-lime-500 transition-all border-none shadow-2xl shadow-white flex gap-2"
        >
          Settings
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style="fill: black; transform: ; msfilter: "
          >
            <path
              d="M19 22V4c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v18l7-4.666L19 22zM8.006 8.056c0-.568.224-1.083.585-1.456.361-.372.86-.603 1.412-.603 0 0 .996-.003 1.997 1.029 1.001-1.032 1.997-1.029 1.997-1.029.552 0 1.051.23 1.412.603s.585.888.585 1.456-.224 1.084-.585 1.456L12 13.203 8.591 9.512a2.083 2.083 0 0 1-.585-1.456z"
            ></path>
          </svg>
        </button>
      </router-link>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped></style>

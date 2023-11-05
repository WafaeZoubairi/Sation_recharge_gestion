<template>
  <div class="h-full w-full" >
    <Header />
    <div class="w-full flex flex-col justify-center items-center">
      <div class="p-2 w-full flex justify-end">
        <router-link to="/ajouter">
        <button
          class="flex gap-3 font-poppins text-lg transition-all duration-500 ease-out opacity-500 hover:bg-gray-200 hover:opacity-100  border-2 border-gray-500 justify-center items-center p-2 rounded-lg hover:scale-105"
        >
          ajouter
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none" 
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
    </router-link>
      </div>
      <div class="w-full p-9 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" v-if="LOADED">
        <div
        v-for=" user in CPOS.users"
          :class="`${true?'c'+user.id:''} transition-all duration-500 ease-out opacity-500 hover:bg-gray-200 hover:opacity-100 w-6/6 h-36 border-2 border-gray-500 rounded-lg p-2 grid grid-cols-4 gap-4`"
        >
          <div class="col-span-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <div class="col-span-2">{{ user.nom }}</div>
          <div class="col-span-2">{{ user.ville }}</div>
          <div class="col-span-4 flex gap-2 justify-center items-center">
            <button @click="deleteCpo(user.id)" class="border border-gray-200 hover:bg-gray-200 p-2 rounded-lg  flex gap-1 text-sm font-poppins">
              suprimer
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
            </button>
             <router-link  :to="'/update/'+ user.id">
            <button class="border border-gray-200 hover:bg-gray-200 p-2 rounded-lg  flex gap-1 text-sm font-poppins">
              modifier
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class=" w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                />
              </svg>
            </button>
          </router-link>
            <button class="border border-gray-200 hover:bg-gray-200 p-2 rounded-lg  flex gap-1 text-sm font-poppins">
              consulter
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class=" w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
<script setup>
import Header from "./header.vue";
import { reactive ,onMounted,ref} from "vue";
import cpologic from "../logic/cpologic.js";
import { gsap  } from "gsap";
let CPOS = ref({});
let LOADED=ref(false);
onMounted(async()=>{
  console.log('waiting ...')
  console.log(CPOS.users);
 CPOS.value = await cpologic.getAllCpos();
 LOADED.value=true;
 console.log(CPOS.value.users);
 console.log('done ');
 })
 let deleteCpo=async(id)=>{
  let c=".c"+id;
  console.log(c);
  gsap.timeline().to(c,.1,{yPercent:50}).to(c,.05,{yPercent:0}).call(async()=>{
            await cpologic.deleteCpo(id) ;
     CPOS.value.users=CPOS.value.users.filter(cpo=> cpo.id!=id);
     console.log(CPOS.value.users);
  })  
 }
</script>

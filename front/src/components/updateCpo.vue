<!-- Parametres.vue (composant Vue pour la page de paramètres) -->
<template>
  
    <Header />
    <div class="flex flex-col w-full items-center mt-8" v-if="LOADED"> 
      <form class="w-full max-w-sm relative" @submit.prevent="submitAction" >
        <div class=" popUp flex  absolute top-full text-lime-700 w-full px-3 p-1 opacity-0 text-center rounded-lg"> Enregistré avec succes </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Nom:</label>
          <input v-model="cpos.nom"  class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" type="text" id="name" required >
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">prenom:</label>
          <input v-model="cpos.prenom"  class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" type="text" id="name" required>
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email:</label>
          <input v-model="cpos.email"  class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" type="email" id="email" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Mot de passe:</label>
          <input v-model="cpos.password" :class="`${cpos.password.length?'ring-green-500':''}  transition-all duration-300 ring-1 appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 `" type="text" id="password" required>
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="language"> ville</label>
          <input v-model="cpos.ville" class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" type="text" id="password" required >
        </div>
        <div class="flex justify-center py-4">
            <button class="flex justify-center bg-black hover:bg-black text-white font-bold py-2 px-4 rounded" type="submit">Enregistrer</button>
        </div>
      </form>
    </div>
  </template>
  <script setup>
  import Header from "../components/header.vue";
  import { ref,reactive,onMounted,defineProps } from "vue";
  import cpologic from "../logic/cpologic.js";
  import gsap from 'gsap';
  import {useRouter} from 'vue-router';
  const router=useRouter();
  let confirm=ref("");
  let id=ref(0);
  let LOADED=ref(false);
   let cpos=reactive({
    nom:"",
    prenom:"",
    email:"",
    password:"",
    ville:"",
    role:'cpo',
  });
  
 onMounted(async()=>{
  id.value= router.currentRoute.value.params.id;
  let result=await  cpologic.getCpo(id.value);
  cpos=result.user[0];
  console.log(cpos);
  LOADED.value=true;

 })
let submitAction=async()=>{
  let id= router.currentRoute.value.params.id;
  let result= await cpologic.updateCpo(id,cpos);
 router.push('/cpo');

}
        


  </script>

  
  <style scoped>
  /* Styles spécifiques pour le composant Parametres.vue en utilisant Tailwind CSS */
  </style>
  
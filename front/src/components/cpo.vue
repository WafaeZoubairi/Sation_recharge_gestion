<!-- Parametres.vue (composant Vue pour la page de paramètres) -->
<template>
  
    <Header />
    <div class="flex flex-col w-full items-center mt-8"> 
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
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Nouveau mot de passe:</label>
          <input v-model="cpos.password" :class="`${cpos.password.length?'ring-green-500':''}  transition-all duration-300 ring-1 appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 `" type="text" id="password" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="language"> Confirmer le mot de passe:</label>
          <input v-model="confirm" :class="`${cpos.password==confirm?'ring-green-500':'ring-red-500'} ring-1 appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 `" type="text" id="password" required>
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
  import { ref,reactive } from "vue";
  import cpologic from "../logic/cpologic.js";
  import gsap from 'gsap';
  import {useRouter} from 'vue-router';
  const router=useRouter();
  let confirm=ref("");

  let cpos=reactive({
    nom:"",
    prenom:"",

    email:"",
    password:"",
    ville:"",
    role:'cpo',
  });
  let submitAction=()=>{
     if(cpos.password==confirm.value){
      gsap.timeline().from('.popUp',.2,{opacity:1,xPercent:-100})
      .to('.popUp',.3,{opacity:1,xPercent:0})
      .call(()=>{
        cpologic.saveCpos(cpos);
       router.push('/cpo');
        
      }
        )
        

     }

  }
  </script>

  
  <style scoped>
  /* Styles spécifiques pour le composant Parametres.vue en utilisant Tailwind CSS */
  </style>
  
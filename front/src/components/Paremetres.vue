<!-- Parametres.vue (composant Vue pour la page de paramètres) -->
<template>
  
    <Header />
    <div class="flex flex-col w-full items-center mt-8"> 
      <h1 class="text-2xl font-bold mb-4">Paramètres</h1>
      <form class="w-full max-w-sm" @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Nom:</label>
          <input class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" type="text" id="name" v-model="name">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email:</label>
          <input class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" type="email" id="email" v-model="email">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Nouveau mot de passe:</label>
          <input class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" type="text" id="password" v-model="password">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="language">Langue:</label>
          <select class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" id="language" v-model="language">
            <option value="fr">Français</option>
            <option value="en">Anglais</option>
            <option value="es">Espagnol</option>
          </select>
        </div>
        <div class="flex justify-center py-4">
            <button class="flex justify-center bg-black hover:bg-black text-white font-bold py-2 px-4 rounded" type="submit">Enregistrer</button>
        </div>
        <div class="relative flex justify-center">
            <button class="flex justify-center w-full bg-black hover:bg-black text-white font-bold py-2 px-4 rounded" >Se déconnecter</button>
            <div class="py-1 px-14 absolute right-1 top-1 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>
            </div>
            
       
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        language: 'fr'
      };
    },
    methods: {
      submitForm() {
        // Logique pour enregistrer les paramètres
        console.log('Paramètres enregistrés:', {
          name: this.name,
          email: this.email,
          password: this.password,
          language: this.language
        });
        // Afficher un message de succès ou rediriger vers une autre page
        alert('Paramètres enregistrés avec succès!');
      }
    }
  };
  </script>
  <script setup>
  import Header from "../components/header.vue";
  </script>
  
  <style scoped>
  /* Styles spécifiques pour le composant Parametres.vue en utilisant Tailwind CSS */
  </style>
  
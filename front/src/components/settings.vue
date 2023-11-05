<template>
  <div class="w-full">
    <Header />
    <div class="flex p-4 flex-row gap-10 h-full text-black">
        <div class="  h-full">
            <div class="flex flex-col justify-center items-center border-r-2 border-r-lime-300">
                <button v-for=" btn in buttons " @click="active=btn.index" :class="` ${active==btn.index?'bg-lime-300':''} rounded-l-md p-2  font-quicksand text-lg  hover:bg-lime-300 w-full transition-all duration-200 ease-in `">{{ btn.text }}</button>
                
            </div>
        </div>
      <div class=" bg-green-400 w-full h-full">
        <div>
            <input @click="change=false"  type="text" :value="user.fname" :disabled="flase">
        </div>
        <div>
        
            <input @click="change=false"  type="text" :value="user.lname" :disabled="flase">
        </div>
        <div>
            <input  @click="change=false" type="text" :value="user.lname" :disabled="flase">
        </div>
                
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/header.vue"; 
import {ref,reactive} from 'vue';
let buttons=reactive([
    {
        index:0,
        text:'Modifier profil'
    },
    {
        index:1,
        text:'Changer de mot de passe'
    },
    {
        index:2,
        text:'about us'
    },
    {
        index:3,
        text:'Confidentialité'
    },
    {
        index:4,
        text:'log out'
    },
])
let user=reactive({
    fname:"wafae",
    lname: "zoubairi",
    email:"zoubair@gmail.com"
})
let active =ref(0);
let change=ref(true)
</script>

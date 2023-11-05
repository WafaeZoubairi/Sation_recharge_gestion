<template>
    <div class=" w-full  flex flex-col gap-4 h-full overflow-x-hidden">
        <Header/>
        <div  class=" min-w-fit h-full flex justify-center flex-wrap  gap-2 p-5 text-lime-500">
         <div  v-for="st in statics" class=" w-full sm:w-1/2 md:w-1/4" >
      <div  :key="st.title" class=" rounded-lg h-36  flex bg-black gap-4 items-center p-6">
       <div class=" p-6 font-mono  flex justify-start items-center">{{ st.title }}</div>                                                                                          

       <div v-if=" typeof st.value== 'string'" class=" p-6  border-l-2 border-l-lime-700 h-36 w-60  text-center flex justify-center items-center text-3xl font-mono ">{{ st.value }}</div>
       <div class=" overflow-y-auto h-36 p-2 flex justify-center  text-sm font-mono  flex-col gap-3  w-1/2  border-l-2 border-l-lime-700" v-else>
        <div v-for=" v in st.value" class="flex-full gap-2 justify-center items-center " >
           <div class=" "> {{ v.city }}</div>
           <div class=" w-1/2 p-2 "> {{ v.nombre }}</div>
        </div>
        
       </div>
       
       </div>

      </div>


        </div>
    </div>
</template>
<style></style>
<script setup>
import  Header from '../components/header.vue';
import {ref,reactive} from 'vue';
let statics= reactive(
 [
 {  
    title:"connectivity loss",
    value:"7"
 },
 {

    title:"active charging sessions",
    value:"10"
 },
 {

    title:"charging sessions",
    value:"17"
 },
 {
    title:"total energy(KWh)",
    value:"17 000"
 },
 {
    title:"total revenu(Dhs)",
    value:"17000"
 },
 {
    title:"location by city ",
    value:[{ city:"agadir", nombre:0},{ city:"zagora", nombre:10},{ city:"tanger", nombre:0},{ city:"agadir", nombre:100},]
 },
 {
    title:"total CPO",
    value:"5"
 },
 {
    title:" reserved  charge points",
    value:"15"
 },

 ]

)

</script>
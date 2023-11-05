<template>
  

  <div class=" w-full h-full  flex flex-row  justify-center items-center px-7">
    <div class=" w-full  md:w-1/2 flex flex-col p-4 rounded-l-lg bg-stone-950 h-full justify-center items-center text-white">
        <div class=" w-full p-2 text-3xl font-mono"><p class="w-full text-center">SIGN IN</p></div>
        <div class=" w-full p-2 text-sm font-mono"><p>Please sign in to your account</p></div>
        <form action="" class="  flex flex-col gap-5  w-full p-2 ">
             <div class="flex flex-col gap-2 w-full ">
              <label class=" px-2 font-bold" for=""> email</label>
              <input type="email"  class=" outline-lime-300 p-2 w-full border-gray-500 border-2 bg-inherit  rounded-md">
             </div>
             <div class=" relative flex flex-col gap-2 w-full">
              <label  class=" px-2 font-bold" for="">password</label>
              <input  :type="show"  class=" outline-lime-300 p-2 w-full border-gray-500 border-2 bg-inherit rounded-md">
              <div @click="togglePassword" class=" p-1 absolute right-0 top-1/2">
        <svg  v-if="show=='password'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<svg v-if="show=='text'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>

</div> 
            </div>
             <div class="flex justify-center w-full ">
            <button @click="login"  class=" font-bold flex justify-center items-center gap-2  md:w-1/2 bg-lime-400 w-full p-2 rounded-lg">
              log in
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

            </button>
           
             </div>
        </form>


   </div>
   <div class="  hidden md:block w-2/6 h-full rounded-r-lg overflow-hidden">
    <img class=" w-full h-full rounded-r-lg" src="../assets/logo.jpg" alt="">
   </div>

  </div>

     
</template>
<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router';
import logic from '../logic/userlogic.js';
import gsap from 'gsap';
let show=ref('password')
let email=ref("");
let password=ref("");
const router=useRouter();

let togglePassword=()=>{
  if(show.value=='password') show.value='text'
  else show.value='password'

}
let login=async()=>{

  let res= await logic.veryfiyUser(email.value,password.value);
    if(res.ok) 
    router.push('/cpo'); 
    else 
    gsap.timeline().from('.invalid',0.9,{yPercent:-100}).to('.invalid',0.7,{yPercent:0,opacity:1})
}
</script>
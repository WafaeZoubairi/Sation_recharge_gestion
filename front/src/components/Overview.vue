<script setup>
import Header from "./header.vue"
import Map from "./map.vue"
</script>

<template>


    <div class=" w-full relative  h-full ">
        <Header />

        <div class=" flex flex-col gap-4 ">

           
            <div class="w-full p-1 h-full fixed bg-neutral-600  z-0">
            <Map />
            </div>
           

            <div class=" bg-slate-600">
                    <h1>statics</h1>
            </div>


        </div>
        


    </div>
</template>

<style scoped></style>

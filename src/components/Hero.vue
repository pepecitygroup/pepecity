<script setup>
import { ref, computed } from 'vue'
const isElevated = ref(false)
const getClass = computed(() => {
  if (isElevated.value) {
    return 'mx-auto img-elevated-size img-default-size'
  }
  return 'mx-auto img-default-size'
})

</script>  
<template>
  <div class="md:mt-2 md:mb-8 px-8 py-2 " style="background-color : #EEE3C5">
    <div class="flex flex-col items-center justify-center mt-24">
        <img src="/assets/images/pepeheader.jpg" width="800" :class="getClass" @mouseover="isElevated= true" @mouseout="isElevated = false" />
      <h1 class="font-bold text-4xl my-2">Pepe City: A new Resort Destination in El Salvador</h1>

      <p class="text-xl w-4/5 text-gray-500 my-2">
        Pepe City aims to become a luxurious and sustainable resort in El Salvador that offers unique investment opportunities through its connection with cryptocurrency market.
      </p>
    </div>
  </div>
</template>
<style>
.img-default-size {
transition: all 0.3s;
}

.img-elevated-size {
transition: all 0.3s;
box-shadow: 6px 6px 20px rgb(66, 66, 66);
transform: rotate(-2deg);
}
</style>

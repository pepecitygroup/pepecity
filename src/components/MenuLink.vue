<template>
  <a class="uppercase mx-2 font-xl font-bold" :href="to"><slot /></a>
</template>
<script setup>
  defineProps({to : String})
</script>

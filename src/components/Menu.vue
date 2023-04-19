<template>
  <div class="sticky top-0 inset-x-0 shadow shadow-lg">
    <div class="justify-around flex gap-0 md:gap-2 flex-row py-2 md:px-2 mb-2 w-full h-12 bg-white  md:text-lg pt-4  text-xs">
      <div class="bg-white">
        <MenuLink to="#home">Home</MenuLink>|<MenuLink to="#about">About</MenuLink>|<MenuLink to="#tokenomics">Tokenomics</MenuLink>|<MenuLink to="#team">Team</MenuLink> 
      </div>
        <div class=" justify-end flex gap-2 flex-row  px-2 mb-2">
        <div class="flex pl-8">
            <a href="https://twitter.com/pepecityerc20" ctarget="_blank" rel="noopener noreferrer" aria-label="twitter"><img width="24" src="/assets/images/icons8-twitter-24.png" /></a>
            <a href="https://t.me/pepecityerc20" target="_blank" rel="noopener noreferrer" aria-label="linkedin"><img width="24" src="/assets/images/icons8-telegram-app-24.png" /></a>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup>
import MenuLink from './MenuLink.vue'
  </script>


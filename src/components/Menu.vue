  <template>
  <div class="justify-around flex gap-2 flex-row py-2 px-2 mb-2">
    <div >
      <MenuLink to="#home">Home</MenuLink> | 
      <MenuLink to="#about">About</MenuLink> |
      <MenuLink to="#tokenomics">Tokenomics</MenuLink> |
      <MenuLink to="#team">Team</MenuLink> |
    </div>
  </div>
  </template>
  <script setup>
    import MenuLink from './MenuLink.vue'
  </script>


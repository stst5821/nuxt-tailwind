<template>
<div class="w-10/12 mx-auto mt-32 mb-20">
 <nav class="flex justify-between items-center">
   <nuxt-link to="/"><img class="w-14" src="~@/assets/images/Header/title_icon.svg" alt=""></nuxt-link>
    <ul class="flex mr-28">
      <li class="Header__list"><nuxt-link to="/">Home</nuxt-link></li>
      <li class="Header__list"><nuxt-link to="/Art">Art</nuxt-link></li>
      <li class="Header__list"><nuxt-link to="/Commissions">Commissions</nuxt-link></li>
      <li class="Header__list"><nuxt-link to="/Studio">Studio</nuxt-link></li>
      <li class="Header__list"><nuxt-link to="/Journal">Journal</nuxt-link></li>
    </ul>
  </nav>
</div>
</template>

<script>

</script>


<style>
.Header__list {
  margin: 0 1.5rem;
}
.Header__link {
  font-size: 18px;
}
</style>

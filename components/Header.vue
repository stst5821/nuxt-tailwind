<template>
<div class="w-10/12 mx-auto mt-32 mb-20">
 <nav class="flex justify-between items-center">
   <nuxt-link to="/"><img class="w-14" src="~@/assets/images/Header/title_icon.svg" alt=""></nuxt-link>
    <ul class="flex mr-28">
      <li class="Header__list"><nuxt-link to="/" active-class="active-nav" exact>Home</nuxt-link></li>
      <li class="Header__list"><nuxt-link to="/Art" active-class="active-nav">Art</nuxt-link></li>
      <li class="Header__list"><nuxt-link to="/Commissions" active-class="active-nav">Commissions</nuxt-link></li>
      <li class="Header__list"><nuxt-link to="/Studio" active-class="active-nav">Studio</nuxt-link></li>
      <li class="Header__list"><nuxt-link to="/Journal" active-class="active-nav">Journal</nuxt-link></li>
    </ul>
  </nav>
</div>
</template>

<style>
.active-nav {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}
.active-nav:after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -35px;/*線の上下位置*/
  display: inline-block;
  width: 50px;/*線の長さ*/
  height: 1px;/*線の太さ*/
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);/*位置調整*/
  background-color: black;/*線の色*/
  border-radius: 2px;/*線の丸み*/
}
.Header__list {
  margin: 0 1.5rem;
}
.Header__link {
  font-size: 18px;
}
</style>

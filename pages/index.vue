<template>
<div>
  <div class="w-10/12 mx-auto">
    <span class="text-xs text-gray-500">Series</span>
    <div class="Index__titles text-9xl leading-20">
      <a class="hover:text-red-500" href="#">The Land Below</a>
      <span class="text-red-500">/</span>
      <a class="hover:text-red-500" href="#">Ueno Wharf</a>
      <span class="text-red-500">/</span>
      <a class="hover:text-red-500" href="#">Solos</a>
      <span class="text-red-500">/</span>
      <a class="hover:text-red-500" href="#">Journey to Cath</a>
      <span class="text-red-500">/</span>
      <a class="hover:text-red-500" href="#">The Aman Steppe</a>
      <span class="text-red-500">/</span>
      <a class="hover:text-red-500" href="#">Summer Encore</a>
      <span class="text-red-500">/</span>
    </div>
  </div>

  <div class="flex justify-center">
    <div class="Index__commissions flex flex-col items-start w-4/12">
      <span class="text-xs text-gray-500 mb-6">Commissions</span>
      <div class="Index__commissions">
        <a class="hover:text-red-500" href="#">Haden</a>
        <span class="text-red-500">/</span>
        <a class="hover:text-red-500" href="#">Island X</a>
        <span class="text-red-500">/</span>
        <a class="hover:text-red-500" href="#">Nike</a>
        <span class="text-red-500">/</span>
        <a class="hover:text-red-500" href="#">Chongqing</a>
        <span class="text-red-500">/</span>
        <a class="hover:text-red-500" href="#">Project Barossa</a>
        <span class="text-red-500">/</span>
      </div>
    </div>
    <div class="Index__journal flex flex-col items-start w-4/12">
      <span class="text-xs text-gray-500 mb-6">Journal</span>
      <div class="Index__commissions">
        <a class="hover:text-red-500" href="#">Journal of Asia</a><span class="text-xs align-top text-red-500">NEW</span>
        <span class="text-red-500">/</span>
        <a class="hover:text-red-500" href="#">A Five-Minute Guide to Better Typography</a>
        <span class="text-red-500">/</span>
        <a class="hover:text-red-500" href="#">Practical Advice for the Confused Designer</a>
        <span class="text-red-500">/</span>
      </div>
    </div>
  </div>

  <Main />

</div>
</template>

<script>
import Main from '~/components/Main'

export default {
  components: {
    Main
  }
}
</script>

<style>
.Index__titles {
  line-height: 8.625rem;
  font-family: "Noto Serif JP", sans-serif;
}
.Index__commissions {
  font-size: 1.75rem;
}
</style>
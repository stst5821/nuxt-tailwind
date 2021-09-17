<template>
  <div>
    <div class="flex flex-wrap justify-start pt-20 mx-20 mb-24">
      <div class="text-center w-1/2">
        <p class="mb-7"><a class="Jour__title" href="#">Journal of Asia</a></p>
        <p class="Jour__year Jour__subtitle">2010-2021</p>
      </div>
      <div class="text-center w-1/2 mb-24">
        <p class="mb-7"><a class="Jour__title" href="#">A Five-Minute<br>Guide to Better<br>Typography</a></p>
        <p class="Jour__subtitle">Talk</p>
      </div>
      <div class="text-center w-1/2 mb-24">
        <p class="mb-7"><a class="Jour__title" href="#">Practical Advice<br>for the Confused<br>Designer</a></p>
         <p class="Jour__subtitle">Talk</p>
      </div>
      <div class="text-center w-1/2">
        <p class="mb-7"><a class="Jour__title" href="#">How Restraint<br>Will Fuel Your<br>Creativity</a></p>
        <p class="Jour__subtitle">Talk</p>
      </div>
      <div class="text-center w-1/2">
        <p class="mb-7"><a class="Jour__title" href="#">Vision from the<br>Loop</a></p>
        <p class="Jour__subtitle">Went & Saw</p>
      </div>
    </div>
  </div>
</template>

<style>
.Jour__title {
  font-size: 4rem;
  word-break: break-all;
  line-height: 4.063rem;
}
.Jour__subtitle {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}
.Jour__subtitle:after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -55px;/*線の上下位置*/
  display: inline-block;
  width: 50px;/*線の長さ*/
  height: 1px;/*線の太さ*/
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);/*位置調整*/
  background-color: black;/*線の色*/
  border-radius: 2px;/*線の丸み*/
}
.Jour__year {
  font-size: 1.75rem;
}
</style>
# nuxt-tailwind

制作したサイト(Githubpagesにデプロイ)  
https://stst5821.github.io/nuxt-tailwind/

模写元サイト  
https://www.pierrickcalvez.com/

## 使用技術
・Nuxt.js  
・tailwindcss  
・PC対応のみ  

## 制作時間  
・25時間

## tailwindcssを導入

Setup  
https://tailwindcss.nuxtjs.org/setup

nuxt.config.jsとtailwind.config.jsがあるので、書くファイルを間違えないようにする。

## 現在のページにclassを追加する

navのメニューの項目に現在いるページを表すため、下線を引きたい

```
<ul class="flex mr-28">
  <li class="Header__list"><nuxt-link to="/" active-class="active-nav" exact>Home</nuxt-link></li>
  <li class="Header__list"><nuxt-link to="/Art" active-class="active-nav">Art</nuxt-link></li>
  <li class="Header__list"><nuxt-link to="/Commissions" active-class="active-nav">Commissions</nuxt-link></li>
  <li class="Header__list"><nuxt-link to="/Studio" active-class="active-nav">Studio</nuxt-link></li>
  <li class="Header__list"><nuxt-link to="/Journal" active-class="active-nav">Journal</nuxt-link></li>
</ul>
```

上記のように、active-classをつける。  
Homeにexactをつけないと、他のページに移動してもHomeに下線がついたままになるので注意する。

参考：
https://qiita.com/TK-C/items/f57f845fc2d51d7385e0

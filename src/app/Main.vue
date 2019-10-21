<template lang="pug">
  .main-page
    v-img(
      src="@/../public/images/FundoTela.png"
      height="100%"
      gradient=""
    )
      v-layout(justify-center align-center fill-height)
        v-card(width="90%" height="50%")
          span testes
</template>

<style>
  .main-page {
    width: 100vw;
    height: 100vh;
  }
  .teste {
    background: rgb(0, 0, 0, 0.8);
  }
</style>
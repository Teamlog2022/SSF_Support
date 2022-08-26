<template>
  <div class="main">
    <div class="main_wrapper">
      <img src="@/static/images/teamlog_logo.png">

      <div class="main_button">
        <router-link to="/mentor">
          <p>멘토</p>
        </router-link>
        <router-link to="/sample">
          <p>시연</p>
        </router-link>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
@import "@/static/scss/main.scss";
</style>
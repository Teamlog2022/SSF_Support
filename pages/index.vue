<template>
  <div class="main">
    <div class="main_wrapper">
      <img src="/images/teamlog_logo.png">

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

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainPage',
})
</script>


<style lang="scss">
@import "@/static/scss/main.scss";
</style>
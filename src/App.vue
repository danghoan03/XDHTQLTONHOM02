<template>
  <component :is="layout">
      <router-view></router-view>
  </component>
  <Bot></Bot>
</template>

<script>
import Bot from './layout/components/Bot.vue';
const default_layout = "default";
export default {
  components:{Bot},
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
};
</script>
<style>
</style>
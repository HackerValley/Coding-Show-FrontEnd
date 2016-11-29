<!-- Pages 导航，需要进行跳转 -->
<template>
  <li><a
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
  >
    <slot></slot>
  </a></li>
</template>
<style>
  /*pageNav.vue*/
</style>
<script>
    export default{
      props: {
        href: String,
        required: true
      },
      computed: {
        isActive () {
          return this.href === this.$root.currentRoute
        }
      }
    }
</script>

<template>
  <nav v-show="active">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: 'dropdown-menu',
  data: () => ({
    active: false,
  }),
  methods: {

    /**
     * @param {boolean|void} active
     * @return {any}
     */
    toggle () {
      if (arguments.length) {
        return this.active = arguments[0];
      }

      this.active = !this.active;
    },
  },
};
</script>

<style scoped>

</style>

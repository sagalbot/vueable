<template>
  <div @click="toggleDrop">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  data: () => ({
    dropdown: null,
  }),
  mounted () {
    this.dropdown = this.$children.find(child => {
      return child.$options.name === 'dropdown-menu';
    });

    document.addEventListener('click', this.clickAway);
  },
  methods: {
    clickAway (event) {
      if (!this.dropdown.active) {
        return false;
      }

      if (!event.composedPath().includes(this.$el)) {
        this.dropdown.toggle(false);
      }
    },
    toggleDrop () {
      this.dropdown.toggle();
    },
  },
};
</script>

<style>

</style>

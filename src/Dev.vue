<template>
  <section class="d-flex justify-content-center align-items-center">
    <dropdown class="dropdown">
      <button class="btn btn-primary">Drop it Down</button>

      <dropdown-menu class="dropdown-menu show">
        <li class="dropdown-item">Whats up!</li>
      </dropdown-menu>
    </dropdown>
  </section>
</template>

<script>
import Dropdown from './Dropdown';
import DropdownMenu from './DropdownMenu';

export default {
  components: {Dropdown, DropdownMenu},
};
</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap";

  section {
    width: 100%;
    height: 100vh;
  }
</style>

<template>
  <section class="d-flex justify-content-center align-items-center">
    <toggle class="dropdown" tag="nav">
      <button class="btn btn-primary">Drop it Down</button>

      <target class="dropdown-menu show">
        <li class="dropdown-item">Whats up!</li>
      </target>
    </toggle>
  </section>
</template>

<script>
import Toggle from './components/Toggle';
import Target from './components/Target';

export default {
  components: {Toggle, Target},
};
</script>

<style lang="scss">
  @import "~bootstrap/scss/bootstrap";

  section {
    width: 100%;
    height: 100vh;
  }
</style>

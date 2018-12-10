<script>
export default {
  name: 'dropdown',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  data: () => ({
    dropdown: null,
  }),
  computed: {
    active () {
      return this.dropdown ? this.dropdown.active : false;
    },
  },
  watch: {
    active (val) {
      if (val) {
        return document.addEventListener('click', this.clickAway);
      } else {
        return document.removeEventListener('click', this.clickAway);
      }
    },
  },
  render (h) {
    return h(this.tag, {
      on: {
        click: this.toggle,
      },
    }, this.$slots.default);
  },
  mounted () {
    this.dropdown = this.$children.find(child => {
      return child.$options.name === 'dropdown-menu';
    });
  },
  methods: {
    toggle() {
      return this.dropdown.toggle();
    },
    clickAway (event) {
      if (!this.dropdown.active) {
        return false;
      }

      if (!event.composedPath().includes(this.$el)) {
        this.dropdown.toggle(false);
      }
    },
  },
};
</script>

<script>
export default {
  name: 'toggle',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  data: () => ({
    target: null,
  }),
  computed: {
    active () {
      return this.target ? this.target.active : false;
    },
  },
  watch: {
    active (val) {
      this.$emit('change', {active: val});

      if (val) {
        return document.addEventListener('click', this.clickAway);
      } else {
        return document.removeEventListener('click', this.clickAway);
      }
    },
  },
  render (h) {
    let slot = this.$slots['default'];

    if (this.$scopedSlots.hasOwnProperty('default')) {
      slot = this.$scopedSlots.default({
        active: this.active,
        toggle: this.toggle,
        clickAway: this.clickAway,
      });
    }

    return h(this.tag, {
      on: {
        click: this.toggle,
      },
    }, slot);
  },
  mounted () {
    this.target = this.$children.find(child => {
      return child.$options.name === 'target';
    });
  },
  methods: {
    toggle () {
      return this.target.toggle();
    },
    clickAway (event) {
      const $el = arguments[1] ? arguments[1] : this.$el;
      if (!event.composedPath().includes($el)) {
        this.target.toggle(false);
      }
    },
  },
};
</script>

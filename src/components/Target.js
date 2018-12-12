export default {
  name: 'target',
  props: {
    tag: {
      type: String,
      default: 'nav',
    },
    display: {
      type: String,
      default: 'block',
    },
  },
  data: () => ({
    active: false,
  }),
  render (h) {
    return h(this.tag, {
      style: {
        display: this.active ? 'block' : 'none',
      },
    }, this.$slots.default);
  },
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

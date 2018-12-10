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
    this.target = this.$children.find(child => {
      return child.$options.name === 'target';
    });
  },
  methods: {
    toggle () {
      return this.target.toggle();
    },
    clickAway (event) {
      if (!event.composedPath().includes(this.$el)) {
        this.target.toggle(false);
      }
    },
  },
};
</script>

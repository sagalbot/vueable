import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Toggle from '../../src/components/Toggle.js';
import Target from '../../src/components/Target.js';

describe('Toggle Component', () => {

  it('can customize the root $el tag rendered', () => {
    const wrapper = shallowMount(Toggle, {
      propsData: {
        tag: 'nav',
      },
    });

    expect(wrapper.html()).toBe('<nav></nav>');
  });

  it('can find the child Target component when mounted', () => {
    const wrapper = shallowMount(Toggle, {
      slots: {
        default: [`<button>Trigger</button>`, Target],
      },
    });

    expect(wrapper.vm.$data.target.$options.name).toEqual('target');
  });

});

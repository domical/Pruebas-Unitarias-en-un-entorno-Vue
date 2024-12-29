import { shallowMount } from '@vue/test-utils';
import Contact from '@/views/Contact.vue';

describe('Contact.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Contact);
    expect(wrapper.exists()).toBe(true);
  });
});
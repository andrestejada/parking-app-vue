import LoginView from './LoginView.vue';
import { mount } from '@vue/test-utils';

describe('testing the LoginView', () => {

  const wrapper = mount(LoginView)
  test('should render correctly', async() => {
    const inputEmail = await wrapper.get('[label="Email"]')
    console.log(wrapper.get('[label="Email"]').html())
  });
});
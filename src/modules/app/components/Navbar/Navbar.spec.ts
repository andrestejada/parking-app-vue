import { mount } from '@vue/test-utils'
import Navbar from './Navbar.vue'

describe('testing in the Navbar container', () => {
  const wrapper = mount(Navbar)
  test('should be render correctly', () => {
    const navbarTitle = wrapper.get('[data-testid="title"]')
    expect(navbarTitle.text()).toBe('Parking App')
  })
})

import { shallowMount } from '@vue/test-utils'
import Slider from '@/components/Slider'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Slider, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

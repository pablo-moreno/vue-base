import { delay } from './utils'

export const onDelay = (el, binding) => {
  if (binding.value !== binding.oldValue) {
    el.oninput = delay(binding.value, 1000)
  }
}


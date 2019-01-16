export const delay = (fn, delay) => {
  let timeoutID = null
  return () => {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      fn()
    }, delay)
  }
}
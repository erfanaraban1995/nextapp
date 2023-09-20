function maxLength (message) {
  return this.test('maxLength', message, function (value) {
    const {path, createError} = this
    if (value.length > 10) {
      return createError({path, message})
    }
    return true
  })
}
function minimumLength (message) {
  return this.test('minimumLength', message, function (value) {
    const {path, createError} = this
    if (value.length <= 3) {
      return createError({path, message})
    }
    return true
  })
}
export {
  maxLength,
  minimumLength
}

export const isEmpty = (value) => {
  let error = true
  if (Array.isArray(value) && !value.length) {
    return error
  } else if (typeof value === 'object' && !Object.keys(value).length) {
    return error
  } else if (typeof value === 'string' && !value) {
    return error
  } else {
    error = false
  }
  return error
}

export const errorInputClass = (error) => {
  let classes = 'border border-gray-300 outline-0 rounded-lg p-2'
  if (error) {
    classes = 'border border-red-300 outline-0 rounded-lg p-2'
  }
  return classes
}

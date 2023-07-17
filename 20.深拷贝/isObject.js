function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === "function" || valueType === "object")
}


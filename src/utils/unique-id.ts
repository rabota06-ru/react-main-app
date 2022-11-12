let lastId = 0

export function uniqueId() {
  lastId += 1

  return `${Date.now()}${lastId}`
}

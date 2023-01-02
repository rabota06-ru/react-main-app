/**
 * Возвращает первое значение, где условие не равно false, undefined или null
 * @param conditions значения и их условия. Под индексом 0 лежит условие, а под индексом 1 лежит значение
 * @returns Возвращает первое значение, у которого условие оказалось не равно false, undefined или null. Если такого значения не нашлось, то возвращается undefined
 * @example getFirst([false, 'falsyValue'], [0, 'zero'], [{}, 'this is object']) - вернётся строка 'zero'
 * @example getFirst([false, 'falsyValue'], [null, 'nullableValue']) - вернётся undefined
 */
export function getFirst<T>(...conditions: [any, T][]): T | undefined {
  for (const condition of conditions) {
    if (condition[0] !== false && condition[0] !== undefined && condition[0] !== null) return condition[1]
  }
}

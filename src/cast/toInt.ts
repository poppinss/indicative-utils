/**
 * @module indicative-utils
 */

/*
* indicative-utils
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

/**
 * Cast value to a number and returns `null` when unable to do so. By
 * default this method will drop fractional digits and you must pass
 * `true` for the `2nd argument` to keep float values intact.
 *
 * ```js
 * toInt('10.80') // 10
 * toInt('10.80', true) // 10.80
 * toInt(false) // null
 * toInt('10.80-hey') // null
 * ```
 */
export function toInt (value: any, fractional: boolean = false): number | null {
  if (typeof (value) === 'number') {
    return fractional ? value : Math.trunc(value)
  }

  if (typeof (value) !== 'string') {
    return null
  }

  const casted = Number(value)
  if (isNaN(casted)) {
    return null
  }

  return fractional ? casted : Math.trunc(casted)
}

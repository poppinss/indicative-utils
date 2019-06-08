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
 * Casts value to an instance of date. Also converted date instance is
 * validated for correct dates only.
 *
 * ```js
 * toDate('foo-bar') // null
 * toDate('2019-10-07') // Date
 * ```
 */
export function toDate (value: any): Date | null {
  if (value instanceof Date) {
    return value
  }

  if (typeof (value) !== 'string') {
    return null
  }

  const castedValue = new Date(value)
  return (castedValue.toString() === 'Invalid Date') ? null : castedValue
}

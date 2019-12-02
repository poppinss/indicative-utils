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

const positives = ['true', '1', 1]
const negatives = ['false', '0', 0]

/**
 * Casts value to a boolean. Also string values `'true'`, `'false'`,
 * `'0'`, `'1'`, and numeric values `0`, `1` will be casted to
 * a boolean.
 */
export function toBoolean (value: any): boolean | null {
  if (typeof (value) === 'boolean') {
    return value
  }

  if (positives.includes(value)) {
    return true
  }

  if (negatives.includes(value)) {
    return false
  }

  return null
}

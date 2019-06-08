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
 * String value to a string and returns null when unable to do so.
 *
 * ```js
 * toString(22) // '22'
 * toString(10.80) // '10.80'
 * toString(['hello', 'world']) hello,world
 * toString({}) null
 * toString(null) null
 * toString(undefined) null
 * toString(new Date()) // String version of date
 * ```
 */
export function toString (value: any): string | null {
  if (value === null || value === undefined || value.constructor === Object) {
    return null
  }

  return String(value)
}

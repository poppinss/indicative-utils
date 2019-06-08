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
 * Returns a boolean telling whether the value must be skipped
 * from validations or not based upon the `existyStrict` config.
 */
export const skippable = (
  value: any,
  fieldName: string,
  config: { existyStrict: boolean },
): boolean => {
  /**
   * Literal values inside arrays are never skippable
   */
  if (fieldName === '::tip::') {
    return false
  }

  /**
   * In strict mode, only skip undefined values
   */
  if (config.existyStrict) {
    return value === undefined
  }

  /**
   * (non-strict mode): Strings with zero length are skipped
   */
  if (typeof (value) === 'string') {
    return value.trim().length === 0
  }

  /**
   * (non-strict mode): Null and undefineds are skipped too
   */
  return value === null || value === undefined
}

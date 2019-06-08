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

import { ValidationDataRoot } from './contracts'

/**
 * Returns value for a given field from the validation
 * data node
 */
export function patchValue (data: ValidationDataRoot, field: string, fieldValue: any): void {
  data.tip[field] = fieldValue

  /**
   * When field is `::tip::`, then we need to patch the value of the
   * parent array on a given index
   */
  if (field === '::tip::') {
    data.parentArray![data.currentIndex!] = fieldValue
  }
}

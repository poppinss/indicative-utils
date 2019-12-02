/**
 * @module indicative-utils
 */

/**
 * indicative-utils
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import get from 'lodash.get'
import { ValidationDataRoot } from './contracts'

/**
 * Returns value for a given field from the validation
 * data node
 */
export function getValue (data: ValidationDataRoot, field: string): any {
  if (field.startsWith('/')) {
    return get(data.original, field.substr(1))
  }
  return data.tip[field]
}

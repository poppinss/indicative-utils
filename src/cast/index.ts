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

import { toDate } from './toDate'
import { toString } from './toString'
import { toBoolean } from './toBoolean'
import { toInt } from './toInt'

/**
 * Attempts to cast the value to a desired type. The function will return `null`
 * when unable to cast the value or raises an exception, when `errorMessage`
 * argument is defined.
 */
export function cast (value: any, toType: 'float', errorMessage: string): number
export function cast (value: any, toType: 'float'): number | null

export function cast (value: any, toType: 'date', errorMessage: string): Date
export function cast (value: any, toType: 'date'): Date | null

export function cast (value: any, toType: 'string', errorMessage: string): string
export function cast (value: any, toType: 'string'): string | null

export function cast (value: any, toType: 'integer', errorMessage: string): number
export function cast (value: any, toType: 'integer'): number | null

export function cast (value: any, toType: 'boolean', errorMessage: string): boolean
export function cast (value: any, toType: 'boolean'): boolean | null
export function cast (
  value: any,
  toType: 'float' | 'date' | 'string' | 'integer' | 'boolean',
  errorMessage?: string,
): any {
  if (typeof(value) === toType) {
    return value
  }

  let castedValue: any = null
  switch (toType) {
    case 'float':
      castedValue = toInt(value, true)
      break
    case 'string':
      castedValue = toString(value)
      break
    case 'integer':
      castedValue = toInt(value)
      break
    case 'date':
      castedValue = toDate(value)
      break
    case 'boolean':
      castedValue = toBoolean(value)
      break
  }

  if (!castedValue && errorMessage) {
    throw new Error(errorMessage)
  }

  return castedValue
}

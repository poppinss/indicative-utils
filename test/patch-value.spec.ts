/*
* indicative-utils
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import * as test from 'japa'
import { patchValue } from '../src/patchValue'

test.group('patchValue', () => {
  test('update field value on the object', (assert) => {
    const data: { age: any } = { age: 22 }
    const root = { tip: data, original: data }

    patchValue(root, 'age', '22')
    assert.deepEqual(data, { age: '22' })
  })

  test('update field value on array index when field value is a literal value', (assert) => {
    const data = [22]

    const root: {
      parentArray: any[],
      currentIndex: number,
      tip: any,
      original: any,
    } = {
      tip: { '::tip::': 22 },
      original: { values: [22] },
      parentArray: data,
      currentIndex: 0,
    }

    patchValue(root, '::tip::', '22')

    assert.deepEqual(root.parentArray, ['22'])
    assert.deepEqual(root.tip, { '::tip::': '22' })
  })
})

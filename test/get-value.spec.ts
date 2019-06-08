/*
* indicative-utils
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import * as test from 'japa'
import { getValue } from '../src/getValue'

test.group('getValue', () => {
  test('get value for a field', (assert) => {
    const data: { age: any } = { age: 22 }
    const root = { tip: data, original: data }

    assert.equal(getValue(root, 'age'), 22)
  })

  test('get value for an array literal field', (assert) => {
    const root = {
      tip: { '::tip::': 22 },
      original: {},
    }

    assert.equal(getValue(root, '::tip::'), 22)
  })

  test('get value for a nested field', (assert) => {
    const data = { user: { profile: { username: 'virk' } } }
    const root = {
      tip: data,
      original: data,
    }

    assert.equal(getValue(root, 'user.profile.username'), undefined)
    assert.equal(getValue(root, '/user.profile.username'), 'virk')
  })
})

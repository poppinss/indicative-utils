[indicative-utils](../README.md) › [indicative-utils](indicative_utils.md)

# External module: indicative-utils

## Index

### Type aliases

* [ValidationDataRoot](indicative_utils.md#validationdataroot)

### Functions

* [ensureLength](indicative_utils.md#ensurelength)
* [getValue](indicative_utils.md#getvalue)
* [skippable](indicative_utils.md#const-skippable)
* [toDate](indicative_utils.md#todate)
* [toInt](indicative_utils.md#toint)
* [toString](indicative_utils.md#tostring)

## Type aliases

###  ValidationDataRoot

Ƭ **ValidationDataRoot**: *object*

indicative-utils

(c) Harminder Virk <virk@adonisjs.com>

For the full copyright and license information, please view the LICENSE
file that was distributed with this source code.

#### Type declaration:

## Functions

###  ensureLength

▸ **ensureLength**(`args`: any[], `message`: string, `minLength`: number): *void*

Raises exception if length of args array is less than the expected length

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`args` | any[] | - |
`message` | string | - |
`minLength` | number | 1 |

**Returns:** *void*

___

###  getValue

▸ **getValue**(`data`: [ValidationDataRoot](indicative_utils.md#validationdataroot), `field`: string): *any*

Returns value for a given field from the validation
data node

**Parameters:**

Name | Type |
------ | ------ |
`data` | [ValidationDataRoot](indicative_utils.md#validationdataroot) |
`field` | string |

**Returns:** *any*

___

### `Const` skippable

▸ **skippable**(`value`: any, `fieldName`: string, `config`: object): *boolean*

Returns a boolean telling whether the value must be skipped
from validations or not based upon the `existyStrict` config.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`fieldName` | string |
`config` | object |

**Returns:** *boolean*

___

###  toDate

▸ **toDate**(`value`: any): *Date | null*

Casts value to an instance of date. Also converted date instance is
validated for correct dates only.

```js
toDate('foo-bar') // null
toDate('2019-10-07') // Date
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *Date | null*

___

###  toInt

▸ **toInt**(`value`: any, `fractional`: boolean): *number | null*

Cast value to a number and returns `null` when unable to do so. By
default this method will drop fractional digits and you must pass
`true` for the `2nd argument` to keep float values intact.

```js
toInt('10.80') // 10
toInt('10.80', true) // 10.80
toInt(false) // null
toInt('10.80-hey') // null
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`value` | any | - |
`fractional` | boolean | false |

**Returns:** *number | null*

___

###  toString

▸ **toString**(`value`: any): *string | null*

String value to a string and returns null when unable to do so.

```js
toString(22) // '22'
toString(10.80) // '10.80'
toString(['hello', 'world']) hello,world
toString({}) null
toString(null) null
toString(undefined) null
toString(new Date()) // String version of date
```

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *string | null*

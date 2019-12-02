[indicative-utils](../README.md) › ["cast/index"](_cast_index_.md)

# External module: "cast/index"

## Index

### Functions

* [cast](_cast_index_.md#cast)

## Functions

###  cast

▸ **cast**(`value`: any, `toType`: "float", `errorMessage`: string): *number*

Attempts to cast the value to a desired type. The function will return `null`
when unable to cast the value or raises an exception, when `errorMessage`
argument is defined.

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`toType` | "float" |
`errorMessage` | string |

**Returns:** *number*

▸ **cast**(`value`: any, `toType`: "float"): *number | null*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`toType` | "float" |

**Returns:** *number | null*

▸ **cast**(`value`: any, `toType`: "date", `errorMessage`: string): *Date*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`toType` | "date" |
`errorMessage` | string |

**Returns:** *Date*

▸ **cast**(`value`: any, `toType`: "date"): *Date | null*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`toType` | "date" |

**Returns:** *Date | null*

▸ **cast**(`value`: any, `toType`: "string", `errorMessage`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`toType` | "string" |
`errorMessage` | string |

**Returns:** *string*

▸ **cast**(`value`: any, `toType`: "string"): *string | null*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`toType` | "string" |

**Returns:** *string | null*

▸ **cast**(`value`: any, `toType`: "integer", `errorMessage`: string): *number*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`toType` | "integer" |
`errorMessage` | string |

**Returns:** *number*

▸ **cast**(`value`: any, `toType`: "integer"): *number | null*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`toType` | "integer" |

**Returns:** *number | null*

▸ **cast**(`value`: any, `toType`: "boolean", `errorMessage`: string): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`toType` | "boolean" |
`errorMessage` | string |

**Returns:** *boolean*

▸ **cast**(`value`: any, `toType`: "boolean"): *boolean | null*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`toType` | "boolean" |

**Returns:** *boolean | null*

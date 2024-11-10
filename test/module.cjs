const { strictEqual } = require('node:assert')
const { isMain } = require('../index.cjs')

strictEqual(isMain(module), false)

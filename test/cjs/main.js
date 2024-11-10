const { strictEqual } = require('node:assert')
const { isMain } = require('../../index.cjs')
require('../module.cjs')

strictEqual(isMain(module), true)

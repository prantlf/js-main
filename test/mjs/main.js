import { strictEqual } from 'node:assert'
import { isMain } from '../../index.mjs'
import '../module.mjs'

strictEqual(isMain(import.meta), true)

import { strictEqual } from 'node:assert'
import { isMain } from '../index.mjs'

strictEqual(isMain(import.meta), false)

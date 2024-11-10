/**
 * Checks if the current module is the main executed module.
 *
 * @param metaOrModule `import.meta` in an ES module or `module` in a CJS module
 * @returns `true` if the current module is the main executed module
 */
export function isMain(metaOrModule: any): boolean

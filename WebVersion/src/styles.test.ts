import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const stylesheet = readFileSync(new URL('./styles.css', import.meta.url), 'utf8')

describe('homepage header layering', () => {
  it('keeps the AppShell header above the hero copy layer', () => {
    expect(stylesheet).toMatch(/\.astryx-AppShell\s*\[data-ui="app-shell-header"\]\s*\{[^}]*z-index:\s*2/m)
    expect(stylesheet).toMatch(/\.hero-copy\s*\{[^}]*z-index:\s*1/m)
  })
})

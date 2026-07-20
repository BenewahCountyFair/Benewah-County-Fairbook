import { describe, expect, it } from 'vitest'
import { departments, downloads, edition, schedule } from './fairbook'

describe('fairbook publishing content', () => {
  it('keeps dated content private until the edition is confirmed', () => {
    expect(edition.status).toBe('unconfirmed')
    expect(schedule.filter(event => event.visible)).toEqual([])
  })

  it('provides a stable, printable guide for every department', () => {
    expect(departments).toHaveLength(13)
    expect(departments.every(department => department.slug && department.classes.length > 0)).toBe(true)
    expect(downloads).toHaveLength(departments.length + 1)
  })

  it('includes class lots for searching and sharing', () => {
    expect(departments.find(department => department.slug === 'art')?.classes.flatMap(item => item.lots).length).toBeGreaterThan(20)
  })
})

import { describe, expect, it } from 'vitest'
import { departments, downloads, edition, eventFlyers, fairBoard, schedule } from './fairbook'

describe('fairbook publishing content', () => {
  it('publishes the confirmed 2026 fair schedule', () => {
    expect(edition.status).toBe('confirmed')
    expect(schedule.every(event => event.visible)).toBe(true)
    expect(schedule).toContainEqual(expect.objectContaining({ date: 'Monday, August 10, 2026', title: 'Booth set-up' }))
    expect(schedule).toContainEqual(expect.objectContaining({ date: 'Saturday, August 15, 2026', title: 'Livestock auction' }))
  })

  it('provides a stable, printable guide for every department', () => {
    expect(departments).toHaveLength(13)
    expect(departments.every(department => department.slug && department.classes.length > 0)).toBe(true)
    expect(downloads).toHaveLength(departments.length + 1)
  })

  it('includes class lots for searching and sharing', () => {
    expect(departments.find(department => department.slug === 'art')?.classes.flatMap(item => item.lots).length).toBeGreaterThan(20)
  })

  it('includes the 2026 fair contacts and event flyer', () => {
    expect(fairBoard.commissioners).toEqual(['Phil Lampert', 'Bob Short', 'Mark Reynolds'])
    expect(eventFlyers).toContainEqual(expect.objectContaining({ title: 'Kiwanis Breakfast for Dinner' }))
  })
})

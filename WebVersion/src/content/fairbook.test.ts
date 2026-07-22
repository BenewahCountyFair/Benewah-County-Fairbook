import { describe, expect, it } from 'vitest'
import { departments, downloads, edition, eventFlyers, fairBoard, fairMission, generalRules, officialDepartmentContent, schedule } from './fairbook'
import fairbookSource from './fairbook-source.md?raw'

describe('fairbook publishing content', () => {
  it('publishes the confirmed 2026 fair schedule', () => {
    expect(edition.status).toBe('confirmed')
    expect(schedule.every(event => event.visible)).toBe(true)
    expect(schedule).toContainEqual(expect.objectContaining({ date: 'Monday, August 17, 2026', title: 'Booth set-up' }))
    expect(schedule).toContainEqual(expect.objectContaining({ date: 'Monday, August 17, 2026', time: '6:00 p.m.', title: '4-H dog show' }))
    expect(schedule).toContainEqual(expect.objectContaining({ date: 'Wednesday, August 19, 2026', time: '12:00–7:30 p.m.', location: 'Walker Kitchen', title: '4-H livestock assessment' }))
    expect(schedule).toContainEqual(expect.objectContaining({ date: 'Thursday, August 20, 2026', time: '2:30–3:30 p.m.', title: 'Market goat quality' }))
    expect(schedule).toContainEqual(expect.objectContaining({ date: 'Friday, August 21, 2026', time: '2:30–3:00 p.m.', title: 'PeeWee swine show (ages 5–8; pre-register with the barn superintendent before noon)' }))
    expect(schedule).toContainEqual(expect.objectContaining({ date: 'Saturday, August 22, 2026', time: '5:00 p.m.', title: 'Junior Show & Sale BBQ and potluck (bring a side dish) and bingo' }))
    expect(schedule).not.toContainEqual(expect.objectContaining({ title: 'Movie night' }))
    expect(schedule).not.toContainEqual(expect.objectContaining({ title: 'Youth Barn Dance' }))
  })

  it('provides a stable, printable guide for every department', () => {
    expect(departments).toHaveLength(13)
    expect(departments.every(department => department.slug && department.classes.length > 0)).toBe(true)
    expect(downloads).toHaveLength(departments.length + 2)
    expect(downloads[0]).toEqual({ name: '2026 Fair Schedule', file: '2026-Benewah-County-Fair-Schedule.pdf' })
    expect(downloads[1]).toEqual({ name: 'Complete Fairbook', file: 'Complete_Fairbook.pdf' })
  })

  it('lists exhibit departments and downloads alphabetically', () => {
    const departmentNames = departments.map(department => department.name)

    expect(departmentNames).toEqual([...departmentNames].sort((left, right) => left.localeCompare(right)))
    expect(downloads.slice(2).map(download => download.name)).toEqual(departmentNames)
  })

  it('includes class lots for searching and sharing', () => {
    expect(departments.find(department => department.slug === 'art')?.classes.flatMap(item => item.lots).length).toBeGreaterThan(20)
  })

  it('includes the 2026 fair contacts and event flyer', () => {
    expect(fairBoard.commissioners).toEqual(['Phil Lampert', 'Bob Short', 'Mark Reynolds'])
    expect(eventFlyers).toContainEqual(expect.objectContaining({ title: 'Kiwanis Breakfast for Dinner' }))
  })

  it('keeps all 13 general-information rules online', () => {
    expect(generalRules).toHaveLength(13)
    expect(generalRules).toContain('Premiums may be requested at the fair office after the fair. Bring a self-addressed stamped envelope if you would like a check mailed to you.')
  })

  it('publishes the Fair Mission', () => {
    expect(fairMission.title).toBe('Showing Our Best')
    expect(fairMission.text).toContain('educational display of skills')
  })

  it('keeps the complete official department details available online', () => {
    expect(officialDepartmentContent('baking')).toContain('Cinnamon Rolls (4)')
    expect(officialDepartmentContent('livestock')).toContain('There is a ban on Waterfowl')
    expect(officialDepartmentContent('youth')).toContain('Entomology')
  })

  it('keeps every exhibition class lot list sequentially numbered', () => {
    const classSections = [...fairbookSource.matchAll(/(?:^|\n)\*\*Class [^\n]+\*\*([\s\S]*?)(?=\n---\n|\n\*\*Class |\n# |\s*$)/g)]
      .map(match => match[1])

    for (const section of classSections) {
      const numbers = [...section.matchAll(/^(\d+)\. /gm)].map(match => Number(match[1]))

      expect(numbers).toEqual(numbers.map((_, index) => index + 1))
    }
  })
})

import { describe, expect, test } from 'vitest'
import Boat from './boat'
import Cell from './cell'

describe('Create boat', () => {
  test('on A1-A2 cells should work', () => {
    new Boat(new Cell('A1'), 'vertical', 2)
  })
  test('on A10-A11, A11-A12, J10-J11, K10-L10, JA cells should throw Illegal cell coordinate exception', () => {
    expect(() => {
      new Boat(new Cell('A10'), 'vertical', 2)
    }).toThrow('Illegal cell coordinate')
    expect(() => {
      new Boat(new Cell('A11'), 'vertical', 2)
    }).toThrow('Illegal cell coordinate')
    expect(() => {
      new Boat(new Cell('J10'), 'horizontal', 2)
    }).toThrow('Illegal cell coordinate')
    expect(() => {
      new Boat(new Cell('K10'), 'horizontal', 2)
    }).toThrow('Illegal cell coordinate')
    expect(() => {
      new Boat(new Cell('JA'), 'horizontal', 2)
    }).toThrow('Illegal cell coordinate')
  })

  test('filling incorrect direction value should throw Illegal direction value exception', () => {
    expect(() => {
      new Boat(new Cell('A09'), 'aaaaa', 2)
    }).toThrow('Illegal direction value')
  })

  test('filling incorrect length value should throw Illegal length value exception', () => {
    expect(() => {
      new Boat(new Cell('A09'), 'vertical', 0)
    }).toThrow('Illegal length value')
    expect(() => {
      new Boat(new Cell('A09'), 'vertical', 1)
    }).toThrow('Illegal length value')
    expect(() => {
      new Boat(new Cell('A09'), 'vertical', 6)
    }).toThrow('Illegal length value')
  })
})

import { describe, expect, test } from 'vitest'
import Cell from './cell'

describe('Filling coordinates to cell constructor', () => {
  test('with incorrect data should throw "Illegal cell coordinate" exception', () => {
    expect(() => new Cell('AA1')).toThrow('Illegal cell coordinate')
    expect(() => new Cell('A11')).toThrow('Illegal cell coordinate')
    expect(() => new Cell('1')).toThrow('Illegal cell coordinate')
    expect(() => new Cell('A')).toThrow('Illegal cell coordinate')
    expect(() => new Cell('')).toThrow('Illegal cell coordinate')
    expect(() => new Cell('AAA1')).toThrow('Illegal cell coordinate')
    expect(() => new Cell('A111')).toThrow('Illegal cell coordinate')

    expect(() => new Cell('A0')).toThrow('Illegal cell coordinate')
    expect(() => new Cell('A11')).toThrow('Illegal cell coordinate')
    expect(() => new Cell('J0')).toThrow('Illegal cell coordinate')
    expect(() => new Cell('K1')).toThrow('Illegal cell coordinate')
    expect(() => new Cell('J11')).toThrow('Illegal cell coordinate')
    expect(() => new Cell('K11')).toThrow('Illegal cell coordinate')
  })

  test('with correct data should make getRow method returns the correct row number', () => {
    expect(new Cell('A1').getRow()).toBe(1)
    expect(new Cell('J1').getRow()).toBe(1)
    expect(new Cell('A5').getRow()).toBe(5)
    expect(new Cell('B5').getRow()).toBe(5)
    expect(new Cell('A10').getRow()).toBe(10)
    expect(new Cell('J10').getRow()).toBe(10)
  })

  test('with correct data should make getColumn method returns the correct column number', () => {
    expect(new Cell('A1').getColumn()).toBe(1)
    expect(new Cell('A2').getColumn()).toBe(1)
    expect(new Cell('E1').getColumn()).toBe(5)
    expect(new Cell('E5').getColumn()).toBe(5)
    expect(new Cell('J10').getColumn()).toBe(10)
    expect(new Cell('J1').getColumn()).toBe(10)
  })
})

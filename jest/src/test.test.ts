import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('first test block', () => {
  it('multiplication', () => {
    function multiply(param1: number, param2: number) {
      return param1 * param2
    }
    expect(multiply(5, 5)).toEqual(25)
    expect(multiply(0, 0)).toEqual(0)
  })
})

describe.only('centuryFromYear(year)', () => {
  function centuryFromYear(year: number) {
    let century = year / 100
    if (year % 100 === 0) {
      return century
    } else {
      return Math.floor(century + 1);
    }
  }
  it('returns 20 if year is 2000', () => {
    const result = centuryFromYear(2000)
    expect(result).toEqual(20);
  })
  it('returns 22 if year is 2101', () => {
    const result = centuryFromYear(2101)
    expect(result).toEqual(22);
  })
  it('returns 15 for 1500', () => {
    const result = centuryFromYear(1500)
    expect(result).toEqual(15)
  })
  it('returns 16 for 1550', () => {
    const result = centuryFromYear(1501)
    expect(result).toEqual(16)
  })
  it('returns 1 for 50', () => {
    const result = centuryFromYear(50)
    expect(result).toEqual(1)
  })
})

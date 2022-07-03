import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('multiplication test', () => {
  const multiply = (param1: number, param2: number) => {
    return param1 * param2
  }
  it('returns 25 if params are 5, 5', () => {
    const result = multiply(5, 5)
    expect(result).toEqual(25)
  })
  it('return 0 if params are 0, 0', () => {
    const result = multiply(0, 0);
    expect(result).toEqual(0)
  })
})

describe('centuryFromYear(year)', () => {
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

describe('check if a squared number is between two other numbers', () => {
  const checkGtOrLt = (param1: number, param2: number, param3: number) => {
    if(Math.pow(param1, 2) > param2
    && Math.pow(param1, 2) < param3) {
      return true
    }
    return false
  }
  it('returns true for 5, 20, 30', () => {
    const result = checkGtOrLt(5, 20, 30);
    expect(result).toBeTruthy()
  })
  it('returns false for 5, 15, 30', () => {
    const result = checkGtOrLt(5, 30, 40);
    expect(result).toBeFalsy()
  })
  it('returns true for 10, 100, 150', () => {
    const result = checkGtOrLt(10, 50, 150);
    expect(result).toBeTruthy()
  })
  it('returns false for 10, 50, 65',  () => {
    const result = checkGtOrLt(10, 50, 65);
    expect(result).toBeFalsy()
  })
})

describe('Testing a greeting function', () => {
  const greeting = (name: string)=> `Hello ${name} uwu`
  test('jest.fn', () => {
    const something = jest.fn(greeting);
    const result = something('Dre');
    expect(something).toBeCalled();
    expect(something).toBeCalledWith('Dre');
    expect(result).toBe('Hello Dre uwu')
  })
})

describe('Testing a greeting class', () => {
  class Person {
    name: string
    constructor(name: string) {
      this.name = name
    }
    sayMyName() {
      return `My name is ${this.name}`;
    }
    favoriteNum(num: number) {
      return num;
    }
  }
  test('favoriteNum', () => {
    const Me = new Person('Dre');
    const mockName = jest.fn(Me.favoriteNum);
    const result = mockName(12);
    expect(mockName).toBeCalled();
    expect(mockName).toHaveBeenCalledTimes(1);
    expect(mockName(15)).toBe(15);
    expect(result).toBe(12);
  })
  test('sayMyName', () => {
    const Me = new Person('Dre');
    const result = Me.sayMyName();
    expect(result).toBe('My name is Dre');
  })
})

describe.only('Testing Async mocking',  () => {
  interface ResProps {
    fighter: string,
    fighterId: number,
    rosterId: number,
    orderByRosterId: boolean
  }
  it('returns inkling as fighter property', async () => {
    const res = await fetch('https://the-ultimate-api.herokuapp.com/api/fighters?fighter=inkling', {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    });
    const json: ResProps = await res.json();
    expect(json.fighter).toBe('inkling');
  })
  test('if result has a rosterId property', async () => {
    const res = await fetch('https://the-ultimate-api.herokuapp.com/api/fighters?fighter=inkling', {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    });
    const result = await res.json();
    expect(result.hasOwnProperty('rosterId')).toBeTruthy()
  })
})

import { Injectable } from '@angular/core';
import { randomIntToString } from '../utils';

export interface ItemType {
  from: number;
  to: number;
  input: string;
  output: string;
}

@Injectable()
export class ItemsService {

  constructor() {}

  getItems() {
    const result: ItemType[] = []
    let from = 10
    let to = 2
    Array(2).fill(1).map(() => {
      const input = randomIntToString(50, 100, from)
      const output = parseInt(input, from).toString(to)
      result.push({ from, to, input, output })
    })

    from = 10
    to = 8
    Array(2).fill(1).map(() => {
      const input = randomIntToString(50, 100, from)
      const output = parseInt(input, from).toString(to)
      result.push({ from, to, input, output })
    })

    from = 10
    to = 16
    Array(2).fill(1).map(() => {
      const input = randomIntToString(50, 100, from)
      const output = parseInt(input, from).toString(to)
      result.push({ from, to, input, output })
    })

    from = 2
    to = 10
    Array(2).fill(1).map(() => {
      const input = randomIntToString(50, 100, from)
      const output = parseInt(input, from).toString(to)
      result.push({ from, to, input, output })
    })

    from = 8
    to = 10
    Array(2).fill(1).map(() => {
      const input = randomIntToString(50, 100, from)
      const output = parseInt(input, from).toString(to)
      result.push({ from, to, input, output })
    })

    from = 16
    to = 10
    Array(2).fill(1).map(() => {
      const input = randomIntToString(50, 100, from)
      const output = parseInt(input, from).toString(to)
      result.push({ from, to, input, output })
    })

    console.log(result)
    return result
  }
}

import {Injectable} from '@angular/core';
import {randomIntToString} from '../utils';

export interface ItemType {
  from: number;
  to: number;
  input: string;
  output: string;
  userAnswer?: string
}

@Injectable()
export class ItemsService {

  constructor() {
  }

  getItems() {
    const result: ItemType[] = []
    result.push(...this.generateItems(10, 2))
    result.push(...this.generateItems(10, 8))
    result.push(...this.generateItems(10, 16))
    result.push(...this.generateItems(2, 10))
    result.push(...this.generateItems(8, 10))
    result.push(...this.generateItems(16, 10))
    console.log(result)
    return result
  }

  private generateItems(from: number, to: number) {
    const result: ItemType[] = []
    Array(2).fill(1).map(() => {
      const input = randomIntToString(50, 100, from)
      const output = parseInt(input, from).toString(to)
      result.push({from, to, input, output})
    })
    return result
  }
}

import {Injectable} from '@angular/core';
import {randomIntToString} from "../utils";

export interface SumItemType {
  input1: string
  input2: string
  output: string
  answer?: string
}

@Injectable()
export class SumItemsService {

  constructor() {
  }

  getItems() {
    const result: SumItemType[] = []
    result.push(...Array(10).fill(1).map(() => {
      const input1 = randomIntToString(50, 100, 2)
      const input2 = randomIntToString(50, 100, 2)
      const output = (parseInt(input1, 2) + parseInt(input2, 2)).toString(2)
      return {
        input1,
        input2,
        output
      }
    }))
    return result
  }
}

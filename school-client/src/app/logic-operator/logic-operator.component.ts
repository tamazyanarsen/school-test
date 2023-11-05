import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './logic-operator.component.html',
  styleUrls: ['./logic-operator.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogicOperatorComponent implements OnInit {
  signs = ['+', '*']
  items: { test: string, userAnswer: string }[] = []
  answers: string[] = []

  testCount = 50

  ngOnInit(): void {
    const randInt = () => Math.round(Math.random())
    this.items = Array(this.testCount).fill(1)
      .map(() => ({
        test: Array(5).fill(1).map(() => randInt() + ' ' + this.signs[randInt()]).join(' ').slice(0, -1),
        userAnswer: ''
      }))
    this.answers = this.items.map(e => Math.min(1, this.getRes(e.test.replaceAll(' ', ''))).toString())
  }

  checkAllTest() {
    const correctAnswers = this.items.map((e, index) => e.userAnswer === this.answers[index]).filter(Boolean).length
    alert(`${correctAnswers} из ${this.testCount}; ${Math.round(correctAnswers * 5 / this.testCount * 10) / 10}`)
  }

  getRes(expr: string): number {
    console.log({ expr })
    const num1 = parseInt(expr[0])
    const num2 = parseInt(expr[2])
    if (expr.length === 1) return parseInt(expr)
    if (expr[1] === '+') {
      console.log('+ return', num1, '+', expr.slice(2))
      return num1 + this.getRes(expr.slice(2))
    }
    else if (expr[1] === '*') {
      if (expr.length === 3) {
        console.log('* return', num1 * num2)
        return num1 * num2
      }
      else {
        console.log('* return', `${num1 * num2}${expr[3]}${expr.slice(4)}`)
        return this.getRes(`${num1 * num2}${expr[3]}${expr.slice(4)}`)
      }
    }
    return 1
  }
}

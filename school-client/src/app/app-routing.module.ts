import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'numbers-system',
    loadComponent: () => import('./numbers-system/numbers-system.component').then(m => m.NumbersSystemComponent)
  },
  {
    path: 'logic-operator',
    loadComponent: () => import('./logic-operator/logic-operator.component').then(m => m.LogicOperatorComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

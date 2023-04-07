import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DogsListComponent } from './components/dogs-list.component'

const routes: Routes = [
  { path: 'list', component: DogsListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

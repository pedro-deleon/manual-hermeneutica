import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContextoInternoComponent } from './areas/contexto-interno/contexto-interno.component';


const routes: Routes = [
  { path: "areas/contexto-interno", component: ContextoInternoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

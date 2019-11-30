import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContextoInternoComponent } from './areas/contexto-interno/contexto-interno.component';
import { LibroMismoComponent } from './core/libro-mismo/libro-mismo.component';
import { DivisionParrafosComponent } from './core/division-parrafos/division-parrafos.component';
import { AgrupacionParrafosComponent } from './core/agrupacion-parrafos/agrupacion-parrafos.component';
import { ElementoExistencialHumanoComponent } from './core/elemento-existencial-humano/elemento-existencial-humano.component';
import { IdentificacionCulturaComponent } from './core/identificacion-cultura/identificacion-cultura.component';
import { EvaluacionCulturaComponent } from './core/evaluacion-cultura/evaluacion-cultura.component';
import { AnalisisProblemasComponent } from './core/analisis-problemas/analisis-problemas.component';
import { SemanticaComponent } from './areas/semantica/semantica.component';
import { DefinicionPalabrasComponent } from './core/definicion-palabras/definicion-palabras.component';
import { LexicoComponent } from './core/lexico/lexico.component';
import { EtimologiaComponent } from './core/etimologia/etimologia.component';
import { UsoPalabraComponent } from './core/uso-palabra/uso-palabra.component';
import { PatronesSemanticosComponent } from './core/patrones-semanticos/patrones-semanticos.component';
import { CamposSemanticosComponent } from './core/campos-semanticos/campos-semanticos.component';
import { FrecuenciaUsoComponent } from './core/frecuencia-uso/frecuencia-uso.component';
import { ConnotacionDenotacionComponent } from './core/connotacion-denotacion/connotacion-denotacion.component';
import { SemanticaOracionesComponent } from './core/semantica-oraciones/semantica-oraciones.component';
import { SemanticaOfComponent } from './core/semantica-of/semantica-of.component';
import { GramaticaComponent } from './areas/gramatica/gramatica.component';
import { VerbosComponent } from './core/verbos/verbos.component';
import { SustantivosComponent } from './core/sustantivos/sustantivos.component';
import { PreposicionesComponent } from './core/preposiciones/preposiciones.component';
import { AdjetivosAdverbiosComponent } from './core/adjetivos-adverbios/adjetivos-adverbios.component';
import { UsusLoquendiComponent } from './core/usus-loquendi/usus-loquendi.component';
import { SintaxisComponent } from './areas/sintaxis/sintaxis.component';
import { IntencionAutorComponent } from './core/intencion-autor/intencion-autor.component';
import { TemaComponent } from './core/tema/tema.component';
import { IdeasComponent } from './core/ideas/ideas.component';
import { ArgumentoEsquematizacionComponent } from './core/argumento-esquematizacion/argumento-esquematizacion.component';
import { PasajeTemaComponent } from './core/pasaje-tema/pasaje-tema.component';
import { IntencionParrafoComponent } from './core/intencion-parrafo/intencion-parrafo.component';
import { LiteraturaComponent } from './areas/literatura/literatura.component';
import { GeneroComponent } from './core/genero/genero.component';


const routes: Routes = [
  { path: "areas/contexto-interno", component: ContextoInternoComponent },
  { path: "areas/semantica", component: SemanticaComponent },
  { path: "areas/gramatica", component: GramaticaComponent },
  { path: "areas/sintaxis", component: SintaxisComponent },
  { path: "areas/literatura", component: LiteraturaComponent },
  { path: "core/libro-mismo", component: LibroMismoComponent },
  { path: "core/division-parrafos", component: DivisionParrafosComponent },
  { path: "core/agrupacion-parrafos", component: AgrupacionParrafosComponent },
  { path: "core/elemento-existencial-humano", component: ElementoExistencialHumanoComponent },
  { path: "core/identificacion-cultura", component: IdentificacionCulturaComponent },
  { path: "core/evaluacion-cultura", component: EvaluacionCulturaComponent },
  { path: "core/analisis-problemas", component: AnalisisProblemasComponent },
  { path: "core/definicion-palabras", component: DefinicionPalabrasComponent },
  { path: "core/lexico", component: LexicoComponent },
  { path: "core/etimologia", component: EtimologiaComponent },
  { path: "core/uso-palabra", component: UsoPalabraComponent },
  { path: "core/patrones-semanticos", component: PatronesSemanticosComponent },
  { path: "core/campos-semanticos", component: CamposSemanticosComponent },
  { path: "core/frecuencia-uso", component: FrecuenciaUsoComponent },
  { path: "core/connotacion-denotacion", component: ConnotacionDenotacionComponent },
  { path: "core/semantica-oraciones", component: SemanticaOracionesComponent },
  { path: "core/usus-loquendi", component: UsusLoquendiComponent },
  { path: "core/semantica-of", component: SemanticaOfComponent },
  { path: "core/verbos", component: VerbosComponent },
  { path: "core/sustantivos", component: SustantivosComponent },
  { path: "core/preposiciones", component: PreposicionesComponent },
  { path: "core/adjetivos-adverbios", component: AdjetivosAdverbiosComponent },
  { path: "core/intencion-autor", component: IntencionAutorComponent },
  { path: "core/tema", component: TemaComponent },
  { path: "core/ideas", component: IdeasComponent },
  { path: "core/intencion-parrafo", component: IntencionParrafoComponent },
  { path: "core/argumento-esquematizacion", component: ArgumentoEsquematizacionComponent },
  { path: "core/pasaje-tema", component: PasajeTemaComponent },
  { path: "core/genero", component: GeneroComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

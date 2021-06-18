import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContextoInternoComponent } from "./areas/contexto-interno/contexto-interno.component";
import { LibroMismoComponent } from "./core/libro-mismo/libro-mismo.component";
import { DivisionParrafosComponent } from "./core/division-parrafos/division-parrafos.component";
import { AgrupacionParrafosComponent } from "./core/agrupacion-parrafos/agrupacion-parrafos.component";
import { ElementoExistencialHumanoComponent } from "./core/elemento-existencial-humano/elemento-existencial-humano.component";
import { IdentificacionCulturaComponent } from "./core/identificacion-cultura/identificacion-cultura.component";
import { EvaluacionCulturaComponent } from "./core/evaluacion-cultura/evaluacion-cultura.component";
import { AnalisisProblemasComponent } from "./core/analisis-problemas/analisis-problemas.component";
import { SemanticaComponent } from "./areas/semantica/semantica.component";
import { DefinicionPalabrasComponent } from "./core/definicion-palabras/definicion-palabras.component";
import { LexicoComponent } from "./core/lexico/lexico.component";
import { EtimologiaComponent } from "./core/etimologia/etimologia.component";
import { UsoPalabraComponent } from "./core/uso-palabra/uso-palabra.component";
import { PatronesSemanticosComponent } from "./core/patrones-semanticos/patrones-semanticos.component";
import { CamposSemanticosComponent } from "./core/campos-semanticos/campos-semanticos.component";
import { FrecuenciaUsoComponent } from "./core/frecuencia-uso/frecuencia-uso.component";
import { ConnotacionDenotacionComponent } from "./core/connotacion-denotacion/connotacion-denotacion.component";
import { SemanticaOracionesComponent } from "./core/semantica-oraciones/semantica-oraciones.component";
import { SemanticaOfComponent } from "./core/semantica-of/semantica-of.component";
import { GramaticaComponent } from "./areas/gramatica/gramatica.component";
import { VerbosComponent } from "./core/verbos/verbos.component";
import { SustantivosComponent } from "./core/sustantivos/sustantivos.component";
import { PreposicionesComponent } from "./core/preposiciones/preposiciones.component";
import { AdjetivosAdverbiosComponent } from "./core/adjetivos-adverbios/adjetivos-adverbios.component";
import { UsusLoquendiComponent } from "./core/usus-loquendi/usus-loquendi.component";
import { SintaxisComponent } from "./areas/sintaxis/sintaxis.component";
import { IntencionAutorComponent } from "./core/intencion-autor/intencion-autor.component";
import { TemaComponent } from "./core/tema/tema.component";
import { IdeasComponent } from "./core/ideas/ideas.component";
import { ArgumentoEsquematizacionComponent } from "./core/argumento-esquematizacion/argumento-esquematizacion.component";
import { PasajeTemaComponent } from "./core/pasaje-tema/pasaje-tema.component";
import { IntencionParrafoComponent } from "./core/intencion-parrafo/intencion-parrafo.component";
import { LiteraturaComponent } from "./areas/literatura/literatura.component";
import { GeneroComponent } from "./core/genero/genero.component";
import { FormulasExpresionComponent } from "./core/formulas-expresion/formulas-expresion.component";
import { PatronesRetoricaComponent } from "./core/patrones-retorica/patrones-retorica.component";
import { FigurasDiccionComponent } from "./core/figuras-diccion/figuras-diccion.component";
import { EvaluacionTextoOriginalComponent } from "./core/evaluacion-texto-original/evaluacion-texto-original.component";
import { ModismosComponent } from "./core/modismos/modismos.component";
import { ContextoExternoComponent } from "./areas/contexto-externo/contexto-externo.component";
import { TeologiaComponent } from "./areas/teologia/teologia.component";
import { AplicacionHomileticaComponent } from "./areas/aplicacion-homiletica/aplicacion-homiletica.component";
import { AutorComponent } from "./core/autor/autor.component";
import { DestinatariosComponent } from "./core/destinatarios/destinatarios.component";
import { HistoriaComponent } from "./core/historia/historia.component";
import { CulturaComponent } from "./core/cultura/cultura.component";
import { ReligionComponent } from "./core/religion/religion.component";
import { PoliticaComponent } from "./core/politica/politica.component";
import { FilosofiaComponent } from "./core/filosofia/filosofia.component";
import { GeografiaComponent } from "./core/geografia/geografia.component";
import { CronologiaComponent } from "./core/cronologia/cronologia.component";
import { PropositoLibroComponent } from "./core/proposito-libro/proposito-libro.component";
import { IntroduccionComponent } from "./areas/introduccion/introduccion.component";

const routes: Routes = [
  { path: "area/introduccion", component: IntroduccionComponent },
  { path: "area/contexto-interno", component: ContextoInternoComponent },
  { path: "area/semantica", component: SemanticaComponent },
  { path: "area/gramatica", component: GramaticaComponent },
  { path: "area/sintaxis", component: SintaxisComponent },
  { path: "area/literatura", component: LiteraturaComponent },
  { path: "area/contexto-externo", component: ContextoExternoComponent },
  { path: "area/teologia", component: TeologiaComponent },
  {
    path: "area/aplicacion-homiletica",
    component: AplicacionHomileticaComponent
  },
  { path: "core/libro-mismo", component: LibroMismoComponent },
  { path: "core/division-parrafos", component: DivisionParrafosComponent },
  { path: "core/agrupacion-parrafos", component: AgrupacionParrafosComponent },
  {
    path: "core/elemento-existencial-humano",
    component: ElementoExistencialHumanoComponent
  },
  {
    path: "core/identificacion-cultura",
    component: IdentificacionCulturaComponent
  },
  { path: "core/evaluacion-cultura", component: EvaluacionCulturaComponent },
  { path: "core/analisis-problemas", component: AnalisisProblemasComponent },
  { path: "core/definicion-palabras", component: DefinicionPalabrasComponent },
  { path: "core/lexico", component: LexicoComponent },
  { path: "core/etimologia", component: EtimologiaComponent },
  { path: "core/uso-palabra", component: UsoPalabraComponent },
  { path: "core/patrones-semanticos", component: PatronesSemanticosComponent },
  { path: "core/campos-semanticos", component: CamposSemanticosComponent },
  { path: "core/frecuencia-uso", component: FrecuenciaUsoComponent },
  {
    path: "core/connotacion-denotacion",
    component: ConnotacionDenotacionComponent
  },
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
  {
    path: "core/argumento-esquematizacion",
    component: ArgumentoEsquematizacionComponent
  },
  { path: "core/pasaje-tema", component: PasajeTemaComponent },
  { path: "core/genero", component: GeneroComponent },
  { path: "core/formulas-expresion", component: FormulasExpresionComponent },
  { path: "core/patrones-retorica", component: PatronesRetoricaComponent },
  { path: "core/figuras-diccion", component: FigurasDiccionComponent },
  {
    path: "core/evaluacion-texto-orginal",
    component: EvaluacionTextoOriginalComponent
  },
  { path: "core/modismos", component: ModismosComponent },
  { path: "core/autor", component: AutorComponent },
  { path: "core/destinatarios", component: DestinatariosComponent },
  { path: "core/historia", component: HistoriaComponent },
  { path: "core/cultura", component: CulturaComponent },
  { path: "core/religion", component: ReligionComponent },
  { path: "core/politica", component: PoliticaComponent },
  { path: "core/filosofia", component: FilosofiaComponent },
  { path: "core/geografia", component: GeografiaComponent },
  { path: "core/cronologia", component: CronologiaComponent },
  { path: "core/proposito-libro", component: PropositoLibroComponent },
  { path: "", component: IntroduccionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

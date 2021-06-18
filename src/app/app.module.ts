import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ContextoInternoComponent} from './areas/contexto-interno/contexto-interno.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ContentSidenavComponent} from './content-sidenav/content-sidenav.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
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
import { UsusLoquendiComponent } from './core/usus-loquendi/usus-loquendi.component';
import { SemanticaOfComponent } from './core/semantica-of/semantica-of.component';
import { GramaticaComponent } from './areas/gramatica/gramatica.component';
import { SustantivosComponent } from './core/sustantivos/sustantivos.component';
import { VerbosComponent } from './core/verbos/verbos.component';
import { PreposicionesComponent } from './core/preposiciones/preposiciones.component';
import { AdjetivosAdverbiosComponent } from './core/adjetivos-adverbios/adjetivos-adverbios.component';
import { SintaxisComponent } from './areas/sintaxis/sintaxis.component';
import { IntencionAutorComponent } from './core/intencion-autor/intencion-autor.component';
import { TemaComponent } from './core/tema/tema.component';
import { IdeasComponent } from './core/ideas/ideas.component';
import { IntencionParrafoComponent } from './core/intencion-parrafo/intencion-parrafo.component';
import { ArgumentoEsquematizacionComponent } from './core/argumento-esquematizacion/argumento-esquematizacion.component';
import { PasajeTemaComponent } from './core/pasaje-tema/pasaje-tema.component';
import { GeneroComponent } from './core/genero/genero.component';
import { LiteraturaComponent } from './areas/literatura/literatura.component';
import { FormulasExpresionComponent } from './core/formulas-expresion/formulas-expresion.component';
import { PatronesRetoricaComponent } from './core/patrones-retorica/patrones-retorica.component';
import { EvaluacionTextoOriginalComponent } from './core/evaluacion-texto-original/evaluacion-texto-original.component';
import { FigurasDiccionComponent } from './core/figuras-diccion/figuras-diccion.component';
import { ModismosComponent } from './core/modismos/modismos.component';
import { ContextoExternoComponent } from './areas/contexto-externo/contexto-externo.component';
import { AutorComponent } from './core/autor/autor.component';
import { DestinatariosComponent } from './core/destinatarios/destinatarios.component';
import { HistoriaComponent } from './core/historia/historia.component';
import { CulturaComponent } from './core/cultura/cultura.component';
import { ReligionComponent } from './core/religion/religion.component';
import { PoliticaComponent } from './core/politica/politica.component';
import { FilosofiaComponent } from './core/filosofia/filosofia.component';
import { GeografiaComponent } from './core/geografia/geografia.component';
import { CronologiaComponent } from './core/cronologia/cronologia.component';
import { PropositoLibroComponent } from './core/proposito-libro/proposito-libro.component';
import { TeologiaComponent } from './areas/teologia/teologia.component';
import { AplicacionHomileticaComponent } from './areas/aplicacion-homiletica/aplicacion-homiletica.component';
import { IntroduccionComponent } from './areas/introduccion/introduccion.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContextoInternoComponent,
    ContentSidenavComponent,
    LibroMismoComponent,
    DivisionParrafosComponent,
    AgrupacionParrafosComponent,
    ElementoExistencialHumanoComponent,
    IdentificacionCulturaComponent,
    EvaluacionCulturaComponent,
    AnalisisProblemasComponent,
    SemanticaComponent,
    DefinicionPalabrasComponent,
    LexicoComponent,
    EtimologiaComponent,
    UsoPalabraComponent,
    PatronesSemanticosComponent,
    CamposSemanticosComponent,
    FrecuenciaUsoComponent,
    ConnotacionDenotacionComponent,
    SemanticaOracionesComponent,
    UsusLoquendiComponent,
    SemanticaOfComponent,
    GramaticaComponent,
    SustantivosComponent,
    VerbosComponent,
    PreposicionesComponent,
    AdjetivosAdverbiosComponent,
    SintaxisComponent,
    IntencionAutorComponent,
    TemaComponent,
    IdeasComponent,
    IntencionParrafoComponent,
    ArgumentoEsquematizacionComponent,
    PasajeTemaComponent,
    GeneroComponent,
    LiteraturaComponent,
    FormulasExpresionComponent,
    PatronesRetoricaComponent,
    EvaluacionTextoOriginalComponent,
    FigurasDiccionComponent,
    ModismosComponent,
    ContextoExternoComponent,
    AutorComponent,
    DestinatariosComponent,
    HistoriaComponent,
    CulturaComponent,
    ReligionComponent,
    PoliticaComponent,
    FilosofiaComponent,
    GeografiaComponent,
    CronologiaComponent,
    PropositoLibroComponent,
    TeologiaComponent,
    AplicacionHomileticaComponent,
    IntroduccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

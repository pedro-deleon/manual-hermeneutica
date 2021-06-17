import { Component, OnInit } from "@angular/core";
import { FlatTreeControl } from "@angular/cdk/tree";
import {
  MatTreeFlattener,
  MatTreeFlatDataSource
} from "@angular/material/tree";

interface AreaNode {
  name: string;
  route?: string;
  children?: AreaNode[];
}

const TREE_DATA: AreaNode[] = [
  {
    name: "INTRODUCCIÓN",
    route: "/area/introduccion",
    children: []
  },
  {
    name: "CONTEXTO INTERNO",
    children: [
      { name: "Desde el Libro Mismo", route: "/core/libro-mismo" },
      { name: "Divisiones de los Párrafos", route: "/core/division-parrafos" },
      {
        name: "Agrupación de los Párrafos",
        route: "/core/agrupacion-parrafos"
      },
      {
        name: "Elemento Existencial Humano",
        route: "/core/elemento-existencial-humano"
      },
      {
        name: "Identificación de la Cultura",
        route: "/core/identificacion-cultura"
      },
      { name: "Evaluación de la Cultura", route: "/core/evaluacion-cultura" },
      {
        name: "Técnica de Análisis de los Problemas",
        route: "/core/analisis-problemas"
      }
    ],
    route: "/area/contexto-interno"
  },
  {
    name: "SEMÁNTICA",
    children: [
      {
        name: "Definición de palabras y expresiones",
        route: "/core/definicion-palabras"
      },
      { name: "Léxico del idioma original", route: "/core/lexico" },
      { name: "Etimología", route: "/core/etimologia" },
      { name: "Uso de una palabra", route: "/core/uso-palabra" },
      {
        name: "Categorías de patrones semánticos",
        route: "/core/patrones-semanticos"
      },
      { name: "Campos semánticos", route: "/core/campos-semanticos" },
      { name: "Frecuencia del uso", route: "/core/frecuencia-uso" },
      {
        name: "Connotación y denotación",
        route: "/core/connotacion-denotacion"
      },
      {
        name: "Clasificación semántica oraciones",
        route: "/core/semantica-oraciones"
      },
      { name: "Usus Loquendi", route: "/core/usus-loquendi" },
      { name: "Observaciones Finales", route: "/core/semantica-of" }
    ],
    route: "/area/semantica"
  },
  {
    name: "GRAMATICA",
    children: [
      { name: "Sustantivos", route: "/core/sustantivos" },
      { name: "Verbos", route: "/core/verbos" },
      { name: "Preposiciones", route: "/core/preposiciones" },
      { name: "Adjetivos y adverbios", route: "/core/adjetivos-adverbios" }
    ],
    route: "/area/gramatica"
  },
  {
    name: "SINTAXIS",
    children: [
      { name: "La intención del autor", route: "/core/intencion-autor" },
      { name: "El tema", route: "/core/tema" },
      { name: "Las ideas", route: "/core/ideas" },
      { name: "La intención del párrafo", route: "/core/intencion-parrafo" },
      {
        name: "Esquematización del argumento",
        route: "/core/argumento-esquematizacion"
      },
      { name: "El pasaje y el tema del libro", route: "/core/pasaje-tema" }
    ],
    route: "/area/sintaxis"
  },
  {
    name: "LITERATURA",
    children: [
      { name: "Género", route: "/core/genero" },
      { name: "Formulas de expresión", route: "/core/formulas-expresion" },
      { name: "Patrones de retórica", route: "/core/patrones-retorica" },
      {
        name: "Evaluación del texto original",
        route: "/core/evaluacion-texto-orginal"
      },
      { name: "Figuras de dicción", route: "/core/figuras-diccion" },
      { name: "Modismos", route: "/core/modismos" }
    ],
    route: "/area/literatura"
  },
  {
    name: "CONTEXTO EXTERNO",
    children: [
      { name: "El autor", route: "/core/autor" },
      { name: "Los destinatarios", route: "/core/destinatarios" },
      { name: "La historia", route: "/core/historia" },
      { name: "La cultura", route: "/core/cultura" },
      { name: "La religión", route: "/core/religion" },
      { name: "La política", route: "/core/politica" },
      { name: "La filosofía", route: "/core/filosofia" },
      { name: "La geografía", route: "/core/geografia" },
      { name: "La cronología", route: "/core/cronologia" },
      { name: "El proposito del libro", route: "/core/proposito-libro" }
    ],
    route: "/area/contexto-externo"
  },
  {
    name: "TEOLOGÍA",
    route: "/area/teologia",
    children: []
  },
  {
    name: "APLICACIÓN HOMILÉTICA",
    route: "/area/aplicacion-homiletica",
    children: []
  }
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: "content-sidenav",
  templateUrl: "./content-sidenav.component.html",
  styleUrls: ["./content-sidenav.component.css"]
})
export class ContentSidenavComponent {
  private _transformer = (node: AreaNode, level: number) => {
    return {
      expandable: node.children && node.children.length > 0,
      name: node.name,
      route: node.route,
      level: level
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  navigate(route: string) {
    console.log(route);
  }
}

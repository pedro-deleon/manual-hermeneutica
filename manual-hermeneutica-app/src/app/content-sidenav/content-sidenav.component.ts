import { Component, OnInit } from "@angular/core";
import { FlatTreeControl } from "@angular/cdk/tree";
import {
  MatTreeFlattener,
  MatTreeFlatDataSource
} from "@angular/material/tree";

// interface AreaNode {
//   name: string;
//   children?: AreaNode[];
// }

// const TREE_DATA: AreaNode[] = [
//   {
//     name: 'CONTEXTO INTERNO',
//     children: [
//       { name: 'Desde el Libro Mismo' },
//       { name: 'Divisiones de los Párrafos' },
//       { name: 'Agrupación de los Párrafos' },
//       { name: 'Elemento Existencial Humano' },
//       { name: 'Identificación de la Cultura' },
//       { name: 'Evaluación de la Cultura' },
//       { name: 'Técnica de Análisis de los Problemas' }
//     ]
//   }

// ]

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: "Fruit",
    children: [{ name: "Apple" }, { name: "Banana" }, { name: "Fruit loops" }]
  },
  {
    name: "Vegetables",
    children: [
      {
        name: "Green",
        children: [{ name: "Broccoli" }, { name: "Brussel sprouts" }]
      },
      {
        name: "Orange",
        children: [{ name: "Pumpkins" }, { name: "Carrots" }]
      }
    ]
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
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
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
}

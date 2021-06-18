(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"toolbar\">\r\n  <div style=\"display: flex\">\r\n    <button mat-icon-button (click)=\"snav.toggle()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <h1>{{ \"Manual Hermenéutica\" | uppercase }}</h1>\r\n  </div>\r\n\r\n  <div>\r\n<!--    <mat-icon class=\"my-icon\"  aria-hidden=\"false\" aria-label=\"Dark mode icon\">dark_mode</mat-icon>-->\r\n    <a href=\"https://github.com/pedro-deleon/manual-hermeneutica\" target=\"_blank\"><mat-icon class=\"my-icon\"  svgIcon=\"github\"></mat-icon></a>\r\n\r\n  </div>\r\n\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container>\r\n  <mat-sidenav\r\n    #snav\r\n    class=\"sidenav\"\r\n    [style.marginTop.px]=\"mobileQuery.matches ? 40 : 0\"\r\n    [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\r\n    [fixedInViewport]=\"mobileQuery.matches\"\r\n    [(opened)]=\"opened\"\r\n  >\r\n    <content-sidenav></content-sidenav>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content [@fadeInOut]=\"prepareRoute(outletRef)\" class=\"sidenav-content\">\r\n    <router-outlet #outletRef=\"outlet\"></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n<footer>\r\n\r\n</footer>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/aplicacion-homiletica/aplicacion-homiletica.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/aplicacion-homiletica/aplicacion-homiletica.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 8. Aplicación Homilética</h2>\r\n<p>Esta área es solamente complementaria. (Puntos Extras)</p>\r\n<p>\r\n  Haz en tu libreta bosquejos de sermones expositivos de acuerdo al material que\r\n  has analizado o aprendido.\r\n</p>\r\n<p>La Biblia te da el Tema y los Puntos del Sermón.</p>\r\n<p>\r\n  En Clase durante veremos ejemplos de acuerdo a la Carta, Libro o Pasaje que\r\n  estemos estudiando y analizando.\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/contexto-externo/contexto-externo.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/contexto-externo/contexto-externo.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 6. Contexto Externo</h2>\r\n<p>\r\n  <strong>PROPOSITO: </strong>En ésta área estamos tratando de descubrir el\r\n  contexto que rodea el texto, que en alguna forma condiciona o aclara su\r\n  mensaje. Estamos buscando afuera del texto bíblico y \"no\" dentro de él.\r\n</p>\r\n\r\n<p>\r\n  <strong>ADVERTENCIA: </strong>Aunque sea muy común que los libros y cursos\r\n  empiezan con este área, hay cierto peligro en arrancar aquí con lo que\r\n  tradicionalmente se llamen introducción. El peligro es que fácilmente uno\r\n  puede tomar a la introducción como la verdad que está siendo justificada por\r\n  el texto bíblico, o que uno presenta la cosmovisión en la introducción que\r\n  impone su perspectiva \"humanista\" para interpretar los relatos bíblicos.\r\n</p>\r\n\r\n<p>\r\n  Para este paso no leemos el texto bíblico, sino trataremos de entender su\r\n  mensaje (que ya tenemos en mente por haber hecho las áreas de CONTEXTO\r\n  INTERNO, SEMANTICA, GRAMATICA, LITERATURA, Y SINTAXIS) por medio de la\r\n  historia, cultura, estilo de vida, religiones paganas, filosofías que influían\r\n  en el medio en que vivían, etc.\r\n</p>\r\n\r\n<p>\r\n  En los comentarios y libros de referencia este paso se llama Introducción\r\n  porque se considera que es el estudio que se hace antes del estudio bíblico,\r\n  sin embargo, cuando se preparan sermones y enseñanzas no es el primer paso que\r\n  se hace y a veces se omite por completo. Otra razón por la cual esta sección\r\n  no va primero es que estamos viendo la cultura en la Biblia y no la Biblia en\r\n  la cultura. Si se hacen las preguntas culturales antes de haber leído el texto\r\n  bíblico, se puede condicionar su lectura por una perspectiva selectiva y\r\n  perder el mensaje de la Biblia. Por tanto tenemos que tener una clara idea del\r\n  mensaje del texto bíblico para evaluar su relación con su cultura. Si lo\r\n  hacemos al revés, es posible hacer relativo el mensaje bíblico poniéndolo en\r\n  un marco cultural. La cultura tiene que ser tratada dentro del marco del\r\n  mensaje bíblico.\r\n</p>\r\n<p>Cuenta con los siguientes 10 pasos:</p>\r\n<ol>\r\n  <li>El autor</li>\r\n  <li>Los destinatarios</li>\r\n  <li>La historia</li>\r\n  <li>La cultura</li>\r\n  <li>La religión</li>\r\n  <li>La política</li>\r\n  <li>La filosofía</li>\r\n  <li>La geografía</li>\r\n  <li>La cronología</li>\r\n  <li>La intención del autor</li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/contexto-interno/contexto-interno.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/contexto-interno/contexto-interno.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 1. Contexto Interno</h2>\r\n<p>El contexto interno es donde entedemos como habla el texto de si mismo</p>\r\n<p>Esta conformado por los siguientes 7 pasos: </p>\r\n<ol>\r\n  <li>El Contexto desde el Libro Mismo</li>\r\n  <li>Las Divisiones de los Párrafos</li>\r\n  <li>La Unidad de Comunicación o la Agrupación de los Párrafos</li>\r\n  <li>El Elemento Existencial Humano</li>\r\n  <li>Identificación de la Cultura</li>\r\n  <li>Evaluación de la Cultura</li>\r\n  <li>Técnica de Análisis de los Problemas</li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/gramatica/gramatica.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/gramatica/gramatica.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 3. Grámatica</h2>\r\n<p>\r\n  <strong>Definición: </strong>Gramática es el estudio de los componentes\r\n  del idioma (la oración, el párrafo y las palabras; y la relación entre\r\n  ellos. Para entender su significado). Para poder leer y escribir bien.\r\n</p>\r\n\r\n<p>\r\n  <strong>Proposito: </strong>En esta sección nos concentraremos en la\r\n  función de las palabras dentro de una oración. En la sección de sintaxis\r\n  veremos la relación entre las palabras en una forma global. Aquí\r\n  estudiaremos la función de las palabras.\r\n</p>\r\n\r\n<p>\r\n  SE RECOMIENDA QUE EL ALUMNO CONSULTE UN LIBRO DE GRAMATICA PARA RESOLVER\r\n  SUS DUDAS\r\n</p>\r\n<p>Esta conformado por los siguientes 4 pasos: </p>\r\n<ol>\r\n  <li>Sustantivos </li>\r\n  <li>Verbos</li>\r\n  <li> Preposiciones </li>\r\n  <li>Adjetivos y adverbios</li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/introduccion/introduccion.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/introduccion/introduccion.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Introducción</h2>\r\n<div class=\"seccion-autor\">\r\n  <p>\r\n    Manual del Alumno elaborado por el Teólogo\r\n    <a\r\n      href=\"https://twitter.com/pastorjp\"\r\n      target=\"_blank\"\r\n      rel=\"noopener noreferrer\"\r\n      >José Pérez Pérez</a\r\n    >\r\n  </p>\r\n\r\n  <img\r\n    src=\"https://pbs.twimg.com/profile_images/1217923941555146752/W8wPftwZ_200x200.jpg\"\r\n    alt=\"Fotografía Pastor José Perez Perez\"\r\n    width=\"250\"\r\n  />\r\n</div>\r\n\r\n<p>\r\n  El material cuenta con 8 areas distintas las cuales cada una de ellas tiene\r\n  una serie de pasos que el alumno debe seguir.\r\n</p>\r\n<p>Las 8 areas son:</p>\r\n<ol>\r\n  <li>Contexto Interno</li>\r\n  <li>Semántica</li>\r\n  <li>Gramatica</li>\r\n  <li>Sintaxis</li>\r\n  <li>Literatura</li>\r\n  <li>Contexto Externo</li>\r\n  <li>Teología</li>\r\n  <li>Aplicación Homilética</li>\r\n</ol>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/literatura/literatura.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/literatura/literatura.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 5 Literatura</h2>\r\n<p>\r\n  <strong>Proposito:</strong>Identificar y entender como el género literario\r\n  o el estilo influyen en la interpretación de un texto.\r\n</p>\r\n\r\n<p>\r\n  El énfasis en el estudio de la Biblia como literatura es relativamente\r\n  reciente. Este estudio tiene varios componentes que no han sido parte del\r\n  estudio tradicional. Se caracteriza por varios factores complicados:\r\n</p>\r\n\r\n<ol>\r\n  <li>\r\n    Un trabajo serio para identificar los géneros literarios que se\r\n    encuentran en la Biblia.\r\n  </li>\r\n  <li>\r\n    Una disposición de tratar los textos bíblicos como unidades terminadas\r\n    en lugar de fragmentos. Esta aceptación de la unidad de los libros de la\r\n    Biblia es un cambio radical de la crítica que la Biblia ha recibido en\r\n    los últimos dos siglos.\r\n  </li>\r\n  <li>\r\n    Un enfoque en la Biblia como está ahora, en lugar de profundizar en el\r\n    texto.\r\n  </li>\r\n  <li>\r\n    Una inclinación de usar términos literarios en lugar de términos\r\n    teológicos para explicar las historias y poemas de las Escrituras.\r\n  </li>\r\n  <li>Una apreciación del arte en la Biblia.</li>\r\n  <li>\r\n    Una sensibilidad a la dimensión de la experiencia en las Escrituras.\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/semantica/semantica.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/semantica/semantica.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 2. Semántica</h2>\r\n<p>Esta conformado por los siguientes 10 pasos: </p>\r\n<ol>\r\n  <li>Definición de palabras y expresiones</li>\r\n  <li>El Léxico del idioma original</li>\r\n  <li>Etimología</li>\r\n  <li>El uso de una palabra </li>\r\n  <li> Categorías de patrones semánticos </li>\r\n  <li> Campos semánticos </li>\r\n  <li> Frecuencia del uso </li>\r\n  <li> Connotación y denotación </li>\r\n  <li>Clasificación semántica de las oraciones </li>\r\n  <li> Usus Loquendi </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/sintaxis/sintaxis.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/sintaxis/sintaxis.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 4. Sintaxis</h2>\r\n<p>\r\n  <strong>Propósito: </strong>Encontrar el pensamiento del autor, como\r\n  argumentaba, que creía y cuáles eran sus razones principales.\r\n</p>\r\n<p>\r\n  <strong>Sintáxis: </strong>Es la parte de la gramática que estudia la\r\n  función y relación de las palabras en la oración y la función y relación\r\n  entre las oraciones mismas.\"\r\n</p>\r\n<p>Esta conformado por los siguientes 6 pasos: </p>\r\n<ol>\r\n  <li> La intención del autor </li>\r\n  <li> El tema </li>\r\n  <li>Las ideas</li>\r\n  <li>La intención del parrafo</li>\r\n  <li>El argumento y esquematización del argumento </li>\r\n  <li> El pasaje y el tema del libro</li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/teologia/teologia.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/teologia/teologia.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 7. Teología</h2>\r\n<p>Esta área es solamente complementaria. (Puntos Extras)</p>\r\n<p>\r\n  Haz en tu libreta una lista de las Doctrinas que se encuentran en el material\r\n  Bíblico que estudiaste y analizaste.\r\n</p>\r\n<p>Considera este Bosquejo de la Teología sistemática de W. Grudem</p>\r\n<ol>\r\n  <li>La Doctrina de La Palabra de Dios</li>\r\n  <li>La Doctrina de Dios</li>\r\n  <li>La Doctrina del Hombre</li>\r\n  <li>La Doctrina de Cristo y el Espíritu Santo</li>\r\n  <li>La Doctrina de la Aplicación de La Redención</li>\r\n  <li>La Doctrina de la Iglesia</li>\r\n  <li>La Doctrina del Futuro</li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content-sidenav/content-sidenav.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content-sidenav/content-sidenav.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n  <!-- This is the tree node template for leaf nodes -->\r\n  <mat-tree-node\r\n    *matTreeNodeDef=\"let node\"\r\n    matTreeNodePadding\r\n    routerLink=\"{{ node.route }}\"\r\n  >\r\n    <!-- use a disabled button to provide padding for tree leaf -->\r\n    <button mat-icon-button disabled></button>\r\n    <div class=\"tree-child\">{{ node.name }}</div>\r\n  </mat-tree-node>\r\n\r\n  \r\n  <!-- This is the tree node template for expandable nodes -->\r\n  <mat-tree-node\r\n    *matTreeNodeDef=\"let node; when: hasChild\"\r\n    matTreeNodePadding\r\n    routerLink=\"{{ node.route }}\"\r\n  >\r\n\r\n\r\n  <button\r\n  mat-icon-button\r\n  matTreeNodeToggle\r\n  [attr.aria-label]=\"'toggle ' + node.name\"\r\n>\r\n\r\n    \r\n      <mat-icon>\r\n        {{ treeControl.isExpanded(node) ? \"expand_more\" : \"chevron_right\" }}\r\n      </mat-icon>\r\n    \r\n\r\n</button>\r\n    <div class=\"tree-parent\">{{ node.name }}</div>\r\n\r\n  </mat-tree-node>\r\n</mat-tree>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/adjetivos-adverbios/adjetivos-adverbios.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/adjetivos-adverbios/adjetivos-adverbios.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Gramatica</span> </h2>\r\n<h3>Paso 4. Adjetivos y adverbios</h3>\r\n<p>\r\n  <strong>META: </strong>Identificar las palabras que modifican a otras y\r\n  clasificarlas por ser adverbios o adjetivos para saber si se modifica a el\r\n  sustantivo o en la acción.\r\n</p>\r\n<p>\r\n  Se debe observar si la palabra esta modificada o condicionada por otra\r\n  palabra. Las palabras que modifican sustantivos son adjetivos. Y las\r\n  palabras que modifican a los verbos o el predicado son adverbios. Por lo\r\n  general los adverbios terminan en \"mente\".\r\n</p>\r\n\r\n<ol>\r\n  <li>\r\n    Identifica los adjetivos en la unidad de comunicación que estas\r\n    estudiando. Marcarlos en color anaranjado en tu libreta (TODOS).\r\n  </li>\r\n  <li>\r\n    Identifica los adverbios en la unidad de comunicación que estas\r\n    estudiando. Marcarlos en color rosa en tu libreta (TODOS).\r\n  </li>\r\n</ol>\r\n<strong>Preguntas para estudio bíblico: </strong>\r\n<p>Aparte de la accion</p>\r\n<ol>\r\n  <li>\r\n    ¿Hay una descripción de cómo se hace la acción por medio de un adverbio?\r\n  </li>\r\n  <li>\r\n    ¿Hay una manera en que el sustantivo está‚ cualificado o descrito por un\r\n    adjetivo? Explica como\r\n  </li>\r\n</ol>\r\n\r\n<strong>Adjentivos: </strong>\r\n<ol>\r\n  <li>Lo que PRECISA o LIMITA a los sustantivos.</li>\r\n  <li>\r\n    Califica (que informan sobre alguna cualidad del objeto). Ejemplo: a.\r\n    Perro negro. b. Letra muda.\r\n  </li>\r\n  <li>\r\n    Determinan y Concretan: (que limitan la extensión en que debe tomarse el\r\n    sustantivo (Hoyo, 1977, 0.49). Ejemplos: cinco, cada, este, aquel.\r\n  </li>\r\n</ol>\r\n\r\n<strong>Pregunta para un estudio bíblico: </strong>\r\n<ul>\r\n  <li>\r\n    ¿Cómo está calificado, determinado o concretado el sustantivo por un\r\n    adverbio específico?\r\n  </li>\r\n</ul>\r\n\r\n<strong>Adverbios: </strong>\r\n<p>\r\n  El adverbio hace la misma función que el adjetivo pero solamente con los\r\n  verbos, adjetivos y otros adverbios. Lo que PRECISA o LIMITA el verbo,\r\n  adjetivo, y otro adverbios.\r\n</p>\r\n<ol>\r\n  <li>\r\n    de afirmación: si, cierto, ciertamente, verdaderamente, realmente,\r\n    naturalmente, también.\r\n  </li>\r\n  <li>de negación: no, nunca, jamás, ni, tampoco.</li>\r\n  <li>de duda: acaso, tal vez, quizá.</li>\r\n  <li>\r\n    de tiempo: hoy, ayer, anteayer, mañana, ahora, antes, después, entonces,\r\n    luego, tarde, temprano, puesto, pronto, siempre, nunca, jamás, cuando,\r\n    todavía, ya, mientras, aun, antaño, hogaño, antiguamente, últimamente,\r\n    pues, entonces.\r\n  </li>\r\n  <li>\r\n    de lugar: aquí, ah¡, allá, acá, allí, acullá, cerca, lejos, donde,\r\n    adonde, enfrente, delante, atrás, detrás, dentro, fuera, arriba, abajo,\r\n    encima, debajo, junto, allende.\r\n  </li>\r\n  <li>de orden: últimamente, primeramente, sucesivamente.</li>\r\n  <li>\r\n    de cantidad: mucho, poco, bastante, muy, casi, harto, demasiado, tanto,\r\n    cuanto, nada.\r\n  </li>\r\n  <li>de comparación: tan, mas, menos, mejor, peor.</li>\r\n  <li>\r\n    de modo: bien, mal, apenas, así, despacio, aprisa, alto, bajo, excepto,\r\n    conforme, aposta, gratis, adrede, fuerte, suave y muchas palabras que\r\n    terminan con \"-mente\".\r\n  </li>\r\n</ol>\r\n<strong>Pregunta para un estudio bíblico: </strong>\r\n<ol>\r\n  <li>¿Cuales son los adverbios que se encuentran en el texto?</li>\r\n  <li>¿Cuáles son las palabras que modifican?</li>\r\n  <li>\r\n    ¿Cómo nos ayudan a entender el concepto intencionado por el autor?\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/agrupacion-parrafos/agrupacion-parrafos.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/agrupacion-parrafos/agrupacion-parrafos.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Interno</span> </h2>\r\n<h3>Paso 3. La Unidad de Comunicación o la Agrupación de los Párrafos.</h3>\r\n<p>\r\n  <strong>META:</strong> Determinar las unidades de comunicación del autor,\r\n  para poder estudiar en temas completos su pensamiento.\r\n</p>\r\n<p>\r\n  Hay una práctica muy popular: ver la Biblia como un conjunto de\r\n  versículos, cada uno <strong>independiente</strong> del otro. Siguiendo\r\n  esta práctica: los sermones, las lecturas bíblicas, los libros de\r\n  meditación diaria, los libros de Teología Sistemática, libros que tratan\r\n  un problema de la vida cristiana, y otros, citan versículos\r\n  <strong>aislados</strong> , sin prestar atención al\r\n  <strong>contexto</strong>. Detrás de esta práctica hay una suposición de\r\n  que todo lo que dice la Biblia es VERDAD sin importar el\r\n  <strong>orden</strong> de las frases, como si fuera un libro de\r\n  <strong>formulas</strong>.\r\n</p>\r\n\r\n<p>\r\n  Sin pensar hemos llegado a una práctica que trata el pensamiento del autor\r\n  en <strong></strong> fragmentos, sin la necesidad de\r\n  <strong></strong> conectar una frase a una oración, párrafo, o unidad de\r\n  comunicación. Al tratar la Biblia de esta manera, nunca forman una unidad\r\n  de <strong>comunicación completa</strong> que necesitamos estudiar para\r\n  poder <strong>entender</strong> a su autor.\r\n</p>\r\n\r\n<p>\r\n  En vez de esto debemos fijar los límites del texto de estudio. A veces\r\n  puede ser un párrafo. Pero en otras ocasiones puede ser necesario estudiar\r\n  varios párrafos o un libro entero para asegurar que se está manejando una\r\n  idea completa\r\n</p>\r\n\r\n<p>\r\n  Si no se maneja una idea completa, nos podemos equivocar.\r\n</p>\r\n\r\n<p>\r\n  Es importante tratar con una unidad de comunicación completa. Si solamente\r\n  tratamos ideas incompletas no podemos esperar que nuestra comprensión del\r\n  texto sea adecuada. Cuando una persona estudia la Biblia salteando, es\r\n  decir, sin tomar en cuenta las unidades de comunicación, el riesgo es\r\n  confundir la idea del autor. Ya no es posible recuperar sus argumentos.\r\n  Los eventos se quedan sin el hilo que le daría sentido.\r\n</p>\r\n\r\n<strong>Preguntas para un estudio bíblico</strong>\r\n<ol>\r\n  <li>¿Dónde empieza a hablar el autor de este tema?</li>\r\n  <li>¿Dónde termina?</li>\r\n  <li>¿Cuáles son las sub-divisiones que el autor da al tema?</li>\r\n  <li>¿Por qué dividiría el autor el tema así?.</li>\r\n  <li>\r\n    ¿Hay unidades dentro del libro que son independientes unas de otras?.\r\n  </li>\r\n  <li>¿Qué podemos entender por separado, o sin ver todo el libro?</li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/analisis-problemas/analisis-problemas.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/analisis-problemas/analisis-problemas.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Interno</span> </h2>\r\n<h3>Paso 7. Técnica del análisis de los Problemas.</h3>\r\n<p>\r\n  <strong>META:</strong>Analizar los problemas, para ver cuales fueron sus\r\n  causas y consecuencias reales en el pueblo de Dios, con el fin de tener\r\n  clara la idea que se trata en el texto.\r\n</p>\r\n\r\n<strong>En tu libreta:</strong>\r\n<p><strong>PRIMERO:</strong>Enumera los problemas.</p>\r\n<p><strong>SEGUNDO:</strong>Descríbelos.</p>\r\n<p>\r\n  <strong>TERCERO:</strong>Menciona las causas que ocasionaron los\r\n  problemas.\r\n</p>\r\n<p>\r\n  <strong>CUARTO:</strong>¿Qué consecuencias negativas trajeron los\r\n  problemas a los destinatarios del libro?\r\n</p>\r\n<p>\r\n  <strong>QUINTO:</strong>¿Cuál es la solución que ofrece el autor al\r\n  problema?\r\n</p>\r\n\r\n<strong>Preguntas para estudio bíblico</strong>\r\n<ol>\r\n  <li>¿Cuál es la solución que ofrece el autor al problema?</li>\r\n  <li>¿Cuáles fueron las causas que menciona el autor?</li>\r\n  <li>¿Cuáles son las consecuencias mencionadas?</li>\r\n  <li>¿Qué soluciones ofrece el autor para sus destinatarios?</li>\r\n  <li>¿Hay situaciones semejantes hoy?</li>\r\n  <li>¿Podemos usar la solución que ofrece el autor?</li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/argumento-esquematizacion/argumento-esquematizacion.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/argumento-esquematizacion/argumento-esquematizacion.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Sintaxis</span> </h2>\r\n<h3>Paso 5. Identificación y esquematización del argumento</h3>\r\n<p>\r\n  <strong>Meta: </strong>Hacer un esquema el texto tomando en cuenta todos\r\n  los elementos de estructura para aclarar el argumento del autor.\r\n</p>\r\n\r\n<p>\r\n  HAZ UN ESQUEMA DE SINTAXIS DEL Párrafo en tu libreta indicando la relación\r\n  de todas las palabras con el tema principal.\r\n</p>\r\n\r\n<p>\r\n  <strong>OBSERVACION: </strong>Es preferible hacer un borrador NO en tu\r\n  libreta, antes del trabajo final.\r\n</p>\r\n\r\n<strong>Instrucciones: </strong>\r\n<p>\r\n  1. Vamos a escribir TODO el texto nuevamente de otra forma (esquema de\r\n  Sintaxis) pero en el mismo orden.\r\n</p>\r\n<p>\r\n  2. Al llegar a una nueva marca de puntuación (punto, coma, Interrogación,\r\n  admiración etc…) se empieza un nuevo renglón en el esquema de Sintaxis.\r\n</p>\r\n\r\n<p>\r\n  Empieza con el tema a la izquierda; con el sustantivo, verbo, y predicado\r\n  de la oración que contiene el tema del párrafo. Generalmente esta es la\r\n  primera oración en el párrafo.\r\n</p>\r\n\r\n<p>\r\n  Subordina por medio de espacios dentados. Los adjetivos debajo de los\r\n  sustantivos, los adverbios debajo de los verbos. Las palabras que\r\n  modifican debajo de la palabra que están modificando.\r\n</p>\r\n\r\n<strong>NOTEN BIEN: </strong>\r\n<p>\r\n  A diferencia de un diagrama de oración, un adjetivo o pronombre posesivo\r\n  en la mayoría de los casos estará en la misma línea del sustantivo que\r\n  modifica\r\n</p>\r\n<p>5. Las palabras paralelas deben ser paralelas en la presentación.</p>\r\n<strong>NOTEN BIEN: </strong>\r\n<p>\r\n  El problema de coordinación y subordinación es más complejo cuando hay\r\n  varios elementos que modifiquen la(s) misma(s) palabra(s), mas no son\r\n  coordinados entre sí.\r\n</p>\r\n<p>\r\n  Las conjunciones deben ser puestas entre las líneas que son comparadas.\r\n</p>\r\n\r\n<p>\r\n  6. Aislar los elementos de estructura. Recomendamos que subrayen en el\r\n  esquema estos elementos.\r\n</p>\r\n<strong>NOTEN BIEN: </strong>\r\n<p>\r\n  Este es un paso especialmente importante porque muchas de las decisiones\r\n  sintácticas- gramaticales están hechas en este punto. Las palabras: mas,\r\n  pero, por tanto, por lo tanto, etc.\r\n</p>\r\n<p>\r\n  7. Cuando el tema no se encuentra al principio del párrafo empieza con la\r\n  primera renglón como siempre y haz un círculo alrededor de lo que se tiene\r\n  que correr hacia la derecha en la copia final\r\n</p>\r\n<p>\r\n  8. Cuando se haya terminado de escribir todo el párrafo, debes regresar a\r\n  leerlo coloreando las palabras, situaciones o conceptos que se repitan\r\n  para trazar el hilo del argumento.\r\n</p>\r\n<strong>NOTEN BIEN: </strong>\r\n<p>\r\n  Con frecuencia las decisiones claves de interpretación serán tomadas al\r\n  momento de hacer el esquema de Sintaxis.\r\n</p>\r\n<strong>Preguntas para un estudio biblico: </strong>\r\n<ol>\r\n  <li>¿Cuál es el tema principal del párrafo?</li>\r\n  <li>¿Cómo apoya el autor su idea en este párrafo?</li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/autor/autor.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/autor/autor.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\r\n<h3>Paso 1: El autor</h3>\r\n<p><strong>META: </strong> Conocer el mundo del autor de la obra que estudiamos. No por la información dentro de esta\r\n  obra, sino por las circunstancias políticas, geográficas, culturales y religiosas que le rodeaban. </p>\r\n<p>Nuestra tarea es poder entender mejor un libro por medio de datos históricos. Si estamos estudiando la carta a los\r\n  Romanos sería de mucho interés saber acerca de Pablo. Ya tenemos muchos datos con base en el paso: ELEMENTO\r\n  EXISTENCIAL HUMANO. Lo que tenemos que ver en este paso es la geografía de su vida. ¿Dónde nació? ¿Cuáles serían sus\r\n  experiencias en esta ciudad? ¨ ¿Cuáles serían las maneras de vivir en esta ciudad? ¿Era un campo de agricultura, o una\r\n  ciudad industrial? ¿Tendría una universidad? ¿Habrá jugado en un río o en el mar de niño? ¿Quién era su\r\n  maestro/rabino? ¿Qué fama tendría este maestro? ¿Cuál era su posición en la nación judía? Esta información no se\r\n  encuentra dentro de la misma Biblia. Tenemos que ir a otras fuentes de información.</p>\r\n<p> Ejemplo: ¿Cuál es la situación personal del autor: Repasa la situación personal de Pablo cuando escribió Filipenses\r\n  y II Timoteo (vea Fil. 1:13-14; Hechos 28:16,30; II Timoteo 1:11, 1:15-17, 4:9-18) y explica en un breve párrafo como\r\n  esto nos ayuda a entender la marcada diferencia en su actitud entre Fil. 3:12-13 y II Tim. 4:6-8.\" </p>\r\n<strong>Preguntas para estudio bíblico: </strong>\r\n<ol>\r\n  <li>¿Cuáles eran las circunstancias en las que vivió el autor? </li>\r\n  <li>¿Cuáles eran sus maneras de saludar a la gente? </li>\r\n  <li>¿Qué la luz que nos dan estos hechos para entender la intención que tuvo al escribir? </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/campos-semanticos/campos-semanticos.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/campos-semanticos/campos-semanticos.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\r\n<h3>Paso 6: Campos semánticos</h3>\r\n<p>\r\n  <strong>META:</strong> Conocer como la idea representada con nuestras\r\n  palabras se relaciona con otras ideas.\r\n</p>\r\n<p>\r\n  En este paso estamos buscando la relación entre las palabras que indica\r\n  como pensaba el autor\r\n</p>\r\n<p>\r\n  <strong>Antónimos - Opuestos Polares:</strong>palabras que expresan ideas\r\n  opuestas, como las palabras robar y comprar. Noten bien que estas palabras\r\n  son sub-grupos de otra categoría mas grande: conseguir o adquirir. A veces\r\n  el énfasis no cae en la forma de conseguir algo como robar – comprar sino\r\n  en si lo tienes o no lo tienes, como en el caso de Jacob y Esaú cuando\r\n  pelearon su herencia.\r\n</p>\r\n<p>\r\n  <strong>Palabras empalmadas: </strong>palabras que comparten un\r\n  significado aunque las palabras en sé no son sinónimos completos. Un\r\n  ejemplo sería: bella, bonita, guapa, etc.\r\n</p>\r\n<p>\r\n  <strong>Palabras continuas:</strong> palabras que expresan un continuo de\r\n  “x” a “y”. Un ejemplo son las palabras que expresan lo que va de caliente\r\n  a frío, o moverse, gatear, caminar, correr.\r\n</p>\r\n<p>\r\n  <strong>Palabras continuas:</strong> la palabra perro está incluida en la\r\n  palabra animal, la palabra árbol en la palabra planta. Pero no al revés,\r\n  porque la palabra animal no está incluida en la palabra perro, ni la\r\n  palabra planta en la de árbol.\r\n</p>\r\n<p>\r\n  <strong>Equivalentes:</strong>Palabras que tienen el mismo significado.\r\n  Esto no es muy común, por tanto debes tratar de encontrar las diferencias\r\n  más pequeñas entre las dos palabras. UNA OBSERVACION: \"Una palabra que\r\n  significa todo no significa nada. Para que una palabra signifique algo, no\r\n  debe significar otra cosa. Limitar la ley de contradicción elimina todo\r\n  significado”. Siempre debemos estar consientes de qué es lo que esta\r\n  incluido o excluido en el significado de una palabra. No debemos tener\r\n  significados muy amplios de una palabra porque entonces su verdadero\r\n  significado queda confuso. En el grado que tenemos confusa nuestra mente,\r\n  en cuanto al contenido de una palabra, quedamos confusos en el verdadero\r\n  conocimiento de las Escrituras.\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/connotacion-denotacion/connotacion-denotacion.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/connotacion-denotacion/connotacion-denotacion.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\r\n<h3>Paso 8: Connotación y denotación</h3>\r\n<p>\r\n  <strong>META:</strong>Saber los valores que se relacionan con esta palabra\r\n  y no sólo su definición formal.\r\n</p>\r\n<strong>DEFINICIONES:</strong>\r\n<p>\r\n  <strong>Denotación</strong>es el significado más exacto o formal de una\r\n  palabra. Ejemplo: \"varón: hombre criatura racional del sexo masculino\r\n</p>\r\n<p>\r\n  <strong>Connotación</strong>son los significados secundarios o\r\n  adaptaciones culturales de una palabra. Escribe ejemplos en tu libret\r\n</p>\r\n<strong>Escribre ejemplos en tu libreta</strong>\r\n<p>\r\n  Es difícil captar todo lo que una palabra connota en la cultura bíblica,\r\n  porque no tenemos la misma red cultural de ideas. Solamente con un estudio\r\n  cuidadoso y prolongado podemos empezar a captar las connotaciones de los\r\n  idiomas originales. Sin embargo es necesario que estemos conscientes de la\r\n  posibilidad connotativa en los pasajes que estudiamos.\r\n</p>\r\n<strong>Preguntas para un estudio bíblico</strong>\r\n<ol>\r\n  <li>\r\n    ¿Cuál es la connotación y denotación de la palabra qué es clave en el\r\n    texto estudiado? <strong>Anota</strong>\r\n  </li>\r\n  <li>\r\n    ¿Está el autor usando la palabra en una forma denotativa o connotativa?\r\n  </li>\r\n  <li>\r\n    ¿Cuál es la valorización buena o mala que encontramos en esta palabra?\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/cronologia/cronologia.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/cronologia/cronologia.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\r\n<h3>Paso 9: La cronología</h3>\r\n<p>Linea del tiempo</p>\r\n<p><strong>META: </strong>Poder relacionar cronológicamente los eventos. </p>\r\n<p>Es importante que nos demos cuenta de la relación histórica de ellos. ¿Cuál fue primero y cuál fue segundo? A veces\r\n  pensamos que toda la Biblia fue escrita en un instante. Que Moisés tenía la misma información que nosotros. La\r\n  situación no es así. Para ayudarnos a captar esta relación de eventos es importante que hagamos una LINEA DE TIEMPO.\r\n  Una LINEA DE TIEMPO es una línea en donde se indica la relación de una secuencia de eventos históricos. La que sigue\r\n  es una LINEA DE TIEMPO indicando algunos de los personajes más importantes del Antiguo Testamento. Es importante que\r\n  sepamos la relación entre los eventos más trascendentes.</p>\r\n<p>También es importante que sepamos la secuencia de los eventos de la vida de una persona, para entender adecuadamente\r\n  su vida. Tomamos un ejemplo de la vida de Cristo. ¿Había resucitado Jesús antes de haber hecho los milagros?, ¿Por qué\r\n  por medio de este evento Dios le dio poder? Si tenemos una LINEA DE TIEMPO en nuestra mente nos damos cuenta de que\r\n  casi todos los milagros ocurrieron antes de Su Resurrección.</p>\r\n<strong>PREGUNTA PARA UN ESTUDIO BIBLICO: </strong>\r\n<ol>\r\n  <li>¿Cómo nos ayuda a entender el texto la relación entre los eventos? </li>\r\n</ol>\r\n<p>Haz una \"Línea de Tiempo\" en tu Libreta. </p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/cultura/cultura.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/cultura/cultura.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span></h2>\r\n<h3>Paso 4: La cultura</h3>\r\n<p>\r\n  <strong>META: </strong> Conocer la cultura que estaba presente cuando la obra\r\n  fue hecha, para poder entender la expresión del autor.\r\n</p>\r\n<p>\r\n  1. ¿Cuál es el trasfondo cultural del Libro que se está estudiando? Anota en\r\n  tu Libreta\r\n</p>\r\n<p>\r\n  Ejemplo: \"¿Cómo te ayuda el trasfondo cultural a entender los eventos de Rut\r\n  3:6-13?\"\r\n</p>\r\n<p>\r\n  Ejemplo: \"¿Crees tú que debemos obedecer la clara orden de Cristo de lavar los\r\n  pies uno a otro (Juan 13)? Si contestas que esto no es necesario porque han\r\n  habido cambios en la cultura de aquel tiempo con respecto a la actual, ¿Cómo\r\n  vas a responder a los que dicen que los mandamientos acerca de la\r\n  homosexualidad, el divorcio, y la autoridad del esposo en el hogar son\r\n  fenómenos culturales que no nos atan hoy?\"\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/definicion-palabras/definicion-palabras.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/definicion-palabras/definicion-palabras.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\r\n<h3>Paso 1: Definición de palabras y expresiones</h3>\r\n<p>\r\n  <strong>META:</strong>Conocer el significado de las palabras empleadas.\r\n</p>\r\n<ol>\r\n  <li>\r\n    Haz una lista de palabras que requieran definición en la columna lateral\r\n    de tu libreta. <strong>MUY IMPORTANTE<</strong> </li> <li>\r\n        Anota todos los significados que tiene la palabra en cuestión en la\r\n        columna de notas. Hay que consultar uno o más diccionarios.\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/destinatarios/destinatarios.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/destinatarios/destinatarios.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\r\n<h3>Paso 2: Los destinatarios</h3>\r\n<p><strong>META:</strong>Conocer el mundo de los destinatarios de la obra que estudiamos. No por la información dentro\r\n  de esta obra, sino por las circunstancias políticas, geográficas, culturales y religiosas que les rodeaban. </p>\r\n<p>La situación de los destinatarios impacta mucho cómo se escribe en la Biblia. Tienen presiones de muchos fuentes que\r\n  compiten para su lealtad de ideologías, posturas y lealtades políticas, modas religiosas, compromisos familiares entre\r\n  otras cosas. ¿Cómo responde el texto a estas factores externas que compiten por la lealtad de los destinatarios?</p>\r\n<strong>Preguntas para un estudio bíblico:</strong>\r\n<ol>\r\n  <li>¿Cuál era el medio de sostenerse de los destinatarios?</li>\r\n  <li>¿Cuáles eran sus creencias religiosas? </li>\r\n  <li>¿Cómo representaban estas creencias una amenaza para las creencias reales bíblicas? </li>\r\n  <li>¿Cuál era su relación con el gobierno (esclavo, libre, gobernando, súbdito, rebelde, etc.)? </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/division-parrafos/division-parrafos.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/division-parrafos/division-parrafos.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Interno</span> </h2>\r\n<h3>Paso 2. División de los parrafos</h3>\r\n<strong>Objetivo</strong>\r\n<p>\r\n  Dividir el texto en unidades de comunicación de acuerdo al pensamiento del\r\n  autor inspirado por el Espíritu Santo. Para poder empezar a hacer las\r\n  divisiones, necesitamos primero entender cuáles son las unidades que\r\n  integran a un párrafo (perícopa).\r\n</p>\r\n\r\n<strong>Antes de empezar...</strong>\r\n<p>\r\n  Copia en una libreta y divide el texto según el criterio que establece el\r\n  mismo texto. (El profesor te dará indicaciones en clase antes de hacerlo)\r\n</p>\r\n\r\n<strong>Análisis del párrafo</strong>\r\n<ol>\r\n  <li>\r\n    Haz las divisiones de los enunciados gramaticales en la sección que\r\n    estás estudiando.\r\n  </li>\r\n  <li>Une los enunciados que hablan del mismo tema.</li>\r\n  <li>\r\n    Pon un título a cada párrafo: (En la columna lateral de tu libreta)\r\n\r\n    <ol type=\"a\">\r\n      <li>Usa palabras del texto mismo.</li>\r\n      <li>No uses mas de cuatro palabras.</li>\r\n      <li>Indica con estas palabras lo mas importante del párrafo.</li>\r\n      <li>\r\n        Que las cuatro palabras sean representativas del contenido del\r\n        párrafo.\r\n      </li>\r\n      <li>Que los títulos distingan entre un párrafo y otro</li>\r\n    </ol>\r\n  </li>\r\n</ol>\r\n\r\n<strong>Preguntas para estudio bíblico: </strong>\r\n\r\n<ol>\r\n  <li>\r\n    ¿Cuál es el tema principal y cuales son sus subtemas? Anótalos en tu\r\n    libreta.\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/elemento-existencial-humano/elemento-existencial-humano.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/elemento-existencial-humano/elemento-existencial-humano.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Interno</span> </h2>\r\n<h3>Paso 4. El Elemento Existencial Humano</h3>\r\n<p>\r\n  <strong>META:</strong>Tener un punto de identificación entre nosotros y\r\n  los participantes que se encuentran en el texto.\r\n</p>\r\n\r\n<ol>\r\n  <li>¿Qué estaba haciendo el autor al escribir su obra?</li>\r\n  <li>¿Cuál era su oficio en la vida?</li>\r\n  <li>¿Qué deseaba lograr al escribir su obra?</li>\r\n  <li>¿Cómo cabe el escrito en la misión y el propósito del autor?</li>\r\n</ol>\r\n\r\n<p>\r\n  El Lector implícito: Es importante fijar los destinatarios y su nivel de\r\n  preparación en el tema que trata el autor.\r\n</p>\r\n\r\n<p>\r\n  <strong>PRIMERO: </strong>Es importante fijar los destinatarios y su nivel\r\n  de preparación en el tema que trata el autor.\r\n</p>\r\n\r\n<strong>Pregunta para estudio bíblico</strong>\r\n<ol>\r\n  <li>\r\n    ¿Cuáles son las personas o tipos de personas que se mencionan en este\r\n    pasaje?\r\n  </li>\r\n</ol>\r\n\r\n<p>\r\n  <strong>SEGUNDO:</strong> Según el libro, trata de desarrollar una breve\r\n  biografía de cada una de las personas que intervienen en este. O la\r\n  descripción del tipo de persona de que se trata, con base en la\r\n  información proporcionada por el texto mismo.\r\n</p>\r\n\r\n<strong>Pregunta para estudio bíblico</strong>\r\n<ol>\r\n  <li>\r\n    ¿Cuáles son las cosas que podemos aprender acerca de ellas en este\r\n    pasaje?\r\n  </li>\r\n  <li>\r\n    ¿Cómo nos ayuda a entender el pasaje el conocer bien a los\r\n    participantes?\r\n  </li>\r\n</ol>\r\n\r\n<p>\r\n  <strong>TERCERO:</strong> Busca algunas otras referencias de esas mismas\r\n  personas, en otros libros o epístolas según la concordancia y\r\n  <strong>escribe en tu libreta</strong> una biografía breve con base en\r\n  estas fuentes.\r\n</p>\r\n<strong>Pregunta para estudio bíblico</strong>\r\n<ol>\r\n  <li>\r\n    Con base en otros pasajes ¿Qué podemos aprender acerca de estas\r\n    personas?\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/etimologia/etimologia.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/etimologia/etimologia.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\r\n<h3>Paso 3: Etimología</h3>\r\n<p>\r\n  <strong>OBJETIVO:</strong>Conocer como se ha formado la palabra para\r\n  entender mejor su significado\r\n</p>\r\n<ol>\r\n  <li>\r\n    <strong> Origen de la palabra \"Etimología\".-</strong> La palabra\r\n    española \"Etimología” proviene del vocablo griego “ethymología”, el cual\r\n    está formado por otros dos: el adjetivo “ethymos”: verdadero, auténtico,\r\n    y la seudodesinencia “logía”, que a su vez procede del sustantivo\r\n    “logos”: palabra. Originariamente, la Etimología se refiere al\r\n    significado auténtico de las palabras.\r\n  </li>\r\n  <li>\r\n    <strong>Definición de la Etimología.-</strong> La Etimología estudia el\r\n    verdadero significado de las palabras, mediante el conocimiento de su\r\n    origen, de su estructura y de sus transformaciones o cambios. En\r\n    consecuencia la Etimología comprende todos los elementos constitutivos\r\n    de los vocablos y no solamente su raíz.\r\n  </li>\r\n  <li>\r\n    <strong>Importancia y utilidad de la Etimología.-</strong>La Etimología\r\n    se pone de relieve, mediante las consideraciones siguientes:\r\n    <p>1a. Satisface la curiosidad natural de todo hombre.</p>\r\n    <p>\r\n      2a. Sirve para definir los objetos o ideas que de ellos tenemos.\r\n      (vocablos)\r\n    </p>\r\n    <p>\r\n      3a. Conocida la etimología de una voz (activa, media o pasiva), se\r\n      sabe descifrar su valor o significado literal o absoluto, que en\r\n      algunos casos es idéntico a su valor usual y único.\r\n    </p>\r\n    <p>\r\n      4a. La Etimología sirve para determinar la “sinonimia”, o sea, la\r\n      diferencia de significado entre dos voces sinónimas.\r\n    </p>\r\n    <p>\r\n      5a. Sirve de poderoso auxilio y es imprescindible para el sólido\r\n      estudio de la gramática particular de cualquier idioma.\r\n    </p>\r\n  </li>\r\n\r\n  <li>\r\n    <strong>Cambios Morfológicos.</strong>(de “morfe”, forma) son cambios en\r\n    la forma y estructura de las palabras.\r\n  </li>\r\n  <li>\r\n    <strong>Cambios Semánticos.-</strong>Los cambios semánticos (de\r\n    “semaino”: significar) son cambios de significado. Se llama “polisemia”\r\n    (de polus: mucho) la multiplicidad de sentidos que una misma palabra\r\n    tiene\r\n  </li>\r\n  <li>\r\n    <strong>Elementos Morfológicos de las palabras.-</strong>Son dos: la\r\n    raíz y los morfemas.\r\n    <ol type=\"a\">\r\n      <li>\r\n        Raíz.- Es el elemento irreducible (generalmente monosilábico y común\r\n        a un conjunto de palabras) que encierra el sentido fundamental del\r\n        vocablo\r\n      </li>\r\n      <li>\r\n        Morfemas o Afijos.- Son partículas que se agregan a la raíz. Los\r\n        morfemas o afijos se dividen en:\r\n        <ul>\r\n          <li>prefijos: los que se ponen antes de la raíz.</li>\r\n          <li>infijos: se intercalan entre la raíz y los sufijos</li>\r\n          <li>sufijos: los que se ponen después de la raíz.</li>\r\n        </ul>\r\n      </li>\r\n    </ol>\r\n  </li>\r\n</ol>\r\n\r\n<div>\r\n  <strong>Nuestra tarea:</strong>\"Considera la dimensión histórica\r\n  (diacrónica):\r\n  <strong>Selecciona por lo menos una Palabra por Párrafo y anota.</strong>\r\n  <ol>\r\n    <li>\r\n      ¿Puede la Etimología del término (por lo menos en uno de sus\r\n      significados) ser determinado?\r\n    </li>\r\n    <li>¿Es el término transparente?</li>\r\n    <li>\r\n      ¿Ha cambiado su significado? Si se ha cambiado, identifica la\r\n      naturaleza del cambio\r\n    </li>\r\n    <li>\r\n      ¿Hay una influencia de otro idioma funcionando? Si la hay, identifica\r\n      la forma de la interferencia.\r\n    </li>\r\n    <li>¿Cuál es el raíz de la palabra?</li>\r\n    <li>¿Qué significa?</li>\r\n    <li>\r\n      .¿Cuál es el prefijo, infijo, o sufijo que han sido agregados a la\r\n      palabra?\r\n    </li>\r\n    <li>¿Cómo modifican el significado de la raíz?</li>\r\n  </ol>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/evaluacion-cultura/evaluacion-cultura.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/evaluacion-cultura/evaluacion-cultura.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Interno</span> </h2>\r\n<h3>Paso 6 Evaluación de la cultura</h3>\r\n\r\n<p>\r\n  <strong>META:</strong>El propósito de la Biblia es establecer la manera\r\n  correcta de creer en cuanto a Dios y al hombre. El hecho de que hay una\r\n  manera de creer correctamente, implica que también hay una manera\r\n  equivocada. Tratemos de identificar las creencias aceptadas y rechazadas\r\n  para poder acercarnos a lo que Dios quiere que creamos.\r\n</p>\r\n\r\n<ol type=\"a\">\r\n  <li>\r\n    \"Uno tiende a nivelar las características culturales; incluyendo sus\r\n    instituciones y términos; y hacer éstas características como enseñanzas\r\n    normativas al igual que cualquier otro mandato bíblico\".\r\n  </li>\r\n  <li>\r\n    \"El otro extremo tiende a saltar cualquier cosa que resulta sospechosa\r\n    de tener una descripción culturalmente condicionada como pretexto para\r\n    reducir la enseñanza de tal parte, como la descripción de una situación\r\n    ya no existente\".\r\n  </li>\r\n</ol>\r\n\r\n<strong>Primero: </strong>\r\n<ol>\r\n  <li>\r\n    ¿Cuáles valores y conceptos aceptó el autor y cuales rechazó?\r\n    <strong>Anota</strong>\r\n  </li>\r\n  <li>\r\n    ¿Por cuáles razones acepta o rechaza una creencia cultural?\r\n    <strong>Anota</strong>\r\n  </li>\r\n</ol>\r\n\r\n<strong>Segundo: </strong>\r\n<ol>\r\n  <li>\r\n    ¿Qué conceptos, ideas y valores colocó en lugar de estos?\r\n    <strong>Anota</strong>\r\n  </li>\r\n  <li>\r\n    ¿Cómo lo hizo?\r\n    <strong>Anota</strong>\r\n  </li>\r\n</ol>\r\n\r\n<strong>Preguntas para estudio bíblico</strong>\r\n<ol>\r\n  <li>\r\n    ¿Cuáles son las creencias que el autor rechaza o acepta en el texto?\r\n  </li>\r\n  <li>\r\n    ¿Cuál es la relación entre estas creencias y lo que nosotros creemos?\r\n  </li>\r\n  <li>\r\n    ¿Cuáles son las implicaciones del autor sobre nuestra manera de vivir?\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/evaluacion-texto-original/evaluacion-texto-original.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/evaluacion-texto-original/evaluacion-texto-original.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Literatura</span> </h2>\r\n<h3>Paso 4. Evaluación del texto original</h3>\r\n<p>\r\n  <strong>META: </strong>Establecer el texto en español más cercano al texto\r\n  original. Por lo general se han tomado los textos más antiguos como los\r\n  más auténticos\r\n</p>\r\n<strong>Observaciones: </strong>\r\n<p>\r\n  1. Tenemos que preguntar si los textos antiguos tenían alguna razón para\r\n  no haberse usado, o sea que, si la iglesia no los usaba por cierta\r\n  contaminación de las herejías que estaban luchando contra el cristianismo\r\n  de aquella época\r\n</p>\r\n<p>\r\n  2. Los textos más antiguos procedan generalmente de las regiones\r\n  desérticas porque allí la humedad no destruye tan rápido el papel. Por lo\r\n  general los cristianos que se retiraban al desierto no eran los cristianos\r\n  más comunes\r\n</p>\r\n<p>\r\n  3. Con base en estos hechos y otros más, quizás el Textus Receptus es el\r\n  mejor texto que tenemos.\r\n</p>\r\n<p>\r\n  4. Tenemos que repensar nuestra posición con respecto a la crítica del\r\n  texto Bíblico.\r\n</p>\r\n\r\n<p>\r\n  Hay ocasiones en que una glosa ha sido agregada al texto. Una glosa es un\r\n  comentario para aclarar el significado del texto. Generalmente se ha\r\n  definido una glosa como una variación en el texto con respecto a las\r\n  copias más antiguas que tenemos. Entonces uno puede leer diferentes\r\n  versiones de la Biblia y descubrir si todas las versiones se leen igual, o\r\n  si una versión más moderna deja fuera parte del texto. Este procedimiento\r\n  también sirve para verificar la traducción de las palabras claves.\r\n</p>\r\n\r\n<p>\r\n  Una segunda manera de evaluar el texto es la de usar el “Aparato Crítico\r\n  Textual” sobre los textos en griego o en hebreo.\r\n</p>\r\n<p>\r\n  Cuando se escribió el N.T. no había imprenta y los textos se copiaban a\r\n  mano. Con el tiempo llegaron a ser muchos manuscritos copiados de los\r\n  originales. Dado que el hombre no está exento del error hay variación en\r\n  los textos. Hoy tenemos mas de 5,000 manuscritos con cierta variación. Con\r\n  estudios se han investigado los manuscritos para determinar el mejor\r\n  texto, puesto que no tenemos los originales debemos notar que las\r\n  variaciones que hay no cambian ninguna doctrina. Generalmente son\r\n  omisiones por error humano o notas explicativas (glosas)\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/figuras-diccion/figuras-diccion.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/figuras-diccion/figuras-diccion.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Literatura</span> </h2>\r\n<h3>Paso 5. Figuras de dicción</h3>\r\n<p>\r\n  <strong>Meta: </strong>Identificar los símbolos empleados por el autor en\r\n  el texto y saber que representa cada uno.\r\n</p>\r\n<p>\r\n  Un símbolo es cualquier cosa que representa otra que no es su valor\r\n  normal. Los símbolos pueden ser usados para revelar la verdad o para\r\n  esconderla. Debemos tener mucho cuidado de no ver símbolos donde no los\r\n  hay, o de no verlos cuando realmente están allí. La Biblia frecuentemente\r\n  no nos identifica sus símbolos, lo que implica que tenemos que manejarlos\r\n  con mucho cuidado.\r\n</p>\r\n<p>\r\n  1. Conozca las formas simbólicas de hablar. Aquí hay una lista de algunas\r\n  formas comunes como: Metáforas, símil, metonimia, sinécdoque, ironía,\r\n  hipérbole, apostrofe, personificación, eufemismo, paradoja, juego de\r\n  palabras, expresiones numéricas, etc.\r\n</p>\r\n<p>\r\n  <strong>LECTURA DIDACTICA:</strong>Es posible que necesites consultar una\r\n  gramática u otro libro de referencia para conocer las formas simbólicas\r\n  del idioma.\r\n</p>\r\n<p>2. Estudia la manera en que la Biblia misma interpreta sus símbolos.</p>\r\n<p>\r\n  3. Cuando estas estudiando objetos naturales, toma en cuenta sus\r\n  características naturales.\r\n</p>\r\n<p>4. Estudia el Contexto.</p>\r\n<p>\r\n  5. Evita especulaciones o significados arbitrarios que provienen de tu\r\n  propia cabeza y no de las Escrituras.\r\n</p>\r\n\r\n<strong>Preguntas para estudio bíblico: </strong>\r\n<ol>\r\n  <li>¿Cuales son los símbolos que encontramos en este texto? Márcalos</li>\r\n  <li>¿Por qué‚ usa el autor símbolos para comunicar su mensaje?</li>\r\n  <li>¿Cuál es el significado del símbolo que el autor usa?</li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/filosofia/filosofia.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/filosofia/filosofia.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\r\n<h3>Paso 7: La filosofía</h3>\r\n<p><strong>META: </strong> Encontrar las maneras de pensar de la gente del mundo bíblico para poder entender el mensaje\r\n  que fue escrito a ellos. </p>\r\n\r\n<p>1. En el Nuevo Testamento ya empieza un contacto con la filosofía griega. Es importante conocer las corrientes de la\r\n  filosofía griega para entender algunos pasajes correctamente. Tenemos que buscar cual fue el sistema de doctrina que\r\n  ellas enseñaban para poder leer correctamente el texto. Pablo al estar dando su sermón suponía que sus oyentes estaban\r\n  familiarizados con estas doctrinas. </p>\r\n<p>2. También encontramos situaciones en que no se menciona por nombre una postura filosófica, sino que solamente se\r\n  presenta la doctrina. Hay mucho en el Nuevo Testamento acerca de los gnósticos, sin mencionar la escuela por nombre.\r\n  Al mencionar una doctrina, todas las demás doctrinas estarán en la mente de los lectores originales. Tenemos que\r\n  pensar como los destinatarios si vamos a comprender correctamente los escritos bíblicos. </p>\r\n<p>3. Aparte de las escuelas formales de pensamiento, hay también explicaciones de la vida. Maneras de pensar de cómo\r\n  funcionaban las cosas. Razones por las cuales las gentes hacían las cosas de la vida. </p>\r\n<strong>PREGUNTAS PARA UN ESTUDIO BIBLICO:</strong>\r\n<ol>\r\n  <li> ¿Qué Filosofías identificas? </li>\r\n</ol>\r\n<p>Hacer una lista en tu Libreta con una breve explicación.</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/formulas-expresion/formulas-expresion.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/formulas-expresion/formulas-expresion.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Literatura</span> </h2>\r\n<h3>Paso 2 Formulas de expresión</h3>\r\n<p>\r\n  <strong>Meta: </strong>Que el alumno note las diferentes formas o\r\n  formularios que se usan en el texto bíblico y cómo influyen en la\r\n  interpretación.\r\n</p>\r\n<p>\r\n  Aparte del estilo literario, el autor puede estar usando una formula. Para\r\n  entender su escritura tenemos que descubrir la formula, haciendo preguntas\r\n  propias a las intenciones del autor.\r\n</p>\r\n<p>Hay formulas para cartas, pactos, poesía, sermones, profecías, etc</p>\r\n<p>Carta o epístolas</p>\r\n<ol>\r\n  <li>Salutación</li>\r\n  <li>Acción de gracias</li>\r\n  <li>Cuerpo</li>\r\n  <li>Exhortaciones morales</li>\r\n  <li>Salutación y Bendición</li>\r\n</ol>\r\n<strong>Preguntas para estudio bíblico</strong>\r\n<ol>\r\n  <li>¿Existe en nuestro texto una fórmula que está siguiendo el autor?</li>\r\n  <li>\r\n    ¿Cómo nos ayuda entender el texto, el tener conocimiento de esta\r\n    fórmula?\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/frecuencia-uso/frecuencia-uso.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/frecuencia-uso/frecuencia-uso.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\r\n<h3>Paso 7: Frecuencia del uso</h3>\r\n<p>\r\n  <strong>META:</strong>Saber dónde se encuentra desarrollado el concepto\r\n  bíblico relacionado con una palabra.\r\n</p>\r\n<p>\r\n  Es importante para hacer este paso que tengas una concordancia a la mano\r\n  (de preferencia una que trate de los idiomas originales). Para definir una\r\n  palabra:\r\n</p>\r\n<ol>\r\n  <li>\r\n    Estudia el pasaje dónde es usada la palabra en la Biblia por primera\r\n    vez.\r\n  </li>\r\n  <li>\r\n    Usa pasajes donde haya un uso frecuente de la palabra. En ambos casos\r\n    examina cuidadosamente como el contexto da luz a la definición de la\r\n    palabra de interés.\r\n  </li>\r\n</ol>\r\n<strong>Preguntas para un estudio bíblico</strong>\r\n<ol>\r\n  <li>\r\n    ¿Cuales son los lugares en la Biblia donde se usa ésta palabra con mucha\r\n    frecuencia? <strong>Anota</strong>\r\n  </li>\r\n  <li>¿Hay una definición clara de la palabra?</li>\r\n  <li>\r\n    ¿Cuáles son las palabras que se relacionan con la que estamos\r\n    estudiando?\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/genero/genero.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/genero/genero.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Literatura</span> </h2>\r\n<h3>Paso 1 Género Literario</h3>\r\n<p>\r\n  <strong>Meta: </strong>Que el alumno pueda distinguir el género literario\r\n  y la forma en que influye en la interpretación.\r\n</p>\r\n\r\n<p>\r\n  Hay diferentes géneros literarios. Si alguien está leyendo un poema se\r\n  espera que lo interprete en una forma muy distinta que si estuviera\r\n  leyendo un discurso de la ley. De la misma manera, hay diferentes géneros\r\n  de literatura en la Biblia. Para poder entender bien tenemos que\r\n  interpretar un escrito según la forma literaria en que el autor estaba\r\n  escribiendo.\r\n</p>\r\n\r\n<strong>Preguntas para estudio bíblico: </strong>\r\n<ol>\r\n  <li>\r\n    ¿Cuál es la forma de literatura que el autor está usando para comunicar\r\n    su mensaje?\r\n  </li>\r\n  <li>\r\n    ¿Encuentra un tipo de expresión especial (símbolos o figuras) o una\r\n    forma especial (el uso de una fórmula para organizar el material)?\r\n  </li>\r\n</ol>\r\n<p>\r\n  Una vez que hemos identificado el estilo literario tenemos que buscar las\r\n  normas para este estilo de literatura. No podemos aplicar las mismas\r\n  reglas de interpretación a todos los géneros de literatura. Algunos\r\n  géneros son mucho más simbólicos que otros. Otros géneros están basados en\r\n  una realidad histórica y no llevan tanto simbolismo.\r\n</p>\r\n<p>\r\n  Los géneros más sobresalientes en la Biblia por su cambio en la manera de\r\n  interpretarlos son:\r\n</p>\r\n<h4>A. Narrativo</h4>\r\n<ol>\r\n  <li>\r\n    Las historias bíblicas son una invitación de compartir una experiencia,\r\n    tan vivida y concretamente como sea posible, con los personajes de la\r\n    historia.\r\n  </li>\r\n  <li>\r\n    Pon atención a cada detalle de la situación puesto en la historia, y aun\r\n    la situación tiene un papel importante, analiza como contribuye a la\r\n    historia.\r\n    <ol type=\"a\">\r\n      <li>Descripción directa</li>\r\n      <li>Respuestas de otros personajes</li>\r\n      <li>Las palabras y pensamientos de los personajes</li>\r\n      <li>\r\n        Auto-caracterización e. Las acciones como un clave al carácter\r\n      </li>\r\n    </ol>\r\n  </li>\r\n  <li>\r\n    Ponga atención a cada detalle para poder conocer los personajes lo mejor\r\n    posible.\r\n  </li>\r\n  <li>\r\n    Identifica la naturaleza de los conflictos en la historia, observando su\r\n    desarrollo y su resolución final.\r\n  </li>\r\n  <li>\r\n    Analiza exactamente como la narración genera interés, curiosidad, o\r\n    suspenso. El acercamiento LITERARIO es un intento de dar una lección\r\n    universal, lo que sucede cuando..., en cambio el acercamiento HISTORICO\r\n    es un intento de expresar lo que ocurrió una vez, lo que sucedió ....\r\n    Noten bien que estos dos acercamientos pueden presentar la verdad, pero\r\n    la interpretación y función de esa verdad es muy diferente.\r\n  </li>\r\n  <li>\r\n    Toma la experiencia de los protagonistas como una declaración\r\n    significativo de la vida humana y los valores\r\n  </li>\r\n  <li>\r\n    Analiza en detalle la unidad de la historia, observando cómo cada\r\n    episodio se relaciona al armazón general, y como los episodios se\r\n    relacionan uno con el otro en el desarrollo de la historia.\r\n  </li>\r\n  <li>\r\n    Identifica la naturaleza de las pruebas que los protagonistas\r\n    experimentan o las elecciones que hagan, observando como la historia\r\n    está estructurado alrededor de estas pruebas o elecciones y observando\r\n    como las temas principales están relacionadas a la prueba o elección.\r\n  </li>\r\n  <li>\r\n    Ponga atención a cambios que ocurren entre el principio y el final de la\r\n    historia, observando las formas precias en que los caracteres cambian,\r\n    las causas de estos cambios y transformaciones.\r\n  </li>\r\n  <li>\r\n    Ponga atención a la presencia de mecanismos literarios como de FOILS\r\n    (personaje que contrasta con otro), ironía dramática, justicia poética\r\n    en la narración bíblica, etc.\r\n    <p>Considerar los 3 grandes asuntos de la vida:</p>\r\n    <ol type=\"a\">\r\n      <li>Realidad: ¿Que es lo que realmente existe?</li>\r\n      <li>Moralidad: ¿En qué consiste la conducta buena y mala?</li>\r\n      <li>\r\n        Valores: ¿Que es lo que realmente es importante, y que es más\r\n        importante?\r\n      </li>\r\n    </ol>\r\n    <p>\r\n      Las historias bíblicas hacen estas aseveraciones, no directamente,\r\n      pero indirectamente.\r\n    </p>\r\n  </li>\r\n  <li>\r\n    Busca las aseveraciones acerca de la realidad, moralidad, o valor\r\n    implícitos en la historia.\r\n  </li>\r\n  <li>\r\n    Toma la repetición y énfasis como claves que indican el tema (realidad,\r\n    moralidad, o valor) que la historia está tratando de presentar.\r\n  </li>\r\n  <li>\r\n    Ve la conclusión como un comentario implícito acerca de (una evaluación\r\n    de) los personajes y los eventos que la historia ha presentado.\r\n  </li>\r\n  <p>\r\n    Dentro de lo que llamamos narración tenemos diferentes sub-géneros de\r\n    literatura que necesitan atención particular:\r\n  </p>\r\n\r\n  <p>\r\n    A. NARRACION HEROICA Las narraciones heroicas estar basados en los\r\n    episodios de un protagonista. El verdadero héroe es una expresión de lo\r\n    bueno social y moralmente. En el sentido real Dios es el único héroe de\r\n    la Biblia. Los hombres están presentados con defectos morales y severas\r\n    limitaciones en su capacidad como hombres para resolver los problemas.\r\n  </p>\r\n  <p>\r\n    B. NARRACION EPICA Incluye tanto como sea posible. Una historia de todas\r\n    las cosas. Tiene un héroe que da unidad a la historia, tiene un\r\n    conflicto central que consiste en ganar una batalla y establecer un\r\n    reino. Un ejemplo bíblico es el Pentateuco - la formación de la nación\r\n    bajo la dirección y liderazgo de Dios. El Apocalipsis también nos\r\n    presenta una épica.\r\n  </p>\r\n  <p>\r\n    C. NARRACION COMICA No es humor, sino la historia con un final feliz.\r\n    Una historia en la forma de \"U\", por ejemplo, prosperidad, pobreza,\r\n    prosperidad o felicidad, tristeza, felicidad.\r\n  </p>\r\n  <p>\r\n    D. NARRACION TRAGICA Una historia de una calamidad excepcional, un\r\n    movimiento de prosperidad a catástrofe. Un cambio de fortuna. La\r\n    tragedia se concentra en lo que más tememos y queremos evitar - la\r\n    destrucción potencial del mal.\r\n  </p>\r\n</ol>\r\n<h4>B. Legislativo (Ley)</h4>\r\n<h4>C. Didactco (Enseñanza)</h4>\r\n<h4>D. Drama (Job)</h4>\r\n<h4>E Poetico (Salmos)</h4>\r\n<h4>F. El Proverbio</h4>\r\n<h4>G. Las parabolas</h4>\r\n<h4>H. Epistolar</h4>\r\n<h4>I. Apocaliptico</h4>\r\n<p>\r\n  Estos no son todos los géneros que encontramos en la Biblia. Debemos\r\n  identificar el estilo que se está usando en nuestro texto para poder\r\n  interpretarlo correctamente.\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/geografia/geografia.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/geografia/geografia.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\r\n<h3>Paso 8: La geografía</h3>\r\n<p><strong>META: </strong> Descubrir los lugares que menciona el texto y sus connotaciones para la gente de aquél tiempo\r\n  para entender mejor el mensaje. </p>\r\n<p>Localiza cada lugar en un mapa y dibújalo en tu libreta. </p>\r\n<strong>PREGUNTAS PARA UN ESTUDIO BÍBLICO: </strong>\r\n<ol>\r\n  <li>¿Dónde vivía la gente? </li>\r\n  <li>¿Cómo habla el texto de la geografía?</li>\r\n  <li>¿Cómo influía la geografía en el pensamiento de la gente?</li>\r\n  <li>¿Tenía la geografía un sentido religioso?</li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/historia/historia.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/historia/historia.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\r\n<h3>Paso 3: La historia</h3>\r\n<p><strong>META: </strong>Conocer la historia de los lugares, y personajes que intervienen la obra que estudiamos.\r\n  Tratamos de conocer esta historia no por los datos que contiene sino por la manera en que influye el autor en su\r\n  comunicación. La Historia es el archivo de los eventos, hechos por los hombres e interpretados. No hay una historia\r\n  que no sea una interpretación porque no tenemos los eventos mismos archivados. La Biblia en un sentido es historia. Es\r\n  la interpretación de Dios de ciertos eventos divinos y humanos. La Biblia es la interpretación autorizada de estos\r\n  eventos. Las otras historias que se relacionan con la Biblia no están autorizadas, y por lo tanto tienen que ser\r\n  tomadas con un grado menor de confiabilidad. La historia no bíblica tiene valor para llenar el cuadro que no se ve en\r\n  los datos que nos proporciona la Biblia.</p>\r\n<strong>Pregunta para un estudio bíblico</strong>\r\n<ol>\r\n  <li>¿Cuáles fueron las circunstancias históricas generales que influenciaban o dieron esperanza a la gente en el\r\n    texto? <strong>Anota en tu libreta.</strong> </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/ideas/ideas.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/ideas/ideas.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Sintaxis</span> </h2>\r\n<h3>Paso 3. Identificación de las ideas</h3>\r\n<p>\r\n  <strong>Meta: </strong>Identificar los conceptos afines y opuestos y cómo\r\n  contribuyen a la comprensión del texto.\r\n</p>\r\n<p>\r\n  1. CONFECCIONA UNA LISTA EN TU LIBRETA DE LOS CONCEPTOS AFINES QUE SE\r\n  REPITEN. (Y a tu juicio cuáles son de importancia para el autor).\r\n</p>\r\n\r\n<strong>Preguntas para un estudio bíblico: </strong>\r\n<ol>\r\n  <li>¿Cuáles son los conceptos que se repiten en este pasaje?</li>\r\n  <li>.¿Cuáles son los sinónimos e ideas afines que se presentan?</li>\r\n</ol>\r\n\r\n<p>\r\n  2. TRATA DE ENCONTRAR LOS CONTRASTES QUE SE PRESENTAN. (Antónimos y/o\r\n  comparaciones). En la Biblia, particularmente en el AT el método de\r\n  enseñanza es por comparaciones y contrastes. Aun en el NT se usa este\r\n  modelo.\r\n</p>\r\n<strong>Preguntas para un estudio bíblico: </strong>\r\n<ol>\r\n  <li>¿Cuáles son los contrastes que el autor está presentando aquí?</li>\r\n  <li>¿Nos da luz para entender su tema?</li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/identificacion-cultura/identificacion-cultura.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/identificacion-cultura/identificacion-cultura.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Interno</span> </h2>\r\n<h3>Paso 5. Identificación de la Cultura.</h3>\r\n<p>\r\n  <strong>META: </strong> Identificar el contexto cultural para poder\r\n  interpretar adecuadamente el texto bíblico. La Biblia está llena de muchos\r\n  detalles culturales.\r\n</p>\r\n\r\n<p>\r\n  Cultura es el total del sistemas de creencias, costumbres, idiomas,\r\n  rituales, etc. que una comunidad, grupo o nación, adoptan para poder\r\n  sobrevivir y poder explicarse el universo a sí mismos. No es\r\n  necesariamente una creencia coherente o relacionada con una verdad sino la\r\n  creencia misma. Y según Romanos 1:18ss puede impedir que la gente logre\r\n  entender la verdad y la justicia de Dios.\r\n</p>\r\n\r\n<p>\r\n  La cultura sirve como portador de las ideas, o como el medio de\r\n  comunicación. No tenemos comunicación sin cultura. La cultura bíblica no\r\n  es igual a la nuestra (mexicana etc.). Entonces para asegurar la\r\n  comunicación, necesitamos identificar la cultura original tanto como\r\n  podamos.\r\n</p>\r\n\r\n<p>\r\n  Lee todo el libro para identificar los valores culturales, los conceptos e\r\n  imágenes que son aludidos en el libro, que reflejan la cultura de origen\r\n  de mayor peso o influencia. Debemos darnos cuenta que hay varias culturas\r\n  que influyen en el texto bíblico (Egipcia, Persa, Meda, Hitita, Griega,\r\n  Romana, Cananea, Filistea, etc.). Trataremos de limitamos a los datos que\r\n  están dentro del texto y no a las explicaciones formales que se hallan en\r\n  otros libros de consulta.\r\n</p>\r\n\r\n<p>\r\n  <strong>Primero: </strong> El autor hace referencias a maneras de vivir\r\n  (conducta) en el mundo hebreo, griego, etc. ¿Cuáles eran?\r\n  <strong>Anota en tu libreta.</strong>\r\n</p>\r\n<p>\r\n  <strong>Segundo:</strong> El autor hace mención de las autoridades\r\n  (personas y legales) que influyeron las personas en el discurso bíblico.\r\n  ¿Cuáles eran?\r\n  <strong>Anota</strong>\r\n</p>\r\n<p>\r\n  <strong>Tercero: </strong> El autor menciona la experiencia individual de\r\n  las personas mencionadas en el texto bíblico. ¿Cuáles eran? Anota\r\n  <strong>Anota</strong>\r\n</p>\r\n<p>\r\n  <strong>Cuarto: </strong> El autor hace referencia a valores, ideas o\r\n  creencias que nacen de la cultura, y son mencionados por famosos\r\n  escritores del mundo antiguo. ¿Cuáles eran estos?\r\n  <strong>Anota en tu Libreta</strong>\r\n</p>\r\n\r\n<strong>Preguntas para estudio bíblico</strong>\r\n<ol>\r\n  <li>\r\n    ¿Cuáles rasgos culturales podemos hallar en el pasaje?\r\n    <strong>Anota</strong>\r\n  </li>\r\n  <li>\r\n    ¿Cuál era la forma de persuadir a los lectores de la verdad deseada?\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/intencion-autor/intencion-autor.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/intencion-autor/intencion-autor.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Sintaxis</span> </h2>\r\n<h3>Paso 1. La intención del autor:</h3>\r\n<p>\r\n  El hecho de que un libro tiene un argumento implica que haya una sola\r\n  intención. No podemos organizar el trabajo del autor hasta que encontremos\r\n  su intención. Tampoco podemos hacer la interpretación de un párrafo, hasta\r\n  que descubramos la intención general y la relación del párrafo con la\r\n  intención general.\r\n</p>\r\n\r\n<p>\r\n  <strong>Meta: </strong>Identificar la intención del autor en el LIBRO y\r\n  cada párrafo (perícopa) que estudiamos.\r\n</p>\r\n\r\n<p>\r\n  <strong>Intenciones: </strong>Cada libro tiene una propia (el pensamiento\r\n  articulado del autor sobre muchos temas de importancia).\r\n</p>\r\n\r\n<ol type=\"A\">\r\n  <li>\r\n    Cuando el autor ha declarado su propósito. Ejemplo: Juan 20:30-31.\r\n  </li>\r\n  <li>Cuando el autor no ha declarado su propósito:</li>\r\n</ol>\r\n\r\n<strong>\r\n  Esperar hasta hacer el paso 10 de contexto externo en lugar de este paso.\r\n</strong>\r\n\r\n<strong>Instrucciones: </strong>\r\n<p>\r\n  \"OBSERVA EL PROPOSITO DEL AUTOR PARA EL LIBRO ENTERO\"\r\n</p>\r\n\r\n<strong>Pregunta para un estudio bíblico: </strong>\r\n<ul>\r\n  <li>\r\n    ¿Cuál fue el propósito del autor al escribir este libro y cada párrafo?\r\n  </li>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/intencion-parrafo/intencion-parrafo.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/intencion-parrafo/intencion-parrafo.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Sintaxis</span> </h2>\r\n<h3>Paso 4. La intención del párrafo</h3>\r\n<p>\r\n  <strong>Meta: </strong>Identificar la intención del autor en los PARRAFOS\r\n  que estudiamos.\r\n</p>\r\n\r\n<p>\r\n  Lee todo el párrafo (perícopa) para identificar los conceptos e ideas\r\n  centrales del autor, es decir sus INTENCIONES. Cada PARRAFO tiene su\r\n  propio propósito ideológico (el pensamiento articulado del autor sobre UN\r\n  TEMA determinado de mucha importancia).\r\n</p>\r\n\r\n<strong>Instrucciónes: </strong>\r\n<ol>\r\n  <li>\"OBSERVA EL PROPOSITO DEL AUTOR PARA EL PARRAFO</li>\r\n  <li>SUBRAYA EL TEMA QUE HAS ENCONTRADO.</li>\r\n</ol>\r\n\r\n<p>\r\n  Debe ser muy similar al tema que encontraste en paso 2 de CONTEXTO\r\n  INTERNO. Revisa el titulo que pusiste para ver si corresponde al tema que\r\n  ya has identificado.\r\n</p>\r\n<strong>Pregunta para un estudio biblico: </strong>\r\n<ul>\r\n  <li>\r\n    ¿Cuál fue el propósito del autor al escribir este PARRAFO?\r\n  </li>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/lexico/lexico.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/lexico/lexico.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\r\n<h3>Paso 2: El Léxico del idioma original</h3>\r\n<p>\r\n  <strong>META:</strong>Conocer el significado y uso de las palabras\r\n  empleadas en el idioma original.\r\n</p>\r\n<ol>\r\n  <li>\r\n    Identifica el significado de la palabra en el texto original Hebreo o\r\n    Griego\r\n  </li>\r\n  <li>\r\n    Observa que aun en los idiomas originales muchas palabras claves y\r\n    normales tienen varios sentidos, por ejemplo: fe, hermano, carne, etc...\r\n  </li>\r\n</ol>\r\n<p>\r\n  Para poder usar un léxico es indispensable saber el abecedario del idiom\r\n  que se está investigando. \"Usando los léxicos de los idiomas originales se\r\n  determina el rango semántico (es decir, todos los significados que vienen\r\n  en el léxico) de la palabra, poniendo atención a las distinciones entre\r\n  las acepciones y los equivalentes de traducción. Este paso le dará las\r\n  opciones al exégeta”\r\n</p>\r\n\r\n<strong>Preguntas para un estudio bíblico: (Avanzado)</strong>\r\n<ol>\r\n  <li>\r\n    ¿Cuáles son las palabras en el idioma original que expresan las ideas\r\n    principales?\r\n  </li>\r\n  <li>¿Cuáles son su rango de significado?</li>\r\n  <li>\r\n    ¿Cuál es el sentido que nos dan para entender mejor el concepto o\r\n    significado que estamos investigando?\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/libro-mismo/libro-mismo.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/libro-mismo/libro-mismo.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Interno</span> </h2>\r\n<h3>Paso 1. El contexto desde el libro mismo.</h3>\r\n\r\n<p>\r\n  Para llegar a comprender mejor un libro o párrafo, especialmente de la\r\n  Biblia, es necesario leerlos varias veces y después leerlos una vez más,\r\n  pero en voz alta.\r\n</p>\r\n\r\n<strong>Objetivo</strong>\r\n<p>\r\n  Entender a grandes rasgos la intención del autor y tener una visión\r\n  panorámica del texto Bíblico.\r\n</p>\r\n\r\n<ol>\r\n  <li>\r\n    Lee a “vuelo de pájaro” toda la unidad. ¿Cuáles son tus impresiones\r\n    generales?\r\n  </li>\r\n  <li>\r\n    Lee otra vez la unidad, notando el flujo general de acciones o ideas.\r\n    ¿Cuál parece ser el tema?\r\n  </li>\r\n  <li>\r\n    Haz preguntas generales para entender panorámicamente el texto. (Por\r\n    ahora evita hacer preguntas específicas, los detalles vienen después.\r\n    No hagas preguntas especulativas, de aplicación, ni irrelevantes.\r\n    Anota las preguntas generales en una libreta).\r\n  </li>\r\n  <li>\r\n    No tomes tiempo para contestar estas preguntas en este momento. Al\r\n    igual que las secciones y los títulos, tus preguntas son\r\n    provisionales, aunque importantes para ayudarte a seguir investigando\r\n    en el texto..\r\n  </li>\r\n</ol>\r\n\r\n<strong>Preguntas para estudio bíblico</strong>\r\n<ol>\r\n  <li>¿Cómo se sintió el autor al escribir?</li>\r\n  <li>\r\n    ¿Cómo hubieras respondido si fueras uno de los primeros destinatarios?\r\n  </li>\r\n  <li>¿Cuáles son los temas principales?</li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/modismos/modismos.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/modismos/modismos.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Literatura</span> </h2>\r\n<h3>Paso 6. Modismos</h3>\r\n<p>\r\n  <strong>Meta: </strong>Identificar las expresiones o ideas manejadas por\r\n  el autor en el texto que reflejan valores culturales y saber cuál es su\r\n  significado o sentido en español.\r\n</p>\r\n\r\n<p>\r\n  Un modismo es una manera de expresarse en un idioma lo que no es\r\n  simbólico, ni la manera más formal de llamar una cosa. Los modismos\r\n  reflejan los valores culturales y la red de ideas. En general la expresión\r\n  por sí misma no tiene nada que ver con lo que dice textualmente.\r\n</p>\r\n\r\n<p>\r\n  \"Modismo (de modo): Modo particular de hablar, propio o privativo de una\r\n  lengua, que suele apartarse de las reglas generales de la gramática.\"\r\n</p>\r\n<p>\r\n  En algunos casos, es muy difícil separar un modismo de un simbolismo. De\r\n  hecho los modismos nacen de la forma simbólica de hablar.\r\n</p>\r\n<p>\r\n  Lee todo el libro para identificar la manera en que el autor enfoca los\r\n  conceptos, valores, o creencias e imágenes del medio ambiente y su\r\n  respuesta a ellas.\r\n</p>\r\n<p>\r\n  Identifica todos los modismos que usa el autor y define su sentido en\r\n  español. Márcalos en tu Libreta.\r\n</p>\r\n\r\n<strong>Preguntas para estudio bíblico: </strong>\r\n<ol>\r\n  <li>¿Hay modismos en el pasaje?</li>\r\n  <li>¿Cuál es el significado de estos modismo?</li>\r\n  <li>¿Cómo decimos nosotros esta idea en nuestro lenguaje común?</li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/pasaje-tema/pasaje-tema.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/pasaje-tema/pasaje-tema.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Sintaxis</span> </h2>\r\n<h3>Paso 6. El tema del libro (Segundo Esquema: TEMAS)</h3>\r\n<p>\r\n  <strong>META: </strong> Identificar los temas que tienen relación\r\n  inmediata con el texto (antes y después), y explicar cuál es la conexión\r\n  entre ellos. Esquematizar la relación entre estas ideas para ayudarnos a\r\n  la comprensión y la enseñanza de los temas.\r\n</p>\r\n\r\n<p>\r\n  Escribe todos los temas centrales y haz un esquema (segundo esquema) que\r\n  muestre la relación que hay en cada uno, de la misma manera que hiciste la\r\n  relación en el párrafo.\r\n</p>\r\n\r\n<p>\r\n  La relación del tema del párrafo que estás estudiando con los otros\r\n  párrafos inmediatamente alrededor del, es más importante que la relación\r\n  con otros párrafos más lejos en el escrito. Debes concentrarte más en la\r\n  relación de la subsunción del libro donde se encuentra el párrafo que\r\n  estudias que en todos los párrafos del libro entero.\r\n</p>\r\n\r\n<strong>NOTA: </strong>\r\n<ol>\r\n  <li>Un libro puede tener varios temas.</li>\r\n  <li>\r\n    Fíjate en la siguiente relación:\r\n    <ul>\r\n      <li>El tema del libro</li>\r\n      <li>El tema de la primera sección (si se desarrollan los temas).</li>\r\n      <li>El tema de la subsección A (no se desarrollan os temas)</li>\r\n      <li>El tema de la subsección B (no se desarrollan los temas).</li>\r\n      <li>El tema de la subsección C (si se desarrollan los temas).</li>\r\n      <li>El tema de mi párrafo de estudio.</li>\r\n      <li>El tema de los otros párrafos en la misma subsección.</li>\r\n      <li>El tema de la subsección D (no se desarrollan los temas).</li>\r\n      <li>El tema de la segunda sección (no se desarrollan los temas).</li>\r\n    </ul>\r\n  </li>\r\n</ol>\r\n\r\n<p>\r\n  Es importante que traces el tema del párrafo de estudio hasta que se vea\r\n  la manera en que se apoya el tema del libro entero o por lo menos como\r\n  apoya el tema de la sección en donde te encuentras.\r\n</p>\r\n<strong>NOTEN BIEN: </strong>\r\n<p>\r\n  No todos los libros tienen la misma estructura. En seguida presentamos\r\n  algunas de las relaciones que hay:\r\n</p>\r\n<ol>\r\n  <li>Ejemplo: relación de block. a. + b. + c (ROMANOS)</li>\r\n  <li>Ejemplo: relación de cadena. ab + bc + cd (SANTIAGO)</li>\r\n  <li>\r\n    Ejemplo: relación parentética. a (aplicación) + b (aplicación) + c\r\n    (aplicación) (HEBREOS)\r\n  </li>\r\n</ol>\r\n\r\n<p>\r\n  3. En algunos casos como Salmos y Proverbios no existe una relación del\r\n  tema general del libro por la naturaleza de la colección.\r\n</p>\r\n<strong>NOTEN BIEN: </strong>\r\n<p>\r\n  Esto debe verse como el esquema de Sintaxis de un párrafo, pero solamente\r\n  debe contener los temas de cada párrafo como contenido.\r\n</p>\r\n<strong>Pregunta para un estudio bìblico</strong>\r\n<ol>\r\n  <li>\r\n    ¿Cuál es la relación entre el tema de este párrafo y el tema del libro\r\n    entero?\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/patrones-retorica/patrones-retorica.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/patrones-retorica/patrones-retorica.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Literatura</span> </h2>\r\n<h3>Paso 3 Patrones de retórica</h3>\r\n<p>\r\n  <strong>META:</strong>Que el alumno pueda detectar los patrones de\r\n  retórica que se presentan en la Biblia y su influencia en la\r\n  interpretación.\r\n</p>\r\n<ol type=\"A\">\r\n  <li>Comparación o contraste</li>\r\n  <li>Repetición</li>\r\n  <li>Continuidad</li>\r\n  <li>Clímax</li>\r\n  <li>Encrucijadas</li>\r\n  <li>Intercambio</li>\r\n  <li>Particularización</li>\r\n  <li>Generalización</li>\r\n  <li>Causa y Efecto.</li>\r\n  <li>Sustanciación</li>\r\n  <li>Radiación</li>\r\n  <li>Progresión</li>\r\n</ol>\r\n<p>Y hay más</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/patrones-semanticos/patrones-semanticos.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/patrones-semanticos/patrones-semanticos.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\r\n<h3>\r\n  Paso 5: Categorías de patrones semánticos\r\n  <div>Polisenia y Sinónimos</div>\r\n</h3>\r\n<p>\r\n  <strong>META:</strong>Poder identificar otras definiciones de la misma\r\n  palabra y sus sinónimos.\r\n</p>\r\n<p>\r\n  Considera las relaciones dogmáticas del término. Usando obras acerca de\r\n  sinonimia, y otras ayudas léxicas, determina la oposición del término a\r\n  temas relacionados haciendo una clasificación como se ha mencionado.\r\n</p>\r\n<p>\r\n  <strong>Polisemia:</strong>Cuando una palabra tiene más de un solo\r\n  significado. Es común que una palabra tenga más de un solo significado.\r\n  Casi todas las palabras en el diccionario tienen varias acepciones.\r\n</p>\r\n<p>\r\n  En cada idioma cada palabra tiene su red de relaciones que le dan su\r\n  definición. Si examinamos esta lista de definiciones encontramos que no\r\n  corresponde exactamente a una palabra o red de ideas que existen en\r\n  español. Esto hace difícil la traducción de palabras de un idioma a otro,\r\n  porque en la traducción no se incluyen la misma red y relación de ideas.\r\n</p>\r\n<p>\r\n  Busca en una concordancia greco-española del Nuevo Testamento las palabras\r\n  españolas que son traducciones de la misma palabra griega que estas\r\n  investigando.\r\n</p>\r\n<p>\r\n  <strong>Sinónimos:</strong> cuando dos palabras tienen el mismo\r\n  significado.\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/politica/politica.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/politica/politica.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\r\n<h3>Paso 6: La política</h3>\r\n<p><strong>META: </strong> Descubrir los hechos políticos que influyen el mensaje de los escritos de la Biblia.</p>\r\n<p>De vez en cuando la Biblia menciona la política formal de las naciones de su tiempo. David era rey. Tenía ciertas\r\n  políticas que están mencionadas en la Biblia. A veces éstos hechos son importantes para ponerse en un contexto\r\n  político si entendemos el texto. No sólo en el Antiguo Testamento encontramos estos detalles, sino también en el Nuevo\r\n  Testamento. </p>\r\n<strong>PREGUNTAS PARA UN ESTUDIO BIBLICO: </strong>\r\n<ol>\r\n  <li>¿A quién se testificaba? </li>\r\n  <li>¿Quiénes eran los gobernantes.?</li>\r\n  <li>¿Cuáles eran sus políticas? </li>\r\n  <li>¿Sobre qué área geográfica gobernaban? </li>\r\n  <li>¿Sus gobiernos eran independientes o dependían de otros? </li>\r\n  <li>¿El pueblo en cuestión era esclavo o libre? </li>\r\n</ol>\r\n<strong>Anota en tu Libreta </strong>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/preposiciones/preposiciones.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/preposiciones/preposiciones.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Gramatica</span></h2>\r\n<h3>Paso 3 Preposiciones y Conjunciones</h3>\r\n<p>\r\n  <strong>META: </strong>Identificar los elementos de enlace de las palabras y\r\n  los elementos de enlace de las oraciones.\r\n</p>\r\n<h4><strong>Preoposiciones</strong></h4>\r\n<p>\r\n  \"Las preposiciones y las conjunciones son palabras que funcionan como\r\n  elementos de enlace. Por lo general, la preposición une o coordina palabras, y\r\n  la conjunción, coordina oraciones.\"\"\r\n</p>\r\n<p>\r\n  Las preposiciones son las palabras que indican un tipo de relación entre\r\n  conceptos o cosas. Las preposiciones en español son solamente 19:\r\n</p>\r\n<p>\r\n  a, ante, bajo, cabe, con, contra, de, desde, en, entre, hacia, hasta, para,\r\n  por, según, sin, so, sobre, tras.\r\n</p>\r\n<p>\r\n  Estas palabras son muy importantes para la comprensión adecuada del texto\r\n  bíblico.\r\n</p>\r\n<p>\r\n  <strong>Ejemplo: </strong>Gálatas 2:20 habla de la “fe del hijo de Dios.” Esta\r\n  frase puede tener cuatro significados diferentes. Explica los diferentes\r\n  significados cuando el significado de la preposición se cambia:\r\n</p>\r\n<ol>\r\n  <li>fe DE Cristo</li>\r\n  <li>fe POR Cristo</li>\r\n  <li>fe EN Cristo</li>\r\n  <li>fe COMO Cristo</li>\r\n  <li>fe PARA Cristo</li>\r\n</ol>\r\n<p><strong>EJEMPLO: </strong>Jesús murió por mí:</p>\r\n<p>Jesús murió a mi favor. o Jesús murió en mi lugar</p>\r\n\r\n<p>\r\n  <strong>Observación: </strong> En algunos aspectos la preposición es la mas\r\n  difícil para tener precisión en un idioma. Es importante estudiar los idiomas\r\n  originales para tener una comprensión completa.\r\n</p>\r\n\r\n<h4><strong>Conjunciones</strong></h4>\r\n<p>Hay dos tipos o clases de conjunciones:</p>\r\n<p>\r\n  A. Conjunciones coordinantes que unen partes iguales o unen frases de la misma\r\n  naturaleza.\r\n</p>\r\n<p>\r\n  B. Conjunciones subordinantes que indican una relación de subordinación o\r\n  dependencia.\r\n</p>\r\n\r\n<p>Las conjunciones muestran las siguientes relaciones:</p>\r\n<p>\r\n  A. Conjunciones coordinantes que unen partes iguales o unen frases de la misma\r\n  naturaleza.\r\n</p>\r\n<p>\r\n  1. <strong>Copulativas</strong>(que une o liga): y, ni, que, así que, a fin de\r\n  que, con tal que, ya que, luego que, mientras que, en tanto que, por más que,\r\n  por que, siempre que, a pesar de que, etc.\r\n</p>\r\n<p>2. <strong>Disyuntivas</strong>(que separa): o, u, que, ya, ahora, bien.</p>\r\n<p>\r\n  3. <strong>Adversativas</strong>(denota oposición): pero, aunque, sino,\r\n  empero, sin embargo.\r\n</p>\r\n<p>\r\n  4. <strong>Causales</strong>(denota la razón o causa): porque, ya que, pues,\r\n  puesto que, pues que, supuesto, que, como, como que, etc.\r\n</p>\r\n<p>\r\n  5. <strong>Llativas o Consecutivas</strong>(une o infiere): con que, luego,\r\n  pues, por lo tanto, por consiguiente,(casi todas son frases).\r\n</p>\r\n<p>\r\n  6. <strong>Condicionales</strong>(condiciona): si, como, con tal que, siempre\r\n  que, dado que, con tal de que, ya que, asa que, así.\r\n</p>\r\n<p>\r\n  7. <strong>Finales</strong>(denota el fin, objetivo o meta): para que, a fin\r\n  de que.\r\n</p>\r\n<p>\r\n  8. <strong>Comparativas</strong>(hace una comparación): com, que, así como,\r\n  cual.\r\n</p>\r\n<p>\r\n  9. <strong>Continuativas</strong> (continuidad): asimismo, ahora bien, pues,\r\n  cuando, así que, por tanto, por lo tanto, por consiguiente, así pues.\r\n</p>\r\n<p>10. <strong>Alternativas</strong></p>\r\n<p>11. <strong>Exceptivas</strong></p>\r\n<p>12. <strong>Corroborativas</strong></p>\r\n<p>13. <strong>Concesivas</strong></p>\r\n<p>14. <strong>Expletivas</strong></p>\r\n\r\n<p>Estas relaciones son claves para hacer el esquema de sintaxis.</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/proposito-libro/proposito-libro.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/proposito-libro/proposito-libro.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\r\n<h3>Paso 10: Proposito del Libro</h3>\r\n<p>INFO: Este paso le he cambiado el nombre de intención del autor a proposito del libro ya que \"intención del autor\" se\r\n  repite en area Sintaxis paso 1</p>\r\n<p><strong>META: </strong> Comprender el propósito del libro </p>\r\n<p>Hay ocasiones en que el autor no ha dicho su propósito claramente dentro del texto. Este paso solamente se hace\r\n  cuando el autor no ha declarado su propósito dentro del texto mismo. Si se ha declarado en el texto, se hace este paso\r\n  en CONTEXTO INTERNO. Esto no es un problema si su libro es sencillo. Pero cuando su libro es muy complejo es necesario\r\n  que vayamos a la opinión de otros, quienes están más adelantados es su estudio bíblico.</p>\r\n<p>Proposito: </p>\r\n<p>¿Cuál fue la intención/propósito del autor? Anota en tu Libreta. </p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/religion/religion.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/religion/religion.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\r\n<h3>Paso 5: La religión</h3>\r\n<p><strong>META: </strong>Ya que éstas obras son en principio tratados religiosas, es necesario para su comprensión, un\r\n  entendimiento del medio religioso. Necesitamos entender el nivel de entrega o la falta de entrega de los destinatarios\r\n  y la del autor, sus rituales, liturgias, símbolos, etc. para poder comprender correctamente su comunicación. </p>\r\n<p>La religión, desde la perspectiva bíblica, es lo que más motiva y da coherencia a la vida humana. Es necesario que\r\n  investigamos a fondo los absolutos de la gente para saber su pensamiento religioso. </p>\r\n<strong>PREGUNTA PARA UN ESTUDIO BIBLICO: </strong>\r\n<ol>\r\n  <li>¿Cuál era la relación y nivel del compromiso con Dios de los destinatarios? </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/semantica-of/semantica-of.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/semantica-of/semantica-of.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\r\n<h3>Observaciones finales</h3>\r\n<p>\r\n  \"Ninguna de estas consideraciones debe ser aplicada mecánicamente. Debemos\r\n  tomar en cuenta la fluidez del idioma, sus sutilezas, debe dominar nuestro\r\n  pensamiento desde el principio hasta el fin. Por tanto, no debemos estar\r\n  molestos cuando la certeza y precisión absoluta se nos escape”. La\r\n  incertidumbre responsable nos llevara mucho mas hacia el conocimiento que\r\n  una certeza sin base\r\n</p>\r\n<p>\r\n  2. La decisión final en cuanto al significado de una palabra, debe\r\n  enfocarse en la conciencia del autor de lo que estaba escribiendo. No\r\n  podemos suponer que no estaba consciente de lo que estaba escribiendo. La\r\n  intención fijada por el autor debe determinar nuestra comprensión del\r\n  texto. De esta manera, parece improbable que el autor hubiera estado\r\n  consiente o interesado en uno o más de los factores descubiertos por la\r\n  historia del uso de una palabra, como es la etimología. Tal factor no debe\r\n  influir nuestra interpretación, a menos que podamos demostrar que influye\r\n  en la elección de las palabras de parte del autor. Tenemos que admitir que\r\n  el autor pudo haber usado otros factores en su elección de palabras, como\r\n  la ambigüedad intención, la elección de un término en contra de sus\r\n  sinónimos, y neutralizaciones que deben ser puestas en contraposición a la\r\n  luz de la conclusiones preliminares\r\n</p>\r\n\r\n<p>Ya que has terminado esta area:</p>\r\n<ol>\r\n  <li>Regresa al area de <strong>contexto interno</strong></li>\r\n  <li>\r\n    Revisa tus <strong>conclusiones</strong> segun la nueva informaciòn que\r\n    has conseguido\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/semantica-oraciones/semantica-oraciones.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/semantica-oraciones/semantica-oraciones.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\r\n<h3>Paso 9: Clasificación semántica de las oraciones</h3>\r\n<p>\r\n  <strong>META:</strong>Saber la función de las oraciones que conllevan el\r\n  significado. CLASIFICACION DE LA FUNCION DE LAS ORACIONES\r\n</p>\r\n<p>\r\n  <strong>Función referencial: </strong>oraciones<strong></strong>afirmativa\r\n  y negativa\r\n</p>\r\n<p>\r\n  <strong>Función emotiva:</strong>oraciones<strong></strong>afirmativa y\r\n  negativa\r\n</p>\r\n<p>\r\n  <strong>Función apelativa:</strong>oraciones<strong></strong>afirmativa y\r\n  negativa\r\n</p>\r\n<p>\r\n  <strong>Función imperativa:</strong>oraciones<strong></strong>afirmativa y\r\n  negativa\r\n</p>\r\n<ol>\r\n  <li>Clasifica los enunciados: indicando su función.</li>\r\n  <li>\r\n    Explica como la clasificación de los enunciados nos ayuda a entender el\r\n    texto que estamos estudiando.\r\n  </li>\r\n</ol>\r\n<strong>Preguntas para un estudio bíblico</strong>\r\n<ol>\r\n  <li>\r\n    ¿Cuál es la función de cada una de las oraciones dentro de nuestro\r\n    texto?\r\n  </li>\r\n  <li>¿Es afirmativa o negativa la oración?</li>\r\n  <li>\r\n    ¿Cuáles son las conclusiones que podemos formar con base en la función\r\n    de la oración para aclarar nuestro texto?\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/sustantivos/sustantivos.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/sustantivos/sustantivos.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Gramatica</span></h2>\r\n<h3>Paso 1. Sustantivos</h3>\r\n<p>\r\n  <strong>META: </strong>Identificar los objetos, personas e ideas que se tratan\r\n  en el texto y precisar su definición.\r\n</p>\r\n<p>\r\n  El sustantivo tiene la función de nombrar y designar personas, animales y\r\n  cosas. Se le da el nombre de sustantivo a las palabras que designan seres y\r\n  cosas que tienen una existencia real e independiente. Muchas veces es el tema\r\n  de la oración.\r\n</p>\r\n<p>\r\n  Identifica los sustantivos en la unidad de comunicación que estas estudiando.\r\n  Marcarlos en color azul en tu libreta (TODOS).\r\n</p>\r\n<strong>Preguntas para un estudio bíblico:</strong>\r\n<ol>\r\n  <li>¿Cuáles son los sustantivos que encontramos en el texto?</li>\r\n  <li>¿Cuál es su función?</li>\r\n  <li>¿Qué nos dice el sustantivo en Español?</li>\r\n  <li>¿Cómo está condicionado el sustantivo por el resto del enunciado?</li>\r\n</ol>\r\n\r\n<div class=\"seccion-griego\">\r\n  <strong> <h3>Para el Griego</h3> </strong>\r\n  <p>\r\n    El griego tiene casos para indicar la posición de los sustantivos en la\r\n    oración. Los casos en griego realmente son ocho pero algunas gramáticas lo\r\n    simplifican en cinco.\r\n  </p>\r\n  <ul>\r\n    <li><strong>Nominativo: </strong>Que nombra o indica una cosa</li>\r\n    <li><strong>Genitivo de Posesión: </strong>Que indica posesión.</li>\r\n    <li>\r\n      <strong>Genitivo de Separación: </strong>Que separa o distingue entre dos\r\n      cosas o ideas.\r\n    </li>\r\n    <li><strong>Dativo Locativo: </strong>Que indica ubicación.</li>\r\n    <li><strong>Dativo Instrumental: </strong>Que indica ubicación.</li>\r\n    <li><strong>Dativo de Objetivo Indirecto</strong></li>\r\n    <li>\r\n      <strong>Acusativo: </strong>Que recibe la acción del verbo que no es\r\n      pasivo.\r\n    </li>\r\n    <li>\r\n      <strong>Vocativo</strong>Para llamar a una persona que esta presente en la\r\n      conversación. Solamente en el singular.\r\n    </li>\r\n  </ul>\r\n\r\n  <p><strong>El número: </strong> Singular, Dual y Plural</p>\r\n  <p><strong>El Género: </strong> Masculino y Femenino</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/tema/tema.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/tema/tema.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Sintaxis</span> </h2>\r\n<h3>Paso 2. El Tema</h3>\r\n<strong>El alumno desarrollará este paso.</strong>\r\n<p>\r\n  <strong>Meta: </strong>Identificar el tema y los subtemas de cada párrafo\r\n  (perícopa) y así del Libro (carta) completo.\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/uso-palabra/uso-palabra.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/uso-palabra/uso-palabra.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\r\n<h3>Paso 4: El uso de una palabra</h3>\r\n<p>\r\n  <strong>META:</strong>Afinar la definición por medio de observar cómo se\r\n  usa en el texto.\r\n</p>\r\n<p>\r\n  El diccionario solamente es una ayuda para la definición de Palabras,\r\n  nunca es determinante, sino sólo indicativo de como puede ser la\r\n  definición. Es esencial que también hagas un estudio de uso, o de la\r\n  definición que un autor da a una palabra en su propio escrito. Este tipo\r\n  de análisis se puede aplicar con más facilidad a palabras que se usan con\r\n  mucha frecuencia. Las palabras que se repitan pocas veces requieren que\r\n  vayas a otros autores dentro y fuera de la Biblia\r\n</p>\r\n<div class=\"special\">\r\n  palabra > definición > palabra aclaración limitación condición descripción\r\n  diferencia extensión\r\n</div>\r\n<p>\r\n  Al definir las palabras se admite que las definiciones en la cultura\r\n  hebrea o griega pueden ser diferentes de las que manejamos nosotros. Toma\r\n  por ejemplo la palabra Libertad. Nosotros ejercemos muchas más libertades\r\n  que la gente de los tiempos bíblicos. Escogemos nuestras novias o novios.\r\n  Escogemos nuestro trabajo. Escogemos nuestro partido político. Pero en los\r\n  tiempos bíblicos las elecciones de éstas ú otras cosas eran\r\n  preestablecidas por la familia. Aparte de que la cultura moderna nos da\r\n  muchas mas libertades, hemos tenido una larga historia filosófica que ha\r\n  venido redefiniendo el concepto de libertad. Tenemos por primera vez los\r\n  derechos humanos como norma de la vida moderna. Aunque esto es relativo,\r\n  casi todos los seres humanos anhelan y gozan de ciertas libertades que\r\n  antes no existían en la mente de las mayorías. Aparte de esto los teólogos\r\n  modernos hablan de nuestra libertad de acercarnos a Dios o de hacer una\r\n  decisión de aceptar a Cristo.\r\n</p>\r\n<strong>Preguntas para un estudio bíblico</strong>\r\n<ol>\r\n  <li>\r\n    ¿Cuales son las palabras que se asocian con la que estamos estudiando en\r\n    el texto?\r\n  </li>\r\n  <li>\r\n    ¿En qué forma nos ayudan a entender mejor la palabra que estamos\r\n    estudiando?\r\n  </li>\r\n</ol>\r\n\r\n<p>\r\n  <strong>META 2: </strong>Describir, diferenciar y extender el significado\r\n  de la palabra que investigamos.\r\n</p>\r\n\r\n<ol>\r\n  <li>\r\n    Toma la palabra que estas estudiando y decide si es:\r\n    <ul>\r\n      <li>una cualidad</li>\r\n      <li>un objeto</li>\r\n      <li>una actividad</li>\r\n    </ul>\r\n  </li>\r\n\r\n  <li>\r\n    Una vez que has determinado la clase de palabra que es, busca dentro del\r\n    mismo texto frases o palabras que:\r\n    <ul>\r\n      <li>Describe la palabra que estas investigando.</li>\r\n      <li>Palabras que diferencian esta palabra de otras.</li>\r\n      <li>Palabras que extienden su significado.</li>\r\n    </ul>\r\n  </li>\r\n</ol>\r\n<p>\r\n  Cuando estés explorando el significado tienes que buscar en la cultura\r\n  bíblica. Recuerda que cada cultura tiene sus sistemas de relaciones. Es\r\n  equivocado asumir que cada cultura tiene la misma red de ideas. Entonces\r\n  es importante que estudiemos la Biblia desde su propia perspectiva.\r\n</p>\r\n\r\n<strong>Preguntas para un estudio bíblico</strong>\r\n<ol>\r\n  <li>\r\n    ¿Cuáles son las palabras que describen, diferencian, o extienden a la\r\n    que estamos estudiando en el texto?\r\n  </li>\r\n  <li>\r\n    ¿De qué manera nos ayudan a entender mejor la palabra que estamos\r\n    estudiando?\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/usus-loquendi/usus-loquendi.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/usus-loquendi/usus-loquendi.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\r\n<h3>Paso 10: Usus Loquendi</h3>\r\n<p>\r\n  <strong>META:</strong> Fijar en nuestra mente una definición específica\r\n  para la palabra en su contexto específico.\r\n</p>\r\n<p>\r\n  \"En el estudio de palabras particulares, lo más importante, no es su\r\n  significado etimológico, ni los varios significados que haya adquirido con\r\n  el paso del tiempo, sino su significado particular en relación con las\r\n  otras palabras en la oración donde la emplea el autor.\"\r\n</p>\r\n<p>\r\n  El \"usus loquendi\" es la definición de una palabra, determinada por su\r\n  relación con las otras palabras de una oración específica. \"CADA PALABRA\r\n  SOLAMENTE PUEDE TENER UN SIGNIFICADO FIJO, EN CONEXION CON EL PASAJE EN\r\n  QUE OCURRE\".\r\n</p>\r\n<strong>Preguntas para un estudio bíblico</strong>\r\n<ol>\r\n  <li>\r\n    ¿Cuál es el significado de las palabras que estamos estudiando en el\r\n    texto?\r\n  </li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/verbos/verbos.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/verbos/verbos.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Gramatica</span></h2>\r\n<h3>Paso 2. Verbos</h3>\r\n<p>\r\n  <strong>META: </strong>¿Cómo está condicionado el sustantivo por el resto del\r\n  enunciado?\r\n</p>\r\n<p>¿Cómo está condicionado el sustantivo por el resto del enunciado?</p>\r\n<p>\r\n  A. El MODO del verbo nos indica si la acción es, fue, o será una realidad, UN\r\n  deseo, una condición, o implica UN mandato\r\n</p>\r\n<strong>Pregunta para un estudio bíblico:</strong>\r\n<p>\r\n  ¿Que nos indica el modo del verbo acerca de la acción? ¿Es una realidad, un\r\n  deseo, una condición, o implica un mandato?\r\n</p>\r\n<p>\r\n  B. El TIEMPO del verbo indica si la acción es pasada, presente o futura, y a\r\n  veces si es acción puntual o acción continúa.\r\n</p>\r\n\r\n<p>\r\n  1. Identifica los verbos en la unidad de comunicación que estas estudiando.\r\n  Marcarlos en color <span>verde</span> en tu libreta (TODOS).\r\n</p>\r\n\r\n<strong>Preguntas para un estudio bíblico: </strong>\r\n<ol>\r\n  <li>\r\n    ¿Cual es el tiempo y el tipo de acción (continua o puntual) del verbo?\r\n  </li>\r\n  <li>¿Cómo influye esto en la intención del autor?</li>\r\n</ol>\r\n\r\n<p>C. El verbo también indica la PERSONA que está actuando.</p>\r\n<p>La PERSONA puede ser una persona, cosa o idea que conlleva la acción</p>\r\n<p>\r\n  D. El verbo indica si la acción está dirigida al autor de esta acción a otra\r\n  persona, cosa o situación.\r\n</p>\r\n\r\n<strong>Preguntas para un estudio bíblico</strong>\r\n<ol>\r\n  <li>\r\n    ¿Cómo influye en la interpretación de este texto el tiempo del verbo?\r\n  </li>\r\n  <li>\r\n    ¿Si el autor hubiera usado otro tiempo, cómo cambiarla el mensaje?\r\n  </li>\r\n</ol>\r\n\r\n<p>\r\n  E. Tenemos que prestar mucha atención a la naturaleza de la palabra que es UN\r\n  verbo.\r\n</p>\r\n<p>\r\n  F. A veces el verbo esta cualificado por UN adverbio que dice como la acción\r\n  del verbo es llevada a cabo.\r\n</p>\r\n\r\n<div class=\"seccion-griego\">\r\n  <strong><h3>El Verbo en Griego y Hebreo</h3> </strong>\r\n  <p>\r\n    No todos los idiomas tienen el mismo sistema de verbo. Esto hace muy difícil\r\n    la traducción de UN idioma a otro. Por lo tanto ofrecemos una breve\r\n    explicación de los verbos en griego y en hebreo. PARA lograr una comprensión\r\n    completa es necesario que aprendamos los idiomas originales de la Biblia.\r\n  </p>\r\n  <p>\r\n    El sistema del verbo es diferente en cada idioma. Generalmente los\r\n    traductores ajustan la traducción con otras palabras para comunicar el mismo\r\n    sentido. Entonces el tipo de pregunta que hacemos en el Antiguo Testamento y\r\n    también en el Nuevo Testamento debe estar relacionada con su sistema de \r\n    gramática y su verbo.\r\n  </p>\r\n\r\n  <strong><h3>El Verbo en Griego</h3></strong>\r\n  <ul>\r\n    <li>Persona: ¿Quien hace la acción?</li>\r\n    <li>\r\n      Número: ¿Cuantos actores están practicando la acción: singular o plural.\r\n    </li>\r\n    <li>\r\n      Esta es más amplia que en el español.\r\n      <ol type=\"a\">\r\n        <li>\r\n          <strong>Activa: </strong>La acción del actor a otra persona o cosa. (A\r\n          veces es reflexiva).\r\n        </li>\r\n        <li>\r\n          <strong>Medio: </strong>(Solamente en griego). La acción del actor es\r\n          PARA si mismo. (A veces es reflexiva).\r\n        </li>\r\n        <li><strong>Pasiva: </strong>La acción es recibida.</li>\r\n      </ol>\r\n    </li>\r\n    <li>\r\n      Aspecto: Solamente en griego.\r\n      <ol type=\"a\">\r\n        <li>\r\n          Acción en UN punto de tiempo o donde la duración no es importante \"fue\r\n          escrito\".\r\n        </li>\r\n        <li>Acción continua \"estaba siendo escrito\".</li>\r\n        <li>\r\n          Acción de UN punto que tiene resueltos continuos o que dura \"escrito\r\n          esta\".\r\n        </li>\r\n      </ol>\r\n    </li>\r\n    <li>\r\n      Modo: Si la acción es Real, Posible, una Orden o un Deseo.\r\n      <ol type=\"a\">\r\n        <li>Indicativo: \"es verdad\".</li>\r\n        <li>Subjuntivo: \"es posible\".</li>\r\n        <li>Imperativo: \"ordeno que sea la verdad\".</li>\r\n        <li>Optativo: \"deseo que sea la verdad\".</li>\r\n      </ol>\r\n    </li>\r\n    <li>\r\n      Tiempo: Cuando ocurre una acción\r\n      <ol type=\"a\">\r\n        <li>Pasado: \"fui a la tienda\".</li>\r\n        <li>Presente: \"voy a la tienda\".</li>\r\n        <li>Futuro: \"iré a la tienda\".</li>\r\n      </ol>\r\n    </li>\r\n  </ul>\r\n\r\n  <strong><h3>El Verbo en Hebreo</h3></strong>\r\n  <p>\r\n    El verbo en hebreo no enfatiza el tiempo como los verbos en español. A pesar\r\n    de no tener el tiempo marcado por los verbos tiene adverbios que indican el\r\n    tiempo: \"antes\", \"todavía\", y \"mas tarde\". El hebreo también indica el\r\n    tiempo por medio de verbos con la acción completa, o con la acción\r\n    incompleta. Para escribir el verbo (la acción) en español tenemos que suplir\r\n    el tiempo. Muchas veces se hace con base en el contexto.\r\n  </p>\r\n  <p>\r\n    En lugar de enfatizar el tiempo, el verbo en hebreo enfatiza la intensidad\r\n    de la acción.\r\n  </p>\r\n  <ul>\r\n    <li>Simple</li>\r\n    <li>Intensivo</li>\r\n    <li>Causativo</li>\r\n    <li>Activo</li>\r\n    <li>Pasivo</li>\r\n    <li>Reflexivo</li>\r\n  </ul>\r\n</div>\r\n\r\n<strong>Preguntas para un estudio bíblico</strong>\r\n<p>\r\n  Nuestras preguntas principales sobre El Verbo en el Antiguo Testamento deben\r\n  ser:\r\n</p>\r\n<ol>\r\n  <li>¿Quién hace la acción?</li>\r\n  <li>¿Quién recibe la acción?</li>\r\n  <li>¿Hizo la acción a sí mismo?</li>\r\n  <li>¿Que tan intensiva o pasiva es la acción?</li>\r\n  <li>¿Quién causó la acción</li>\r\n  <li>¿Esta completa o incompleta la acción?</li>\r\n</ol>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: fadeInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOut", function() { return fadeInOut; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


const fadeInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', opacity: 0, maxWidth: '1000px' })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', opacity: 1, maxWidth: '1000px' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', opacity: 0, maxWidth: '1000px' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))], { optional: true })
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _areas_contexto_interno_contexto_interno_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./areas/contexto-interno/contexto-interno.component */ "./src/app/areas/contexto-interno/contexto-interno.component.ts");
/* harmony import */ var _core_libro_mismo_libro_mismo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/libro-mismo/libro-mismo.component */ "./src/app/core/libro-mismo/libro-mismo.component.ts");
/* harmony import */ var _core_division_parrafos_division_parrafos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/division-parrafos/division-parrafos.component */ "./src/app/core/division-parrafos/division-parrafos.component.ts");
/* harmony import */ var _core_agrupacion_parrafos_agrupacion_parrafos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/agrupacion-parrafos/agrupacion-parrafos.component */ "./src/app/core/agrupacion-parrafos/agrupacion-parrafos.component.ts");
/* harmony import */ var _core_elemento_existencial_humano_elemento_existencial_humano_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/elemento-existencial-humano/elemento-existencial-humano.component */ "./src/app/core/elemento-existencial-humano/elemento-existencial-humano.component.ts");
/* harmony import */ var _core_identificacion_cultura_identificacion_cultura_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/identificacion-cultura/identificacion-cultura.component */ "./src/app/core/identificacion-cultura/identificacion-cultura.component.ts");
/* harmony import */ var _core_evaluacion_cultura_evaluacion_cultura_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/evaluacion-cultura/evaluacion-cultura.component */ "./src/app/core/evaluacion-cultura/evaluacion-cultura.component.ts");
/* harmony import */ var _core_analisis_problemas_analisis_problemas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/analisis-problemas/analisis-problemas.component */ "./src/app/core/analisis-problemas/analisis-problemas.component.ts");
/* harmony import */ var _areas_semantica_semantica_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./areas/semantica/semantica.component */ "./src/app/areas/semantica/semantica.component.ts");
/* harmony import */ var _core_definicion_palabras_definicion_palabras_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/definicion-palabras/definicion-palabras.component */ "./src/app/core/definicion-palabras/definicion-palabras.component.ts");
/* harmony import */ var _core_lexico_lexico_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/lexico/lexico.component */ "./src/app/core/lexico/lexico.component.ts");
/* harmony import */ var _core_etimologia_etimologia_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/etimologia/etimologia.component */ "./src/app/core/etimologia/etimologia.component.ts");
/* harmony import */ var _core_uso_palabra_uso_palabra_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/uso-palabra/uso-palabra.component */ "./src/app/core/uso-palabra/uso-palabra.component.ts");
/* harmony import */ var _core_patrones_semanticos_patrones_semanticos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/patrones-semanticos/patrones-semanticos.component */ "./src/app/core/patrones-semanticos/patrones-semanticos.component.ts");
/* harmony import */ var _core_campos_semanticos_campos_semanticos_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/campos-semanticos/campos-semanticos.component */ "./src/app/core/campos-semanticos/campos-semanticos.component.ts");
/* harmony import */ var _core_frecuencia_uso_frecuencia_uso_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/frecuencia-uso/frecuencia-uso.component */ "./src/app/core/frecuencia-uso/frecuencia-uso.component.ts");
/* harmony import */ var _core_connotacion_denotacion_connotacion_denotacion_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/connotacion-denotacion/connotacion-denotacion.component */ "./src/app/core/connotacion-denotacion/connotacion-denotacion.component.ts");
/* harmony import */ var _core_semantica_oraciones_semantica_oraciones_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/semantica-oraciones/semantica-oraciones.component */ "./src/app/core/semantica-oraciones/semantica-oraciones.component.ts");
/* harmony import */ var _core_semantica_of_semantica_of_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/semantica-of/semantica-of.component */ "./src/app/core/semantica-of/semantica-of.component.ts");
/* harmony import */ var _areas_gramatica_gramatica_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./areas/gramatica/gramatica.component */ "./src/app/areas/gramatica/gramatica.component.ts");
/* harmony import */ var _core_verbos_verbos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/verbos/verbos.component */ "./src/app/core/verbos/verbos.component.ts");
/* harmony import */ var _core_sustantivos_sustantivos_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./core/sustantivos/sustantivos.component */ "./src/app/core/sustantivos/sustantivos.component.ts");
/* harmony import */ var _core_preposiciones_preposiciones_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./core/preposiciones/preposiciones.component */ "./src/app/core/preposiciones/preposiciones.component.ts");
/* harmony import */ var _core_adjetivos_adverbios_adjetivos_adverbios_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./core/adjetivos-adverbios/adjetivos-adverbios.component */ "./src/app/core/adjetivos-adverbios/adjetivos-adverbios.component.ts");
/* harmony import */ var _core_usus_loquendi_usus_loquendi_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/usus-loquendi/usus-loquendi.component */ "./src/app/core/usus-loquendi/usus-loquendi.component.ts");
/* harmony import */ var _areas_sintaxis_sintaxis_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./areas/sintaxis/sintaxis.component */ "./src/app/areas/sintaxis/sintaxis.component.ts");
/* harmony import */ var _core_intencion_autor_intencion_autor_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./core/intencion-autor/intencion-autor.component */ "./src/app/core/intencion-autor/intencion-autor.component.ts");
/* harmony import */ var _core_tema_tema_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./core/tema/tema.component */ "./src/app/core/tema/tema.component.ts");
/* harmony import */ var _core_ideas_ideas_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./core/ideas/ideas.component */ "./src/app/core/ideas/ideas.component.ts");
/* harmony import */ var _core_argumento_esquematizacion_argumento_esquematizacion_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./core/argumento-esquematizacion/argumento-esquematizacion.component */ "./src/app/core/argumento-esquematizacion/argumento-esquematizacion.component.ts");
/* harmony import */ var _core_pasaje_tema_pasaje_tema_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./core/pasaje-tema/pasaje-tema.component */ "./src/app/core/pasaje-tema/pasaje-tema.component.ts");
/* harmony import */ var _core_intencion_parrafo_intencion_parrafo_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./core/intencion-parrafo/intencion-parrafo.component */ "./src/app/core/intencion-parrafo/intencion-parrafo.component.ts");
/* harmony import */ var _areas_literatura_literatura_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./areas/literatura/literatura.component */ "./src/app/areas/literatura/literatura.component.ts");
/* harmony import */ var _core_genero_genero_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./core/genero/genero.component */ "./src/app/core/genero/genero.component.ts");
/* harmony import */ var _core_formulas_expresion_formulas_expresion_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./core/formulas-expresion/formulas-expresion.component */ "./src/app/core/formulas-expresion/formulas-expresion.component.ts");
/* harmony import */ var _core_patrones_retorica_patrones_retorica_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./core/patrones-retorica/patrones-retorica.component */ "./src/app/core/patrones-retorica/patrones-retorica.component.ts");
/* harmony import */ var _core_figuras_diccion_figuras_diccion_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./core/figuras-diccion/figuras-diccion.component */ "./src/app/core/figuras-diccion/figuras-diccion.component.ts");
/* harmony import */ var _core_evaluacion_texto_original_evaluacion_texto_original_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./core/evaluacion-texto-original/evaluacion-texto-original.component */ "./src/app/core/evaluacion-texto-original/evaluacion-texto-original.component.ts");
/* harmony import */ var _core_modismos_modismos_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./core/modismos/modismos.component */ "./src/app/core/modismos/modismos.component.ts");
/* harmony import */ var _areas_contexto_externo_contexto_externo_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./areas/contexto-externo/contexto-externo.component */ "./src/app/areas/contexto-externo/contexto-externo.component.ts");
/* harmony import */ var _areas_teologia_teologia_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./areas/teologia/teologia.component */ "./src/app/areas/teologia/teologia.component.ts");
/* harmony import */ var _areas_aplicacion_homiletica_aplicacion_homiletica_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./areas/aplicacion-homiletica/aplicacion-homiletica.component */ "./src/app/areas/aplicacion-homiletica/aplicacion-homiletica.component.ts");
/* harmony import */ var _core_autor_autor_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./core/autor/autor.component */ "./src/app/core/autor/autor.component.ts");
/* harmony import */ var _core_destinatarios_destinatarios_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./core/destinatarios/destinatarios.component */ "./src/app/core/destinatarios/destinatarios.component.ts");
/* harmony import */ var _core_historia_historia_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./core/historia/historia.component */ "./src/app/core/historia/historia.component.ts");
/* harmony import */ var _core_cultura_cultura_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./core/cultura/cultura.component */ "./src/app/core/cultura/cultura.component.ts");
/* harmony import */ var _core_religion_religion_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./core/religion/religion.component */ "./src/app/core/religion/religion.component.ts");
/* harmony import */ var _core_politica_politica_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./core/politica/politica.component */ "./src/app/core/politica/politica.component.ts");
/* harmony import */ var _core_filosofia_filosofia_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./core/filosofia/filosofia.component */ "./src/app/core/filosofia/filosofia.component.ts");
/* harmony import */ var _core_geografia_geografia_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./core/geografia/geografia.component */ "./src/app/core/geografia/geografia.component.ts");
/* harmony import */ var _core_cronologia_cronologia_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./core/cronologia/cronologia.component */ "./src/app/core/cronologia/cronologia.component.ts");
/* harmony import */ var _core_proposito_libro_proposito_libro_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./core/proposito-libro/proposito-libro.component */ "./src/app/core/proposito-libro/proposito-libro.component.ts");
/* harmony import */ var _areas_introduccion_introduccion_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./areas/introduccion/introduccion.component */ "./src/app/areas/introduccion/introduccion.component.ts");
























































const routes = [
    { path: "area/introduccion", component: _areas_introduccion_introduccion_component__WEBPACK_IMPORTED_MODULE_55__["IntroduccionComponent"] },
    { path: "area/contexto-interno", component: _areas_contexto_interno_contexto_interno_component__WEBPACK_IMPORTED_MODULE_3__["ContextoInternoComponent"] },
    { path: "area/semantica", component: _areas_semantica_semantica_component__WEBPACK_IMPORTED_MODULE_11__["SemanticaComponent"] },
    { path: "area/gramatica", component: _areas_gramatica_gramatica_component__WEBPACK_IMPORTED_MODULE_22__["GramaticaComponent"] },
    { path: "area/sintaxis", component: _areas_sintaxis_sintaxis_component__WEBPACK_IMPORTED_MODULE_28__["SintaxisComponent"] },
    { path: "area/literatura", component: _areas_literatura_literatura_component__WEBPACK_IMPORTED_MODULE_35__["LiteraturaComponent"] },
    { path: "area/contexto-externo", component: _areas_contexto_externo_contexto_externo_component__WEBPACK_IMPORTED_MODULE_42__["ContextoExternoComponent"] },
    { path: "area/teologia", component: _areas_teologia_teologia_component__WEBPACK_IMPORTED_MODULE_43__["TeologiaComponent"] },
    {
        path: "area/aplicacion-homiletica",
        component: _areas_aplicacion_homiletica_aplicacion_homiletica_component__WEBPACK_IMPORTED_MODULE_44__["AplicacionHomileticaComponent"]
    },
    { path: "core/libro-mismo", component: _core_libro_mismo_libro_mismo_component__WEBPACK_IMPORTED_MODULE_4__["LibroMismoComponent"] },
    { path: "core/division-parrafos", component: _core_division_parrafos_division_parrafos_component__WEBPACK_IMPORTED_MODULE_5__["DivisionParrafosComponent"] },
    { path: "core/agrupacion-parrafos", component: _core_agrupacion_parrafos_agrupacion_parrafos_component__WEBPACK_IMPORTED_MODULE_6__["AgrupacionParrafosComponent"] },
    {
        path: "core/elemento-existencial-humano",
        component: _core_elemento_existencial_humano_elemento_existencial_humano_component__WEBPACK_IMPORTED_MODULE_7__["ElementoExistencialHumanoComponent"]
    },
    {
        path: "core/identificacion-cultura",
        component: _core_identificacion_cultura_identificacion_cultura_component__WEBPACK_IMPORTED_MODULE_8__["IdentificacionCulturaComponent"]
    },
    { path: "core/evaluacion-cultura", component: _core_evaluacion_cultura_evaluacion_cultura_component__WEBPACK_IMPORTED_MODULE_9__["EvaluacionCulturaComponent"] },
    { path: "core/analisis-problemas", component: _core_analisis_problemas_analisis_problemas_component__WEBPACK_IMPORTED_MODULE_10__["AnalisisProblemasComponent"] },
    { path: "core/definicion-palabras", component: _core_definicion_palabras_definicion_palabras_component__WEBPACK_IMPORTED_MODULE_12__["DefinicionPalabrasComponent"] },
    { path: "core/lexico", component: _core_lexico_lexico_component__WEBPACK_IMPORTED_MODULE_13__["LexicoComponent"] },
    { path: "core/etimologia", component: _core_etimologia_etimologia_component__WEBPACK_IMPORTED_MODULE_14__["EtimologiaComponent"] },
    { path: "core/uso-palabra", component: _core_uso_palabra_uso_palabra_component__WEBPACK_IMPORTED_MODULE_15__["UsoPalabraComponent"] },
    { path: "core/patrones-semanticos", component: _core_patrones_semanticos_patrones_semanticos_component__WEBPACK_IMPORTED_MODULE_16__["PatronesSemanticosComponent"] },
    { path: "core/campos-semanticos", component: _core_campos_semanticos_campos_semanticos_component__WEBPACK_IMPORTED_MODULE_17__["CamposSemanticosComponent"] },
    { path: "core/frecuencia-uso", component: _core_frecuencia_uso_frecuencia_uso_component__WEBPACK_IMPORTED_MODULE_18__["FrecuenciaUsoComponent"] },
    {
        path: "core/connotacion-denotacion",
        component: _core_connotacion_denotacion_connotacion_denotacion_component__WEBPACK_IMPORTED_MODULE_19__["ConnotacionDenotacionComponent"]
    },
    { path: "core/semantica-oraciones", component: _core_semantica_oraciones_semantica_oraciones_component__WEBPACK_IMPORTED_MODULE_20__["SemanticaOracionesComponent"] },
    { path: "core/usus-loquendi", component: _core_usus_loquendi_usus_loquendi_component__WEBPACK_IMPORTED_MODULE_27__["UsusLoquendiComponent"] },
    { path: "core/semantica-of", component: _core_semantica_of_semantica_of_component__WEBPACK_IMPORTED_MODULE_21__["SemanticaOfComponent"] },
    { path: "core/verbos", component: _core_verbos_verbos_component__WEBPACK_IMPORTED_MODULE_23__["VerbosComponent"] },
    { path: "core/sustantivos", component: _core_sustantivos_sustantivos_component__WEBPACK_IMPORTED_MODULE_24__["SustantivosComponent"] },
    { path: "core/preposiciones", component: _core_preposiciones_preposiciones_component__WEBPACK_IMPORTED_MODULE_25__["PreposicionesComponent"] },
    { path: "core/adjetivos-adverbios", component: _core_adjetivos_adverbios_adjetivos_adverbios_component__WEBPACK_IMPORTED_MODULE_26__["AdjetivosAdverbiosComponent"] },
    { path: "core/intencion-autor", component: _core_intencion_autor_intencion_autor_component__WEBPACK_IMPORTED_MODULE_29__["IntencionAutorComponent"] },
    { path: "core/tema", component: _core_tema_tema_component__WEBPACK_IMPORTED_MODULE_30__["TemaComponent"] },
    { path: "core/ideas", component: _core_ideas_ideas_component__WEBPACK_IMPORTED_MODULE_31__["IdeasComponent"] },
    { path: "core/intencion-parrafo", component: _core_intencion_parrafo_intencion_parrafo_component__WEBPACK_IMPORTED_MODULE_34__["IntencionParrafoComponent"] },
    {
        path: "core/argumento-esquematizacion",
        component: _core_argumento_esquematizacion_argumento_esquematizacion_component__WEBPACK_IMPORTED_MODULE_32__["ArgumentoEsquematizacionComponent"]
    },
    { path: "core/pasaje-tema", component: _core_pasaje_tema_pasaje_tema_component__WEBPACK_IMPORTED_MODULE_33__["PasajeTemaComponent"] },
    { path: "core/genero", component: _core_genero_genero_component__WEBPACK_IMPORTED_MODULE_36__["GeneroComponent"] },
    { path: "core/formulas-expresion", component: _core_formulas_expresion_formulas_expresion_component__WEBPACK_IMPORTED_MODULE_37__["FormulasExpresionComponent"] },
    { path: "core/patrones-retorica", component: _core_patrones_retorica_patrones_retorica_component__WEBPACK_IMPORTED_MODULE_38__["PatronesRetoricaComponent"] },
    { path: "core/figuras-diccion", component: _core_figuras_diccion_figuras_diccion_component__WEBPACK_IMPORTED_MODULE_39__["FigurasDiccionComponent"] },
    {
        path: "core/evaluacion-texto-orginal",
        component: _core_evaluacion_texto_original_evaluacion_texto_original_component__WEBPACK_IMPORTED_MODULE_40__["EvaluacionTextoOriginalComponent"]
    },
    { path: "core/modismos", component: _core_modismos_modismos_component__WEBPACK_IMPORTED_MODULE_41__["ModismosComponent"] },
    { path: "core/autor", component: _core_autor_autor_component__WEBPACK_IMPORTED_MODULE_45__["AutorComponent"] },
    { path: "core/destinatarios", component: _core_destinatarios_destinatarios_component__WEBPACK_IMPORTED_MODULE_46__["DestinatariosComponent"] },
    { path: "core/historia", component: _core_historia_historia_component__WEBPACK_IMPORTED_MODULE_47__["HistoriaComponent"] },
    { path: "core/cultura", component: _core_cultura_cultura_component__WEBPACK_IMPORTED_MODULE_48__["CulturaComponent"] },
    { path: "core/religion", component: _core_religion_religion_component__WEBPACK_IMPORTED_MODULE_49__["ReligionComponent"] },
    { path: "core/politica", component: _core_politica_politica_component__WEBPACK_IMPORTED_MODULE_50__["PoliticaComponent"] },
    { path: "core/filosofia", component: _core_filosofia_filosofia_component__WEBPACK_IMPORTED_MODULE_51__["FilosofiaComponent"] },
    { path: "core/geografia", component: _core_geografia_geografia_component__WEBPACK_IMPORTED_MODULE_52__["GeografiaComponent"] },
    { path: "core/cronologia", component: _core_cronologia_cronologia_component__WEBPACK_IMPORTED_MODULE_53__["CronologiaComponent"] },
    { path: "core/proposito-libro", component: _core_proposito_libro_proposito_libro_component__WEBPACK_IMPORTED_MODULE_54__["PropositoLibroComponent"] },
    { path: "", component: _areas_introduccion_introduccion_component__WEBPACK_IMPORTED_MODULE_55__["IntroduccionComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidenav {\r\n  position: fixed;\r\n  top: 64px;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 0;\r\n  min-width: 260px;\r\n  background-color: #fff;\r\n  box-shadow: 6px 0 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.toolbar {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 10;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);\r\n  color: #eeeeee;\r\n  background-color: #393e46;\r\n\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.toolbar div h1 {\r\n  padding-top: 5px;\r\n}\r\n\r\n.toolbar div .my-icon{\r\n  padding: 10px;\r\n}\r\n\r\n.toolbar div .my-icon:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n.sidenav-content {\r\n  position: relative;\r\n  max-width: 1000px;\r\n  min-height: 100vh;\r\n  padding: 70px 3rem 2rem;\r\n}\r\n\r\nfooter {\r\n  font-family: \"Press Start 2P\", cursive;\r\n  position: relative;\r\n  line-height: 2.4rem;\r\n  flex: 1;\r\n  padding: 48px;\r\n  z-index: 0;\r\n  background-color: #393e46;\r\n  font-size: small;\r\n  color: #eeeeee;\r\n}\r\n\r\n.firma {\r\n  text-align: end;\r\n  font-size: smaller;\r\n}\r\n\r\n.firma p {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.firma p i {\r\n  margin-right: 35px;\r\n  color: red;\r\n  font-size: 35px;\r\n}\r\n\r\n.firma a:visited,\r\n.firma a:link {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.firma a:hover {\r\n  color: gray;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .firma {\r\n    text-align: center;\r\n    padding-left: 15px;\r\n  }\r\n\r\n  .firma p i {\r\n    margin-left: 35px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFNBQVM7RUFDVCxPQUFPO0VBQ1AsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMsY0FBYztFQUNkLHlCQUF5Qjs7RUFFekIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUVuQixPQUFPO0VBQ1AsYUFBYTtFQUNiLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA2NHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWluLXdpZHRoOiAyNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDZweCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGNvbG9yOiAjZWVlZWVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNlNDY7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udG9vbGJhciBkaXYgaDEge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi50b29sYmFyIGRpdiAubXktaWNvbntcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4udG9vbGJhciBkaXYgLm15LWljb246aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2lkZW5hdi1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogNzBweCAzcmVtIDJyZW07XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUHJlc3MgU3RhcnQgMlBcIiwgY3Vyc2l2ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcclxuICAtd2Via2l0LWZsZXg6IDE7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiA0OHB4O1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5M2U0NjtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGNvbG9yOiAjZWVlZWVlO1xyXG59XHJcblxyXG4uZmlybWEge1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuXHJcbi5maXJtYSBwIHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5maXJtYSBwIGkge1xyXG4gIG1hcmdpbi1yaWdodDogMzVweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5cclxuLmZpcm1hIGE6dmlzaXRlZCxcclxuLmZpcm1hIGE6bGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZpcm1hIGE6aG92ZXIge1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuZmlybWEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmZpcm1hIHAgaSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");







let AppComponent = class AppComponent {
    constructor(changeDetectorRef, media, route, matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.title = 'manual-hermeneutica-app';
        this.opened = true;
        this.matIconRegistry
            .addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/github_mark_white.svg'));
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addEventListener('change', this.mobileQueryListener);
        route.events.subscribe(() => {
            if (this.mobileQuery.matches) {
                this.opened = false;
            }
        });
    }
    prepareRoute(outlet) {
        console.log(outlet.activatedRoute.routeConfig.path);
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
    ngOnDestroy() {
        this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInOut"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _areas_contexto_interno_contexto_interno_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./areas/contexto-interno/contexto-interno.component */ "./src/app/areas/contexto-interno/contexto-interno.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _content_sidenav_content_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content-sidenav/content-sidenav.component */ "./src/app/content-sidenav/content-sidenav.component.ts");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _core_libro_mismo_libro_mismo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/libro-mismo/libro-mismo.component */ "./src/app/core/libro-mismo/libro-mismo.component.ts");
/* harmony import */ var _core_division_parrafos_division_parrafos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/division-parrafos/division-parrafos.component */ "./src/app/core/division-parrafos/division-parrafos.component.ts");
/* harmony import */ var _core_agrupacion_parrafos_agrupacion_parrafos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/agrupacion-parrafos/agrupacion-parrafos.component */ "./src/app/core/agrupacion-parrafos/agrupacion-parrafos.component.ts");
/* harmony import */ var _core_elemento_existencial_humano_elemento_existencial_humano_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/elemento-existencial-humano/elemento-existencial-humano.component */ "./src/app/core/elemento-existencial-humano/elemento-existencial-humano.component.ts");
/* harmony import */ var _core_identificacion_cultura_identificacion_cultura_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/identificacion-cultura/identificacion-cultura.component */ "./src/app/core/identificacion-cultura/identificacion-cultura.component.ts");
/* harmony import */ var _core_evaluacion_cultura_evaluacion_cultura_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/evaluacion-cultura/evaluacion-cultura.component */ "./src/app/core/evaluacion-cultura/evaluacion-cultura.component.ts");
/* harmony import */ var _core_analisis_problemas_analisis_problemas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/analisis-problemas/analisis-problemas.component */ "./src/app/core/analisis-problemas/analisis-problemas.component.ts");
/* harmony import */ var _areas_semantica_semantica_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./areas/semantica/semantica.component */ "./src/app/areas/semantica/semantica.component.ts");
/* harmony import */ var _core_definicion_palabras_definicion_palabras_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/definicion-palabras/definicion-palabras.component */ "./src/app/core/definicion-palabras/definicion-palabras.component.ts");
/* harmony import */ var _core_lexico_lexico_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/lexico/lexico.component */ "./src/app/core/lexico/lexico.component.ts");
/* harmony import */ var _core_etimologia_etimologia_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/etimologia/etimologia.component */ "./src/app/core/etimologia/etimologia.component.ts");
/* harmony import */ var _core_uso_palabra_uso_palabra_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./core/uso-palabra/uso-palabra.component */ "./src/app/core/uso-palabra/uso-palabra.component.ts");
/* harmony import */ var _core_patrones_semanticos_patrones_semanticos_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./core/patrones-semanticos/patrones-semanticos.component */ "./src/app/core/patrones-semanticos/patrones-semanticos.component.ts");
/* harmony import */ var _core_campos_semanticos_campos_semanticos_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./core/campos-semanticos/campos-semanticos.component */ "./src/app/core/campos-semanticos/campos-semanticos.component.ts");
/* harmony import */ var _core_frecuencia_uso_frecuencia_uso_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/frecuencia-uso/frecuencia-uso.component */ "./src/app/core/frecuencia-uso/frecuencia-uso.component.ts");
/* harmony import */ var _core_connotacion_denotacion_connotacion_denotacion_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./core/connotacion-denotacion/connotacion-denotacion.component */ "./src/app/core/connotacion-denotacion/connotacion-denotacion.component.ts");
/* harmony import */ var _core_semantica_oraciones_semantica_oraciones_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./core/semantica-oraciones/semantica-oraciones.component */ "./src/app/core/semantica-oraciones/semantica-oraciones.component.ts");
/* harmony import */ var _core_usus_loquendi_usus_loquendi_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./core/usus-loquendi/usus-loquendi.component */ "./src/app/core/usus-loquendi/usus-loquendi.component.ts");
/* harmony import */ var _core_semantica_of_semantica_of_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./core/semantica-of/semantica-of.component */ "./src/app/core/semantica-of/semantica-of.component.ts");
/* harmony import */ var _areas_gramatica_gramatica_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./areas/gramatica/gramatica.component */ "./src/app/areas/gramatica/gramatica.component.ts");
/* harmony import */ var _core_sustantivos_sustantivos_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./core/sustantivos/sustantivos.component */ "./src/app/core/sustantivos/sustantivos.component.ts");
/* harmony import */ var _core_verbos_verbos_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./core/verbos/verbos.component */ "./src/app/core/verbos/verbos.component.ts");
/* harmony import */ var _core_preposiciones_preposiciones_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./core/preposiciones/preposiciones.component */ "./src/app/core/preposiciones/preposiciones.component.ts");
/* harmony import */ var _core_adjetivos_adverbios_adjetivos_adverbios_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./core/adjetivos-adverbios/adjetivos-adverbios.component */ "./src/app/core/adjetivos-adverbios/adjetivos-adverbios.component.ts");
/* harmony import */ var _areas_sintaxis_sintaxis_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./areas/sintaxis/sintaxis.component */ "./src/app/areas/sintaxis/sintaxis.component.ts");
/* harmony import */ var _core_intencion_autor_intencion_autor_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./core/intencion-autor/intencion-autor.component */ "./src/app/core/intencion-autor/intencion-autor.component.ts");
/* harmony import */ var _core_tema_tema_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./core/tema/tema.component */ "./src/app/core/tema/tema.component.ts");
/* harmony import */ var _core_ideas_ideas_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./core/ideas/ideas.component */ "./src/app/core/ideas/ideas.component.ts");
/* harmony import */ var _core_intencion_parrafo_intencion_parrafo_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./core/intencion-parrafo/intencion-parrafo.component */ "./src/app/core/intencion-parrafo/intencion-parrafo.component.ts");
/* harmony import */ var _core_argumento_esquematizacion_argumento_esquematizacion_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./core/argumento-esquematizacion/argumento-esquematizacion.component */ "./src/app/core/argumento-esquematizacion/argumento-esquematizacion.component.ts");
/* harmony import */ var _core_pasaje_tema_pasaje_tema_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./core/pasaje-tema/pasaje-tema.component */ "./src/app/core/pasaje-tema/pasaje-tema.component.ts");
/* harmony import */ var _core_genero_genero_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./core/genero/genero.component */ "./src/app/core/genero/genero.component.ts");
/* harmony import */ var _areas_literatura_literatura_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./areas/literatura/literatura.component */ "./src/app/areas/literatura/literatura.component.ts");
/* harmony import */ var _core_formulas_expresion_formulas_expresion_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./core/formulas-expresion/formulas-expresion.component */ "./src/app/core/formulas-expresion/formulas-expresion.component.ts");
/* harmony import */ var _core_patrones_retorica_patrones_retorica_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./core/patrones-retorica/patrones-retorica.component */ "./src/app/core/patrones-retorica/patrones-retorica.component.ts");
/* harmony import */ var _core_evaluacion_texto_original_evaluacion_texto_original_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./core/evaluacion-texto-original/evaluacion-texto-original.component */ "./src/app/core/evaluacion-texto-original/evaluacion-texto-original.component.ts");
/* harmony import */ var _core_figuras_diccion_figuras_diccion_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./core/figuras-diccion/figuras-diccion.component */ "./src/app/core/figuras-diccion/figuras-diccion.component.ts");
/* harmony import */ var _core_modismos_modismos_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./core/modismos/modismos.component */ "./src/app/core/modismos/modismos.component.ts");
/* harmony import */ var _areas_contexto_externo_contexto_externo_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./areas/contexto-externo/contexto-externo.component */ "./src/app/areas/contexto-externo/contexto-externo.component.ts");
/* harmony import */ var _core_autor_autor_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./core/autor/autor.component */ "./src/app/core/autor/autor.component.ts");
/* harmony import */ var _core_destinatarios_destinatarios_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./core/destinatarios/destinatarios.component */ "./src/app/core/destinatarios/destinatarios.component.ts");
/* harmony import */ var _core_historia_historia_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./core/historia/historia.component */ "./src/app/core/historia/historia.component.ts");
/* harmony import */ var _core_cultura_cultura_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./core/cultura/cultura.component */ "./src/app/core/cultura/cultura.component.ts");
/* harmony import */ var _core_religion_religion_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./core/religion/religion.component */ "./src/app/core/religion/religion.component.ts");
/* harmony import */ var _core_politica_politica_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./core/politica/politica.component */ "./src/app/core/politica/politica.component.ts");
/* harmony import */ var _core_filosofia_filosofia_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./core/filosofia/filosofia.component */ "./src/app/core/filosofia/filosofia.component.ts");
/* harmony import */ var _core_geografia_geografia_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./core/geografia/geografia.component */ "./src/app/core/geografia/geografia.component.ts");
/* harmony import */ var _core_cronologia_cronologia_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./core/cronologia/cronologia.component */ "./src/app/core/cronologia/cronologia.component.ts");
/* harmony import */ var _core_proposito_libro_proposito_libro_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./core/proposito-libro/proposito-libro.component */ "./src/app/core/proposito-libro/proposito-libro.component.ts");
/* harmony import */ var _areas_teologia_teologia_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./areas/teologia/teologia.component */ "./src/app/areas/teologia/teologia.component.ts");
/* harmony import */ var _areas_aplicacion_homiletica_aplicacion_homiletica_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./areas/aplicacion-homiletica/aplicacion-homiletica.component */ "./src/app/areas/aplicacion-homiletica/aplicacion-homiletica.component.ts");
/* harmony import */ var _areas_introduccion_introduccion_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./areas/introduccion/introduccion.component */ "./src/app/areas/introduccion/introduccion.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


































































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _areas_contexto_interno_contexto_interno_component__WEBPACK_IMPORTED_MODULE_7__["ContextoInternoComponent"],
            _content_sidenav_content_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["ContentSidenavComponent"],
            _core_libro_mismo_libro_mismo_component__WEBPACK_IMPORTED_MODULE_13__["LibroMismoComponent"],
            _core_division_parrafos_division_parrafos_component__WEBPACK_IMPORTED_MODULE_14__["DivisionParrafosComponent"],
            _core_agrupacion_parrafos_agrupacion_parrafos_component__WEBPACK_IMPORTED_MODULE_15__["AgrupacionParrafosComponent"],
            _core_elemento_existencial_humano_elemento_existencial_humano_component__WEBPACK_IMPORTED_MODULE_16__["ElementoExistencialHumanoComponent"],
            _core_identificacion_cultura_identificacion_cultura_component__WEBPACK_IMPORTED_MODULE_17__["IdentificacionCulturaComponent"],
            _core_evaluacion_cultura_evaluacion_cultura_component__WEBPACK_IMPORTED_MODULE_18__["EvaluacionCulturaComponent"],
            _core_analisis_problemas_analisis_problemas_component__WEBPACK_IMPORTED_MODULE_19__["AnalisisProblemasComponent"],
            _areas_semantica_semantica_component__WEBPACK_IMPORTED_MODULE_20__["SemanticaComponent"],
            _core_definicion_palabras_definicion_palabras_component__WEBPACK_IMPORTED_MODULE_21__["DefinicionPalabrasComponent"],
            _core_lexico_lexico_component__WEBPACK_IMPORTED_MODULE_22__["LexicoComponent"],
            _core_etimologia_etimologia_component__WEBPACK_IMPORTED_MODULE_23__["EtimologiaComponent"],
            _core_uso_palabra_uso_palabra_component__WEBPACK_IMPORTED_MODULE_24__["UsoPalabraComponent"],
            _core_patrones_semanticos_patrones_semanticos_component__WEBPACK_IMPORTED_MODULE_25__["PatronesSemanticosComponent"],
            _core_campos_semanticos_campos_semanticos_component__WEBPACK_IMPORTED_MODULE_26__["CamposSemanticosComponent"],
            _core_frecuencia_uso_frecuencia_uso_component__WEBPACK_IMPORTED_MODULE_27__["FrecuenciaUsoComponent"],
            _core_connotacion_denotacion_connotacion_denotacion_component__WEBPACK_IMPORTED_MODULE_28__["ConnotacionDenotacionComponent"],
            _core_semantica_oraciones_semantica_oraciones_component__WEBPACK_IMPORTED_MODULE_29__["SemanticaOracionesComponent"],
            _core_usus_loquendi_usus_loquendi_component__WEBPACK_IMPORTED_MODULE_30__["UsusLoquendiComponent"],
            _core_semantica_of_semantica_of_component__WEBPACK_IMPORTED_MODULE_31__["SemanticaOfComponent"],
            _areas_gramatica_gramatica_component__WEBPACK_IMPORTED_MODULE_32__["GramaticaComponent"],
            _core_sustantivos_sustantivos_component__WEBPACK_IMPORTED_MODULE_33__["SustantivosComponent"],
            _core_verbos_verbos_component__WEBPACK_IMPORTED_MODULE_34__["VerbosComponent"],
            _core_preposiciones_preposiciones_component__WEBPACK_IMPORTED_MODULE_35__["PreposicionesComponent"],
            _core_adjetivos_adverbios_adjetivos_adverbios_component__WEBPACK_IMPORTED_MODULE_36__["AdjetivosAdverbiosComponent"],
            _areas_sintaxis_sintaxis_component__WEBPACK_IMPORTED_MODULE_37__["SintaxisComponent"],
            _core_intencion_autor_intencion_autor_component__WEBPACK_IMPORTED_MODULE_38__["IntencionAutorComponent"],
            _core_tema_tema_component__WEBPACK_IMPORTED_MODULE_39__["TemaComponent"],
            _core_ideas_ideas_component__WEBPACK_IMPORTED_MODULE_40__["IdeasComponent"],
            _core_intencion_parrafo_intencion_parrafo_component__WEBPACK_IMPORTED_MODULE_41__["IntencionParrafoComponent"],
            _core_argumento_esquematizacion_argumento_esquematizacion_component__WEBPACK_IMPORTED_MODULE_42__["ArgumentoEsquematizacionComponent"],
            _core_pasaje_tema_pasaje_tema_component__WEBPACK_IMPORTED_MODULE_43__["PasajeTemaComponent"],
            _core_genero_genero_component__WEBPACK_IMPORTED_MODULE_44__["GeneroComponent"],
            _areas_literatura_literatura_component__WEBPACK_IMPORTED_MODULE_45__["LiteraturaComponent"],
            _core_formulas_expresion_formulas_expresion_component__WEBPACK_IMPORTED_MODULE_46__["FormulasExpresionComponent"],
            _core_patrones_retorica_patrones_retorica_component__WEBPACK_IMPORTED_MODULE_47__["PatronesRetoricaComponent"],
            _core_evaluacion_texto_original_evaluacion_texto_original_component__WEBPACK_IMPORTED_MODULE_48__["EvaluacionTextoOriginalComponent"],
            _core_figuras_diccion_figuras_diccion_component__WEBPACK_IMPORTED_MODULE_49__["FigurasDiccionComponent"],
            _core_modismos_modismos_component__WEBPACK_IMPORTED_MODULE_50__["ModismosComponent"],
            _areas_contexto_externo_contexto_externo_component__WEBPACK_IMPORTED_MODULE_51__["ContextoExternoComponent"],
            _core_autor_autor_component__WEBPACK_IMPORTED_MODULE_52__["AutorComponent"],
            _core_destinatarios_destinatarios_component__WEBPACK_IMPORTED_MODULE_53__["DestinatariosComponent"],
            _core_historia_historia_component__WEBPACK_IMPORTED_MODULE_54__["HistoriaComponent"],
            _core_cultura_cultura_component__WEBPACK_IMPORTED_MODULE_55__["CulturaComponent"],
            _core_religion_religion_component__WEBPACK_IMPORTED_MODULE_56__["ReligionComponent"],
            _core_politica_politica_component__WEBPACK_IMPORTED_MODULE_57__["PoliticaComponent"],
            _core_filosofia_filosofia_component__WEBPACK_IMPORTED_MODULE_58__["FilosofiaComponent"],
            _core_geografia_geografia_component__WEBPACK_IMPORTED_MODULE_59__["GeografiaComponent"],
            _core_cronologia_cronologia_component__WEBPACK_IMPORTED_MODULE_60__["CronologiaComponent"],
            _core_proposito_libro_proposito_libro_component__WEBPACK_IMPORTED_MODULE_61__["PropositoLibroComponent"],
            _areas_teologia_teologia_component__WEBPACK_IMPORTED_MODULE_62__["TeologiaComponent"],
            _areas_aplicacion_homiletica_aplicacion_homiletica_component__WEBPACK_IMPORTED_MODULE_63__["AplicacionHomileticaComponent"],
            _areas_introduccion_introduccion_component__WEBPACK_IMPORTED_MODULE_64__["IntroduccionComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_10__["MatTreeModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_65__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/areas/aplicacion-homiletica/aplicacion-homiletica.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/areas/aplicacion-homiletica/aplicacion-homiletica.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2FwbGljYWNpb24taG9taWxldGljYS9hcGxpY2FjaW9uLWhvbWlsZXRpY2EuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/areas/aplicacion-homiletica/aplicacion-homiletica.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/areas/aplicacion-homiletica/aplicacion-homiletica.component.ts ***!
  \********************************************************************************/
/*! exports provided: AplicacionHomileticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AplicacionHomileticaComponent", function() { return AplicacionHomileticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AplicacionHomileticaComponent = class AplicacionHomileticaComponent {
    constructor() { }
    ngOnInit() {
    }
};
AplicacionHomileticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aplicacion-homiletica',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./aplicacion-homiletica.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/aplicacion-homiletica/aplicacion-homiletica.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./aplicacion-homiletica.component.css */ "./src/app/areas/aplicacion-homiletica/aplicacion-homiletica.component.css")).default]
    })
], AplicacionHomileticaComponent);



/***/ }),

/***/ "./src/app/areas/contexto-externo/contexto-externo.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/areas/contexto-externo/contexto-externo.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2NvbnRleHRvLWV4dGVybm8vY29udGV4dG8tZXh0ZXJuby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/areas/contexto-externo/contexto-externo.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/areas/contexto-externo/contexto-externo.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContextoExternoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextoExternoComponent", function() { return ContextoExternoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContextoExternoComponent = class ContextoExternoComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContextoExternoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contexto-externo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contexto-externo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/contexto-externo/contexto-externo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contexto-externo.component.css */ "./src/app/areas/contexto-externo/contexto-externo.component.css")).default]
    })
], ContextoExternoComponent);



/***/ }),

/***/ "./src/app/areas/contexto-interno/contexto-interno.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/areas/contexto-interno/contexto-interno.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2NvbnRleHRvLWludGVybm8vY29udGV4dG8taW50ZXJuby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/areas/contexto-interno/contexto-interno.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/areas/contexto-interno/contexto-interno.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContextoInternoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextoInternoComponent", function() { return ContextoInternoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContextoInternoComponent = class ContextoInternoComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContextoInternoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contexto-interno',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contexto-interno.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/contexto-interno/contexto-interno.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contexto-interno.component.css */ "./src/app/areas/contexto-interno/contexto-interno.component.css")).default]
    })
], ContextoInternoComponent);



/***/ }),

/***/ "./src/app/areas/gramatica/gramatica.component.css":
/*!*********************************************************!*\
  !*** ./src/app/areas/gramatica/gramatica.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2dyYW1hdGljYS9ncmFtYXRpY2EuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/areas/gramatica/gramatica.component.ts":
/*!********************************************************!*\
  !*** ./src/app/areas/gramatica/gramatica.component.ts ***!
  \********************************************************/
/*! exports provided: GramaticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GramaticaComponent", function() { return GramaticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GramaticaComponent = class GramaticaComponent {
    constructor() { }
    ngOnInit() {
    }
};
GramaticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gramatica',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gramatica.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/gramatica/gramatica.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gramatica.component.css */ "./src/app/areas/gramatica/gramatica.component.css")).default]
    })
], GramaticaComponent);



/***/ }),

/***/ "./src/app/areas/introduccion/introduccion.component.css":
/*!***************************************************************!*\
  !*** ./src/app/areas/introduccion/introduccion.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".seccion-autor {\r\n  text-align: center;\r\n}\r\n\r\n.seccion-autor img {\r\n  border-radius: 25px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvaW50cm9kdWNjaW9uL2ludHJvZHVjY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXJlYXMvaW50cm9kdWNjaW9uL2ludHJvZHVjY2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY2Npb24tYXV0b3Ige1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY2Npb24tYXV0b3IgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/areas/introduccion/introduccion.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/areas/introduccion/introduccion.component.ts ***!
  \**************************************************************/
/*! exports provided: IntroduccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroduccionComponent", function() { return IntroduccionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntroduccionComponent = class IntroduccionComponent {
    constructor() { }
    ngOnInit() {
    }
};
IntroduccionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-introduccion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./introduccion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/introduccion/introduccion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./introduccion.component.css */ "./src/app/areas/introduccion/introduccion.component.css")).default]
    })
], IntroduccionComponent);



/***/ }),

/***/ "./src/app/areas/literatura/literatura.component.css":
/*!***********************************************************!*\
  !*** ./src/app/areas/literatura/literatura.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2xpdGVyYXR1cmEvbGl0ZXJhdHVyYS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/areas/literatura/literatura.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/areas/literatura/literatura.component.ts ***!
  \**********************************************************/
/*! exports provided: LiteraturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiteraturaComponent", function() { return LiteraturaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LiteraturaComponent = class LiteraturaComponent {
    constructor() { }
    ngOnInit() {
    }
};
LiteraturaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-literatura',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./literatura.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/literatura/literatura.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./literatura.component.css */ "./src/app/areas/literatura/literatura.component.css")).default]
    })
], LiteraturaComponent);



/***/ }),

/***/ "./src/app/areas/semantica/semantica.component.css":
/*!*********************************************************!*\
  !*** ./src/app/areas/semantica/semantica.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL3NlbWFudGljYS9zZW1hbnRpY2EuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/areas/semantica/semantica.component.ts":
/*!********************************************************!*\
  !*** ./src/app/areas/semantica/semantica.component.ts ***!
  \********************************************************/
/*! exports provided: SemanticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemanticaComponent", function() { return SemanticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SemanticaComponent = class SemanticaComponent {
    constructor() { }
    ngOnInit() {
    }
};
SemanticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-semantica',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./semantica.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/semantica/semantica.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./semantica.component.css */ "./src/app/areas/semantica/semantica.component.css")).default]
    })
], SemanticaComponent);



/***/ }),

/***/ "./src/app/areas/sintaxis/sintaxis.component.css":
/*!*******************************************************!*\
  !*** ./src/app/areas/sintaxis/sintaxis.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL3NpbnRheGlzL3NpbnRheGlzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/areas/sintaxis/sintaxis.component.ts":
/*!******************************************************!*\
  !*** ./src/app/areas/sintaxis/sintaxis.component.ts ***!
  \******************************************************/
/*! exports provided: SintaxisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SintaxisComponent", function() { return SintaxisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SintaxisComponent = class SintaxisComponent {
    constructor() { }
    ngOnInit() {
    }
};
SintaxisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sintaxis',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sintaxis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/sintaxis/sintaxis.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sintaxis.component.css */ "./src/app/areas/sintaxis/sintaxis.component.css")).default]
    })
], SintaxisComponent);



/***/ }),

/***/ "./src/app/areas/teologia/teologia.component.css":
/*!*******************************************************!*\
  !*** ./src/app/areas/teologia/teologia.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL3Rlb2xvZ2lhL3Rlb2xvZ2lhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/areas/teologia/teologia.component.ts":
/*!******************************************************!*\
  !*** ./src/app/areas/teologia/teologia.component.ts ***!
  \******************************************************/
/*! exports provided: TeologiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeologiaComponent", function() { return TeologiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TeologiaComponent = class TeologiaComponent {
    constructor() { }
    ngOnInit() {
    }
};
TeologiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teologia',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./teologia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/teologia/teologia.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./teologia.component.css */ "./src/app/areas/teologia/teologia.component.css")).default]
    })
], TeologiaComponent);



/***/ }),

/***/ "./src/app/content-sidenav/content-sidenav.component.css":
/*!***************************************************************!*\
  !*** ./src/app/content-sidenav/content-sidenav.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-tree-node {\r\n  padding: 0px !important;\r\n  margin: 0px;\r\n  font-size: 15px;\r\n  min-height: 0px;\r\n}\r\n\r\n.mat-tree {\r\n  width: 300px;\r\n}\r\n\r\n.mat-tree-node:hover {\r\n  background-color: gainsboro;\r\n  cursor: pointer;\r\n}\r\n\r\n.tree-parent {\r\n  color: rgb(8, 8, 100);\r\n}\r\n\r\n.tree-child {\r\n  color: rgb(78, 78, 78);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC1zaWRlbmF2L2NvbnRlbnQtc2lkZW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC1zaWRlbmF2L2NvbnRlbnQtc2lkZW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10cmVlLW5vZGUge1xyXG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtaW4taGVpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5tYXQtdHJlZSB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4ubWF0LXRyZWUtbm9kZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRyZWUtcGFyZW50IHtcclxuICBjb2xvcjogcmdiKDgsIDgsIDEwMCk7XHJcbn1cclxuXHJcbi50cmVlLWNoaWxkIHtcclxuICBjb2xvcjogcmdiKDc4LCA3OCwgNzgpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/content-sidenav/content-sidenav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/content-sidenav/content-sidenav.component.ts ***!
  \**************************************************************/
/*! exports provided: ContentSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSidenavComponent", function() { return ContentSidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");




const TREE_DATA = [
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
let ContentSidenavComponent = class ContentSidenavComponent {
    constructor() {
        this._transformer = (node, level) => {
            return {
                expandable: node.children && node.children.length > 0,
                name: node.name,
                route: node.route,
                level: level
            };
        };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["FlatTreeControl"](node => node.level, node => node.expandable);
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlattener"](this._transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_3__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.hasChild = (_, node) => node.expandable;
        this.dataSource.data = TREE_DATA;
    }
    navigate(route) {
        console.log(route);
    }
};
ContentSidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "content-sidenav",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-sidenav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content-sidenav/content-sidenav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-sidenav.component.css */ "./src/app/content-sidenav/content-sidenav.component.css")).default]
    })
], ContentSidenavComponent);



/***/ }),

/***/ "./src/app/core/adjetivos-adverbios/adjetivos-adverbios.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/core/adjetivos-adverbios/adjetivos-adverbios.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRqZXRpdm9zLWFkdmVyYmlvcy9hZGpldGl2b3MtYWR2ZXJiaW9zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/adjetivos-adverbios/adjetivos-adverbios.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/adjetivos-adverbios/adjetivos-adverbios.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdjetivosAdverbiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjetivosAdverbiosComponent", function() { return AdjetivosAdverbiosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdjetivosAdverbiosComponent = class AdjetivosAdverbiosComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdjetivosAdverbiosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adjetivos-adverbios',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adjetivos-adverbios.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/adjetivos-adverbios/adjetivos-adverbios.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adjetivos-adverbios.component.css */ "./src/app/core/adjetivos-adverbios/adjetivos-adverbios.component.css")).default]
    })
], AdjetivosAdverbiosComponent);



/***/ }),

/***/ "./src/app/core/agrupacion-parrafos/agrupacion-parrafos.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/core/agrupacion-parrafos/agrupacion-parrafos.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWdydXBhY2lvbi1wYXJyYWZvcy9hZ3J1cGFjaW9uLXBhcnJhZm9zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/agrupacion-parrafos/agrupacion-parrafos.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/agrupacion-parrafos/agrupacion-parrafos.component.ts ***!
  \***************************************************************************/
/*! exports provided: AgrupacionParrafosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgrupacionParrafosComponent", function() { return AgrupacionParrafosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AgrupacionParrafosComponent = class AgrupacionParrafosComponent {
    constructor() { }
    ngOnInit() {
    }
};
AgrupacionParrafosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agrupacion-parrafos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agrupacion-parrafos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/agrupacion-parrafos/agrupacion-parrafos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agrupacion-parrafos.component.css */ "./src/app/core/agrupacion-parrafos/agrupacion-parrafos.component.css")).default]
    })
], AgrupacionParrafosComponent);



/***/ }),

/***/ "./src/app/core/analisis-problemas/analisis-problemas.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/core/analisis-problemas/analisis-problemas.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYW5hbGlzaXMtcHJvYmxlbWFzL2FuYWxpc2lzLXByb2JsZW1hcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/analisis-problemas/analisis-problemas.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/analisis-problemas/analisis-problemas.component.ts ***!
  \*************************************************************************/
/*! exports provided: AnalisisProblemasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalisisProblemasComponent", function() { return AnalisisProblemasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnalisisProblemasComponent = class AnalisisProblemasComponent {
    constructor() { }
    ngOnInit() {
    }
};
AnalisisProblemasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analisis-problemas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./analisis-problemas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/analisis-problemas/analisis-problemas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./analisis-problemas.component.css */ "./src/app/core/analisis-problemas/analisis-problemas.component.css")).default]
    })
], AnalisisProblemasComponent);



/***/ }),

/***/ "./src/app/core/argumento-esquematizacion/argumento-esquematizacion.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/core/argumento-esquematizacion/argumento-esquematizacion.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXJndW1lbnRvLWVzcXVlbWF0aXphY2lvbi9hcmd1bWVudG8tZXNxdWVtYXRpemFjaW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/argumento-esquematizacion/argumento-esquematizacion.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/core/argumento-esquematizacion/argumento-esquematizacion.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ArgumentoEsquematizacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentoEsquematizacionComponent", function() { return ArgumentoEsquematizacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArgumentoEsquematizacionComponent = class ArgumentoEsquematizacionComponent {
    constructor() { }
    ngOnInit() {
    }
};
ArgumentoEsquematizacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-argumento-esquematizacion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./argumento-esquematizacion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/argumento-esquematizacion/argumento-esquematizacion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./argumento-esquematizacion.component.css */ "./src/app/core/argumento-esquematizacion/argumento-esquematizacion.component.css")).default]
    })
], ArgumentoEsquematizacionComponent);



/***/ }),

/***/ "./src/app/core/autor/autor.component.css":
/*!************************************************!*\
  !*** ./src/app/core/autor/autor.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXV0b3IvYXV0b3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/autor/autor.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/autor/autor.component.ts ***!
  \***********************************************/
/*! exports provided: AutorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutorComponent", function() { return AutorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AutorComponent = class AutorComponent {
    constructor() { }
    ngOnInit() {
    }
};
AutorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-autor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./autor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/autor/autor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./autor.component.css */ "./src/app/core/autor/autor.component.css")).default]
    })
], AutorComponent);



/***/ }),

/***/ "./src/app/core/campos-semanticos/campos-semanticos.component.css":
/*!************************************************************************!*\
  !*** ./src/app/core/campos-semanticos/campos-semanticos.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY2FtcG9zLXNlbWFudGljb3MvY2FtcG9zLXNlbWFudGljb3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/campos-semanticos/campos-semanticos.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/campos-semanticos/campos-semanticos.component.ts ***!
  \***********************************************************************/
/*! exports provided: CamposSemanticosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamposSemanticosComponent", function() { return CamposSemanticosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CamposSemanticosComponent = class CamposSemanticosComponent {
    constructor() { }
    ngOnInit() {
    }
};
CamposSemanticosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-campos-semanticos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./campos-semanticos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/campos-semanticos/campos-semanticos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./campos-semanticos.component.css */ "./src/app/core/campos-semanticos/campos-semanticos.component.css")).default]
    })
], CamposSemanticosComponent);



/***/ }),

/***/ "./src/app/core/connotacion-denotacion/connotacion-denotacion.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/core/connotacion-denotacion/connotacion-denotacion.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29ubm90YWNpb24tZGVub3RhY2lvbi9jb25ub3RhY2lvbi1kZW5vdGFjaW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/connotacion-denotacion/connotacion-denotacion.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/core/connotacion-denotacion/connotacion-denotacion.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ConnotacionDenotacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnotacionDenotacionComponent", function() { return ConnotacionDenotacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConnotacionDenotacionComponent = class ConnotacionDenotacionComponent {
    constructor() { }
    ngOnInit() {
    }
};
ConnotacionDenotacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-connotacion-denotacion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./connotacion-denotacion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/connotacion-denotacion/connotacion-denotacion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./connotacion-denotacion.component.css */ "./src/app/core/connotacion-denotacion/connotacion-denotacion.component.css")).default]
    })
], ConnotacionDenotacionComponent);



/***/ }),

/***/ "./src/app/core/cronologia/cronologia.component.css":
/*!**********************************************************!*\
  !*** ./src/app/core/cronologia/cronologia.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY3Jvbm9sb2dpYS9jcm9ub2xvZ2lhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/cronologia/cronologia.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/cronologia/cronologia.component.ts ***!
  \*********************************************************/
/*! exports provided: CronologiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CronologiaComponent", function() { return CronologiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CronologiaComponent = class CronologiaComponent {
    constructor() { }
    ngOnInit() {
    }
};
CronologiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cronologia',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cronologia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/cronologia/cronologia.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cronologia.component.css */ "./src/app/core/cronologia/cronologia.component.css")).default]
    })
], CronologiaComponent);



/***/ }),

/***/ "./src/app/core/cultura/cultura.component.css":
/*!****************************************************!*\
  !*** ./src/app/core/cultura/cultura.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY3VsdHVyYS9jdWx0dXJhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/cultura/cultura.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/cultura/cultura.component.ts ***!
  \***************************************************/
/*! exports provided: CulturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CulturaComponent", function() { return CulturaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CulturaComponent = class CulturaComponent {
    constructor() { }
    ngOnInit() {
    }
};
CulturaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cultura',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cultura.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/cultura/cultura.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cultura.component.css */ "./src/app/core/cultura/cultura.component.css")).default]
    })
], CulturaComponent);



/***/ }),

/***/ "./src/app/core/definicion-palabras/definicion-palabras.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/core/definicion-palabras/definicion-palabras.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGVmaW5pY2lvbi1wYWxhYnJhcy9kZWZpbmljaW9uLXBhbGFicmFzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/definicion-palabras/definicion-palabras.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/definicion-palabras/definicion-palabras.component.ts ***!
  \***************************************************************************/
/*! exports provided: DefinicionPalabrasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinicionPalabrasComponent", function() { return DefinicionPalabrasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DefinicionPalabrasComponent = class DefinicionPalabrasComponent {
    constructor() { }
    ngOnInit() {
    }
};
DefinicionPalabrasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-definicion-palabras',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./definicion-palabras.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/definicion-palabras/definicion-palabras.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./definicion-palabras.component.css */ "./src/app/core/definicion-palabras/definicion-palabras.component.css")).default]
    })
], DefinicionPalabrasComponent);



/***/ }),

/***/ "./src/app/core/destinatarios/destinatarios.component.css":
/*!****************************************************************!*\
  !*** ./src/app/core/destinatarios/destinatarios.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGVzdGluYXRhcmlvcy9kZXN0aW5hdGFyaW9zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/destinatarios/destinatarios.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/destinatarios/destinatarios.component.ts ***!
  \***************************************************************/
/*! exports provided: DestinatariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinatariosComponent", function() { return DestinatariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DestinatariosComponent = class DestinatariosComponent {
    constructor() { }
    ngOnInit() {
    }
};
DestinatariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-destinatarios',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./destinatarios.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/destinatarios/destinatarios.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./destinatarios.component.css */ "./src/app/core/destinatarios/destinatarios.component.css")).default]
    })
], DestinatariosComponent);



/***/ }),

/***/ "./src/app/core/division-parrafos/division-parrafos.component.css":
/*!************************************************************************!*\
  !*** ./src/app/core/division-parrafos/division-parrafos.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGl2aXNpb24tcGFycmFmb3MvZGl2aXNpb24tcGFycmFmb3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/division-parrafos/division-parrafos.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/division-parrafos/division-parrafos.component.ts ***!
  \***********************************************************************/
/*! exports provided: DivisionParrafosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionParrafosComponent", function() { return DivisionParrafosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DivisionParrafosComponent = class DivisionParrafosComponent {
    constructor() { }
    ngOnInit() {
    }
};
DivisionParrafosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-division-parrafos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./division-parrafos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/division-parrafos/division-parrafos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./division-parrafos.component.css */ "./src/app/core/division-parrafos/division-parrafos.component.css")).default]
    })
], DivisionParrafosComponent);



/***/ }),

/***/ "./src/app/core/elemento-existencial-humano/elemento-existencial-humano.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/core/elemento-existencial-humano/elemento-existencial-humano.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZWxlbWVudG8tZXhpc3RlbmNpYWwtaHVtYW5vL2VsZW1lbnRvLWV4aXN0ZW5jaWFsLWh1bWFuby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/elemento-existencial-humano/elemento-existencial-humano.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/core/elemento-existencial-humano/elemento-existencial-humano.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ElementoExistencialHumanoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementoExistencialHumanoComponent", function() { return ElementoExistencialHumanoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ElementoExistencialHumanoComponent = class ElementoExistencialHumanoComponent {
    constructor() { }
    ngOnInit() {
    }
};
ElementoExistencialHumanoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-elemento-existencial-humano',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./elemento-existencial-humano.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/elemento-existencial-humano/elemento-existencial-humano.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./elemento-existencial-humano.component.css */ "./src/app/core/elemento-existencial-humano/elemento-existencial-humano.component.css")).default]
    })
], ElementoExistencialHumanoComponent);



/***/ }),

/***/ "./src/app/core/etimologia/etimologia.component.css":
/*!**********************************************************!*\
  !*** ./src/app/core/etimologia/etimologia.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXRpbW9sb2dpYS9ldGltb2xvZ2lhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/etimologia/etimologia.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/etimologia/etimologia.component.ts ***!
  \*********************************************************/
/*! exports provided: EtimologiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtimologiaComponent", function() { return EtimologiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EtimologiaComponent = class EtimologiaComponent {
    constructor() { }
    ngOnInit() {
    }
};
EtimologiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-etimologia',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./etimologia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/etimologia/etimologia.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./etimologia.component.css */ "./src/app/core/etimologia/etimologia.component.css")).default]
    })
], EtimologiaComponent);



/***/ }),

/***/ "./src/app/core/evaluacion-cultura/evaluacion-cultura.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/core/evaluacion-cultura/evaluacion-cultura.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXZhbHVhY2lvbi1jdWx0dXJhL2V2YWx1YWNpb24tY3VsdHVyYS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/evaluacion-cultura/evaluacion-cultura.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/evaluacion-cultura/evaluacion-cultura.component.ts ***!
  \*************************************************************************/
/*! exports provided: EvaluacionCulturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluacionCulturaComponent", function() { return EvaluacionCulturaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EvaluacionCulturaComponent = class EvaluacionCulturaComponent {
    constructor() { }
    ngOnInit() {
    }
};
EvaluacionCulturaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-evaluacion-cultura',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./evaluacion-cultura.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/evaluacion-cultura/evaluacion-cultura.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./evaluacion-cultura.component.css */ "./src/app/core/evaluacion-cultura/evaluacion-cultura.component.css")).default]
    })
], EvaluacionCulturaComponent);



/***/ }),

/***/ "./src/app/core/evaluacion-texto-original/evaluacion-texto-original.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/core/evaluacion-texto-original/evaluacion-texto-original.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZXZhbHVhY2lvbi10ZXh0by1vcmlnaW5hbC9ldmFsdWFjaW9uLXRleHRvLW9yaWdpbmFsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/evaluacion-texto-original/evaluacion-texto-original.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/core/evaluacion-texto-original/evaluacion-texto-original.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EvaluacionTextoOriginalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluacionTextoOriginalComponent", function() { return EvaluacionTextoOriginalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EvaluacionTextoOriginalComponent = class EvaluacionTextoOriginalComponent {
    constructor() { }
    ngOnInit() {
    }
};
EvaluacionTextoOriginalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-evaluacion-texto-original',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./evaluacion-texto-original.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/evaluacion-texto-original/evaluacion-texto-original.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./evaluacion-texto-original.component.css */ "./src/app/core/evaluacion-texto-original/evaluacion-texto-original.component.css")).default]
    })
], EvaluacionTextoOriginalComponent);



/***/ }),

/***/ "./src/app/core/figuras-diccion/figuras-diccion.component.css":
/*!********************************************************************!*\
  !*** ./src/app/core/figuras-diccion/figuras-diccion.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZmlndXJhcy1kaWNjaW9uL2ZpZ3VyYXMtZGljY2lvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/figuras-diccion/figuras-diccion.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/figuras-diccion/figuras-diccion.component.ts ***!
  \*******************************************************************/
/*! exports provided: FigurasDiccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FigurasDiccionComponent", function() { return FigurasDiccionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FigurasDiccionComponent = class FigurasDiccionComponent {
    constructor() { }
    ngOnInit() {
    }
};
FigurasDiccionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-figuras-diccion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./figuras-diccion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/figuras-diccion/figuras-diccion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./figuras-diccion.component.css */ "./src/app/core/figuras-diccion/figuras-diccion.component.css")).default]
    })
], FigurasDiccionComponent);



/***/ }),

/***/ "./src/app/core/filosofia/filosofia.component.css":
/*!********************************************************!*\
  !*** ./src/app/core/filosofia/filosofia.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZmlsb3NvZmlhL2ZpbG9zb2ZpYS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/filosofia/filosofia.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/filosofia/filosofia.component.ts ***!
  \*******************************************************/
/*! exports provided: FilosofiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilosofiaComponent", function() { return FilosofiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilosofiaComponent = class FilosofiaComponent {
    constructor() { }
    ngOnInit() {
    }
};
FilosofiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filosofia',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filosofia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/filosofia/filosofia.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filosofia.component.css */ "./src/app/core/filosofia/filosofia.component.css")).default]
    })
], FilosofiaComponent);



/***/ }),

/***/ "./src/app/core/formulas-expresion/formulas-expresion.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/core/formulas-expresion/formulas-expresion.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9ybXVsYXMtZXhwcmVzaW9uL2Zvcm11bGFzLWV4cHJlc2lvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/formulas-expresion/formulas-expresion.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/formulas-expresion/formulas-expresion.component.ts ***!
  \*************************************************************************/
/*! exports provided: FormulasExpresionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulasExpresionComponent", function() { return FormulasExpresionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormulasExpresionComponent = class FormulasExpresionComponent {
    constructor() { }
    ngOnInit() {
    }
};
FormulasExpresionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-formulas-expresion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./formulas-expresion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/formulas-expresion/formulas-expresion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./formulas-expresion.component.css */ "./src/app/core/formulas-expresion/formulas-expresion.component.css")).default]
    })
], FormulasExpresionComponent);



/***/ }),

/***/ "./src/app/core/frecuencia-uso/frecuencia-uso.component.css":
/*!******************************************************************!*\
  !*** ./src/app/core/frecuencia-uso/frecuencia-uso.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZnJlY3VlbmNpYS11c28vZnJlY3VlbmNpYS11c28uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/frecuencia-uso/frecuencia-uso.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/frecuencia-uso/frecuencia-uso.component.ts ***!
  \*****************************************************************/
/*! exports provided: FrecuenciaUsoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrecuenciaUsoComponent", function() { return FrecuenciaUsoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FrecuenciaUsoComponent = class FrecuenciaUsoComponent {
    constructor() { }
    ngOnInit() {
    }
};
FrecuenciaUsoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-frecuencia-uso',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./frecuencia-uso.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/frecuencia-uso/frecuencia-uso.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./frecuencia-uso.component.css */ "./src/app/core/frecuencia-uso/frecuencia-uso.component.css")).default]
    })
], FrecuenciaUsoComponent);



/***/ }),

/***/ "./src/app/core/genero/genero.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/genero/genero.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZ2VuZXJvL2dlbmVyby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/genero/genero.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/genero/genero.component.ts ***!
  \*************************************************/
/*! exports provided: GeneroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneroComponent", function() { return GeneroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GeneroComponent = class GeneroComponent {
    constructor() { }
    ngOnInit() {
    }
};
GeneroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-genero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./genero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/genero/genero.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./genero.component.css */ "./src/app/core/genero/genero.component.css")).default]
    })
], GeneroComponent);



/***/ }),

/***/ "./src/app/core/geografia/geografia.component.css":
/*!********************************************************!*\
  !*** ./src/app/core/geografia/geografia.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZ2VvZ3JhZmlhL2dlb2dyYWZpYS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/geografia/geografia.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/geografia/geografia.component.ts ***!
  \*******************************************************/
/*! exports provided: GeografiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeografiaComponent", function() { return GeografiaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GeografiaComponent = class GeografiaComponent {
    constructor() { }
    ngOnInit() {
    }
};
GeografiaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-geografia',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./geografia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/geografia/geografia.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./geografia.component.css */ "./src/app/core/geografia/geografia.component.css")).default]
    })
], GeografiaComponent);



/***/ }),

/***/ "./src/app/core/historia/historia.component.css":
/*!******************************************************!*\
  !*** ./src/app/core/historia/historia.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGlzdG9yaWEvaGlzdG9yaWEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/historia/historia.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/historia/historia.component.ts ***!
  \*****************************************************/
/*! exports provided: HistoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoriaComponent", function() { return HistoriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HistoriaComponent = class HistoriaComponent {
    constructor() { }
    ngOnInit() {
    }
};
HistoriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-historia',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./historia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/historia/historia.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./historia.component.css */ "./src/app/core/historia/historia.component.css")).default]
    })
], HistoriaComponent);



/***/ }),

/***/ "./src/app/core/ideas/ideas.component.css":
/*!************************************************!*\
  !*** ./src/app/core/ideas/ideas.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaWRlYXMvaWRlYXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/ideas/ideas.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/ideas/ideas.component.ts ***!
  \***********************************************/
/*! exports provided: IdeasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeasComponent", function() { return IdeasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IdeasComponent = class IdeasComponent {
    constructor() { }
    ngOnInit() {
    }
};
IdeasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ideas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ideas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/ideas/ideas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ideas.component.css */ "./src/app/core/ideas/ideas.component.css")).default]
    })
], IdeasComponent);



/***/ }),

/***/ "./src/app/core/identificacion-cultura/identificacion-cultura.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/core/identificacion-cultura/identificacion-cultura.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaWRlbnRpZmljYWNpb24tY3VsdHVyYS9pZGVudGlmaWNhY2lvbi1jdWx0dXJhLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/identificacion-cultura/identificacion-cultura.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/core/identificacion-cultura/identificacion-cultura.component.ts ***!
  \*********************************************************************************/
/*! exports provided: IdentificacionCulturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentificacionCulturaComponent", function() { return IdentificacionCulturaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IdentificacionCulturaComponent = class IdentificacionCulturaComponent {
    constructor() { }
    ngOnInit() {
    }
};
IdentificacionCulturaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-identificacion-cultura',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./identificacion-cultura.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/identificacion-cultura/identificacion-cultura.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./identificacion-cultura.component.css */ "./src/app/core/identificacion-cultura/identificacion-cultura.component.css")).default]
    })
], IdentificacionCulturaComponent);



/***/ }),

/***/ "./src/app/core/intencion-autor/intencion-autor.component.css":
/*!********************************************************************!*\
  !*** ./src/app/core/intencion-autor/intencion-autor.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaW50ZW5jaW9uLWF1dG9yL2ludGVuY2lvbi1hdXRvci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/intencion-autor/intencion-autor.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/intencion-autor/intencion-autor.component.ts ***!
  \*******************************************************************/
/*! exports provided: IntencionAutorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntencionAutorComponent", function() { return IntencionAutorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntencionAutorComponent = class IntencionAutorComponent {
    constructor() { }
    ngOnInit() {
    }
};
IntencionAutorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intencion-autor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./intencion-autor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/intencion-autor/intencion-autor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./intencion-autor.component.css */ "./src/app/core/intencion-autor/intencion-autor.component.css")).default]
    })
], IntencionAutorComponent);



/***/ }),

/***/ "./src/app/core/intencion-parrafo/intencion-parrafo.component.css":
/*!************************************************************************!*\
  !*** ./src/app/core/intencion-parrafo/intencion-parrafo.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaW50ZW5jaW9uLXBhcnJhZm8vaW50ZW5jaW9uLXBhcnJhZm8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/intencion-parrafo/intencion-parrafo.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/intencion-parrafo/intencion-parrafo.component.ts ***!
  \***********************************************************************/
/*! exports provided: IntencionParrafoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntencionParrafoComponent", function() { return IntencionParrafoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntencionParrafoComponent = class IntencionParrafoComponent {
    constructor() { }
    ngOnInit() {
    }
};
IntencionParrafoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intencion-parrafo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./intencion-parrafo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/intencion-parrafo/intencion-parrafo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./intencion-parrafo.component.css */ "./src/app/core/intencion-parrafo/intencion-parrafo.component.css")).default]
    })
], IntencionParrafoComponent);



/***/ }),

/***/ "./src/app/core/lexico/lexico.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/lexico/lexico.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGV4aWNvL2xleGljby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/lexico/lexico.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/lexico/lexico.component.ts ***!
  \*************************************************/
/*! exports provided: LexicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexicoComponent", function() { return LexicoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LexicoComponent = class LexicoComponent {
    constructor() { }
    ngOnInit() {
    }
};
LexicoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lexico',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lexico.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/lexico/lexico.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lexico.component.css */ "./src/app/core/lexico/lexico.component.css")).default]
    })
], LexicoComponent);



/***/ }),

/***/ "./src/app/core/libro-mismo/libro-mismo.component.css":
/*!************************************************************!*\
  !*** ./src/app/core/libro-mismo/libro-mismo.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGlicm8tbWlzbW8vbGlicm8tbWlzbW8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/libro-mismo/libro-mismo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/libro-mismo/libro-mismo.component.ts ***!
  \***********************************************************/
/*! exports provided: LibroMismoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibroMismoComponent", function() { return LibroMismoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LibroMismoComponent = class LibroMismoComponent {
    constructor() { }
    ngOnInit() {
    }
};
LibroMismoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-libro-mismo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./libro-mismo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/libro-mismo/libro-mismo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./libro-mismo.component.css */ "./src/app/core/libro-mismo/libro-mismo.component.css")).default]
    })
], LibroMismoComponent);



/***/ }),

/***/ "./src/app/core/modismos/modismos.component.css":
/*!******************************************************!*\
  !*** ./src/app/core/modismos/modismos.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbW9kaXNtb3MvbW9kaXNtb3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/modismos/modismos.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/modismos/modismos.component.ts ***!
  \*****************************************************/
/*! exports provided: ModismosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModismosComponent", function() { return ModismosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ModismosComponent = class ModismosComponent {
    constructor() { }
    ngOnInit() {
    }
};
ModismosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modismos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modismos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/modismos/modismos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modismos.component.css */ "./src/app/core/modismos/modismos.component.css")).default]
    })
], ModismosComponent);



/***/ }),

/***/ "./src/app/core/pasaje-tema/pasaje-tema.component.css":
/*!************************************************************!*\
  !*** ./src/app/core/pasaje-tema/pasaje-tema.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFzYWplLXRlbWEvcGFzYWplLXRlbWEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/pasaje-tema/pasaje-tema.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/pasaje-tema/pasaje-tema.component.ts ***!
  \***********************************************************/
/*! exports provided: PasajeTemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasajeTemaComponent", function() { return PasajeTemaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PasajeTemaComponent = class PasajeTemaComponent {
    constructor() { }
    ngOnInit() {
    }
};
PasajeTemaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pasaje-tema',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pasaje-tema.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/pasaje-tema/pasaje-tema.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pasaje-tema.component.css */ "./src/app/core/pasaje-tema/pasaje-tema.component.css")).default]
    })
], PasajeTemaComponent);



/***/ }),

/***/ "./src/app/core/patrones-retorica/patrones-retorica.component.css":
/*!************************************************************************!*\
  !*** ./src/app/core/patrones-retorica/patrones-retorica.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGF0cm9uZXMtcmV0b3JpY2EvcGF0cm9uZXMtcmV0b3JpY2EuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/patrones-retorica/patrones-retorica.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/patrones-retorica/patrones-retorica.component.ts ***!
  \***********************************************************************/
/*! exports provided: PatronesRetoricaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatronesRetoricaComponent", function() { return PatronesRetoricaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PatronesRetoricaComponent = class PatronesRetoricaComponent {
    constructor() { }
    ngOnInit() {
    }
};
PatronesRetoricaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patrones-retorica',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patrones-retorica.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/patrones-retorica/patrones-retorica.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patrones-retorica.component.css */ "./src/app/core/patrones-retorica/patrones-retorica.component.css")).default]
    })
], PatronesRetoricaComponent);



/***/ }),

/***/ "./src/app/core/patrones-semanticos/patrones-semanticos.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/core/patrones-semanticos/patrones-semanticos.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGF0cm9uZXMtc2VtYW50aWNvcy9wYXRyb25lcy1zZW1hbnRpY29zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/patrones-semanticos/patrones-semanticos.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/patrones-semanticos/patrones-semanticos.component.ts ***!
  \***************************************************************************/
/*! exports provided: PatronesSemanticosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatronesSemanticosComponent", function() { return PatronesSemanticosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PatronesSemanticosComponent = class PatronesSemanticosComponent {
    constructor() { }
    ngOnInit() {
    }
};
PatronesSemanticosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patrones-semanticos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patrones-semanticos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/patrones-semanticos/patrones-semanticos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patrones-semanticos.component.css */ "./src/app/core/patrones-semanticos/patrones-semanticos.component.css")).default]
    })
], PatronesSemanticosComponent);



/***/ }),

/***/ "./src/app/core/politica/politica.component.css":
/*!******************************************************!*\
  !*** ./src/app/core/politica/politica.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcG9saXRpY2EvcG9saXRpY2EuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/politica/politica.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/politica/politica.component.ts ***!
  \*****************************************************/
/*! exports provided: PoliticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticaComponent", function() { return PoliticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PoliticaComponent = class PoliticaComponent {
    constructor() { }
    ngOnInit() {
    }
};
PoliticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-politica',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./politica.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/politica/politica.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./politica.component.css */ "./src/app/core/politica/politica.component.css")).default]
    })
], PoliticaComponent);



/***/ }),

/***/ "./src/app/core/preposiciones/preposiciones.component.css":
/*!****************************************************************!*\
  !*** ./src/app/core/preposiciones/preposiciones.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJlcG9zaWNpb25lcy9wcmVwb3NpY2lvbmVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/preposiciones/preposiciones.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/preposiciones/preposiciones.component.ts ***!
  \***************************************************************/
/*! exports provided: PreposicionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreposicionesComponent", function() { return PreposicionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PreposicionesComponent = class PreposicionesComponent {
    constructor() { }
    ngOnInit() {
    }
};
PreposicionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preposiciones',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./preposiciones.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/preposiciones/preposiciones.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./preposiciones.component.css */ "./src/app/core/preposiciones/preposiciones.component.css")).default]
    })
], PreposicionesComponent);



/***/ }),

/***/ "./src/app/core/proposito-libro/proposito-libro.component.css":
/*!********************************************************************!*\
  !*** ./src/app/core/proposito-libro/proposito-libro.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvcG9zaXRvLWxpYnJvL3Byb3Bvc2l0by1saWJyby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/proposito-libro/proposito-libro.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/proposito-libro/proposito-libro.component.ts ***!
  \*******************************************************************/
/*! exports provided: PropositoLibroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropositoLibroComponent", function() { return PropositoLibroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PropositoLibroComponent = class PropositoLibroComponent {
    constructor() { }
    ngOnInit() {
    }
};
PropositoLibroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-proposito-libro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./proposito-libro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/proposito-libro/proposito-libro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./proposito-libro.component.css */ "./src/app/core/proposito-libro/proposito-libro.component.css")).default]
    })
], PropositoLibroComponent);



/***/ }),

/***/ "./src/app/core/religion/religion.component.css":
/*!******************************************************!*\
  !*** ./src/app/core/religion/religion.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcmVsaWdpb24vcmVsaWdpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/religion/religion.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/religion/religion.component.ts ***!
  \*****************************************************/
/*! exports provided: ReligionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReligionComponent", function() { return ReligionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReligionComponent = class ReligionComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReligionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-religion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./religion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/religion/religion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./religion.component.css */ "./src/app/core/religion/religion.component.css")).default]
    })
], ReligionComponent);



/***/ }),

/***/ "./src/app/core/semantica-of/semantica-of.component.css":
/*!**************************************************************!*\
  !*** ./src/app/core/semantica-of/semantica-of.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2VtYW50aWNhLW9mL3NlbWFudGljYS1vZi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/semantica-of/semantica-of.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/semantica-of/semantica-of.component.ts ***!
  \*************************************************************/
/*! exports provided: SemanticaOfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemanticaOfComponent", function() { return SemanticaOfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SemanticaOfComponent = class SemanticaOfComponent {
    constructor() { }
    ngOnInit() {
    }
};
SemanticaOfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-semantica-of',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./semantica-of.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/semantica-of/semantica-of.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./semantica-of.component.css */ "./src/app/core/semantica-of/semantica-of.component.css")).default]
    })
], SemanticaOfComponent);



/***/ }),

/***/ "./src/app/core/semantica-oraciones/semantica-oraciones.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/core/semantica-oraciones/semantica-oraciones.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2VtYW50aWNhLW9yYWNpb25lcy9zZW1hbnRpY2Etb3JhY2lvbmVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/semantica-oraciones/semantica-oraciones.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/semantica-oraciones/semantica-oraciones.component.ts ***!
  \***************************************************************************/
/*! exports provided: SemanticaOracionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemanticaOracionesComponent", function() { return SemanticaOracionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SemanticaOracionesComponent = class SemanticaOracionesComponent {
    constructor() { }
    ngOnInit() {
    }
};
SemanticaOracionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-semantica-oraciones',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./semantica-oraciones.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/semantica-oraciones/semantica-oraciones.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./semantica-oraciones.component.css */ "./src/app/core/semantica-oraciones/semantica-oraciones.component.css")).default]
    })
], SemanticaOracionesComponent);



/***/ }),

/***/ "./src/app/core/sustantivos/sustantivos.component.css":
/*!************************************************************!*\
  !*** ./src/app/core/sustantivos/sustantivos.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc3VzdGFudGl2b3Mvc3VzdGFudGl2b3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/sustantivos/sustantivos.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/sustantivos/sustantivos.component.ts ***!
  \***********************************************************/
/*! exports provided: SustantivosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SustantivosComponent", function() { return SustantivosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SustantivosComponent = class SustantivosComponent {
    constructor() { }
    ngOnInit() {
    }
};
SustantivosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sustantivos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sustantivos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/sustantivos/sustantivos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sustantivos.component.css */ "./src/app/core/sustantivos/sustantivos.component.css")).default]
    })
], SustantivosComponent);



/***/ }),

/***/ "./src/app/core/tema/tema.component.css":
/*!**********************************************!*\
  !*** ./src/app/core/tema/tema.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdGVtYS90ZW1hLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/tema/tema.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/tema/tema.component.ts ***!
  \*********************************************/
/*! exports provided: TemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemaComponent", function() { return TemaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TemaComponent = class TemaComponent {
    constructor() { }
    ngOnInit() {
    }
};
TemaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tema',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tema.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/tema/tema.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tema.component.css */ "./src/app/core/tema/tema.component.css")).default]
    })
], TemaComponent);



/***/ }),

/***/ "./src/app/core/uso-palabra/uso-palabra.component.css":
/*!************************************************************!*\
  !*** ./src/app/core/uso-palabra/uso-palabra.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNvLXBhbGFicmEvdXNvLXBhbGFicmEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/uso-palabra/uso-palabra.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/uso-palabra/uso-palabra.component.ts ***!
  \***********************************************************/
/*! exports provided: UsoPalabraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsoPalabraComponent", function() { return UsoPalabraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UsoPalabraComponent = class UsoPalabraComponent {
    constructor() { }
    ngOnInit() {
    }
};
UsoPalabraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uso-palabra',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./uso-palabra.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/uso-palabra/uso-palabra.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./uso-palabra.component.css */ "./src/app/core/uso-palabra/uso-palabra.component.css")).default]
    })
], UsoPalabraComponent);



/***/ }),

/***/ "./src/app/core/usus-loquendi/usus-loquendi.component.css":
/*!****************************************************************!*\
  !*** ./src/app/core/usus-loquendi/usus-loquendi.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXN1cy1sb3F1ZW5kaS91c3VzLWxvcXVlbmRpLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/usus-loquendi/usus-loquendi.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/usus-loquendi/usus-loquendi.component.ts ***!
  \***************************************************************/
/*! exports provided: UsusLoquendiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsusLoquendiComponent", function() { return UsusLoquendiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UsusLoquendiComponent = class UsusLoquendiComponent {
    constructor() { }
    ngOnInit() {
    }
};
UsusLoquendiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usus-loquendi',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usus-loquendi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/usus-loquendi/usus-loquendi.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usus-loquendi.component.css */ "./src/app/core/usus-loquendi/usus-loquendi.component.css")).default]
    })
], UsusLoquendiComponent);



/***/ }),

/***/ "./src/app/core/verbos/verbos.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/verbos/verbos.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdmVyYm9zL3ZlcmJvcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/verbos/verbos.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/verbos/verbos.component.ts ***!
  \*************************************************/
/*! exports provided: VerbosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerbosComponent", function() { return VerbosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VerbosComponent = class VerbosComponent {
    constructor() { }
    ngOnInit() {
    }
};
VerbosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verbos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verbos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/verbos/verbos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verbos.component.css */ "./src/app/core/verbos/verbos.component.css")).default]
    })
], VerbosComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PC\Documents\GitHub\manual-hermeneutica\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
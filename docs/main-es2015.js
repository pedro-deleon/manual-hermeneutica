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
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"toolbar\">\n  <div style=\"display: flex\">\n    <button mat-icon-button (click)=\"snav.toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n\n  </div>\n\n  <h1>{{ \"Manual Hermenéutica\" | uppercase }}</h1>\n\n  <div>\n    <a href=\"https://github.com/pedro-deleon/manual-hermeneutica\" target=\"_blank\">\n      <mat-icon class=\"my-icon\" svgIcon=\"github\"></mat-icon>\n    </a>\n\n  </div>\n\n</mat-toolbar>\n\n<mat-sidenav-container>\n  <mat-sidenav #snav class=\"sidenav\" [style.marginTop.px]=\"mobileQuery.matches ? 50 : 0\"\n    [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" [(opened)]=\"opened\">\n    <content-sidenav></content-sidenav>\n  </mat-sidenav>\n  <mat-sidenav-content [@fadeInOut]=\"prepareRoute(outletRef)\" class=\"sidenav-content\">\n    <router-outlet #outletRef=\"outlet\" (activate)=\"onActiveRoute($event)\"></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<footer>\n  <a class=\"container\" href=\"https://www.biblegateway.com/passage/?search=Apocalipsis+4%3A8&version=NBLA\"\n    target=\"_blank\">\n    <div class=\"one\">\n      Santo, Santo, Santo es el Señor Dios, el Todopoderoso\n    </div>\n\n    <div class=\"two\">\n      El que era, El que es y El que ha de venir\n    </div>\n\n    <div class=\"three\">\n      Apocalipsis 4:8\n    </div>\n  </a>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/aplicacion-homiletica/aplicacion-homiletica.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/aplicacion-homiletica/aplicacion-homiletica.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 8. Aplicación Homilética</h2>\n<p>Esta área es solamente complementaria. (Puntos Extras)</p>\n<p>\n  Haz en tu libreta bosquejos de sermones expositivos de acuerdo al material que\n  has analizado o aprendido.\n</p>\n<p>La Biblia te da el Tema y los Puntos del Sermón.</p>\n<p>\n  En Clase durante veremos ejemplos de acuerdo a la Carta, Libro o Pasaje que\n  estemos estudiando y analizando.\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/contexto-externo/contexto-externo.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/contexto-externo/contexto-externo.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 6. Contexto Externo</h2>\n<p>\n  <strong>PROPOSITO: </strong>En ésta área estamos tratando de descubrir el\n  contexto que rodea el texto, que en alguna forma condiciona o aclara su\n  mensaje. Estamos buscando afuera del texto bíblico y \"no\" dentro de él.\n</p>\n\n<p>\n  <strong>ADVERTENCIA: </strong>Aunque sea muy común que los libros y cursos\n  empiezan con este área, hay cierto peligro en arrancar aquí con lo que\n  tradicionalmente se llamen introducción. El peligro es que fácilmente uno\n  puede tomar a la introducción como la verdad que está siendo justificada por\n  el texto bíblico, o que uno presenta la cosmovisión en la introducción que\n  impone su perspectiva \"humanista\" para interpretar los relatos bíblicos.\n</p>\n\n<p>\n  Para este paso no leemos el texto bíblico, sino trataremos de entender su\n  mensaje (que ya tenemos en mente por haber hecho las áreas de CONTEXTO\n  INTERNO, SEMANTICA, GRAMATICA, LITERATURA, Y SINTAXIS) por medio de la\n  historia, cultura, estilo de vida, religiones paganas, filosofías que influían\n  en el medio en que vivían, etc.\n</p>\n\n<p>\n  En los comentarios y libros de referencia este paso se llama Introducción\n  porque se considera que es el estudio que se hace antes del estudio bíblico,\n  sin embargo, cuando se preparan sermones y enseñanzas no es el primer paso que\n  se hace y a veces se omite por completo. Otra razón por la cual esta sección\n  no va primero es que estamos viendo la cultura en la Biblia y no la Biblia en\n  la cultura. Si se hacen las preguntas culturales antes de haber leído el texto\n  bíblico, se puede condicionar su lectura por una perspectiva selectiva y\n  perder el mensaje de la Biblia. Por tanto tenemos que tener una clara idea del\n  mensaje del texto bíblico para evaluar su relación con su cultura. Si lo\n  hacemos al revés, es posible hacer relativo el mensaje bíblico poniéndolo en\n  un marco cultural. La cultura tiene que ser tratada dentro del marco del\n  mensaje bíblico.\n</p>\n<p>Cuenta con los siguientes 10 pasos:</p>\n<ol>\n  <li>El autor</li>\n  <li>Los destinatarios</li>\n  <li>La historia</li>\n  <li>La cultura</li>\n  <li>La religión</li>\n  <li>La política</li>\n  <li>La filosofía</li>\n  <li>La geografía</li>\n  <li>La cronología</li>\n  <li>La intención del autor</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/contexto-interno/contexto-interno.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/contexto-interno/contexto-interno.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 1. Contexto Interno</h2>\n<p>El contexto interno es donde entedemos como habla el texto de si mismo</p>\n<p>Esta conformado por los siguientes 7 pasos: </p>\n<ol>\n  <li>El Contexto desde el Libro Mismo</li>\n  <li>Las Divisiones de los Párrafos</li>\n  <li>La Unidad de Comunicación o la Agrupación de los Párrafos</li>\n  <li>El Elemento Existencial Humano</li>\n  <li>Identificación de la Cultura</li>\n  <li>Evaluación de la Cultura</li>\n  <li>Técnica de Análisis de los Problemas</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/gramatica/gramatica.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/gramatica/gramatica.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 3. Grámatica</h2>\n<p>\n  <strong>Definición: </strong>Gramática es el estudio de los componentes\n  del idioma (la oración, el párrafo y las palabras; y la relación entre\n  ellos. Para entender su significado). Para poder leer y escribir bien.\n</p>\n\n<p>\n  <strong>Proposito: </strong>En esta sección nos concentraremos en la\n  función de las palabras dentro de una oración. En la sección de sintaxis\n  veremos la relación entre las palabras en una forma global. Aquí\n  estudiaremos la función de las palabras.\n</p>\n\n<p>\n  SE RECOMIENDA QUE EL ALUMNO CONSULTE UN LIBRO DE GRAMATICA PARA RESOLVER\n  SUS DUDAS\n</p>\n<p>Esta conformado por los siguientes 4 pasos: </p>\n<ol>\n  <li>Sustantivos </li>\n  <li>Verbos</li>\n  <li> Preposiciones </li>\n  <li>Adjetivos y adverbios</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/introduccion/introduccion.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/introduccion/introduccion.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Introducción</h2>\n<div class=\"seccion-autor\">\n  <p>\n    Manual del Alumno elaborado por el Teólogo y Pastor\n    <a href=\"https://twitter.com/pastorjp\" target=\"_blank\" rel=\"noopener noreferrer\">José Pérez Pérez</a>\n  </p>\n\n  <img src=\"https://pbs.twimg.com/profile_images/1217923941555146752/W8wPftwZ_200x200.jpg\"\n    alt=\"Fotografía Pastor José Perez Perez\" width=\"250\" />\n</div>\n\n<p>\n  El material cuenta con 8 areas distintas las cuales cada una de ellas tiene\n  una serie de pasos que el alumno debe seguir.\n</p>\n<p>Las 8 areas son:</p>\n<ol>\n  <li routerLink=\"/area/contexto-interno\">Contexto Interno</li>\n  <li routerLink=\"/area/semantica\">Semántica</li>\n  <li routerLink=\"/area/gramatica\">Gramatica</li>\n  <li routerLink=\"/area/sintaxis\">Sintaxis</li>\n  <li routerLink=\"/area/literatura\">Literatura</li>\n  <li routerLink=\"/area/contexto-externo\">Contexto Externo</li>\n  <li routerLink=\"/area/teologia\">Teología</li>\n  <li routerLink=\"/area/homiletica\">Aplicación Homilética</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/literatura/literatura.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/literatura/literatura.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 5 Literatura</h2>\n<p>\n  <strong>Proposito:</strong>Identificar y entender como el género literario\n  o el estilo influyen en la interpretación de un texto.\n</p>\n\n<p>\n  El énfasis en el estudio de la Biblia como literatura es relativamente\n  reciente. Este estudio tiene varios componentes que no han sido parte del\n  estudio tradicional. Se caracteriza por varios factores complicados:\n</p>\n\n<ol>\n  <li>\n    Un trabajo serio para identificar los géneros literarios que se\n    encuentran en la Biblia.\n  </li>\n  <li>\n    Una disposición de tratar los textos bíblicos como unidades terminadas\n    en lugar de fragmentos. Esta aceptación de la unidad de los libros de la\n    Biblia es un cambio radical de la crítica que la Biblia ha recibido en\n    los últimos dos siglos.\n  </li>\n  <li>\n    Un enfoque en la Biblia como está ahora, en lugar de profundizar en el\n    texto.\n  </li>\n  <li>\n    Una inclinación de usar términos literarios en lugar de términos\n    teológicos para explicar las historias y poemas de las Escrituras.\n  </li>\n  <li>Una apreciación del arte en la Biblia.</li>\n  <li>\n    Una sensibilidad a la dimensión de la experiencia en las Escrituras.\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/semantica/semantica.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/semantica/semantica.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 2. Semántica</h2>\n<p>Esta conformado por los siguientes 10 pasos: </p>\n<ol>\n  <li>Definición de palabras y expresiones</li>\n  <li>El Léxico del idioma original</li>\n  <li>Etimología</li>\n  <li>El uso de una palabra </li>\n  <li> Categorías de patrones semánticos </li>\n  <li> Campos semánticos </li>\n  <li> Frecuencia del uso </li>\n  <li> Connotación y denotación </li>\n  <li>Clasificación semántica de las oraciones </li>\n  <li> Usus Loquendi </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/sintaxis/sintaxis.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/sintaxis/sintaxis.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 4. Sintaxis</h2>\n<p>\n  <strong>Propósito: </strong>Encontrar el pensamiento del autor, como\n  argumentaba, que creía y cuáles eran sus razones principales.\n</p>\n<p>\n  <strong>Sintáxis: </strong>Es la parte de la gramática que estudia la\n  función y relación de las palabras en la oración y la función y relación\n  entre las oraciones mismas.\"\n</p>\n<p>Esta conformado por los siguientes 6 pasos: </p>\n<ol>\n  <li> La intención del autor </li>\n  <li> El tema </li>\n  <li>Las ideas</li>\n  <li>La intención del parrafo</li>\n  <li>El argumento y esquematización del argumento </li>\n  <li> El pasaje y el tema del libro</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/teologia/teologia.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/teologia/teologia.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Area 7. Teología</h2>\n<p>Esta área es solamente complementaria. (Puntos Extras)</p>\n<p>\n  Haz en tu libreta una lista de las Doctrinas que se encuentran en el material\n  Bíblico que estudiaste y analizaste.\n</p>\n<p>Considera este Bosquejo de la Teología sistemática de W. Grudem</p>\n<ol>\n  <li>La Doctrina de La Palabra de Dios</li>\n  <li>La Doctrina de Dios</li>\n  <li>La Doctrina del Hombre</li>\n  <li>La Doctrina de Cristo y el Espíritu Santo</li>\n  <li>La Doctrina de la Aplicación de La Redención</li>\n  <li>La Doctrina de la Iglesia</li>\n  <li>La Doctrina del Futuro</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content-sidenav/content-sidenav.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content-sidenav/content-sidenav.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding routerLink=\"{{ node.route }}\"\n    routerLinkActive=\"active-route\">\n    <button mat-icon-button disabled></button>\n    <div class=\"tree-child\">{{ node.name }}</div>\n  </mat-tree-node>\n\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding routerLink=\"{{ node.route }}\"\n    routerLinkActive=\"active-route\">\n\n\n    <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\n\n\n      <mat-icon>\n        {{ treeControl.isExpanded(node) ? \"expand_more\" : \"chevron_right\" }}\n      </mat-icon>\n\n\n    </button>\n    <div class=\"tree-parent\">{{ node.name }}</div>\n\n  </mat-tree-node>\n</mat-tree>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/adjetivos-adverbios/adjetivos-adverbios.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/adjetivos-adverbios/adjetivos-adverbios.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Gramatica</span> </h2>\n<h3>Paso 4. Adjetivos y adverbios</h3>\n<p>\n  <strong>META: </strong>Identificar las palabras que modifican a otras y\n  clasificarlas por ser adverbios o adjetivos para saber si se modifica a el\n  sustantivo o en la acción.\n</p>\n<p>\n  Se debe observar si la palabra esta modificada o condicionada por otra\n  palabra. Las palabras que modifican sustantivos son adjetivos. Y las\n  palabras que modifican a los verbos o el predicado son adverbios. Por lo\n  general los adverbios terminan en \"mente\".\n</p>\n\n<ol>\n  <li>\n    Identifica los adjetivos en la unidad de comunicación que estas\n    estudiando. Marcarlos en color anaranjado en tu libreta (TODOS).\n  </li>\n  <li>\n    Identifica los adverbios en la unidad de comunicación que estas\n    estudiando. Marcarlos en color rosa en tu libreta (TODOS).\n  </li>\n</ol>\n<strong>Preguntas para estudio bíblico: </strong>\n<p>Aparte de la accion</p>\n<ol>\n  <li>\n    ¿Hay una descripción de cómo se hace la acción por medio de un adverbio?\n  </li>\n  <li>\n    ¿Hay una manera en que el sustantivo está‚ cualificado o descrito por un\n    adjetivo? Explica como\n  </li>\n</ol>\n\n<strong>Adjentivos: </strong>\n<ol>\n  <li>Lo que PRECISA o LIMITA a los sustantivos.</li>\n  <li>\n    Califica (que informan sobre alguna cualidad del objeto). Ejemplo: a.\n    Perro negro. b. Letra muda.\n  </li>\n  <li>\n    Determinan y Concretan: (que limitan la extensión en que debe tomarse el\n    sustantivo (Hoyo, 1977, 0.49). Ejemplos: cinco, cada, este, aquel.\n  </li>\n</ol>\n\n<strong>Pregunta para un estudio bíblico: </strong>\n<ul>\n  <li>\n    ¿Cómo está calificado, determinado o concretado el sustantivo por un\n    adverbio específico?\n  </li>\n</ul>\n\n<strong>Adverbios: </strong>\n<p>\n  El adverbio hace la misma función que el adjetivo pero solamente con los\n  verbos, adjetivos y otros adverbios. Lo que PRECISA o LIMITA el verbo,\n  adjetivo, y otro adverbios.\n</p>\n<ol>\n  <li>\n    de afirmación: si, cierto, ciertamente, verdaderamente, realmente,\n    naturalmente, también.\n  </li>\n  <li>de negación: no, nunca, jamás, ni, tampoco.</li>\n  <li>de duda: acaso, tal vez, quizá.</li>\n  <li>\n    de tiempo: hoy, ayer, anteayer, mañana, ahora, antes, después, entonces,\n    luego, tarde, temprano, puesto, pronto, siempre, nunca, jamás, cuando,\n    todavía, ya, mientras, aun, antaño, hogaño, antiguamente, últimamente,\n    pues, entonces.\n  </li>\n  <li>\n    de lugar: aquí, ah¡, allá, acá, allí, acullá, cerca, lejos, donde,\n    adonde, enfrente, delante, atrás, detrás, dentro, fuera, arriba, abajo,\n    encima, debajo, junto, allende.\n  </li>\n  <li>de orden: últimamente, primeramente, sucesivamente.</li>\n  <li>\n    de cantidad: mucho, poco, bastante, muy, casi, harto, demasiado, tanto,\n    cuanto, nada.\n  </li>\n  <li>de comparación: tan, mas, menos, mejor, peor.</li>\n  <li>\n    de modo: bien, mal, apenas, así, despacio, aprisa, alto, bajo, excepto,\n    conforme, aposta, gratis, adrede, fuerte, suave y muchas palabras que\n    terminan con \"-mente\".\n  </li>\n</ol>\n<strong>Pregunta para un estudio bíblico: </strong>\n<ol>\n  <li>¿Cuales son los adverbios que se encuentran en el texto?</li>\n  <li>¿Cuáles son las palabras que modifican?</li>\n  <li>\n    ¿Cómo nos ayudan a entender el concepto intencionado por el autor?\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/agrupacion-parrafos/agrupacion-parrafos.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/agrupacion-parrafos/agrupacion-parrafos.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Interno</span> </h2>\n<h3>Paso 3. La Unidad de Comunicación o la Agrupación de los Párrafos.</h3>\n<p>\n  <strong>META:</strong> Determinar las unidades de comunicación del autor,\n  para poder estudiar en temas completos su pensamiento.\n</p>\n<p>\n  Hay una práctica muy popular: ver la Biblia como un conjunto de\n  versículos, cada uno <strong>independiente</strong> del otro. Siguiendo\n  esta práctica: los sermones, las lecturas bíblicas, los libros de\n  meditación diaria, los libros de Teología Sistemática, libros que tratan\n  un problema de la vida cristiana, y otros, citan versículos\n  <strong>aislados</strong> , sin prestar atención al\n  <strong>contexto</strong>. Detrás de esta práctica hay una suposición de\n  que todo lo que dice la Biblia es VERDAD sin importar el\n  <strong>orden</strong> de las frases, como si fuera un libro de\n  <strong>formulas</strong>.\n</p>\n\n<p>\n  Sin pensar hemos llegado a una práctica que trata el pensamiento del autor\n  en <strong></strong> fragmentos, sin la necesidad de\n  <strong></strong> conectar una frase a una oración, párrafo, o unidad de\n  comunicación. Al tratar la Biblia de esta manera, nunca forman una unidad\n  de <strong>comunicación completa</strong> que necesitamos estudiar para\n  poder <strong>entender</strong> a su autor.\n</p>\n\n<p>\n  En vez de esto debemos fijar los límites del texto de estudio. A veces\n  puede ser un párrafo. Pero en otras ocasiones puede ser necesario estudiar\n  varios párrafos o un libro entero para asegurar que se está manejando una\n  idea completa\n</p>\n\n<p>\n  Si no se maneja una idea completa, nos podemos equivocar.\n</p>\n\n<p>\n  Es importante tratar con una unidad de comunicación completa. Si solamente\n  tratamos ideas incompletas no podemos esperar que nuestra comprensión del\n  texto sea adecuada. Cuando una persona estudia la Biblia salteando, es\n  decir, sin tomar en cuenta las unidades de comunicación, el riesgo es\n  confundir la idea del autor. Ya no es posible recuperar sus argumentos.\n  Los eventos se quedan sin el hilo que le daría sentido.\n</p>\n\n<strong>Preguntas para un estudio bíblico</strong>\n<ol>\n  <li>¿Dónde empieza a hablar el autor de este tema?</li>\n  <li>¿Dónde termina?</li>\n  <li>¿Cuáles son las sub-divisiones que el autor da al tema?</li>\n  <li>¿Por qué dividiría el autor el tema así?.</li>\n  <li>\n    ¿Hay unidades dentro del libro que son independientes unas de otras?.\n  </li>\n  <li>¿Qué podemos entender por separado, o sin ver todo el libro?</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/analisis-problemas/analisis-problemas.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/analisis-problemas/analisis-problemas.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Interno</span> </h2>\n<h3>Paso 7. Técnica del análisis de los Problemas.</h3>\n<p>\n  <strong>META:</strong>Analizar los problemas, para ver cuales fueron sus\n  causas y consecuencias reales en el pueblo de Dios, con el fin de tener\n  clara la idea que se trata en el texto.\n</p>\n\n<strong>En tu libreta:</strong>\n<p><strong>PRIMERO:</strong>Enumera los problemas.</p>\n<p><strong>SEGUNDO:</strong>Descríbelos.</p>\n<p>\n  <strong>TERCERO:</strong>Menciona las causas que ocasionaron los\n  problemas.\n</p>\n<p>\n  <strong>CUARTO:</strong>¿Qué consecuencias negativas trajeron los\n  problemas a los destinatarios del libro?\n</p>\n<p>\n  <strong>QUINTO:</strong>¿Cuál es la solución que ofrece el autor al\n  problema?\n</p>\n\n<strong>Preguntas para estudio bíblico</strong>\n<ol>\n  <li>¿Cuál es la solución que ofrece el autor al problema?</li>\n  <li>¿Cuáles fueron las causas que menciona el autor?</li>\n  <li>¿Cuáles son las consecuencias mencionadas?</li>\n  <li>¿Qué soluciones ofrece el autor para sus destinatarios?</li>\n  <li>¿Hay situaciones semejantes hoy?</li>\n  <li>¿Podemos usar la solución que ofrece el autor?</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/argumento-esquematizacion/argumento-esquematizacion.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/argumento-esquematizacion/argumento-esquematizacion.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Sintaxis</span> </h2>\n<h3>Paso 5. Identificación y esquematización del argumento</h3>\n<p>\n  <strong>Meta: </strong>Hacer un esquema el texto tomando en cuenta todos\n  los elementos de estructura para aclarar el argumento del autor.\n</p>\n\n<p>\n  HAZ UN ESQUEMA DE SINTAXIS DEL Párrafo en tu libreta indicando la relación\n  de todas las palabras con el tema principal.\n</p>\n\n<p>\n  <strong>OBSERVACION: </strong>Es preferible hacer un borrador NO en tu\n  libreta, antes del trabajo final.\n</p>\n\n<strong>Instrucciones: </strong>\n<p>\n  1. Vamos a escribir TODO el texto nuevamente de otra forma (esquema de\n  Sintaxis) pero en el mismo orden.\n</p>\n<p>\n  2. Al llegar a una nueva marca de puntuación (punto, coma, Interrogación,\n  admiración etc…) se empieza un nuevo renglón en el esquema de Sintaxis.\n</p>\n\n<p>\n  Empieza con el tema a la izquierda; con el sustantivo, verbo, y predicado\n  de la oración que contiene el tema del párrafo. Generalmente esta es la\n  primera oración en el párrafo.\n</p>\n\n<p>\n  Subordina por medio de espacios dentados. Los adjetivos debajo de los\n  sustantivos, los adverbios debajo de los verbos. Las palabras que\n  modifican debajo de la palabra que están modificando.\n</p>\n\n<strong>NOTEN BIEN: </strong>\n<p>\n  A diferencia de un diagrama de oración, un adjetivo o pronombre posesivo\n  en la mayoría de los casos estará en la misma línea del sustantivo que\n  modifica\n</p>\n<p>5. Las palabras paralelas deben ser paralelas en la presentación.</p>\n<strong>NOTEN BIEN: </strong>\n<p>\n  El problema de coordinación y subordinación es más complejo cuando hay\n  varios elementos que modifiquen la(s) misma(s) palabra(s), mas no son\n  coordinados entre sí.\n</p>\n<p>\n  Las conjunciones deben ser puestas entre las líneas que son comparadas.\n</p>\n\n<p>\n  6. Aislar los elementos de estructura. Recomendamos que subrayen en el\n  esquema estos elementos.\n</p>\n<strong>NOTEN BIEN: </strong>\n<p>\n  Este es un paso especialmente importante porque muchas de las decisiones\n  sintácticas- gramaticales están hechas en este punto. Las palabras: mas,\n  pero, por tanto, por lo tanto, etc.\n</p>\n<p>\n  7. Cuando el tema no se encuentra al principio del párrafo empieza con la\n  primera renglón como siempre y haz un círculo alrededor de lo que se tiene\n  que correr hacia la derecha en la copia final\n</p>\n<p>\n  8. Cuando se haya terminado de escribir todo el párrafo, debes regresar a\n  leerlo coloreando las palabras, situaciones o conceptos que se repitan\n  para trazar el hilo del argumento.\n</p>\n<strong>NOTEN BIEN: </strong>\n<p>\n  Con frecuencia las decisiones claves de interpretación serán tomadas al\n  momento de hacer el esquema de Sintaxis.\n</p>\n<strong>Preguntas para un estudio biblico: </strong>\n<ol>\n  <li>¿Cuál es el tema principal del párrafo?</li>\n  <li>¿Cómo apoya el autor su idea en este párrafo?</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/autor/autor.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/autor/autor.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\n<h3>Paso 1: El autor</h3>\n<p><strong>META: </strong> Conocer el mundo del autor de la obra que estudiamos. No por la información dentro de esta\n  obra, sino por las circunstancias políticas, geográficas, culturales y religiosas que le rodeaban. </p>\n<p>Nuestra tarea es poder entender mejor un libro por medio de datos históricos. Si estamos estudiando la carta a los\n  Romanos sería de mucho interés saber acerca de Pablo. Ya tenemos muchos datos con base en el paso: ELEMENTO\n  EXISTENCIAL HUMANO. Lo que tenemos que ver en este paso es la geografía de su vida. ¿Dónde nació? ¿Cuáles serían sus\n  experiencias en esta ciudad? ¨ ¿Cuáles serían las maneras de vivir en esta ciudad? ¿Era un campo de agricultura, o una\n  ciudad industrial? ¿Tendría una universidad? ¿Habrá jugado en un río o en el mar de niño? ¿Quién era su\n  maestro/rabino? ¿Qué fama tendría este maestro? ¿Cuál era su posición en la nación judía? Esta información no se\n  encuentra dentro de la misma Biblia. Tenemos que ir a otras fuentes de información.</p>\n<p> Ejemplo: ¿Cuál es la situación personal del autor: Repasa la situación personal de Pablo cuando escribió Filipenses\n  y II Timoteo (vea Fil. 1:13-14; Hechos 28:16,30; II Timoteo 1:11, 1:15-17, 4:9-18) y explica en un breve párrafo como\n  esto nos ayuda a entender la marcada diferencia en su actitud entre Fil. 3:12-13 y II Tim. 4:6-8.\" </p>\n<strong>Preguntas para estudio bíblico: </strong>\n<ol>\n  <li>¿Cuáles eran las circunstancias en las que vivió el autor? </li>\n  <li>¿Cuáles eran sus maneras de saludar a la gente? </li>\n  <li>¿Qué la luz que nos dan estos hechos para entender la intención que tuvo al escribir? </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/campos-semanticos/campos-semanticos.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/campos-semanticos/campos-semanticos.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\n<h3>Paso 6: Campos semánticos</h3>\n<p>\n  <strong>META:</strong> Conocer como la idea representada con nuestras\n  palabras se relaciona con otras ideas.\n</p>\n<p>\n  En este paso estamos buscando la relación entre las palabras que indica\n  como pensaba el autor\n</p>\n<p>\n  <strong>Antónimos - Opuestos Polares:</strong>palabras que expresan ideas\n  opuestas, como las palabras robar y comprar. Noten bien que estas palabras\n  son sub-grupos de otra categoría mas grande: conseguir o adquirir. A veces\n  el énfasis no cae en la forma de conseguir algo como robar – comprar sino\n  en si lo tienes o no lo tienes, como en el caso de Jacob y Esaú cuando\n  pelearon su herencia.\n</p>\n<p>\n  <strong>Palabras empalmadas: </strong>palabras que comparten un\n  significado aunque las palabras en sé no son sinónimos completos. Un\n  ejemplo sería: bella, bonita, guapa, etc.\n</p>\n<p>\n  <strong>Palabras continuas:</strong> palabras que expresan un continuo de\n  “x” a “y”. Un ejemplo son las palabras que expresan lo que va de caliente\n  a frío, o moverse, gatear, caminar, correr.\n</p>\n<p>\n  <strong>Palabras continuas:</strong> la palabra perro está incluida en la\n  palabra animal, la palabra árbol en la palabra planta. Pero no al revés,\n  porque la palabra animal no está incluida en la palabra perro, ni la\n  palabra planta en la de árbol.\n</p>\n<p>\n  <strong>Equivalentes:</strong>Palabras que tienen el mismo significado.\n  Esto no es muy común, por tanto debes tratar de encontrar las diferencias\n  más pequeñas entre las dos palabras. UNA OBSERVACION: \"Una palabra que\n  significa todo no significa nada. Para que una palabra signifique algo, no\n  debe significar otra cosa. Limitar la ley de contradicción elimina todo\n  significado”. Siempre debemos estar consientes de qué es lo que esta\n  incluido o excluido en el significado de una palabra. No debemos tener\n  significados muy amplios de una palabra porque entonces su verdadero\n  significado queda confuso. En el grado que tenemos confusa nuestra mente,\n  en cuanto al contenido de una palabra, quedamos confusos en el verdadero\n  conocimiento de las Escrituras.\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/connotacion-denotacion/connotacion-denotacion.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/connotacion-denotacion/connotacion-denotacion.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\n<h3>Paso 8: Connotación y denotación</h3>\n<p>\n  <strong>META:</strong>Saber los valores que se relacionan con esta palabra\n  y no sólo su definición formal.\n</p>\n<strong>DEFINICIONES:</strong>\n<p>\n  <strong>Denotación</strong>es el significado más exacto o formal de una\n  palabra. Ejemplo: \"varón: hombre criatura racional del sexo masculino\n</p>\n<p>\n  <strong>Connotación</strong>son los significados secundarios o\n  adaptaciones culturales de una palabra. Escribe ejemplos en tu libret\n</p>\n<strong>Escribre ejemplos en tu libreta</strong>\n<p>\n  Es difícil captar todo lo que una palabra connota en la cultura bíblica,\n  porque no tenemos la misma red cultural de ideas. Solamente con un estudio\n  cuidadoso y prolongado podemos empezar a captar las connotaciones de los\n  idiomas originales. Sin embargo es necesario que estemos conscientes de la\n  posibilidad connotativa en los pasajes que estudiamos.\n</p>\n<strong>Preguntas para un estudio bíblico</strong>\n<ol>\n  <li>\n    ¿Cuál es la connotación y denotación de la palabra qué es clave en el\n    texto estudiado? <strong>Anota</strong>\n  </li>\n  <li>\n    ¿Está el autor usando la palabra en una forma denotativa o connotativa?\n  </li>\n  <li>\n    ¿Cuál es la valorización buena o mala que encontramos en esta palabra?\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/cronologia/cronologia.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/cronologia/cronologia.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\n<h3>Paso 9: La cronología</h3>\n<p>Linea del tiempo</p>\n<p><strong>META: </strong>Poder relacionar cronológicamente los eventos. </p>\n<p>Es importante que nos demos cuenta de la relación histórica de ellos. ¿Cuál fue primero y cuál fue segundo? A veces\n  pensamos que toda la Biblia fue escrita en un instante. Que Moisés tenía la misma información que nosotros. La\n  situación no es así. Para ayudarnos a captar esta relación de eventos es importante que hagamos una LINEA DE TIEMPO.\n  Una LINEA DE TIEMPO es una línea en donde se indica la relación de una secuencia de eventos históricos. La que sigue\n  es una LINEA DE TIEMPO indicando algunos de los personajes más importantes del Antiguo Testamento. Es importante que\n  sepamos la relación entre los eventos más trascendentes.</p>\n<p>También es importante que sepamos la secuencia de los eventos de la vida de una persona, para entender adecuadamente\n  su vida. Tomamos un ejemplo de la vida de Cristo. ¿Había resucitado Jesús antes de haber hecho los milagros?, ¿Por qué\n  por medio de este evento Dios le dio poder? Si tenemos una LINEA DE TIEMPO en nuestra mente nos damos cuenta de que\n  casi todos los milagros ocurrieron antes de Su Resurrección.</p>\n<strong>PREGUNTA PARA UN ESTUDIO BIBLICO: </strong>\n<ol>\n  <li>¿Cómo nos ayuda a entender el texto la relación entre los eventos? </li>\n</ol>\n<p>Haz una \"Línea de Tiempo\" en tu Libreta. </p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/cultura/cultura.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/cultura/cultura.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span></h2>\n<h3>Paso 4: La cultura</h3>\n<p>\n  <strong>META: </strong> Conocer la cultura que estaba presente cuando la obra\n  fue hecha, para poder entender la expresión del autor.\n</p>\n<p>\n  1. ¿Cuál es el trasfondo cultural del Libro que se está estudiando? Anota en\n  tu Libreta\n</p>\n<p>\n  Ejemplo: \"¿Cómo te ayuda el trasfondo cultural a entender los eventos de Rut\n  3:6-13?\"\n</p>\n<p>\n  Ejemplo: \"¿Crees tú que debemos obedecer la clara orden de Cristo de lavar los\n  pies uno a otro (Juan 13)? Si contestas que esto no es necesario porque han\n  habido cambios en la cultura de aquel tiempo con respecto a la actual, ¿Cómo\n  vas a responder a los que dicen que los mandamientos acerca de la\n  homosexualidad, el divorcio, y la autoridad del esposo en el hogar son\n  fenómenos culturales que no nos atan hoy?\"\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/definicion-palabras/definicion-palabras.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/definicion-palabras/definicion-palabras.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\n<h3>Paso 1: Definición de palabras y expresiones</h3>\n<p>\n  <strong>META:</strong>Conocer el significado de las palabras empleadas.\n</p>\n<ol>\n  <li>\n    Haz una lista de palabras que requieran definición en la columna lateral\n    de tu libreta. <strong>MUY IMPORTANTE<</strong> </li> <li>\n        Anota todos los significados que tiene la palabra en cuestión en la\n        columna de notas. Hay que consultar uno o más diccionarios.\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/destinatarios/destinatarios.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/destinatarios/destinatarios.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\n<h3>Paso 2: Los destinatarios</h3>\n<p><strong>META:</strong>Conocer el mundo de los destinatarios de la obra que estudiamos. No por la información dentro\n  de esta obra, sino por las circunstancias políticas, geográficas, culturales y religiosas que les rodeaban. </p>\n<p>La situación de los destinatarios impacta mucho cómo se escribe en la Biblia. Tienen presiones de muchos fuentes que\n  compiten para su lealtad de ideologías, posturas y lealtades políticas, modas religiosas, compromisos familiares entre\n  otras cosas. ¿Cómo responde el texto a estas factores externas que compiten por la lealtad de los destinatarios?</p>\n<strong>Preguntas para un estudio bíblico:</strong>\n<ol>\n  <li>¿Cuál era el medio de sostenerse de los destinatarios?</li>\n  <li>¿Cuáles eran sus creencias religiosas? </li>\n  <li>¿Cómo representaban estas creencias una amenaza para las creencias reales bíblicas? </li>\n  <li>¿Cuál era su relación con el gobierno (esclavo, libre, gobernando, súbdito, rebelde, etc.)? </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/division-parrafos/division-parrafos.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/division-parrafos/division-parrafos.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Interno</span> </h2>\n<h3>Paso 2. División de los parrafos</h3>\n<strong>Objetivo</strong>\n<p>\n  Dividir el texto en unidades de comunicación de acuerdo al pensamiento del\n  autor inspirado por el Espíritu Santo. Para poder empezar a hacer las\n  divisiones, necesitamos primero entender cuáles son las unidades que\n  integran a un párrafo (perícopa).\n</p>\n\n<strong>Antes de empezar...</strong>\n<p>\n  Copia en una libreta y divide el texto según el criterio que establece el\n  mismo texto. (El profesor te dará indicaciones en clase antes de hacerlo)\n</p>\n\n<strong>Análisis del párrafo</strong>\n<ol>\n  <li>\n    Haz las divisiones de los enunciados gramaticales en la sección que\n    estás estudiando.\n  </li>\n  <li>Une los enunciados que hablan del mismo tema.</li>\n  <li>\n    Pon un título a cada párrafo: (En la columna lateral de tu libreta)\n\n    <ol type=\"a\">\n      <li>Usa palabras del texto mismo.</li>\n      <li>No uses mas de cuatro palabras.</li>\n      <li>Indica con estas palabras lo mas importante del párrafo.</li>\n      <li>\n        Que las cuatro palabras sean representativas del contenido del\n        párrafo.\n      </li>\n      <li>Que los títulos distingan entre un párrafo y otro</li>\n    </ol>\n  </li>\n</ol>\n\n<strong>Preguntas para estudio bíblico: </strong>\n\n<ol>\n  <li>\n    ¿Cuál es el tema principal y cuales son sus subtemas? Anótalos en tu\n    libreta.\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/elemento-existencial-humano/elemento-existencial-humano.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/elemento-existencial-humano/elemento-existencial-humano.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Interno</span> </h2>\n<h3>Paso 4. El Elemento Existencial Humano</h3>\n<p>\n  <strong>META:</strong>Tener un punto de identificación entre nosotros y\n  los participantes que se encuentran en el texto.\n</p>\n\n<ol>\n  <li>¿Qué estaba haciendo el autor al escribir su obra?</li>\n  <li>¿Cuál era su oficio en la vida?</li>\n  <li>¿Qué deseaba lograr al escribir su obra?</li>\n  <li>¿Cómo cabe el escrito en la misión y el propósito del autor?</li>\n</ol>\n\n<p>\n  El Lector implícito: Es importante fijar los destinatarios y su nivel de\n  preparación en el tema que trata el autor.\n</p>\n\n<p>\n  <strong>PRIMERO: </strong>Es importante fijar los destinatarios y su nivel\n  de preparación en el tema que trata el autor.\n</p>\n\n<strong>Pregunta para estudio bíblico</strong>\n<ol>\n  <li>\n    ¿Cuáles son las personas o tipos de personas que se mencionan en este\n    pasaje?\n  </li>\n</ol>\n\n<p>\n  <strong>SEGUNDO:</strong> Según el libro, trata de desarrollar una breve\n  biografía de cada una de las personas que intervienen en este. O la\n  descripción del tipo de persona de que se trata, con base en la\n  información proporcionada por el texto mismo.\n</p>\n\n<strong>Pregunta para estudio bíblico</strong>\n<ol>\n  <li>\n    ¿Cuáles son las cosas que podemos aprender acerca de ellas en este\n    pasaje?\n  </li>\n  <li>\n    ¿Cómo nos ayuda a entender el pasaje el conocer bien a los\n    participantes?\n  </li>\n</ol>\n\n<p>\n  <strong>TERCERO:</strong> Busca algunas otras referencias de esas mismas\n  personas, en otros libros o epístolas según la concordancia y\n  <strong>escribe en tu libreta</strong> una biografía breve con base en\n  estas fuentes.\n</p>\n<strong>Pregunta para estudio bíblico</strong>\n<ol>\n  <li>\n    Con base en otros pasajes ¿Qué podemos aprender acerca de estas\n    personas?\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/etimologia/etimologia.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/etimologia/etimologia.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\n<h3>Paso 3: Etimología</h3>\n<p>\n  <strong>OBJETIVO:</strong>Conocer como se ha formado la palabra para\n  entender mejor su significado\n</p>\n<ol>\n  <li>\n    <strong> Origen de la palabra \"Etimología\".-</strong> La palabra\n    española \"Etimología” proviene del vocablo griego “ethymología”, el cual\n    está formado por otros dos: el adjetivo “ethymos”: verdadero, auténtico,\n    y la seudodesinencia “logía”, que a su vez procede del sustantivo\n    “logos”: palabra. Originariamente, la Etimología se refiere al\n    significado auténtico de las palabras.\n  </li>\n  <li>\n    <strong>Definición de la Etimología.-</strong> La Etimología estudia el\n    verdadero significado de las palabras, mediante el conocimiento de su\n    origen, de su estructura y de sus transformaciones o cambios. En\n    consecuencia la Etimología comprende todos los elementos constitutivos\n    de los vocablos y no solamente su raíz.\n  </li>\n  <li>\n    <strong>Importancia y utilidad de la Etimología.-</strong>La Etimología\n    se pone de relieve, mediante las consideraciones siguientes:\n    <p>1a. Satisface la curiosidad natural de todo hombre.</p>\n    <p>\n      2a. Sirve para definir los objetos o ideas que de ellos tenemos.\n      (vocablos)\n    </p>\n    <p>\n      3a. Conocida la etimología de una voz (activa, media o pasiva), se\n      sabe descifrar su valor o significado literal o absoluto, que en\n      algunos casos es idéntico a su valor usual y único.\n    </p>\n    <p>\n      4a. La Etimología sirve para determinar la “sinonimia”, o sea, la\n      diferencia de significado entre dos voces sinónimas.\n    </p>\n    <p>\n      5a. Sirve de poderoso auxilio y es imprescindible para el sólido\n      estudio de la gramática particular de cualquier idioma.\n    </p>\n  </li>\n\n  <li>\n    <strong>Cambios Morfológicos.</strong>(de “morfe”, forma) son cambios en\n    la forma y estructura de las palabras.\n  </li>\n  <li>\n    <strong>Cambios Semánticos.-</strong>Los cambios semánticos (de\n    “semaino”: significar) son cambios de significado. Se llama “polisemia”\n    (de polus: mucho) la multiplicidad de sentidos que una misma palabra\n    tiene\n  </li>\n  <li>\n    <strong>Elementos Morfológicos de las palabras.-</strong>Son dos: la\n    raíz y los morfemas.\n    <ol type=\"a\">\n      <li>\n        Raíz.- Es el elemento irreducible (generalmente monosilábico y común\n        a un conjunto de palabras) que encierra el sentido fundamental del\n        vocablo\n      </li>\n      <li>\n        Morfemas o Afijos.- Son partículas que se agregan a la raíz. Los\n        morfemas o afijos se dividen en:\n        <ul>\n          <li>prefijos: los que se ponen antes de la raíz.</li>\n          <li>infijos: se intercalan entre la raíz y los sufijos</li>\n          <li>sufijos: los que se ponen después de la raíz.</li>\n        </ul>\n      </li>\n    </ol>\n  </li>\n</ol>\n\n<div>\n  <strong>Nuestra tarea:</strong>\"Considera la dimensión histórica\n  (diacrónica):\n  <strong>Selecciona por lo menos una Palabra por Párrafo y anota.</strong>\n  <ol>\n    <li>\n      ¿Puede la Etimología del término (por lo menos en uno de sus\n      significados) ser determinado?\n    </li>\n    <li>¿Es el término transparente?</li>\n    <li>\n      ¿Ha cambiado su significado? Si se ha cambiado, identifica la\n      naturaleza del cambio\n    </li>\n    <li>\n      ¿Hay una influencia de otro idioma funcionando? Si la hay, identifica\n      la forma de la interferencia.\n    </li>\n    <li>¿Cuál es el raíz de la palabra?</li>\n    <li>¿Qué significa?</li>\n    <li>\n      .¿Cuál es el prefijo, infijo, o sufijo que han sido agregados a la\n      palabra?\n    </li>\n    <li>¿Cómo modifican el significado de la raíz?</li>\n  </ol>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/evaluacion-cultura/evaluacion-cultura.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/evaluacion-cultura/evaluacion-cultura.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Interno</span> </h2>\n<h3>Paso 6 Evaluación de la cultura</h3>\n\n<p>\n  <strong>META:</strong>El propósito de la Biblia es establecer la manera\n  correcta de creer en cuanto a Dios y al hombre. El hecho de que hay una\n  manera de creer correctamente, implica que también hay una manera\n  equivocada. Tratemos de identificar las creencias aceptadas y rechazadas\n  para poder acercarnos a lo que Dios quiere que creamos.\n</p>\n\n<ol type=\"a\">\n  <li>\n    \"Uno tiende a nivelar las características culturales; incluyendo sus\n    instituciones y términos; y hacer éstas características como enseñanzas\n    normativas al igual que cualquier otro mandato bíblico\".\n  </li>\n  <li>\n    \"El otro extremo tiende a saltar cualquier cosa que resulta sospechosa\n    de tener una descripción culturalmente condicionada como pretexto para\n    reducir la enseñanza de tal parte, como la descripción de una situación\n    ya no existente\".\n  </li>\n</ol>\n\n<strong>Primero: </strong>\n<ol>\n  <li>\n    ¿Cuáles valores y conceptos aceptó el autor y cuales rechazó?\n    <strong>Anota</strong>\n  </li>\n  <li>\n    ¿Por cuáles razones acepta o rechaza una creencia cultural?\n    <strong>Anota</strong>\n  </li>\n</ol>\n\n<strong>Segundo: </strong>\n<ol>\n  <li>\n    ¿Qué conceptos, ideas y valores colocó en lugar de estos?\n    <strong>Anota</strong>\n  </li>\n  <li>\n    ¿Cómo lo hizo?\n    <strong>Anota</strong>\n  </li>\n</ol>\n\n<strong>Preguntas para estudio bíblico</strong>\n<ol>\n  <li>\n    ¿Cuáles son las creencias que el autor rechaza o acepta en el texto?\n  </li>\n  <li>\n    ¿Cuál es la relación entre estas creencias y lo que nosotros creemos?\n  </li>\n  <li>\n    ¿Cuáles son las implicaciones del autor sobre nuestra manera de vivir?\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/evaluacion-texto-original/evaluacion-texto-original.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/evaluacion-texto-original/evaluacion-texto-original.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Literatura</span> </h2>\n<h3>Paso 4. Evaluación del texto original</h3>\n<p>\n  <strong>META: </strong>Establecer el texto en español más cercano al texto\n  original. Por lo general se han tomado los textos más antiguos como los\n  más auténticos\n</p>\n<strong>Observaciones: </strong>\n<p>\n  1. Tenemos que preguntar si los textos antiguos tenían alguna razón para\n  no haberse usado, o sea que, si la iglesia no los usaba por cierta\n  contaminación de las herejías que estaban luchando contra el cristianismo\n  de aquella época\n</p>\n<p>\n  2. Los textos más antiguos procedan generalmente de las regiones\n  desérticas porque allí la humedad no destruye tan rápido el papel. Por lo\n  general los cristianos que se retiraban al desierto no eran los cristianos\n  más comunes\n</p>\n<p>\n  3. Con base en estos hechos y otros más, quizás el Textus Receptus es el\n  mejor texto que tenemos.\n</p>\n<p>\n  4. Tenemos que repensar nuestra posición con respecto a la crítica del\n  texto Bíblico.\n</p>\n\n<p>\n  Hay ocasiones en que una glosa ha sido agregada al texto. Una glosa es un\n  comentario para aclarar el significado del texto. Generalmente se ha\n  definido una glosa como una variación en el texto con respecto a las\n  copias más antiguas que tenemos. Entonces uno puede leer diferentes\n  versiones de la Biblia y descubrir si todas las versiones se leen igual, o\n  si una versión más moderna deja fuera parte del texto. Este procedimiento\n  también sirve para verificar la traducción de las palabras claves.\n</p>\n\n<p>\n  Una segunda manera de evaluar el texto es la de usar el “Aparato Crítico\n  Textual” sobre los textos en griego o en hebreo.\n</p>\n<p>\n  Cuando se escribió el N.T. no había imprenta y los textos se copiaban a\n  mano. Con el tiempo llegaron a ser muchos manuscritos copiados de los\n  originales. Dado que el hombre no está exento del error hay variación en\n  los textos. Hoy tenemos mas de 5,000 manuscritos con cierta variación. Con\n  estudios se han investigado los manuscritos para determinar el mejor\n  texto, puesto que no tenemos los originales debemos notar que las\n  variaciones que hay no cambian ninguna doctrina. Generalmente son\n  omisiones por error humano o notas explicativas (glosas)\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/figuras-diccion/figuras-diccion.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/figuras-diccion/figuras-diccion.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Literatura</span> </h2>\n<h3>Paso 5. Figuras de dicción</h3>\n<p>\n  <strong>Meta: </strong>Identificar los símbolos empleados por el autor en\n  el texto y saber que representa cada uno.\n</p>\n<p>\n  Un símbolo es cualquier cosa que representa otra que no es su valor\n  normal. Los símbolos pueden ser usados para revelar la verdad o para\n  esconderla. Debemos tener mucho cuidado de no ver símbolos donde no los\n  hay, o de no verlos cuando realmente están allí. La Biblia frecuentemente\n  no nos identifica sus símbolos, lo que implica que tenemos que manejarlos\n  con mucho cuidado.\n</p>\n<p>\n  1. Conozca las formas simbólicas de hablar. Aquí hay una lista de algunas\n  formas comunes como: Metáforas, símil, metonimia, sinécdoque, ironía,\n  hipérbole, apostrofe, personificación, eufemismo, paradoja, juego de\n  palabras, expresiones numéricas, etc.\n</p>\n<p>\n  <strong>LECTURA DIDACTICA:</strong>Es posible que necesites consultar una\n  gramática u otro libro de referencia para conocer las formas simbólicas\n  del idioma.\n</p>\n<p>2. Estudia la manera en que la Biblia misma interpreta sus símbolos.</p>\n<p>\n  3. Cuando estas estudiando objetos naturales, toma en cuenta sus\n  características naturales.\n</p>\n<p>4. Estudia el Contexto.</p>\n<p>\n  5. Evita especulaciones o significados arbitrarios que provienen de tu\n  propia cabeza y no de las Escrituras.\n</p>\n\n<strong>Preguntas para estudio bíblico: </strong>\n<ol>\n  <li>¿Cuales son los símbolos que encontramos en este texto? Márcalos</li>\n  <li>¿Por qué‚ usa el autor símbolos para comunicar su mensaje?</li>\n  <li>¿Cuál es el significado del símbolo que el autor usa?</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/filosofia/filosofia.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/filosofia/filosofia.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\n<h3>Paso 7: La filosofía</h3>\n<p><strong>META: </strong> Encontrar las maneras de pensar de la gente del mundo bíblico para poder entender el mensaje\n  que fue escrito a ellos. </p>\n\n<p>1. En el Nuevo Testamento ya empieza un contacto con la filosofía griega. Es importante conocer las corrientes de la\n  filosofía griega para entender algunos pasajes correctamente. Tenemos que buscar cual fue el sistema de doctrina que\n  ellas enseñaban para poder leer correctamente el texto. Pablo al estar dando su sermón suponía que sus oyentes estaban\n  familiarizados con estas doctrinas. </p>\n<p>2. También encontramos situaciones en que no se menciona por nombre una postura filosófica, sino que solamente se\n  presenta la doctrina. Hay mucho en el Nuevo Testamento acerca de los gnósticos, sin mencionar la escuela por nombre.\n  Al mencionar una doctrina, todas las demás doctrinas estarán en la mente de los lectores originales. Tenemos que\n  pensar como los destinatarios si vamos a comprender correctamente los escritos bíblicos. </p>\n<p>3. Aparte de las escuelas formales de pensamiento, hay también explicaciones de la vida. Maneras de pensar de cómo\n  funcionaban las cosas. Razones por las cuales las gentes hacían las cosas de la vida. </p>\n<strong>PREGUNTAS PARA UN ESTUDIO BIBLICO:</strong>\n<ol>\n  <li> ¿Qué Filosofías identificas? </li>\n</ol>\n<p>Hacer una lista en tu Libreta con una breve explicación.</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/formulas-expresion/formulas-expresion.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/formulas-expresion/formulas-expresion.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Literatura</span> </h2>\n<h3>Paso 2 Formulas de expresión</h3>\n<p>\n  <strong>Meta: </strong>Que el alumno note las diferentes formas o\n  formularios que se usan en el texto bíblico y cómo influyen en la\n  interpretación.\n</p>\n<p>\n  Aparte del estilo literario, el autor puede estar usando una formula. Para\n  entender su escritura tenemos que descubrir la formula, haciendo preguntas\n  propias a las intenciones del autor.\n</p>\n<p>Hay formulas para cartas, pactos, poesía, sermones, profecías, etc</p>\n<p>Carta o epístolas</p>\n<ol>\n  <li>Salutación</li>\n  <li>Acción de gracias</li>\n  <li>Cuerpo</li>\n  <li>Exhortaciones morales</li>\n  <li>Salutación y Bendición</li>\n</ol>\n<strong>Preguntas para estudio bíblico</strong>\n<ol>\n  <li>¿Existe en nuestro texto una fórmula que está siguiendo el autor?</li>\n  <li>\n    ¿Cómo nos ayuda entender el texto, el tener conocimiento de esta\n    fórmula?\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/frecuencia-uso/frecuencia-uso.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/frecuencia-uso/frecuencia-uso.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\n<h3>Paso 7: Frecuencia del uso</h3>\n<p>\n  <strong>META:</strong>Saber dónde se encuentra desarrollado el concepto\n  bíblico relacionado con una palabra.\n</p>\n<p>\n  Es importante para hacer este paso que tengas una concordancia a la mano\n  (de preferencia una que trate de los idiomas originales). Para definir una\n  palabra:\n</p>\n<ol>\n  <li>\n    Estudia el pasaje dónde es usada la palabra en la Biblia por primera\n    vez.\n  </li>\n  <li>\n    Usa pasajes donde haya un uso frecuente de la palabra. En ambos casos\n    examina cuidadosamente como el contexto da luz a la definición de la\n    palabra de interés.\n  </li>\n</ol>\n<strong>Preguntas para un estudio bíblico</strong>\n<ol>\n  <li>\n    ¿Cuales son los lugares en la Biblia donde se usa ésta palabra con mucha\n    frecuencia? <strong>Anota</strong>\n  </li>\n  <li>¿Hay una definición clara de la palabra?</li>\n  <li>\n    ¿Cuáles son las palabras que se relacionan con la que estamos\n    estudiando?\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/genero/genero.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/genero/genero.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Literatura</span> </h2>\n<h3>Paso 1 Género Literario</h3>\n<p>\n  <strong>Meta: </strong>Que el alumno pueda distinguir el género literario\n  y la forma en que influye en la interpretación.\n</p>\n\n<p>\n  Hay diferentes géneros literarios. Si alguien está leyendo un poema se\n  espera que lo interprete en una forma muy distinta que si estuviera\n  leyendo un discurso de la ley. De la misma manera, hay diferentes géneros\n  de literatura en la Biblia. Para poder entender bien tenemos que\n  interpretar un escrito según la forma literaria en que el autor estaba\n  escribiendo.\n</p>\n\n<strong>Preguntas para estudio bíblico: </strong>\n<ol>\n  <li>\n    ¿Cuál es la forma de literatura que el autor está usando para comunicar\n    su mensaje?\n  </li>\n  <li>\n    ¿Encuentra un tipo de expresión especial (símbolos o figuras) o una\n    forma especial (el uso de una fórmula para organizar el material)?\n  </li>\n</ol>\n<p>\n  Una vez que hemos identificado el estilo literario tenemos que buscar las\n  normas para este estilo de literatura. No podemos aplicar las mismas\n  reglas de interpretación a todos los géneros de literatura. Algunos\n  géneros son mucho más simbólicos que otros. Otros géneros están basados en\n  una realidad histórica y no llevan tanto simbolismo.\n</p>\n<p>\n  Los géneros más sobresalientes en la Biblia por su cambio en la manera de\n  interpretarlos son:\n</p>\n<h4>A. Narrativo</h4>\n<ol>\n  <li>\n    Las historias bíblicas son una invitación de compartir una experiencia,\n    tan vivida y concretamente como sea posible, con los personajes de la\n    historia.\n  </li>\n  <li>\n    Pon atención a cada detalle de la situación puesto en la historia, y aun\n    la situación tiene un papel importante, analiza como contribuye a la\n    historia.\n    <ol type=\"a\">\n      <li>Descripción directa</li>\n      <li>Respuestas de otros personajes</li>\n      <li>Las palabras y pensamientos de los personajes</li>\n      <li>\n        Auto-caracterización e. Las acciones como un clave al carácter\n      </li>\n    </ol>\n  </li>\n  <li>\n    Ponga atención a cada detalle para poder conocer los personajes lo mejor\n    posible.\n  </li>\n  <li>\n    Identifica la naturaleza de los conflictos en la historia, observando su\n    desarrollo y su resolución final.\n  </li>\n  <li>\n    Analiza exactamente como la narración genera interés, curiosidad, o\n    suspenso. El acercamiento LITERARIO es un intento de dar una lección\n    universal, lo que sucede cuando..., en cambio el acercamiento HISTORICO\n    es un intento de expresar lo que ocurrió una vez, lo que sucedió ....\n    Noten bien que estos dos acercamientos pueden presentar la verdad, pero\n    la interpretación y función de esa verdad es muy diferente.\n  </li>\n  <li>\n    Toma la experiencia de los protagonistas como una declaración\n    significativo de la vida humana y los valores\n  </li>\n  <li>\n    Analiza en detalle la unidad de la historia, observando cómo cada\n    episodio se relaciona al armazón general, y como los episodios se\n    relacionan uno con el otro en el desarrollo de la historia.\n  </li>\n  <li>\n    Identifica la naturaleza de las pruebas que los protagonistas\n    experimentan o las elecciones que hagan, observando como la historia\n    está estructurado alrededor de estas pruebas o elecciones y observando\n    como las temas principales están relacionadas a la prueba o elección.\n  </li>\n  <li>\n    Ponga atención a cambios que ocurren entre el principio y el final de la\n    historia, observando las formas precias en que los caracteres cambian,\n    las causas de estos cambios y transformaciones.\n  </li>\n  <li>\n    Ponga atención a la presencia de mecanismos literarios como de FOILS\n    (personaje que contrasta con otro), ironía dramática, justicia poética\n    en la narración bíblica, etc.\n    <p>Considerar los 3 grandes asuntos de la vida:</p>\n    <ol type=\"a\">\n      <li>Realidad: ¿Que es lo que realmente existe?</li>\n      <li>Moralidad: ¿En qué consiste la conducta buena y mala?</li>\n      <li>\n        Valores: ¿Que es lo que realmente es importante, y que es más\n        importante?\n      </li>\n    </ol>\n    <p>\n      Las historias bíblicas hacen estas aseveraciones, no directamente,\n      pero indirectamente.\n    </p>\n  </li>\n  <li>\n    Busca las aseveraciones acerca de la realidad, moralidad, o valor\n    implícitos en la historia.\n  </li>\n  <li>\n    Toma la repetición y énfasis como claves que indican el tema (realidad,\n    moralidad, o valor) que la historia está tratando de presentar.\n  </li>\n  <li>\n    Ve la conclusión como un comentario implícito acerca de (una evaluación\n    de) los personajes y los eventos que la historia ha presentado.\n  </li>\n  <p>\n    Dentro de lo que llamamos narración tenemos diferentes sub-géneros de\n    literatura que necesitan atención particular:\n  </p>\n\n  <p>\n    A. NARRACION HEROICA Las narraciones heroicas estar basados en los\n    episodios de un protagonista. El verdadero héroe es una expresión de lo\n    bueno social y moralmente. En el sentido real Dios es el único héroe de\n    la Biblia. Los hombres están presentados con defectos morales y severas\n    limitaciones en su capacidad como hombres para resolver los problemas.\n  </p>\n  <p>\n    B. NARRACION EPICA Incluye tanto como sea posible. Una historia de todas\n    las cosas. Tiene un héroe que da unidad a la historia, tiene un\n    conflicto central que consiste en ganar una batalla y establecer un\n    reino. Un ejemplo bíblico es el Pentateuco - la formación de la nación\n    bajo la dirección y liderazgo de Dios. El Apocalipsis también nos\n    presenta una épica.\n  </p>\n  <p>\n    C. NARRACION COMICA No es humor, sino la historia con un final feliz.\n    Una historia en la forma de \"U\", por ejemplo, prosperidad, pobreza,\n    prosperidad o felicidad, tristeza, felicidad.\n  </p>\n  <p>\n    D. NARRACION TRAGICA Una historia de una calamidad excepcional, un\n    movimiento de prosperidad a catástrofe. Un cambio de fortuna. La\n    tragedia se concentra en lo que más tememos y queremos evitar - la\n    destrucción potencial del mal.\n  </p>\n</ol>\n<h4>B. Legislativo (Ley)</h4>\n<h4>C. Didactco (Enseñanza)</h4>\n<h4>D. Drama (Job)</h4>\n<h4>E Poetico (Salmos)</h4>\n<h4>F. El Proverbio</h4>\n<h4>G. Las parabolas</h4>\n<h4>H. Epistolar</h4>\n<h4>I. Apocaliptico</h4>\n<p>\n  Estos no son todos los géneros que encontramos en la Biblia. Debemos\n  identificar el estilo que se está usando en nuestro texto para poder\n  interpretarlo correctamente.\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/geografia/geografia.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/geografia/geografia.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\n<h3>Paso 8: La geografía</h3>\n<p><strong>META: </strong> Descubrir los lugares que menciona el texto y sus connotaciones para la gente de aquél tiempo\n  para entender mejor el mensaje. </p>\n<p>Localiza cada lugar en un mapa y dibújalo en tu libreta. </p>\n<strong>PREGUNTAS PARA UN ESTUDIO BÍBLICO: </strong>\n<ol>\n  <li>¿Dónde vivía la gente? </li>\n  <li>¿Cómo habla el texto de la geografía?</li>\n  <li>¿Cómo influía la geografía en el pensamiento de la gente?</li>\n  <li>¿Tenía la geografía un sentido religioso?</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/historia/historia.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/historia/historia.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\n<h3>Paso 3: La historia</h3>\n<p><strong>META: </strong>Conocer la historia de los lugares, y personajes que intervienen la obra que estudiamos.\n  Tratamos de conocer esta historia no por los datos que contiene sino por la manera en que influye el autor en su\n  comunicación. La Historia es el archivo de los eventos, hechos por los hombres e interpretados. No hay una historia\n  que no sea una interpretación porque no tenemos los eventos mismos archivados. La Biblia en un sentido es historia. Es\n  la interpretación de Dios de ciertos eventos divinos y humanos. La Biblia es la interpretación autorizada de estos\n  eventos. Las otras historias que se relacionan con la Biblia no están autorizadas, y por lo tanto tienen que ser\n  tomadas con un grado menor de confiabilidad. La historia no bíblica tiene valor para llenar el cuadro que no se ve en\n  los datos que nos proporciona la Biblia.</p>\n<strong>Pregunta para un estudio bíblico</strong>\n<ol>\n  <li>¿Cuáles fueron las circunstancias históricas generales que influenciaban o dieron esperanza a la gente en el\n    texto? <strong>Anota en tu libreta.</strong> </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/ideas/ideas.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/ideas/ideas.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Sintaxis</span> </h2>\n<h3>Paso 3. Identificación de las ideas</h3>\n<p>\n  <strong>Meta: </strong>Identificar los conceptos afines y opuestos y cómo\n  contribuyen a la comprensión del texto.\n</p>\n<p>\n  1. CONFECCIONA UNA LISTA EN TU LIBRETA DE LOS CONCEPTOS AFINES QUE SE\n  REPITEN. (Y a tu juicio cuáles son de importancia para el autor).\n</p>\n\n<strong>Preguntas para un estudio bíblico: </strong>\n<ol>\n  <li>¿Cuáles son los conceptos que se repiten en este pasaje?</li>\n  <li>.¿Cuáles son los sinónimos e ideas afines que se presentan?</li>\n</ol>\n\n<p>\n  2. TRATA DE ENCONTRAR LOS CONTRASTES QUE SE PRESENTAN. (Antónimos y/o\n  comparaciones). En la Biblia, particularmente en el AT el método de\n  enseñanza es por comparaciones y contrastes. Aun en el NT se usa este\n  modelo.\n</p>\n<strong>Preguntas para un estudio bíblico: </strong>\n<ol>\n  <li>¿Cuáles son los contrastes que el autor está presentando aquí?</li>\n  <li>¿Nos da luz para entender su tema?</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/identificacion-cultura/identificacion-cultura.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/identificacion-cultura/identificacion-cultura.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Interno</span> </h2>\n<h3>Paso 5. Identificación de la Cultura.</h3>\n<p>\n  <strong>META: </strong> Identificar el contexto cultural para poder\n  interpretar adecuadamente el texto bíblico. La Biblia está llena de muchos\n  detalles culturales.\n</p>\n\n<p>\n  Cultura es el total del sistemas de creencias, costumbres, idiomas,\n  rituales, etc. que una comunidad, grupo o nación, adoptan para poder\n  sobrevivir y poder explicarse el universo a sí mismos. No es\n  necesariamente una creencia coherente o relacionada con una verdad sino la\n  creencia misma. Y según Romanos 1:18ss puede impedir que la gente logre\n  entender la verdad y la justicia de Dios.\n</p>\n\n<p>\n  La cultura sirve como portador de las ideas, o como el medio de\n  comunicación. No tenemos comunicación sin cultura. La cultura bíblica no\n  es igual a la nuestra (mexicana etc.). Entonces para asegurar la\n  comunicación, necesitamos identificar la cultura original tanto como\n  podamos.\n</p>\n\n<p>\n  Lee todo el libro para identificar los valores culturales, los conceptos e\n  imágenes que son aludidos en el libro, que reflejan la cultura de origen\n  de mayor peso o influencia. Debemos darnos cuenta que hay varias culturas\n  que influyen en el texto bíblico (Egipcia, Persa, Meda, Hitita, Griega,\n  Romana, Cananea, Filistea, etc.). Trataremos de limitamos a los datos que\n  están dentro del texto y no a las explicaciones formales que se hallan en\n  otros libros de consulta.\n</p>\n\n<p>\n  <strong>Primero: </strong> El autor hace referencias a maneras de vivir\n  (conducta) en el mundo hebreo, griego, etc. ¿Cuáles eran?\n  <strong>Anota en tu libreta.</strong>\n</p>\n<p>\n  <strong>Segundo:</strong> El autor hace mención de las autoridades\n  (personas y legales) que influyeron las personas en el discurso bíblico.\n  ¿Cuáles eran?\n  <strong>Anota</strong>\n</p>\n<p>\n  <strong>Tercero: </strong> El autor menciona la experiencia individual de\n  las personas mencionadas en el texto bíblico. ¿Cuáles eran? Anota\n  <strong>Anota</strong>\n</p>\n<p>\n  <strong>Cuarto: </strong> El autor hace referencia a valores, ideas o\n  creencias que nacen de la cultura, y son mencionados por famosos\n  escritores del mundo antiguo. ¿Cuáles eran estos?\n  <strong>Anota en tu Libreta</strong>\n</p>\n\n<strong>Preguntas para estudio bíblico</strong>\n<ol>\n  <li>\n    ¿Cuáles rasgos culturales podemos hallar en el pasaje?\n    <strong>Anota</strong>\n  </li>\n  <li>\n    ¿Cuál era la forma de persuadir a los lectores de la verdad deseada?\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/intencion-autor/intencion-autor.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/intencion-autor/intencion-autor.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Sintaxis</span> </h2>\n<h3>Paso 1. La intención del autor:</h3>\n<p>\n  El hecho de que un libro tiene un argumento implica que haya una sola\n  intención. No podemos organizar el trabajo del autor hasta que encontremos\n  su intención. Tampoco podemos hacer la interpretación de un párrafo, hasta\n  que descubramos la intención general y la relación del párrafo con la\n  intención general.\n</p>\n\n<p>\n  <strong>Meta: </strong>Identificar la intención del autor en el LIBRO y\n  cada párrafo (perícopa) que estudiamos.\n</p>\n\n<p>\n  <strong>Intenciones: </strong>Cada libro tiene una propia (el pensamiento\n  articulado del autor sobre muchos temas de importancia).\n</p>\n\n<ol type=\"A\">\n  <li>\n    Cuando el autor ha declarado su propósito. Ejemplo: Juan 20:30-31.\n  </li>\n  <li>Cuando el autor no ha declarado su propósito:</li>\n</ol>\n\n<strong>\n  Esperar hasta hacer el paso 10 de contexto externo en lugar de este paso.\n</strong>\n\n<strong>Instrucciones: </strong>\n<p>\n  \"OBSERVA EL PROPOSITO DEL AUTOR PARA EL LIBRO ENTERO\"\n</p>\n\n<strong>Pregunta para un estudio bíblico: </strong>\n<ul>\n  <li>\n    ¿Cuál fue el propósito del autor al escribir este libro y cada párrafo?\n  </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/intencion-parrafo/intencion-parrafo.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/intencion-parrafo/intencion-parrafo.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Sintaxis</span> </h2>\n<h3>Paso 4. La intención del párrafo</h3>\n<p>\n  <strong>Meta: </strong>Identificar la intención del autor en los PARRAFOS\n  que estudiamos.\n</p>\n\n<p>\n  Lee todo el párrafo (perícopa) para identificar los conceptos e ideas\n  centrales del autor, es decir sus INTENCIONES. Cada PARRAFO tiene su\n  propio propósito ideológico (el pensamiento articulado del autor sobre UN\n  TEMA determinado de mucha importancia).\n</p>\n\n<strong>Instrucciónes: </strong>\n<ol>\n  <li>\"OBSERVA EL PROPOSITO DEL AUTOR PARA EL PARRAFO</li>\n  <li>SUBRAYA EL TEMA QUE HAS ENCONTRADO.</li>\n</ol>\n\n<p>\n  Debe ser muy similar al tema que encontraste en paso 2 de CONTEXTO\n  INTERNO. Revisa el titulo que pusiste para ver si corresponde al tema que\n  ya has identificado.\n</p>\n<strong>Pregunta para un estudio biblico: </strong>\n<ul>\n  <li>\n    ¿Cuál fue el propósito del autor al escribir este PARRAFO?\n  </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/lexico/lexico.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/lexico/lexico.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\n<h3>Paso 2: El Léxico del idioma original</h3>\n<p>\n  <strong>META:</strong>Conocer el significado y uso de las palabras\n  empleadas en el idioma original.\n</p>\n<ol>\n  <li>\n    Identifica el significado de la palabra en el texto original Hebreo o\n    Griego\n  </li>\n  <li>\n    Observa que aun en los idiomas originales muchas palabras claves y\n    normales tienen varios sentidos, por ejemplo: fe, hermano, carne, etc...\n  </li>\n</ol>\n<p>\n  Para poder usar un léxico es indispensable saber el abecedario del idiom\n  que se está investigando. \"Usando los léxicos de los idiomas originales se\n  determina el rango semántico (es decir, todos los significados que vienen\n  en el léxico) de la palabra, poniendo atención a las distinciones entre\n  las acepciones y los equivalentes de traducción. Este paso le dará las\n  opciones al exégeta”\n</p>\n\n<strong>Preguntas para un estudio bíblico: (Avanzado)</strong>\n<ol>\n  <li>\n    ¿Cuáles son las palabras en el idioma original que expresan las ideas\n    principales?\n  </li>\n  <li>¿Cuáles son su rango de significado?</li>\n  <li>\n    ¿Cuál es el sentido que nos dan para entender mejor el concepto o\n    significado que estamos investigando?\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/libro-mismo/libro-mismo.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/libro-mismo/libro-mismo.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Interno</span> </h2>\n<h3>Paso 1. El contexto desde el libro mismo.</h3>\n\n<p>\n  Para llegar a comprender mejor un libro o párrafo, especialmente de la\n  Biblia, es necesario leerlos varias veces y después leerlos una vez más,\n  pero en voz alta.\n</p>\n\n<strong>Objetivo</strong>\n<p>\n  Entender a grandes rasgos la intención del autor y tener una visión\n  panorámica del texto Bíblico.\n</p>\n\n<ol>\n  <li>\n    Lee a “vuelo de pájaro” toda la unidad. ¿Cuáles son tus impresiones\n    generales?\n  </li>\n  <li>\n    Lee otra vez la unidad, notando el flujo general de acciones o ideas.\n    ¿Cuál parece ser el tema?\n  </li>\n  <li>\n    Haz preguntas generales para entender panorámicamente el texto. (Por\n    ahora evita hacer preguntas específicas, los detalles vienen después.\n    No hagas preguntas especulativas, de aplicación, ni irrelevantes.\n    Anota las preguntas generales en una libreta).\n  </li>\n  <li>\n    No tomes tiempo para contestar estas preguntas en este momento. Al\n    igual que las secciones y los títulos, tus preguntas son\n    provisionales, aunque importantes para ayudarte a seguir investigando\n    en el texto..\n  </li>\n</ol>\n\n<strong>Preguntas para estudio bíblico</strong>\n<ol>\n  <li>¿Cómo se sintió el autor al escribir?</li>\n  <li>\n    ¿Cómo hubieras respondido si fueras uno de los primeros destinatarios?\n  </li>\n  <li>¿Cuáles son los temas principales?</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/modismos/modismos.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/modismos/modismos.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Literatura</span> </h2>\n<h3>Paso 6. Modismos</h3>\n<p>\n  <strong>Meta: </strong>Identificar las expresiones o ideas manejadas por\n  el autor en el texto que reflejan valores culturales y saber cuál es su\n  significado o sentido en español.\n</p>\n\n<p>\n  Un modismo es una manera de expresarse en un idioma lo que no es\n  simbólico, ni la manera más formal de llamar una cosa. Los modismos\n  reflejan los valores culturales y la red de ideas. En general la expresión\n  por sí misma no tiene nada que ver con lo que dice textualmente.\n</p>\n\n<p>\n  \"Modismo (de modo): Modo particular de hablar, propio o privativo de una\n  lengua, que suele apartarse de las reglas generales de la gramática.\"\n</p>\n<p>\n  En algunos casos, es muy difícil separar un modismo de un simbolismo. De\n  hecho los modismos nacen de la forma simbólica de hablar.\n</p>\n<p>\n  Lee todo el libro para identificar la manera en que el autor enfoca los\n  conceptos, valores, o creencias e imágenes del medio ambiente y su\n  respuesta a ellas.\n</p>\n<p>\n  Identifica todos los modismos que usa el autor y define su sentido en\n  español. Márcalos en tu Libreta.\n</p>\n\n<strong>Preguntas para estudio bíblico: </strong>\n<ol>\n  <li>¿Hay modismos en el pasaje?</li>\n  <li>¿Cuál es el significado de estos modismo?</li>\n  <li>¿Cómo decimos nosotros esta idea en nuestro lenguaje común?</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/pasaje-tema/pasaje-tema.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/pasaje-tema/pasaje-tema.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Sintaxis</span> </h2>\n<h3>Paso 6. El tema del libro (Segundo Esquema: TEMAS)</h3>\n<p>\n  <strong>META: </strong> Identificar los temas que tienen relación\n  inmediata con el texto (antes y después), y explicar cuál es la conexión\n  entre ellos. Esquematizar la relación entre estas ideas para ayudarnos a\n  la comprensión y la enseñanza de los temas.\n</p>\n\n<p>\n  Escribe todos los temas centrales y haz un esquema (segundo esquema) que\n  muestre la relación que hay en cada uno, de la misma manera que hiciste la\n  relación en el párrafo.\n</p>\n\n<p>\n  La relación del tema del párrafo que estás estudiando con los otros\n  párrafos inmediatamente alrededor del, es más importante que la relación\n  con otros párrafos más lejos en el escrito. Debes concentrarte más en la\n  relación de la subsunción del libro donde se encuentra el párrafo que\n  estudias que en todos los párrafos del libro entero.\n</p>\n\n<strong>NOTA: </strong>\n<ol>\n  <li>Un libro puede tener varios temas.</li>\n  <li>\n    Fíjate en la siguiente relación:\n    <ul>\n      <li>El tema del libro</li>\n      <li>El tema de la primera sección (si se desarrollan los temas).</li>\n      <li>El tema de la subsección A (no se desarrollan os temas)</li>\n      <li>El tema de la subsección B (no se desarrollan los temas).</li>\n      <li>El tema de la subsección C (si se desarrollan los temas).</li>\n      <li>El tema de mi párrafo de estudio.</li>\n      <li>El tema de los otros párrafos en la misma subsección.</li>\n      <li>El tema de la subsección D (no se desarrollan los temas).</li>\n      <li>El tema de la segunda sección (no se desarrollan los temas).</li>\n    </ul>\n  </li>\n</ol>\n\n<p>\n  Es importante que traces el tema del párrafo de estudio hasta que se vea\n  la manera en que se apoya el tema del libro entero o por lo menos como\n  apoya el tema de la sección en donde te encuentras.\n</p>\n<strong>NOTEN BIEN: </strong>\n<p>\n  No todos los libros tienen la misma estructura. En seguida presentamos\n  algunas de las relaciones que hay:\n</p>\n<ol>\n  <li>Ejemplo: relación de block. a. + b. + c (ROMANOS)</li>\n  <li>Ejemplo: relación de cadena. ab + bc + cd (SANTIAGO)</li>\n  <li>\n    Ejemplo: relación parentética. a (aplicación) + b (aplicación) + c\n    (aplicación) (HEBREOS)\n  </li>\n</ol>\n\n<p>\n  3. En algunos casos como Salmos y Proverbios no existe una relación del\n  tema general del libro por la naturaleza de la colección.\n</p>\n<strong>NOTEN BIEN: </strong>\n<p>\n  Esto debe verse como el esquema de Sintaxis de un párrafo, pero solamente\n  debe contener los temas de cada párrafo como contenido.\n</p>\n<strong>Pregunta para un estudio bìblico</strong>\n<ol>\n  <li>\n    ¿Cuál es la relación entre el tema de este párrafo y el tema del libro\n    entero?\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/patrones-retorica/patrones-retorica.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/patrones-retorica/patrones-retorica.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Literatura</span> </h2>\n<h3>Paso 3 Patrones de retórica</h3>\n<p>\n  <strong>META:</strong>Que el alumno pueda detectar los patrones de\n  retórica que se presentan en la Biblia y su influencia en la\n  interpretación.\n</p>\n<ol type=\"A\">\n  <li>Comparación o contraste</li>\n  <li>Repetición</li>\n  <li>Continuidad</li>\n  <li>Clímax</li>\n  <li>Encrucijadas</li>\n  <li>Intercambio</li>\n  <li>Particularización</li>\n  <li>Generalización</li>\n  <li>Causa y Efecto.</li>\n  <li>Sustanciación</li>\n  <li>Radiación</li>\n  <li>Progresión</li>\n</ol>\n<p>Y hay más</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/patrones-semanticos/patrones-semanticos.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/patrones-semanticos/patrones-semanticos.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\n<h3>\n  Paso 5: Categorías de patrones semánticos\n  <div>Polisenia y Sinónimos</div>\n</h3>\n<p>\n  <strong>META:</strong>Poder identificar otras definiciones de la misma\n  palabra y sus sinónimos.\n</p>\n<p>\n  Considera las relaciones dogmáticas del término. Usando obras acerca de\n  sinonimia, y otras ayudas léxicas, determina la oposición del término a\n  temas relacionados haciendo una clasificación como se ha mencionado.\n</p>\n<p>\n  <strong>Polisemia:</strong>Cuando una palabra tiene más de un solo\n  significado. Es común que una palabra tenga más de un solo significado.\n  Casi todas las palabras en el diccionario tienen varias acepciones.\n</p>\n<p>\n  En cada idioma cada palabra tiene su red de relaciones que le dan su\n  definición. Si examinamos esta lista de definiciones encontramos que no\n  corresponde exactamente a una palabra o red de ideas que existen en\n  español. Esto hace difícil la traducción de palabras de un idioma a otro,\n  porque en la traducción no se incluyen la misma red y relación de ideas.\n</p>\n<p>\n  Busca en una concordancia greco-española del Nuevo Testamento las palabras\n  españolas que son traducciones de la misma palabra griega que estas\n  investigando.\n</p>\n<p>\n  <strong>Sinónimos:</strong> cuando dos palabras tienen el mismo\n  significado.\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/politica/politica.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/politica/politica.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\n<h3>Paso 6: La política</h3>\n<p><strong>META: </strong> Descubrir los hechos políticos que influyen el mensaje de los escritos de la Biblia.</p>\n<p>De vez en cuando la Biblia menciona la política formal de las naciones de su tiempo. David era rey. Tenía ciertas\n  políticas que están mencionadas en la Biblia. A veces éstos hechos son importantes para ponerse en un contexto\n  político si entendemos el texto. No sólo en el Antiguo Testamento encontramos estos detalles, sino también en el Nuevo\n  Testamento. </p>\n<strong>PREGUNTAS PARA UN ESTUDIO BIBLICO: </strong>\n<ol>\n  <li>¿A quién se testificaba? </li>\n  <li>¿Quiénes eran los gobernantes.?</li>\n  <li>¿Cuáles eran sus políticas? </li>\n  <li>¿Sobre qué área geográfica gobernaban? </li>\n  <li>¿Sus gobiernos eran independientes o dependían de otros? </li>\n  <li>¿El pueblo en cuestión era esclavo o libre? </li>\n</ol>\n<strong>Anota en tu Libreta </strong>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/preposiciones/preposiciones.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/preposiciones/preposiciones.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Gramatica</span></h2>\n<h3>Paso 3 Preposiciones y Conjunciones</h3>\n<p>\n  <strong>META: </strong>Identificar los elementos de enlace de las palabras y\n  los elementos de enlace de las oraciones.\n</p>\n<h4><strong>Preoposiciones</strong></h4>\n<p>\n  \"Las preposiciones y las conjunciones son palabras que funcionan como\n  elementos de enlace. Por lo general, la preposición une o coordina palabras, y\n  la conjunción, coordina oraciones.\"\"\n</p>\n<p>\n  Las preposiciones son las palabras que indican un tipo de relación entre\n  conceptos o cosas. Las preposiciones en español son solamente 19:\n</p>\n<p>\n  a, ante, bajo, cabe, con, contra, de, desde, en, entre, hacia, hasta, para,\n  por, según, sin, so, sobre, tras.\n</p>\n<p>\n  Estas palabras son muy importantes para la comprensión adecuada del texto\n  bíblico.\n</p>\n<p>\n  <strong>Ejemplo: </strong>Gálatas 2:20 habla de la “fe del hijo de Dios.” Esta\n  frase puede tener cuatro significados diferentes. Explica los diferentes\n  significados cuando el significado de la preposición se cambia:\n</p>\n<ol>\n  <li>fe DE Cristo</li>\n  <li>fe POR Cristo</li>\n  <li>fe EN Cristo</li>\n  <li>fe COMO Cristo</li>\n  <li>fe PARA Cristo</li>\n</ol>\n<p><strong>EJEMPLO: </strong>Jesús murió por mí:</p>\n<p>Jesús murió a mi favor. o Jesús murió en mi lugar</p>\n\n<p>\n  <strong>Observación: </strong> En algunos aspectos la preposición es la mas\n  difícil para tener precisión en un idioma. Es importante estudiar los idiomas\n  originales para tener una comprensión completa.\n</p>\n\n<h4><strong>Conjunciones</strong></h4>\n<p>Hay dos tipos o clases de conjunciones:</p>\n<p>\n  A. Conjunciones coordinantes que unen partes iguales o unen frases de la misma\n  naturaleza.\n</p>\n<p>\n  B. Conjunciones subordinantes que indican una relación de subordinación o\n  dependencia.\n</p>\n\n<p>Las conjunciones muestran las siguientes relaciones:</p>\n<p>\n  A. Conjunciones coordinantes que unen partes iguales o unen frases de la misma\n  naturaleza.\n</p>\n<p>\n  1. <strong>Copulativas</strong>(que une o liga): y, ni, que, así que, a fin de\n  que, con tal que, ya que, luego que, mientras que, en tanto que, por más que,\n  por que, siempre que, a pesar de que, etc.\n</p>\n<p>2. <strong>Disyuntivas</strong>(que separa): o, u, que, ya, ahora, bien.</p>\n<p>\n  3. <strong>Adversativas</strong>(denota oposición): pero, aunque, sino,\n  empero, sin embargo.\n</p>\n<p>\n  4. <strong>Causales</strong>(denota la razón o causa): porque, ya que, pues,\n  puesto que, pues que, supuesto, que, como, como que, etc.\n</p>\n<p>\n  5. <strong>Llativas o Consecutivas</strong>(une o infiere): con que, luego,\n  pues, por lo tanto, por consiguiente,(casi todas son frases).\n</p>\n<p>\n  6. <strong>Condicionales</strong>(condiciona): si, como, con tal que, siempre\n  que, dado que, con tal de que, ya que, asa que, así.\n</p>\n<p>\n  7. <strong>Finales</strong>(denota el fin, objetivo o meta): para que, a fin\n  de que.\n</p>\n<p>\n  8. <strong>Comparativas</strong>(hace una comparación): com, que, así como,\n  cual.\n</p>\n<p>\n  9. <strong>Continuativas</strong> (continuidad): asimismo, ahora bien, pues,\n  cuando, así que, por tanto, por lo tanto, por consiguiente, así pues.\n</p>\n<p>10. <strong>Alternativas</strong></p>\n<p>11. <strong>Exceptivas</strong></p>\n<p>12. <strong>Corroborativas</strong></p>\n<p>13. <strong>Concesivas</strong></p>\n<p>14. <strong>Expletivas</strong></p>\n\n<p>Estas relaciones son claves para hacer el esquema de sintaxis.</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/proposito-libro/proposito-libro.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/proposito-libro/proposito-libro.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\n<h3>Paso 10: Proposito del Libro</h3>\n<p>INFO: Este paso le he cambiado el nombre de intención del autor a proposito del libro ya que \"intención del autor\" se\n  repite en area Sintaxis paso 1</p>\n<p><strong>META: </strong> Comprender el propósito del libro </p>\n<p>Hay ocasiones en que el autor no ha dicho su propósito claramente dentro del texto. Este paso solamente se hace\n  cuando el autor no ha declarado su propósito dentro del texto mismo. Si se ha declarado en el texto, se hace este paso\n  en CONTEXTO INTERNO. Esto no es un problema si su libro es sencillo. Pero cuando su libro es muy complejo es necesario\n  que vayamos a la opinión de otros, quienes están más adelantados es su estudio bíblico.</p>\n<p>Proposito: </p>\n<p>¿Cuál fue la intención/propósito del autor? Anota en tu Libreta. </p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/religion/religion.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/religion/religion.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Contexto Externo</span> </h2>\n<h3>Paso 5: La religión</h3>\n<p><strong>META: </strong>Ya que éstas obras son en principio tratados religiosas, es necesario para su comprensión, un\n  entendimiento del medio religioso. Necesitamos entender el nivel de entrega o la falta de entrega de los destinatarios\n  y la del autor, sus rituales, liturgias, símbolos, etc. para poder comprender correctamente su comunicación. </p>\n<p>La religión, desde la perspectiva bíblica, es lo que más motiva y da coherencia a la vida humana. Es necesario que\n  investigamos a fondo los absolutos de la gente para saber su pensamiento religioso. </p>\n<strong>PREGUNTA PARA UN ESTUDIO BIBLICO: </strong>\n<ol>\n  <li>¿Cuál era la relación y nivel del compromiso con Dios de los destinatarios? </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/semantica-of/semantica-of.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/semantica-of/semantica-of.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\n<h3>Observaciones finales</h3>\n<p>\n  \"Ninguna de estas consideraciones debe ser aplicada mecánicamente. Debemos\n  tomar en cuenta la fluidez del idioma, sus sutilezas, debe dominar nuestro\n  pensamiento desde el principio hasta el fin. Por tanto, no debemos estar\n  molestos cuando la certeza y precisión absoluta se nos escape”. La\n  incertidumbre responsable nos llevara mucho mas hacia el conocimiento que\n  una certeza sin base\n</p>\n<p>\n  2. La decisión final en cuanto al significado de una palabra, debe\n  enfocarse en la conciencia del autor de lo que estaba escribiendo. No\n  podemos suponer que no estaba consciente de lo que estaba escribiendo. La\n  intención fijada por el autor debe determinar nuestra comprensión del\n  texto. De esta manera, parece improbable que el autor hubiera estado\n  consiente o interesado en uno o más de los factores descubiertos por la\n  historia del uso de una palabra, como es la etimología. Tal factor no debe\n  influir nuestra interpretación, a menos que podamos demostrar que influye\n  en la elección de las palabras de parte del autor. Tenemos que admitir que\n  el autor pudo haber usado otros factores en su elección de palabras, como\n  la ambigüedad intención, la elección de un término en contra de sus\n  sinónimos, y neutralizaciones que deben ser puestas en contraposición a la\n  luz de la conclusiones preliminares\n</p>\n\n<p>Ya que has terminado esta area:</p>\n<ol>\n  <li>Regresa al area de <strong>contexto interno</strong></li>\n  <li>\n    Revisa tus <strong>conclusiones</strong> segun la nueva informaciòn que\n    has conseguido\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/semantica-oraciones/semantica-oraciones.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/semantica-oraciones/semantica-oraciones.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\n<h3>Paso 9: Clasificación semántica de las oraciones</h3>\n<p>\n  <strong>META:</strong>Saber la función de las oraciones que conllevan el\n  significado. CLASIFICACION DE LA FUNCION DE LAS ORACIONES\n</p>\n<p>\n  <strong>Función referencial: </strong>oraciones<strong></strong>afirmativa\n  y negativa\n</p>\n<p>\n  <strong>Función emotiva:</strong>oraciones<strong></strong>afirmativa y\n  negativa\n</p>\n<p>\n  <strong>Función apelativa:</strong>oraciones<strong></strong>afirmativa y\n  negativa\n</p>\n<p>\n  <strong>Función imperativa:</strong>oraciones<strong></strong>afirmativa y\n  negativa\n</p>\n<ol>\n  <li>Clasifica los enunciados: indicando su función.</li>\n  <li>\n    Explica como la clasificación de los enunciados nos ayuda a entender el\n    texto que estamos estudiando.\n  </li>\n</ol>\n<strong>Preguntas para un estudio bíblico</strong>\n<ol>\n  <li>\n    ¿Cuál es la función de cada una de las oraciones dentro de nuestro\n    texto?\n  </li>\n  <li>¿Es afirmativa o negativa la oración?</li>\n  <li>\n    ¿Cuáles son las conclusiones que podemos formar con base en la función\n    de la oración para aclarar nuestro texto?\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/sustantivos/sustantivos.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/sustantivos/sustantivos.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Gramatica</span></h2>\n<h3>Paso 1. Sustantivos</h3>\n<p>\n  <strong>META: </strong>Identificar los objetos, personas e ideas que se tratan\n  en el texto y precisar su definición.\n</p>\n<p>\n  El sustantivo tiene la función de nombrar y designar personas, animales y\n  cosas. Se le da el nombre de sustantivo a las palabras que designan seres y\n  cosas que tienen una existencia real e independiente. Muchas veces es el tema\n  de la oración.\n</p>\n<p>\n  Identifica los sustantivos en la unidad de comunicación que estas estudiando.\n  Marcarlos en color azul en tu libreta (TODOS).\n</p>\n<strong>Preguntas para un estudio bíblico:</strong>\n<ol>\n  <li>¿Cuáles son los sustantivos que encontramos en el texto?</li>\n  <li>¿Cuál es su función?</li>\n  <li>¿Qué nos dice el sustantivo en Español?</li>\n  <li>¿Cómo está condicionado el sustantivo por el resto del enunciado?</li>\n</ol>\n\n<div class=\"seccion-griego\">\n  <strong> <h3>Para el Griego</h3> </strong>\n  <p>\n    El griego tiene casos para indicar la posición de los sustantivos en la\n    oración. Los casos en griego realmente son ocho pero algunas gramáticas lo\n    simplifican en cinco.\n  </p>\n  <ul>\n    <li><strong>Nominativo: </strong>Que nombra o indica una cosa</li>\n    <li><strong>Genitivo de Posesión: </strong>Que indica posesión.</li>\n    <li>\n      <strong>Genitivo de Separación: </strong>Que separa o distingue entre dos\n      cosas o ideas.\n    </li>\n    <li><strong>Dativo Locativo: </strong>Que indica ubicación.</li>\n    <li><strong>Dativo Instrumental: </strong>Que indica ubicación.</li>\n    <li><strong>Dativo de Objetivo Indirecto</strong></li>\n    <li>\n      <strong>Acusativo: </strong>Que recibe la acción del verbo que no es\n      pasivo.\n    </li>\n    <li>\n      <strong>Vocativo</strong>Para llamar a una persona que esta presente en la\n      conversación. Solamente en el singular.\n    </li>\n  </ul>\n\n  <p><strong>El número: </strong> Singular, Dual y Plural</p>\n  <p><strong>El Género: </strong> Masculino y Femenino</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/tema/tema.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/tema/tema.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Sintaxis</span> </h2>\n<h3>Paso 2. El Tema</h3>\n<strong>El alumno desarrollará este paso.</strong>\n<p>\n  <strong>Meta: </strong>Identificar el tema y los subtemas de cada párrafo\n  (perícopa) y así del Libro (carta) completo.\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/uso-palabra/uso-palabra.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/uso-palabra/uso-palabra.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\n<h3>Paso 4: El uso de una palabra</h3>\n<p>\n  <strong>META:</strong>Afinar la definición por medio de observar cómo se\n  usa en el texto.\n</p>\n<p>\n  El diccionario solamente es una ayuda para la definición de Palabras,\n  nunca es determinante, sino sólo indicativo de como puede ser la\n  definición. Es esencial que también hagas un estudio de uso, o de la\n  definición que un autor da a una palabra en su propio escrito. Este tipo\n  de análisis se puede aplicar con más facilidad a palabras que se usan con\n  mucha frecuencia. Las palabras que se repitan pocas veces requieren que\n  vayas a otros autores dentro y fuera de la Biblia\n</p>\n<div class=\"special\">\n  palabra > definición > palabra aclaración limitación condición descripción\n  diferencia extensión\n</div>\n<p>\n  Al definir las palabras se admite que las definiciones en la cultura\n  hebrea o griega pueden ser diferentes de las que manejamos nosotros. Toma\n  por ejemplo la palabra Libertad. Nosotros ejercemos muchas más libertades\n  que la gente de los tiempos bíblicos. Escogemos nuestras novias o novios.\n  Escogemos nuestro trabajo. Escogemos nuestro partido político. Pero en los\n  tiempos bíblicos las elecciones de éstas ú otras cosas eran\n  preestablecidas por la familia. Aparte de que la cultura moderna nos da\n  muchas mas libertades, hemos tenido una larga historia filosófica que ha\n  venido redefiniendo el concepto de libertad. Tenemos por primera vez los\n  derechos humanos como norma de la vida moderna. Aunque esto es relativo,\n  casi todos los seres humanos anhelan y gozan de ciertas libertades que\n  antes no existían en la mente de las mayorías. Aparte de esto los teólogos\n  modernos hablan de nuestra libertad de acercarnos a Dios o de hacer una\n  decisión de aceptar a Cristo.\n</p>\n<strong>Preguntas para un estudio bíblico</strong>\n<ol>\n  <li>\n    ¿Cuales son las palabras que se asocian con la que estamos estudiando en\n    el texto?\n  </li>\n  <li>\n    ¿En qué forma nos ayudan a entender mejor la palabra que estamos\n    estudiando?\n  </li>\n</ol>\n\n<p>\n  <strong>META 2: </strong>Describir, diferenciar y extender el significado\n  de la palabra que investigamos.\n</p>\n\n<ol>\n  <li>\n    Toma la palabra que estas estudiando y decide si es:\n    <ul>\n      <li>una cualidad</li>\n      <li>un objeto</li>\n      <li>una actividad</li>\n    </ul>\n  </li>\n\n  <li>\n    Una vez que has determinado la clase de palabra que es, busca dentro del\n    mismo texto frases o palabras que:\n    <ul>\n      <li>Describe la palabra que estas investigando.</li>\n      <li>Palabras que diferencian esta palabra de otras.</li>\n      <li>Palabras que extienden su significado.</li>\n    </ul>\n  </li>\n</ol>\n<p>\n  Cuando estés explorando el significado tienes que buscar en la cultura\n  bíblica. Recuerda que cada cultura tiene sus sistemas de relaciones. Es\n  equivocado asumir que cada cultura tiene la misma red de ideas. Entonces\n  es importante que estudiemos la Biblia desde su propia perspectiva.\n</p>\n\n<strong>Preguntas para un estudio bíblico</strong>\n<ol>\n  <li>\n    ¿Cuáles son las palabras que describen, diferencian, o extienden a la\n    que estamos estudiando en el texto?\n  </li>\n  <li>\n    ¿De qué manera nos ayudan a entender mejor la palabra que estamos\n    estudiando?\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/usus-loquendi/usus-loquendi.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/usus-loquendi/usus-loquendi.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Semántica</span> </h2>\n<h3>Paso 10: Usus Loquendi</h3>\n<p>\n  <strong>META:</strong> Fijar en nuestra mente una definición específica\n  para la palabra en su contexto específico.\n</p>\n<p>\n  \"En el estudio de palabras particulares, lo más importante, no es su\n  significado etimológico, ni los varios significados que haya adquirido con\n  el paso del tiempo, sino su significado particular en relación con las\n  otras palabras en la oración donde la emplea el autor.\"\n</p>\n<p>\n  El \"usus loquendi\" es la definición de una palabra, determinada por su\n  relación con las otras palabras de una oración específica. \"CADA PALABRA\n  SOLAMENTE PUEDE TENER UN SIGNIFICADO FIJO, EN CONEXION CON EL PASAJE EN\n  QUE OCURRE\".\n</p>\n<strong>Preguntas para un estudio bíblico</strong>\n<ol>\n  <li>\n    ¿Cuál es el significado de las palabras que estamos estudiando en el\n    texto?\n  </li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/verbos/verbos.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/verbos/verbos.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2><span class=\"area-decoration\"> Area: Gramatica</span></h2>\n<h3>Paso 2. Verbos</h3>\n<p>\n  <strong>META: </strong>¿Cómo está condicionado el sustantivo por el resto del\n  enunciado?\n</p>\n<p>¿Cómo está condicionado el sustantivo por el resto del enunciado?</p>\n<p>\n  A. El MODO del verbo nos indica si la acción es, fue, o será una realidad, UN\n  deseo, una condición, o implica UN mandato\n</p>\n<strong>Pregunta para un estudio bíblico:</strong>\n<p>\n  ¿Que nos indica el modo del verbo acerca de la acción? ¿Es una realidad, un\n  deseo, una condición, o implica un mandato?\n</p>\n<p>\n  B. El TIEMPO del verbo indica si la acción es pasada, presente o futura, y a\n  veces si es acción puntual o acción continúa.\n</p>\n\n<p>\n  1. Identifica los verbos en la unidad de comunicación que estas estudiando.\n  Marcarlos en color <span>verde</span> en tu libreta (TODOS).\n</p>\n\n<strong>Preguntas para un estudio bíblico: </strong>\n<ol>\n  <li>\n    ¿Cual es el tiempo y el tipo de acción (continua o puntual) del verbo?\n  </li>\n  <li>¿Cómo influye esto en la intención del autor?</li>\n</ol>\n\n<p>C. El verbo también indica la PERSONA que está actuando.</p>\n<p>La PERSONA puede ser una persona, cosa o idea que conlleva la acción</p>\n<p>\n  D. El verbo indica si la acción está dirigida al autor de esta acción a otra\n  persona, cosa o situación.\n</p>\n\n<strong>Preguntas para un estudio bíblico</strong>\n<ol>\n  <li>\n    ¿Cómo influye en la interpretación de este texto el tiempo del verbo?\n  </li>\n  <li>\n    ¿Si el autor hubiera usado otro tiempo, cómo cambiarla el mensaje?\n  </li>\n</ol>\n\n<p>\n  E. Tenemos que prestar mucha atención a la naturaleza de la palabra que es UN\n  verbo.\n</p>\n<p>\n  F. A veces el verbo esta cualificado por UN adverbio que dice como la acción\n  del verbo es llevada a cabo.\n</p>\n\n<div class=\"seccion-griego\">\n  <strong><h3>El Verbo en Griego y Hebreo</h3> </strong>\n  <p>\n    No todos los idiomas tienen el mismo sistema de verbo. Esto hace muy difícil\n    la traducción de UN idioma a otro. Por lo tanto ofrecemos una breve\n    explicación de los verbos en griego y en hebreo. PARA lograr una comprensión\n    completa es necesario que aprendamos los idiomas originales de la Biblia.\n  </p>\n  <p>\n    El sistema del verbo es diferente en cada idioma. Generalmente los\n    traductores ajustan la traducción con otras palabras para comunicar el mismo\n    sentido. Entonces el tipo de pregunta que hacemos en el Antiguo Testamento y\n    también en el Nuevo Testamento debe estar relacionada con su sistema de \n    gramática y su verbo.\n  </p>\n\n  <strong><h3>El Verbo en Griego</h3></strong>\n  <ul>\n    <li>Persona: ¿Quien hace la acción?</li>\n    <li>\n      Número: ¿Cuantos actores están practicando la acción: singular o plural.\n    </li>\n    <li>\n      Esta es más amplia que en el español.\n      <ol type=\"a\">\n        <li>\n          <strong>Activa: </strong>La acción del actor a otra persona o cosa. (A\n          veces es reflexiva).\n        </li>\n        <li>\n          <strong>Medio: </strong>(Solamente en griego). La acción del actor es\n          PARA si mismo. (A veces es reflexiva).\n        </li>\n        <li><strong>Pasiva: </strong>La acción es recibida.</li>\n      </ol>\n    </li>\n    <li>\n      Aspecto: Solamente en griego.\n      <ol type=\"a\">\n        <li>\n          Acción en UN punto de tiempo o donde la duración no es importante \"fue\n          escrito\".\n        </li>\n        <li>Acción continua \"estaba siendo escrito\".</li>\n        <li>\n          Acción de UN punto que tiene resueltos continuos o que dura \"escrito\n          esta\".\n        </li>\n      </ol>\n    </li>\n    <li>\n      Modo: Si la acción es Real, Posible, una Orden o un Deseo.\n      <ol type=\"a\">\n        <li>Indicativo: \"es verdad\".</li>\n        <li>Subjuntivo: \"es posible\".</li>\n        <li>Imperativo: \"ordeno que sea la verdad\".</li>\n        <li>Optativo: \"deseo que sea la verdad\".</li>\n      </ol>\n    </li>\n    <li>\n      Tiempo: Cuando ocurre una acción\n      <ol type=\"a\">\n        <li>Pasado: \"fui a la tienda\".</li>\n        <li>Presente: \"voy a la tienda\".</li>\n        <li>Futuro: \"iré a la tienda\".</li>\n      </ol>\n    </li>\n  </ul>\n\n  <strong><h3>El Verbo en Hebreo</h3></strong>\n  <p>\n    El verbo en hebreo no enfatiza el tiempo como los verbos en español. A pesar\n    de no tener el tiempo marcado por los verbos tiene adverbios que indican el\n    tiempo: \"antes\", \"todavía\", y \"mas tarde\". El hebreo también indica el\n    tiempo por medio de verbos con la acción completa, o con la acción\n    incompleta. Para escribir el verbo (la acción) en español tenemos que suplir\n    el tiempo. Muchas veces se hace con base en el contexto.\n  </p>\n  <p>\n    En lugar de enfatizar el tiempo, el verbo en hebreo enfatiza la intensidad\n    de la acción.\n  </p>\n  <ul>\n    <li>Simple</li>\n    <li>Intensivo</li>\n    <li>Causativo</li>\n    <li>Activo</li>\n    <li>Pasivo</li>\n    <li>Reflexivo</li>\n  </ul>\n</div>\n\n<strong>Preguntas para un estudio bíblico</strong>\n<p>\n  Nuestras preguntas principales sobre El Verbo en el Antiguo Testamento deben\n  ser:\n</p>\n<ol>\n  <li>¿Quién hace la acción?</li>\n  <li>¿Quién recibe la acción?</li>\n  <li>¿Hizo la acción a sí mismo?</li>\n  <li>¿Que tan intensiva o pasiva es la acción?</li>\n  <li>¿Quién causó la acción</li>\n  <li>¿Esta completa o incompleta la acción?</li>\n</ol>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
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
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', opacity: 0 })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ position: 'absolute', opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))], { optional: true })
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
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Caveat&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Neucha&display=swap\");\n.sidenav {\n  position: fixed;\n  top: 65px;\n  bottom: 0;\n  left: 0;\n  padding: 0;\n  min-width: 260px;\n  background-color: #fff;\n  box-shadow: 6px 0 6px rgba(0, 0, 0, 0.1);\n}\n.toolbar {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);\n  color: #eeeeee;\n  background-color: #393e46;\n\n  display: flex;\n  justify-content: space-between;\n}\n.toolbar h1 {\n  padding-top: 5px;\n  font-family: \"Neucha\", cursive;\n}\n.toolbar div .my-icon {\n  padding: 10px;\n}\n.toolbar div .my-icon:hover {\n  cursor: pointer;\n}\n.sidenav-content {\n  position: relative;\n  max-width: 1000px;\n  min-height: 100vh;\n  padding: 70px 3rem 2rem;\n}\nfooter {\n  font-family: \"Caveat\", cursive;\n  position: relative;\n  flex: 1;\n  padding: 48px;\n  z-index: 0;\n  background-color: #393e46;\n  font-size: small;\n  color: #eeeeee;\n\n  display: flex;\n  justify-content: flex-end;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n.container {\n  width: 20%;\n  text-align: center;\n  display: block;\n}\n.three {\n  text-align: right;\n  padding-right: 5px;\n}\n@media screen and (max-width: 900px) {\n  .container {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 550px) {\n  .container {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFO0FBQzNFLDJFQUEyRTtBQUUzRTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsU0FBUztFQUNULE9BQU87RUFDUCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix3Q0FBd0M7QUFDMUM7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxXQUFXO0VBQ1gsMENBQTBDO0VBQzFDLGNBQWM7RUFDZCx5QkFBeUI7O0VBRXpCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBRWxCLE9BQU87RUFDUCxhQUFhO0VBQ2IsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsY0FBYzs7RUFFZCxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXZlYXQmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5ldWNoYSZkaXNwbGF5PXN3YXBcIik7XG5cbi5zaWRlbmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDY1cHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMDtcbiAgbWluLXdpZHRoOiAyNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogNnB4IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGNvbG9yOiAjZWVlZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZTQ2O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRvb2xiYXIgaDEge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LWZhbWlseTogXCJOZXVjaGFcIiwgY3Vyc2l2ZTtcbn1cblxuLnRvb2xiYXIgZGl2IC5teS1pY29uIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnRvb2xiYXIgZGl2IC5teS1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2lkZW5hdi1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDcwcHggM3JlbSAycmVtO1xufVxuXG5mb290ZXIge1xuICBmb250LWZhbWlseTogXCJDYXZlYXRcIiwgY3Vyc2l2ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDQ4cHg7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNlNDY7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjZWVlZWVlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRocmVlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */");

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let AppComponent = class AppComponent {
    constructor(changeDetectorRef, media, route, matIconRegistry, domSanitizer, vps) {
        this.changeDetectorRef = changeDetectorRef;
        this.media = media;
        this.route = route;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.vps = vps;
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
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
    onActiveRoute(event) {
        this.vps.scrollToPosition([0, 0]);
    }
    onResize(event) {
        if (event.target.innerWidth <= 900) {
            this.opened = false;
        }
        else {
            this.opened = true;
        }
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
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["ViewportScroller"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], AppComponent.prototype, "onResize", null);
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
/* harmony default export */ __webpack_exports__["default"] = ("\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2ludHJvZHVjY2lvbi9pbnRyb2R1Y2Npb24uY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".active-route {\n  background-color: #393e46;\n  color: white;\n  font-weight: bolder;\n}\n\n.mat-tree-node {\n  padding: 0px !important;\n  margin: 0px;\n  font-size: 15px;\n  min-height: 0px;\n}\n\n.mat-tree {\n  width: 300px;\n}\n\n.mat-tree-node:hover {\n  background-color: #393e46;\n  color: white;\n  font-weight: bolder;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC1zaWRlbmF2L2NvbnRlbnQtc2lkZW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQtc2lkZW5hdi9jb250ZW50LXNpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtcm91dGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzZTQ2O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5tYXQtdHJlZS1ub2RlIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IDBweDtcbn1cblxuLm1hdC10cmVlIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ubWF0LXRyZWUtbm9kZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTNlNDY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

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

module.exports = __webpack_require__(/*! /home/ODESSA/Documentos/pedro de leon/github/manual-hermeneutica/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
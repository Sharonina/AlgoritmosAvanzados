/*
Nodos interconectados compuestos por el nodo o vértice y los bordes que son las conexiones
Tipos
-Dirigidos: un nodo lleva a otro nodo
-No dirigidos: unidireccionales
-Ponderados: en la vertice tienen un valor
-No ponderados: no tienen valor
-Asiclicos: No se puede recorrer todo el grago y regresar al punto inicial
-Ciclicos: puedes ir y volver a cualquier punto

    2  -  0
   / \
  1 - 3

Tipos de representaciones de un grafo:
-Edge list: representa las conexiones en arrays
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

-Adjacent list
                0     1         2        3
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

-Adjacent list utilizando hash table
const graph = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

-Adjacent matrix: se usa para grafos ponderados y no ponderados. Es similar a trabajar con binarios
si existe una conexión se coloca 1, si no 0
const graph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

const graph = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
*/

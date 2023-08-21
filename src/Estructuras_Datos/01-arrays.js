/*
- Estáticos:
  Ya no se pueden mutar, ya que se designa la longitud desde el inicio.
  Para mutarlo, se debe borrar, clonar y crear un nuevo espacio en memoria con los nuevos slots
- Dinámicos:
  Estos los maneja JS por dafault.
  JS nos provee del doble de espacio disponible por si se necesita (si nuestro array es de 3 string, habrá 6 slots disponibles)
 */

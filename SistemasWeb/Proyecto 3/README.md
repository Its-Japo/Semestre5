# Proyecto 1: Blog

Esta carpeta del repositorio muestra el ambiente de desarrollo del proyecto de sistemas web

Para ver los repositorios de producción ingresar a los enlaces debajo   
[Repositorio Front](https://github.com/Its-Japo/ProyectoWebFront)   
[Repositorio Back](https://github.com/Its-Japo/ProyectoWebBack)    

## Requisitos
Para poder ejecutar el proyecto se requiere de tener instaladas las siguientes tecnologías.

 - Docker

## Estructura del repositorio

### Cliente
![Angular Logo]([https://uploads.sitepoint.com/wp-content/uploads/2021/04/1618197067vitejs.png](https://externlabs.com/blogs/wp-content/uploads/2021/11/angularjs-framework.jpg])    
Es un cliente generado en angular.
En el proyecto existen tres rutas, 
- `\` Se puede ver una pequeña descripción sobre quién soy
- `\about` Se puede ver una pequeña descripción sobre quién soy
- `\projects` En este directorio se puede ver el listado de proyectos en los que he participado
- `\create` En este directorio hay un formulario en el que se pueden agregar proyectos con su descripción al listado de mis proyectos
- `\project-details\:id` En este directorio se pueden ver los detalles especificos de un proyecto en específico
- `\contact` En este directorio se puede ver mi información de contacto

### Servidor
![Express logo](https://miro.medium.com/v2/resize:fit:679/0*vq-JSMynSHUPXx70)    
### Rutas implementadas en el servidor
#### API Endpoints


### `GET /home`
**Descripción:** Devuelve un mensaje de bienvenida.

**Parámetros:** Ninguno

**Resultado:**
```json
{
    "message": "Soy la home"
}
```

**Códigos de estado:**
- 200 OK: Solicitud exitosa

### `POST /test`
**Descripción:** Devuelve un mensaje de prueba.

**Parámetros:** Ninguno

**Resultado:**
```json
{
    "message": "Soy el metodo o accion test del controlador de project"
}
```

**Códigos de estado:**
- 200 OK: Solicitud exitosa

### `POST /save-project`
**Descripción:** Guarda un nuevo proyecto en la base de datos.

**Parámetros:**
- `name` (string): Nombre del proyecto
- `description` (string): Descripción del proyecto
- `category` (string): Categoría del proyecto
- `year` (number): Año del proyecto
- `langs` (array): Lenguajes utilizados en el proyecto
- `image` (string): URL de la imagen del proyecto

**Resultado:**
```json
{
    "project": {
        "name": "Nombre del proyecto",
        "description": "Descripción del proyecto",
        "category": "Categoría del proyecto",
        "year": 2024,
        "langs": ["JavaScript", "HTML", "CSS"],
        "image": "URL de la imagen",
        "_id": "ID del proyecto",
        "__v": 0
    }
}
```

**Códigos de estado:**
- 200 OK: Proyecto guardado exitosamente
- 500 Internal Server Error: Error al guardar el proyecto
- 404 Not Found: No se pudo guardar el proyecto

### `GET /project-details/:id?`
**Descripción:** Devuelve los detalles de un proyecto específico.

**Parámetros:**
- `id` (string): ID del proyecto (opcional)

**Resultado:**
```json
{
    "project": {
        "name": "Nombre del proyecto",
        "description": "Descripción del proyecto",
        "category": "Categoría del proyecto",
        "year": 2024,
        "langs": ["JavaScript", "HTML", "CSS"],
        "image": "URL de la imagen",
        "_id": "ID del proyecto",
        "__v": 0
    }
}
```

**Códigos de estado:**
- 200 OK: Solicitud exitosa
- 404 Not Found: Proyecto no encontrado
- 500 Internal Server Error: Error al devolver los datos

### `GET /projects`
**Descripción:** Devuelve una lista de todos los proyectos, ordenados por año de forma descendente.

**Parámetros:** Ninguno

**Resultado:**
```json
{
    "projects": [
        {
            "name": "Nombre del proyecto",
            "description": "Descripción del proyecto",
            "category": "Categoría del proyecto",
            "year": 2024,
            "langs": ["JavaScript", "HTML", "CSS"],
            "image": "URL de la imagen",
            "_id": "ID del proyecto",
            "__v": 0
        },
        ...
    ]
}
```

**Códigos de estado:**
- 200 OK: Solicitud exitosa
- 404 Not Found: No hay proyectos que mostrar
- 500 Internal Server Error: Error al devolver los datos

### `PUT /project-details/:id`
**Descripción:** Actualiza un proyecto específico.

**Parámetros:**
- `id` (string): ID del proyecto
- `update` (object): Campos a actualizar

**Resultado:**
```json
{
    "project": {
        "name": "Nombre actualizado",
        "description": "Descripción actualizada",
        "category": "Categoría actualizada",
        "year": 2024,
        "langs": ["JavaScript", "HTML", "CSS"],
        "image": "URL de la imagen",
        "_id": "ID del proyecto",
        "__v": 0
    }
}
```

**Códigos de estado:**
- 200 OK: Proyecto actualizado exitosamente
- 404 Not Found: Proyecto no encontrado
- 500 Internal Server Error: Error al actualizar

### `DELETE /project-details/:id`
**Descripción:** Elimina un proyecto específico.

**Parámetros:**
- `id` (string): ID del proyecto

**Resultado:**
```json
{
    "project": {
        "name": "Nombre del proyecto",
        "description": "Descripción del proyecto",
        "category": "Categoría del proyecto",
        "year": 2024,
        "langs": ["JavaScript", "HTML", "CSS"],
        "image": "URL de la imagen",
        "_id": "ID del proyecto",
        "__v": 0
    }
}
```

**Códigos de estado:**
- 200 OK: Proyecto eliminado exitosamente
- 404 Not Found: Proyecto no encontrado
- 500 Internal Server Error: Error al eliminar el proyecto

#### Manejo de Errores

Todos los puntos finales proporcionan respuestas de error significativas. Un `500 Error Interno del Servidor` indica un problema con el servidor que necesita ser investigado más a fondo.

### Base de datos
![MongoDB]([https://miro.medium.com/v2/resize:fit:610/1*mMq3Bem9r8ASAn1YwcTbEw.png](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltTA4JDfYMru1oWKLHuhTez-syAOT1UoqG55RkEcW&s])    
Se utiliza la imágen en un contenedor de una base de datos en MongoDB.

## Comando para ejecutar el proyecto
```bash
docker compose up
```

Cada uno de los contenedores se mapea a los siguientes puertos del host:
  - Cliente: 4200
  - Servidor: 3700
  - Base de datos: 27027


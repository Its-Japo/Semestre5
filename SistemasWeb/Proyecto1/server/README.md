# Laboratorio 6 - Server Side JavaScript

![Server Side JavaScript](https://www.aceinfoway.com/blog/wp-content/uploads/2022/06/what-is-node_js-and-why-is-it-the-best-server-side-javascript.jpg)

Esta es la carpeta de laboratorio 6 de Sistemas y tecnologias web. En el cual se desarrolló el Server Side JavaScript para un futuro proyecto de blogs en una página web

## Requisitos previos para ejecutar
- Node.js
- Docker

## Pasos para instalar el proyecto:
1. Clonar el repositorio
2. Instalar las dependencias con npm install
```zsh
npm i
```
3. Ejecutar el build del docker de la base de datos
```zsh
docker build -t mysql_blog .
```
4. Correr el contenedor de la base de datos
```zsh
docker run --name mysql_container -d -p 33068:3306 mysql_blog
```
5. Ejecutar el servidor de Node
```zsh
npm run dev
```

## Uso
### URL Base

Todos los puntos finales tienen el prefijo de la URL base: `http://localhost:3000`

### Encabezados Comunes

Para todas las solicitudes, se requieren los siguientes encabezados:

- `Content-Type: application/json`

### Endpoints implementados en el API

#### GET /posts

- **Descripción**: Obtiene una lista de todas las publicaciones de blog.
- **Parámetros**: Ninguno
- **Cuerpo de la Solicitud**: Ninguno
- **Respuesta de Éxito**:
  - **Código**: 200 OK
  - **Contenido**: Un array de objetos de publicaciones de blog, cada uno conteniendo `id`, `title` y `content`.
- **Respuesta de Error**:
  - **Código**: 500 Error Interno del Servidor
  - **Contenido**: Mensaje de error

#### POST /posts

- **Descripción**: Crea una nueva publicación de blog.
- **Parámetros**: Ninguno
- **Cuerpo de la Solicitud**: Objeto JSON que contiene `title` y `content` (ambos requeridos), y opcionalmente `image` en formato base64.
- **Respuesta de Éxito**:
  - **Código**: 200 OK
  - **Contenido**: El objeto de la publicación de blog creada incluyendo `id`, `title` y `content`.
- **Respuestas de Error**:
  - **Código**: 400 Solicitud Incorrecta (si falta `title` o `content`)
  - **Contenido**: Mensaje de error
  - **Código**: 500 Error Interno del Servidor
  - **Contenido**: Mensaje de error

#### GET /posts/{id}

- **Descripción**: Obtiene los detalles de una publicación de blog específica por ID.
- **Parámetros**:
  - `id` (parámetro de ruta): El ID de la publicación de blog a recuperar.
- **Cuerpo de la Solicitud**: Ninguno
- **Respuesta de Éxito**:
  - **Código**: 200 OK
  - **Contenido**: El objeto de la publicación de blog incluyendo `id`, `title` y `content`.
- **Respuestas de Error**:
  - **Código**: 400 Solicitud Incorrecta (si el `id` es inválido)
  - **Contenido**: Mensaje de error
  - **Código**: 500 Error Interno del Servidor
  - **Contenido**: Mensaje de error

#### PUT /posts/{id}

- **Descripción**: Actualiza una publicación de blog existente por ID.
- **Parámetros**:
  - `id` (parámetro de ruta): El ID de la publicación de blog a actualizar.
- **Cuerpo de la Solicitud**: Objeto JSON que contiene `title` y `content` (ambos requeridos), y opcionalmente `image` en formato base64.
- **Respuesta de Éxito**:
  - **Código**: 200 OK
  - **Contenido**: El objeto de la publicación de blog actualizada incluyendo `id`, `title` y `content`.
- **Respuestas de Error**:
  - **Código**: 400 Solicitud Incorrecta (si falta `title` o `content`, o si el `id` es inválido)
  - **Contenido**: Mensaje de error
  - **Código**: 500 Error Interno del Servidor
  - **Contenido**: Mensaje de error

#### DELETE /posts/{id}

- **Descripción**: Elimina una publicación de blog específica por ID.
- **Parámetros**:
  - `id` (parámetro de ruta): El ID de la publicación de blog a eliminar.
- **Cuerpo de la Solicitud**: Ninguno
- **Respuesta de Éxito**:
  - **Código**: 204 Sin Contenido
- **Respuesta de Error**:
  - **Código**: 500 Error Interno del Servidor
  - **Contenido**: Mensaje de error

### Manejo de Errores

Todos los puntos finales proporcionan respuestas de error significativas. Un `500 Error Interno


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
![Vite Logo](https://uploads.sitepoint.com/wp-content/uploads/2021/04/1618197067vitejs.png)    
Es un cliente generado en vite.
En el proyecto existen tres rutas, 
- `\` donde se pueden ver todos los blogs de la base de datos 
- `\admin` donde se puede iniciar sesión para poder hacer cambios en el blog
- `\portal` es el dashboard donde se encuentran todos los elementos del blog para poder crear, eliminar o actualizar los blogs

### Servidor
![Express logo](https://miro.medium.com/v2/resize:fit:679/0*vq-JSMynSHUPXx70)    
### Rutas implementadas en el servidor
#### API Endpoints

##### GET /posts
- **Descripción**: Obtiene una lista de todas las publicaciones de blog.
- **Parámetros**: Ninguno
- **Cuerpo de la Solicitud**: Ninguno
- **Respuesta de Éxito**:
  - **Código**: 200 OK
  - **Contenido**: Un array de objetos de publicaciones de blog, cada uno conteniendo `id`, `title` y `content`.
- **Respuesta de Error**:
  - **Código**: 500 Error Interno del Servidor
  - **Contenido**: Mensaje de error

##### POST /posts

- **Descripción**: Crea una nueva publicación de blog.
- **Headers**: `Authorization: Bearer <token>`
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

##### GET /posts/{id}

- **Descripción**: Obtiene los detalles de una publicación de blog específica por ID.
- **Headers**: `Authorization: Bearer <token>`
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

##### PUT /posts/{id}

- **Descripción**: Actualiza una publicación de blog existente por ID.
- **Headers**: `Authorization: Bearer <token>`
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

##### DELETE /posts/{id}

- **Descripción**: Elimina una publicación de blog específica por ID.
- **Headers**: `Authorization: Bearer <token>`
- **Parámetros**:
  - `id` (parámetro de ruta): El ID de la publicación de blog a eliminar.
- **Cuerpo de la Solicitud**: Ninguno
- **Respuesta de Éxito**:
  - **Código**: 204 Sin Contenido
- **Respuesta de Error**:
  - **Código**: 500 Error Interno del Servidor
  - **Contenido**: Mensaje de error

##### POST /admin

- **Descripción**: Inicio de sesión para administradores.
- **Parámetros**: Ninguno
- **Cuerpo de la Solicitud**: Objeto JSON que contiene `uname` y `password`.
- **Respuesta de Éxito**:
  - **Código**: 200 OK
  - **Contenido**: `{ "token": "<token>" }`
- **Respuesta de Error**:
  - **Código**: 400 Solicitud Incorrecta (si falta `uname` o `password`, o si son incorrectos)
  - **Contenido**: Mensaje de error
  - **Código**: 500 Error Interno del Servidor
  - **Contenido**: Mensaje de error

#### Manejo de Errores

Todos los puntos finales proporcionan respuestas de error significativas. Un `500 Error Interno del Servidor` indica un problema con el servidor que necesita ser investigado más a fondo.

### Base de datos
![PostgreSQL](https://miro.medium.com/v2/resize:fit:610/1*mMq3Bem9r8ASAn1YwcTbEw.png)    
Se utiliza la imágen en un contenedor de una base de datos en PostgreSQL.

## Comando para ejecutar el proyecto
```bash
docker compose up
```

Cada uno de los contenedores se mapea a los siguientes puertos del host:
  - Cliente: 5170
  - Servidor: 3030
  - Base de datos: 54328


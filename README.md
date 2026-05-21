````md
# 🚀 API NODE MVC

Breve descripción de tu proyecto.

Ejemplo:

> Proyecto CRUD desarrollado con Node.js, Express y MySQL utilizando arquitectura MVC.

---

# 📌 Características

- ✅ CRUD completo
- ✅ Arquitectura MVC
- ✅ Conexión a MySQL
- ✅ API REST
- ✅ Frontend con HTML/EJS
- ✅ Uso de Express
- ✅ Variables de entorno con dotenv

---

# 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|------------|-----|
| Node.js | Backend |
| Express | Servidor |
| MySQL | Base de datos |
| EJS / HTML | Frontend |
| dotenv | Variables de entorno |
| Nodemon | Desarrollo |

---

# 📂 Estructura del proyecto

```txt
src/
|-- config/
|-- controllers/
|-- models/
|-- routes/
|-- views/
|-- app.js
|-- server.js
````

---

# ⚙️ Instalación

## 1. Clonar repositorio

```bash
git clone https://github.com/JesusFelipeA/api_node_jfa.git
```

---

## 2. Entrar al proyecto

```bash
cd api_node
```

---

## 3. Instalar dependencias

```bash
npm install
```

---

# 🔐 Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=password
DB_NAME=nombre de la base de datos
DB_PORT=puerto por lo general es 3306
```

---

# 🗄️ Base de datos

## Crear base de datos

### Estructura basica de una base de datos

```sql
CREATE DATABASE api_node;
```

---

## Crear tabla

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100)
);
```

---

# ▶️ Ejecutar proyecto

Modo desarrollo:

```bash
npm start
```

Servidor:

```txt
http://localhost:3000
```

---

# 📡 Endpoints API

| Método | Ruta                  | Descripción        |
| ------ | --------------------- | ------------------ |
| GET    | /api/users/api        | Obtener usuarios   |
| POST   | /api/users/add        | Crear usuario      |
| POST   | /api/users/update/:id | Actualizar usuario |
| GET    | /api/users/delete/:id | Eliminar usuario   |

---

# 🖥️ Vista principal

Agrega aquí capturas de pantalla.


---

# 📋 Funcionalidades

## Usuarios

* Crear usuarios
* Editar usuarios
* Eliminar usuarios
* Listar usuarios

---

# 🔮 Próximas mejoras

* [ ] Login
* [ ] JWT
* [ ] Roles de usuario
* [ ] Dashboard
* [ ] Validaciones
* [ ] Paginación
* [ ] Buscador
* [ ] Docker

---

# 📚 Aprendizajes

Puedes escribir aquí lo que aprendiste desarrollando el proyecto.

Ejemplo:

* Arquitectura MVC
* Conexión a MySQL
* Manejo de rutas
* CRUD con Express

---

# 👨‍💻 Autor

Tu nombre aquí.

```txt
Jesus Felipe Aviles
```

---

# 📄 Licencia

Este proyecto está bajo la licencia MIT.


# 🎨 Badges opcionales

```md
![Node.js](https://img.shields.io/badge/Node.js-18-green)
![Express](https://img.shields.io/badge/Express-Backend-black)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue)
```

```
```

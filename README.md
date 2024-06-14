# Desafío Evaluado, Módulo VIII - FBI System

## Descripción del proyecto

Creación de un servidor con Express que utiliza JsonWebToken (JWT) para la autorización de agentes, que les permita visitar página con acceso restringido.

1. Crear una ruta que autentique a un agente basado en sus credenciales y genere un token con sus datos.

2. Al autenticar un agente, devolver un HTML que:
    - Muestre el email del agente autorizado.
    - Guarde un token en SessionStorage con un tiempo de expiración de 2 minutos.
    - Disponibiliza un hiperenlace para redirigir al agente a una ruta restringida.

3. Crear una ruta restringida que devuelva un mensaje de Bienvenida con el correo del agente autorizado, en caso contrario devolver un estado HTTP que indique que el usuario no está autorizado y un mensaje que menciona la descripción del error.

## Prerrequisitos o Dependencias
- Windows, Mac, Linux.
- Javascript, Node.js, GitHub.
- Visual Studio Code.
- Postman

### Para inicializar el programa se requiere:

- Instalar las dependencias Express, JSON Web Token y Dotenv e instalarlas con el comando `npm i express jsonwebtoken dotenv`.

### Instrucciones de uso:

- Crear un archivo .env con SECRET_KEY

- Ruta para la página Principal: http://localhost:3000/

- Ingreso de Credenciales; ingresar Email, Password (se puede visaualizar y volver a esconder haciendo click en ícono de ojo) y luego presionar botón `Ingresar`.

![Imagen](/assets/img/inicio.png)

(Si datos ingresados son incorrectos, se visualizará un mensaje)

![Imagen](/assets/img/mensaje_error.png)


- Ir a Dashboard de Acceso Restringido; en página de bienvenida, hacer click en el enlace correspondiente:

![Imagen](/assets/img/bienvenida.png)
![Imagen](/assets/img/dashboard.png)


## Licencia

Este proyecto está bajo la Licencia MIT - ve el archivo [LICENSE.md](LICENSE) para detalles

------------------------------------------------------------------------------------------------------------------------------------

## Eric Arancibia (https://github.com/ericarancibia) - G68 Desarrollo Aplicaciones Full Stack JavaScript. Talento Digital - Academia Desafío Latam
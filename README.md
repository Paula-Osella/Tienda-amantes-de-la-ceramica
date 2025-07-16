Tienda de Cerámica: Ceramic Lovers Club 🏺💖
 ## 🔗 Enlaces Importantes

Video de la Página: https://www.youtube.com/watch?v=_hBpqJ-o3W0 🎥

Tienda en Línea (Netlify): https://ceramicc-lovers-club.netlify.app/ 🛍️

Repositorio de GitHub: https://github.com/Paula-Osella/Tienda-amantes-de-la-ceramica 🐙

📝 Descripción
Esta es una aplicación de tienda en línea diseñada para los amantes de la cerámica, donde los usuarios pueden explorar y adquirir una exquisita colección de productos. Los productos están organizados en categorías, y los usuarios pueden ver detalles específicos de cada artículo. La aplicación permite agregar productos al carrito y realizar compras de manera sencilla.

🚀 Tecnologías Usadas
Este proyecto está construido con un stack moderno y eficiente para una experiencia de usuario fluida y un desarrollo robusto:

React https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Badge"/>: La librería fundamental de JavaScript para construir interfaces de usuario dinámicas y reactivas.

Firebase https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase Badge"/>: Una plataforma completa que proporciona soluciones de backend, incluyendo almacenamiento de datos en tiempo real y autenticación de usuarios.

Firestore https://img.shields.io/badge/Firestore-FFCA28?style=for-the-badge&logo=google-cloud&logoColor=black" alt="Firestore Badge"/>: Servicio de base de datos NoSQL de Firebase, utilizado para almacenar y gestionar eficientemente los datos de los productos de la tienda.

React Router https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router Badge"/>: Para manejar la navegación declarativa y dinámica dentro de la aplicación, creando una experiencia de usuario de "Single Page Application" (SPA).

React Bootstrap https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap Badge"/>: Integra los componentes y estilos de Bootstrap directamente en React para un diseño responsive y atractivo.

CSS3 https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 Badge"/>: Utilizado para la estilización personalizada y el diseño responsivo, trabajando en conjunto con React Bootstrap para un look & feel único.

📦 Librerías Utilizadas
Aquí un detalle de las principales librerías de terceros que potencian esta aplicación:

react-router-dom: Para la gestión de rutas y navegación. 🗺️

react-bootstrap: Para componentes y estilos de Bootstrap. 🎨

firebase: Para la conexión y uso de Firestore. ☁️

🛠️ Instalación y Configuración Local
Para clonar el repositorio, configurar el entorno y hacer funcionar la aplicación en tu máquina local, sigue estos sencillos pasos:

Clona el repositorio en tu máquina local usando Git:

Bash

git clone https://github.com/Paula-Osella/Tienda-amantes-de-la-ceramica.git
Navega al directorio del proyecto:

Bash

cd Tienda-amantes-de-la-ceramica
Instala las dependencias necesarias del proyecto:

Bash

npm install
# o si usas Yarn:
# yarn install
Configura Firebase:
Crea un archivo .env en la raíz del proyecto y configura tus variables de entorno de Firebase. Necesitarás tus credenciales de configuración de Firebase para conectar la aplicación a tu proyecto de Firestore.

# Ejemplo de .env (Reemplaza con tus valores reales de Firebase)
REACT_APP_FIREBASE_API_KEY=tu_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=tu_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=tu_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=tu_app_id
Inicia la aplicación en modo desarrollo:

Bash

npm start
# o si usas Yarn:
# yarn start
📋 Requisitos
Para ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

Node.js y npm (o Yarn) en tu máquina. ⚙️

Una cuenta de Firebase y un proyecto configurado para usar Firestore. 🔑

🚀 Uso de la Aplicación
Una vez que la aplicación esté en funcionamiento (después de npm start), podrás acceder a ella desde tu navegador en http://localhost:3000.

Desde la interfaz de usuario, podrás:

Navegar por las diferentes categorías de productos de cerámica. 🏺

Ver detalles específicos de cada artículo, incluyendo descripciones y precios. 🔍

Seleccionar la cantidad deseada de un producto. 🔢

Agregar artículos al carrito de compras. 🛒

Finalizar el proceso de compra. ✅

📂 Estructura de la Aplicación
La aplicación sigue una estructura modular para facilitar la gestión y escalabilidad del código:

App.js:

Componente principal que envuelve toda la aplicación con BrowserRouter y CartContextProvider.

Define las rutas principales de la aplicación usando Routes y Route:

"/": Muestra la lista completa de productos (ItemListContainer). 🏠

"/category/:categoryId": Muestra productos filtrados por una categoría específica. 🏷️

"/detalle/:id": Presenta el detalle de un producto individual (ItemDetailContainer). ℹ️

"*": Una ruta comodín para la página de error (ej. un componente Error o NotFound). 🚫

"/cart": Componente dedicado a la visualización y gestión del carrito de compras (Cart). 🛒

ItemListContainer:

Encargado de obtener los datos de los productos desde Firebase. 📥

Maneja la lógica de carga (ej. mostrar un spinner). ⏳

Utiliza useParams para identificar y filtrar productos por categoría cuando sea necesario. 🧩

Renderiza el componente ItemList pasando los productos obtenidos. 🖼️

ItemList:

Componente puramente presentacional. ✨

Itera sobre la colección de productos (items) y renderiza un componente Item para cada uno. 🔄

Item:

Componente individual que exhibe la información clave de un producto: imagen, nombre, precio y una breve descripción. 📄

Incluye un Link para ver el detalle del producto. ➡️

Contiene un botón para Agregar al Carrito (add-item-button). ➕

ItemDetailContainer:

Responsable de obtener los detalles de un producto específico, utilizando el id obtenido de la URL (useParams). 🆔

Muestra un Spinner o un mensaje de "Loading..." mientras los datos están siendo cargados. ⏱️

Una vez que los datos están disponibles, renderiza el componente ItemDetail. 🌟

ItemQuantitySelector:

Un componente de UI que permite al usuario seleccionar la cantidad deseada de un producto antes de agregarlo al carrito. 👆

Contiene botones para incrementar (+) y decrementar (-) la cantidad. ⬆️⬇️

AddItemButton:

Un botón reutilizable que, al hacer clic, añade el producto (con la cantidad seleccionada) al carrito de compras. 🛍️

Footer:

Contiene un formulario para suscribirse al newsletter. 📧

Un botón para desplazarse hacia arriba de la página. 🔝

CartContext y CartContextProvider:

Crea un contexto para gestionar el estado global del carrito. 🛒

Proporciona funciones para agregar, eliminar y calcular el total de productos en el carrito. ➕➖🧮

Brief:

Muestra un resumen de la compra con el ID de la orden, detalles de los productos comprados y el total. 🧾

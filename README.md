# Tienda de Cerámica: Ceramic Lovers Club 🏺✨

[![Netlify Status](https://api.netlify.com/api/v1/badges/TU_ID_DEL_SITIO_NETLIFY/deploy-status)](https://app.netlify.com/sites/TU_NOMBRE_DE_SITIO_EN_NETLIFY/deploys) 
## 🔗 Enlaces Rápidos

* **Video Demostrativo**: [Ver en YouTube](https://www.youtube.com/watch?v=_hBpqJ-o3W0) 🎬
* **Tienda en Línea (Netlify)**: [Visitar Ceramic Lovers Club](https://ceramicc-lovers-club.netlify.app/) 🛍️
* **Repositorio en GitHub**: [Ver Código Fuente](https://github.com/Paula-Osella/Tienda-amantes-de-la-ceramica) 💻

---

## 📝 Descripción del Proyecto

Una aplicación de tienda en línea dedicada a los amantes de la cerámica, diseñada para una experiencia de compra intuitiva y agradable. Explora productos por categorías, visualiza detalles específicos de cada artículo y gestiona tu carrito de compras con facilidad.

---

## 🚀 Tecnologías Clave

Este proyecto está construido sobre una base tecnológica robusta para asegurar un rendimiento óptimo y una experiencia de usuario fluida:

* **Frontend**: React (UI), React Router (Navegación), React Bootstrap (Componentes UI).
* **Backend & Base de Datos**: Firebase (Plataforma), Firestore (Base de datos NoSQL).
* **Estilado**: CSS3 personalizado.

---

## 📦 Librerías Principales

* `react-router-dom`: Gestión de rutas y navegación.
* `react-bootstrap`: Integración de componentes y estilos de Bootstrap.
* `firebase`: SDK para la interacción con los servicios de Firebase.

---

## 🛠️ Instalación y Configuración Local

Sigue estos pasos para poner la aplicación en marcha en tu entorno de desarrollo:

1.  **Clonar el Repositorio**:
    ```bash
    git clone [https://github.com/Paula-Osella/Tienda-amantes-de-la-ceramica.git](https://github.com/Paula-Osella/Tienda-amantes-de-la-ceramica.git)
    ```

2.  **Acceder al Directorio del Proyecto**:
    ```bash
    cd Tienda-amantes-de-la-ceramica
    ```

3.  **Instalar Dependencias**:
    ```bash
    npm install
    # o si usas Yarn:
    # yarn install
    ```

4.  **Configurar Firebase (`.env`)**:
    Crea un archivo `.env` en la raíz del proyecto y añade tus credenciales de configuración de Firebase:
    ```
    # Ejemplo de .env
    REACT_APP_FIREBASE_API_KEY=tu_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=tu_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=tu_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=tu_app_id
    ```

5.  **Iniciar la Aplicación**:
    ```bash
    npm start
    # o si usas Yarn:
    # yarn start
    ```

---

## ⚠️ Requisitos del Sistema

Asegúrate de tener instalado:

* **Node.js** y **npm** (o Yarn).
* Una cuenta de **Firebase** con un proyecto configurado para **Firestore**.

---

## 💡 Cómo Usar la Aplicación

Una vez que la aplicación esté corriendo localmente (`http://localhost:3000`) o desplegada:

* **Explora Productos**: Navega por categorías y descubre artículos de cerámica.
* **Ver Detalles**: Haz clic en cualquier producto para ver su información detallada.
* **Gestiona Cantidad**: Ajusta la cantidad deseada antes de añadir al carrito.
* **Añadir al Carrito**: Agrega productos a tu lista de compra.
* **Finalizar Compra**: Procede al checkout para completar tu pedido.

---

## 📂 Estructura de Componentes Clave

La aplicación está organizada modularmente para facilitar el desarrollo y mantenimiento:

* **`App.js`**: Componente principal y gestor de rutas.
    * `/`: `ItemListContainer` (Lista de productos).
    * `/category/:categoryId`: `ItemListContainer` (Productos por categoría).
    * `/detalle/:id`: `ItemDetailContainer` (Detalle de un producto).
    * `*`: Página de error.
    * `/cart`: Componente `Cart`.
* **`ItemListContainer`**: Carga y gestiona los datos de los productos desde Firebase, y renderiza `ItemList`.
* **`ItemList`**: Presenta una lista de `Item` componentes.
* **`Item`**: Muestra la información individual de un producto con opción a detalle y añadir al carrito.
* **`ItemDetailContainer`**: Obtiene y presenta los detalles de un producto específico, incluyendo el selector de cantidad y el botón de añadir al carrito.
* **`ItemQuantitySelector`**: Componente UI para seleccionar la cantidad de un producto.
* **`AddItemButton`**: Botón para agregar el producto al carrito.
* **`Footer`**: Incluye un formulario de suscripción a newsletter y un botón para desplazarse hacia arriba.
* **`CartContext` & `CartContextProvider`**: Provee un contexto global para la gestión del estado del carrito.
* **`Brief`**: Muestra un resumen de la orden de compra.

Proporciona funciones para agregar, eliminar y calcular el total de productos en el carrito. ➕➖🧮

Brief:

Muestra un resumen de la compra con el ID de la orden, detalles de los productos comprados y el total. 🧾

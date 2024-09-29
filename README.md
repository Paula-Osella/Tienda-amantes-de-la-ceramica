

# Tienda de Cerámica, Ceramic Lovers Club
Video de la pagina: https://www.youtube.com/watch?v=_hBpqJ-o3W0

## Descripción
Esta es una aplicación de tienda en línea donde los usuarios pueden explorar y comprar productos de cerámica. Los productos están organizados en categorías, y los usuarios pueden ver detalles específicos de cada artículo. La aplicación permite agregar productos al carrito y realizar compras de manera sencilla.

## Tecnologías Usadas
- **React**: Librería de JavaScript utilizada para construir la interfaz de usuario.
- **Firebase**: Plataforma que proporciona almacenamiento en tiempo real y autenticación.
- **Firestore**: Servicio de base de datos de Firebase utilizado para almacenar los productos.
- **React Router**: Utilizado para manejar la navegación en la aplicación.
- **React Bootstrap**: Para el diseño y la estilización de la interfaz.

## Librerías Utilizadas
- **react-router-dom**: Para la gestión de rutas y navegación.
- **react-bootstrap**: Para componentes y estilos de Bootstrap.
- **firebase**: Para la conexión y uso de Firestore.

## Instalación
Para descargar el repositorio y hacer funcionar la aplicación, sigue estos pasos:

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu_usuario/nombre_del_repositorio.git
2.Navega al directorio del proyecto:
cd proyecto-react-osella

3. Instala las dependencias necesarias:
   npm install
4.Crea un archivo .env y configura las variables de entorno necesarias para Firebase.
5.Inicia la aplicación: npm start

Requisitos
Node.js y npm instalados en tu máquina.
Una cuenta de Firebase y un proyecto configurado para usar Firestore.
Uso
Una vez que la aplicación esté en funcionamiento, podrás acceder a ella desde tu navegador en http://localhost:3000. Desde ahí, podrás navegar por las categorías de productos de cerámica, ver detalles de cada uno y agregar artículos al carrito.

Estructura de la Aplicación
App:

Componente principal que envuelve la aplicación con BrowserRouter y CartContextProvider.
Define las rutas de la aplicación con Routes y Route:
"/": Muestra la lista de productos (ItemListContainer).
"/category/:categoryId": Muestra productos filtrados por categoría.
"/detalle/:id": Muestra el detalle de un producto específico (ItemDetailContainer).
"*": Página de error (Error).
"/cart": Muestra el carrito de compras (Cart).
ItemListContainer:

Obtiene los datos de productos desde Firebase y maneja la lógica de carga.
Usa useParams para filtrar productos por categoría.
Renderiza ItemList con los productos obtenidos.
ItemList:

Componente presentacional que itera sobre los productos y renderiza un componente Item para cada uno.
Item:

Componente que muestra la información de un producto individual, incluyendo su imagen, nombre, precio y una descripción.
Incluye un selector de cantidad (ItemQuantitySelector) y un botón para agregar al carrito (AddItemButton).
ItemDetailContainer:

Obtiene los detalles de un producto específico a través de su ID.
Usa useParams para acceder al ID del producto.
Muestra un Spinner mientras se cargan los datos y luego renderiza ItemDetail.
ItemQuantitySelector:

Permite al usuario seleccionar la cantidad de un producto.
Contiene botones para incrementar y decrementar la cantidad.
AddItemButton:

Botón para agregar el producto seleccionado al carrito.
Footer:

Contiene un formulario para suscribirse al newsletter.
Un botón para desplazarse hacia arriba de la página.
CartContext y CartContextProvider:

Crea un contexto para gestionar el estado del carrito.
Proporciona funciones para agregar, eliminar y calcular el total de productos en el carrito.
Brief:

Muestra un resumen de la compra con el ID de la orden, detalles de los productos comprados y el total.

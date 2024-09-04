import producto1 from './ProductosImg/producto1.png';
import producto2 from './ProductosImg/producto2.png';
import producto3 from './ProductosImg/producto3.png';
import producto4 from './ProductosImg/producto4.png';
import producto5 from './ProductosImg/producto5.png';
import producto6 from './ProductosImg/producto6.png';

const products = [
    {
        "id": 1,
        "name": "Bandeja Coquette",
        "src": producto1,
        "precio": 6000,
        "stock": 10,
        "description": "Bandeja forma ovalada 14,5 de ancho-23,5cm-largo-2cm de alto de costado",
    },
    {
        "id": 2,
        "name": "Jarra Rosa Acorazonada",
        "src": producto2,
        "precio": 12000,
        "stock": 10,
        "description": "Jarra XL Ancho 16cm - Alto 13cm - Boca 11cm ",
    },
    {
        "id": 3,
        "name": "Taza Cherry",
        "src": producto3,
        "precio": 8000,
        "stock": 10,
        "description": "Medidas: alto 10,5cm -boca 7,5cm-Capacidad: 475cm3",
    },
    {
        "id": 4,
        "name": "Copas Ajedrez",
        "src": producto4,
        "precio": 7000,
        "stock": 10,
        "description": "Capacidad 300cc-Medidas 9cm alto - 7cm boca"
    },
    {
        "id": 5,
        "name": "Taza Coquette",  // Cambia "title" por "name"
        "src": producto5,
        "precio": 15000,
        "stock": 10,
        "description": "Capacidad 300cc-Medidas 7cm boca - 9cm alto",
    },
    {
        "id": 6,
        "name": "Alajero Waffle one love",
        "src": producto6,
        "precio": 20000,
        "stock": 10,
        "description": "Medidas 13,5cm alto-11cm ancho"
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Products fetched:", products); // Agrega esto para verificar los datos
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id===productId))
        },500)
    }
    )
}
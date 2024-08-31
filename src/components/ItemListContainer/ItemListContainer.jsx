import "./ItemListContainer.css"
export const ItemListContainer = (props) =>{
    let {titulo,presentacion,img}=props;
return(
<>
<h1 className="tituloPresentacion">{titulo}</h1>
<p>{presentacion}</p>
<img src={img} alt="Florero de Ceramica"/>
</>
)

}
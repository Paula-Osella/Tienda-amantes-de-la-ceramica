export const ItemListContainer = (props) =>{
    let {titulo,presentacion,img}=props;
return(
<>
<h1>{titulo}</h1>
<p>{presentacion}</p>
<img src={img} alt="Florero de Ceramica"/>
</>
)

}
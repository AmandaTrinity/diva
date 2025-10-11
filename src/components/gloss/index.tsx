interface GlossProps{ //tudo que vai ser alterado 
    name: string;
    price: string;
    imageUrl: string;
}

const Gloss = (props: GlossProps) => {
    return (
        <div className="loja-box">
            <img src={props.imageUrl} alt={props.name} className="loja-image"/>
            <div className="loja-text">
                <h1>{props.name}</h1>
                <p>R$ {props.price}</p>
            </div>
        </div>
    )
}

export default Gloss;
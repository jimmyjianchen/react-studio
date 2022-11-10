// TODO: create a component that displays a single bakery item
export default function BakeryItem(props) {
    return (
        <div>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <p>${props.item.price}</p>
            <img src={props.item.image}/>
            <button onClick={()=>props.updateCart(props.item)}>Add to Cart</button>
        </div>
    )
}

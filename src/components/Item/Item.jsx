function Item({item, setItems}) {


    function handleRemove() {
        setItems((items) => items.filter((value) => value.id !== item.id))
    }

    return <li>
        <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
            {item.quantity} {item.description}
        </span>
        <button className={''} onClick={handleRemove}>❌</button>
    </li>
}

export default Item
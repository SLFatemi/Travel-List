function Item({item, setItems}) {


    function handleRemove() {
        setItems((items) => items.filter((value) => value.id !== item.id))
    }

    function handleCheck() {
        setItems((items) => items.map((value) => value.id === item.id ? {...item, packed: !item.packed} : value))
    }

    return <li>
        <input type={'checkbox'} value={item.packed} onChange={handleCheck}/>
        <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
            {item.quantity} {item.description}
        </span>
        <button className={''} onClick={handleRemove}>❌</button>
    </li>
}

export default Item
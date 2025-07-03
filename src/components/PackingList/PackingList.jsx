import Item from "../Item/Item.jsx";

function PackingList({items, setItems}) {
    return <div className={'list'}>
        <ul>
            {items.map(item => <Item item={item} setItems={setItems} key={item.id}/>)}
        </ul>
    </div>
}

export default PackingList

import Item from "../Item/Item.jsx";

function PackingList({items}) {
    return <div className={'list'}>
        <ul>
            {items.map(item => <Item item={item}/>)}
        </ul>
    </div>
}

export default PackingList

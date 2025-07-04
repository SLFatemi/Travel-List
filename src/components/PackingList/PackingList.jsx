import Item from "../Item/Item.jsx";
import {useState} from "react";

function PackingList({items, setItems}) {
    const [sortBy, setSortBy] = useState('input')
    let sortedItems
    if (sortBy === 'input')
        sortedItems = items.toSorted((a, b) => (a.id - b.id))
    if (sortBy === 'description')
        sortedItems = items.toSorted((a, b) => (a.description.localeCompare(b.description)))
    if (sortBy === 'packed')
        sortedItems = items.toSorted((a, b) => (+b.packed - +a.packed))

    function handleClear() {
        const confirmed = window.confirm("Are you sure you want to delete all items?")
        if (!confirmed) return
        setItems([])
    }

    return <div className={'list'}>
        <ul>
            {sortedItems.map(item => <Item item={item} setItems={setItems} key={item.id}/>)}
        </ul>
        <div className={'actions'}>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value={'input'}>Sort by input order</option>
                <option value={'description'}>Sort by description</option>
                <option value={'packed'}>Sort by packed status</option>
            </select>
            <button onClick={handleClear}>Clear list</button>
        </div>
    </div>
}

export default PackingList

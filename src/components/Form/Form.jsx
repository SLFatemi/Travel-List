import {useState} from "react";

function Form({items, setItems}) {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)


    function handleAddItem(item) {
        setItems(i => [...i, item])
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!description.trim()) return
        const id = Date.now()

        handleAddItem({id: id, description, quantity, packed: false})

        setDescription('')
        setQuantity(1)
    }

    const options = Array.from({length: 20}, (el, i) => i + 1)
    return <form className={'add-form'} onSubmit={handleSubmit}>
        <h3>What do you need for you 😍 trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
            {options.map((num) => <option value={num} key={num}>{num}</option>)}
        </select>
        <input required type={'text'} placeholder={'Item...'} value={description}
               onChange={(e) => {
                   setDescription(e.target.value)
               }}/>
        <button>Add</button>
    </form>
}

export default Form

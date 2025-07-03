import Logo from "./components/Logo/Logo.jsx";
import Form from "./components/Form/Form.jsx";
import PackingList from "./components/PackingList/PackingList.jsx";
import Stats from "./components/Stats/Stats.jsx";
import {useState} from "react";

function App() {
    const [items, setItems] = useState([])

    return <div className={'app'}>
        <Logo/>
        <Form items={items} setItems={setItems}/>
        <PackingList items={items} setItems={setItems}/>
        <Stats/>
    </div>
}

export default App

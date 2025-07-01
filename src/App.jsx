import Logo from "./components/Logo/Logo.jsx";
import Form from "./components/Form/Form.jsx";
import PackingList from "./components/PackingList/PackingList.jsx";
import Stats from "./components/Stats/Stats.jsx";

const initialItems = [
    {id: 1, description: "Passports", quantity: 2, packed: false},
    {id: 2, description: "Socks", quantity: 12, packed: false},
    {id: 3, description: "Charger", quantity: 1, packed: true}
];

function App() {
    return <div className={'app'}>
        <Logo/>
        <Form/>
        <PackingList items={initialItems}/>
        <Stats/>
    </div>
}

export default App

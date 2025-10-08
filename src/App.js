import './App.css';

import List from './List';
function App() {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1 style={{ textAlign: "center" }}>Flip Cards/ Learning Words</h1>
            <List />
        </div>
    );
}

export default App;

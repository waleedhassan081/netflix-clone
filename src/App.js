import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
    return (
        <div className="App">
            <Nav />
            <Banner />
            {requests.map((request) => {
                return (
                    <Row
                        key={request.id}
                        title={request.title}
                        fetchUrl={request.url}
                    />
                );
            })}
        </div>
    );
}

export default App;

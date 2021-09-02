import React, { Fragment } from 'react';
import './App.css';
import Illustration from './components/illustration/Illustration';

const App = () => {
    return (
        <Fragment>
            <nav>
                <h1 className="logo">Tiny Animation</h1>
            </nav>
            <main>
                <div className="content">
                    <p>Tiny Short Animation</p>
                    <h2>Developed using Web Animations API</h2>
                    <p>Developed By</p>
                    <h1>Ahmed Faraz</h1>
                </div>
                <div>
                    <Illustration />
                </div>
            </main>
        </Fragment>
    )
}

export default App;

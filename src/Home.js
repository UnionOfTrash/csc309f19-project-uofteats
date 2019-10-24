import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Home extends React.Component {
    render() {
        return (
            <Link to='./food'>
                <button>
                    Go to food menu
                </button>
            </Link>
        );
    }
}

export default Home;

import React, { Component } from 'react';

import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';

import Articles from '../Components/Pages/Articles';

import Scripts from '../Components/Pages/Scripts';


class Writing extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div class="container">
                        <Articles />
                        <Scripts />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Writing;

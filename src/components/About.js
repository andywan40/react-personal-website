import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import { styles } from '../styles/AboutStyles';

function About() {
    return (
        <div>
            <h1>This is the about page</h1>
            <Navbar />
        </div>
    )
}

export default About;
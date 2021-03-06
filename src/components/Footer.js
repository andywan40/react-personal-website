import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/FooterStyles';

function Footer(props) {
    const {classes} = props;
    return (
        <div className={classes.root} >
            <div className={classes.textArea}>
                <p className={classes.text}>Created my free logo at <a className={classes.link} href="https://logomakr.com/" target="_blank" rel="noopener noreferrer">LogoMakr.com</a> </p>
                <p className={classes.text}>Site created by Andrew Wan</p>
            </div>
        </div>
    )
}

export default withStyles(styles)(Footer);
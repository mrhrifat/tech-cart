import React from 'react'
import { AppBar, Menu, MenuItem, Toolbar, Typography, IconButton, Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import Logo from '../../images/logo.png'
import useStyles from './styles'


const Navbar = () => {

    const classes = useStyles()

    return (
        <>
            <AppBar className={classes.appBar} position='fixed' color='inherit'>
                <Toolbar>
                    <Typography className={classes.title} variant='h6' color='inherit'>
                        <img className={classes.image} alt='Tech Cart' src={Logo} height='25px' />
                        Tech Cart
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label='Show cart products' color='inherit'>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar

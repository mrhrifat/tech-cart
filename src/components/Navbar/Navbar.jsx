import React from 'react'
import { AppBar, Menu, MenuItem, Toolbar, Typography, IconButton, Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import Logo from '../../images/logo.png'
import { makeStyles } from '@mui/styles'
import { alpha, createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

const drawerWidth = 0;
const themeInstance = {
    [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        // [theme.breakpoints.up('sm')]: {
        //     width: `calc(100% - ${drawerWidth}px)`,
        //     marginLeft: drawerWidth,
        // },
        width:theme.breakpoints.up('sm'),
        marginLeft:theme.breakpoints.up('sm'),
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
    },
    image: {
        marginRight: '10px',
    },
    // menuButton: {
    //     marginRight: theme.spacing(2),
    //     [theme.breakpoints.up('sm')]: {
    //         display: 'none',
    //     },
    // },
    grow: {
        flexGrow: 1,
    },
    // search: {
    //     position: 'relative',
    //     borderRadius: theme.shape.borderRadius,
    //     backgroundColor: alpha(theme.palette.common.white, 0.15),
    //     '&:hover': {
    //         backgroundColor: alpha(theme.palette.common.white, 0.25),
    //     },
    //     marginRight: theme.spacing(2),
    //     marginLeft: 0,
    //     width: '100%',
    //     [theme.breakpoints.up('sm')]: {
    //         width: 'auto',
    //     },
    // },
    // searchIcon: {
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    inputRoot: {
        color: 'inherit',
    },
    // inputInput: {
    //     padding: theme.spacing(1, 1, 1, 0),
    //     // vertical padding + font size from searchIcon
    //     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    //     transition: theme.transitions.create('width'),
    //     width: '100%',
    //     [theme.breakpoints.up('md')]: {
    //         width: '20ch',
    //     },
    // },
}));

// const theme = createTheme()

const Navbar = () => {

    const classes = useStyles()

    return (
        <ThemeProvider theme={themeInstance}>
            <AppBar className='' position='fixed' color='inherit'>
                {/* {classes.appBar} */}
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
        </ThemeProvider>
    )
}

export default Navbar

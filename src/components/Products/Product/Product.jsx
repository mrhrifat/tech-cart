import React from 'react'
import { Card, CardContent, CardMedia, CardActions, Typography, IconButton } from '@mui/material'
// import { AddShoppingCard } from '@mui/material/SvgIcon'
import { AddShoppingCard } from '@mui/material/Icon'

const Product = ({ product }) => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price}
                    </Typography>
                </div>
                <Typography variant='h2' color='textSecondary'>
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCard />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product

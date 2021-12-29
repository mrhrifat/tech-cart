import React from 'react'
import { Grid } from '@mui/material'

const products = [
    { id: 1, name: 'Product 1', description: 'Product 1 description', price: 100 },
    { id: 2, name: 'Product 2', description: 'Product 2 description', price: 200 }
]

const Products = () => {
    return (
        <main>
            <Grid container spacing={4} justifyContent='center'>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Product />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products

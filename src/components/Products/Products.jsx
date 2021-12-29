import React from 'react'
import { Grid } from '@mui/material'
import Product from './Product/Product'

const products = [
    { id: 1, name: 'Product 1', description: 'Product 1 description', price: 100, image: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Product 2', description: 'Product 2 description', price: 200, image: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' }
]

const Products = () => {
    return (
        <main>
            <Grid container spacing={4} justifyContent='center'>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products

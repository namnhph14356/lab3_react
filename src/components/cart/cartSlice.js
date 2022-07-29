import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total: 0,
        amount: 0,
        changed: false

    },
    reducers: {
        add: (state, action) => {
            const itemIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            )
            if (itemIndex >= 0) {
                state.cart[itemIndex].amount += 1
                state.cart[itemIndex].total = state.cart[itemIndex].amount * state.cart[itemIndex].saleOffPrice
            } else {
                const tempProduct = { ...action.payload, amount: 1 }
                state.cart.push(tempProduct)
            }

        },
        increase: (state, action) => {
            const currentItem = state.cart.find(item => item.id === action.payload)
            currentItem.amount = currentItem.amount ? currentItem.amount + 1 : 1
            currentItem.total = currentItem.amount * currentItem.saleOffPrice
        },
        decrease: (state, action) => {
            
            const currentItem = state.cart.find(item => item.id === action.payload)
            const id = action.payload
            if (currentItem.amount === 1) {
                state.cart = state.cart.filter((item) => item.id != id)
            } else {
                currentItem.amount = currentItem.amount ? currentItem.amount - 1 : 1
                currentItem.total = currentItem.amount * currentItem.saleOffPrice
            }

        },
        totalPrice: () => {
            
        }

    }
})

export default cartSlice
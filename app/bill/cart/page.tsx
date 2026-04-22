'use client'

import { useMemo } from 'react'

import BillContainer from '@/components/BillPage/BillContainer'
import { useCart } from '@/context/CartContext'

export default function BillCartPage() {
  const { cart } = useCart()

  const initialItems = useMemo(() => {
    if (!cart || cart.length === 0) return undefined

    const cartItems = cart.map((item) => {
      // Parse price string to number for BillTable
      const priceNum = item.price
      return {
        name: item.name,
        quantity: item.quantity,
        price: priceNum
      }
    })

    const emptyRows = Array.from({
      length: Math.max(0, 10 - cartItems.length)
    }).map(() => ({
      name: '',
      quantity: undefined,
      price: undefined
    }))

    return [...cartItems, ...emptyRows]
  }, [cart])

  return <BillContainer initialItems={initialItems} />
}

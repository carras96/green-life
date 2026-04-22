'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

import { Product } from '@/lib/data'

export interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product, quantity: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const LOCAL_STORAGE_KEY = 'green-life-cart'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartState, setCartState] = useState<{
    items: CartItem[]
    isInitialized: boolean
  }>({
    items: [],
    isInitialized: false
  })

  // Load cart from localStorage on mount
  useEffect(() => {
    const initializeCart = async () => {
      const savedCart = localStorage.getItem(LOCAL_STORAGE_KEY)
      let items: CartItem[] = []

      if (savedCart) {
        try {
          items = JSON.parse(savedCart)
        } catch (e) {
          console.error('Failed to parse cart from localStorage', e)
        }
      }

      setCartState({
        items,
        isInitialized: true
      })
    }

    initializeCart()
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cartState.isInitialized) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartState.items))
    }
  }, [cartState.items, cartState.isInitialized])

  const addToCart = (product: Product, quantity: number) => {
    setCartState((prev) => {
      const existingItem = prev.items.find((item) => item.id === product.id)
      let newItems
      if (existingItem) {
        newItems = prev.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        newItems = [...prev.items, { ...product, quantity }]
      }
      return { ...prev, items: newItems }
    })
  }

  const removeFromCart = (productId: string) => {
    setCartState((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== productId)
    }))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartState((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    }))
  }

  const clearCart = () => {
    setCartState((prev) => ({ ...prev, items: [] }))
  }

  const totalItems = cartState.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart: cartState.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

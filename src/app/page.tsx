'use client'

import { useState } from 'react'
import ProductList from './components/ProductList/ProductList'
import { mockProducts } from './mocks/products'
import type { Produto } from './types/product'

export default function HomePage() {
  const products = mockProducts
  const [favorites, setFavorites] = useState<Produto[]>([])

  return (
    <main>
      <div className="container p-5">
        <ProductList
          products={products}
          favorites={favorites}
          setFavorites={setFavorites}
        />
      </div>
    </main>
  )
}

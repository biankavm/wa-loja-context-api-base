import { calculateDiscountedPrice } from '@/app/helpers'
import { Product } from '@/app/types/product'
import Image from 'next/image'

interface ProductCardProps {
  product: Product
  favorites: Product[]
  setFavorites: React.Dispatch<React.SetStateAction<Product[]>>
  showImage?: boolean
  showButton?: boolean
}

export default function ProductCard({
  product,
  favorites,
  setFavorites,
  showImage = true,
  showButton = true
}: ProductCardProps) {
  const addToFavorites = (productToAdd: Product) => {
    setFavorites((currentFavorites) => [...currentFavorites, productToAdd])
  }

  const isFavorite = favorites.some((item) => item.id === product.id)

  return (
    <div className='col'>
      <div className='card h-100 border-0 shadow-sm rounded-4'>
        {showImage ? (
          <Image
            src={product.fotos[0].src}
            className='card-img-top rounded-top-4 bg-body-tertiary p-2 object-fit-contain'
            alt={product.fotos[0].titulo}
            width={150}
            height={180}
          />
        ) : null}

        <div className='card-body d-flex flex-column'>
          <span className='badge text-success-emphasis bg-success-subtle border border-success-subtle align-self-start mb-2'>
            {product.desconto}% de desconto
          </span>

          <h6 className='card-title fw-semibold mb-1'>{product.nome}</h6>

          <span className='text-body-secondary small text-decoration-line-through'>
            R$ {product.preco}
          </span>

          <p className='fs-5 fw-bold mb-3'>
            R${' '}
            {calculateDiscountedPrice(Number(product.preco), product.desconto)}
          </p>
          {showButton ? (
            <button
              className={
                isFavorite
                  ? 'btn btn-success d-block w-100 mt-auto rounded-3'
                  : 'btn btn-primary d-block w-100 mt-auto rounded-3'
              }
              type='button'
              onClick={() => addToFavorites(product)}
              disabled={isFavorite}
            >
              {isFavorite ? 'Favoritado' : 'Favoritar'}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

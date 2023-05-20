import Favourite from "@/app/components/ui/Favourite"
import PlusIco from "@/app/components/ui/Plus"
import Image from "next/image"
import styles from "./Product.module.scss"
import Link from "next/link"
import { useAppDispatch } from "@/app/hooks/useAppDispatch"
import { toggleFavorite } from "@/app/redux/favorite/favorite.slice"
import { useAuth } from "@/app/hooks/useAuth"
import { IProduct } from "@/app/types/product.interface"
import { useCreateAddressMutation } from "@/app/redux/rtk-query/address.api"
import { useCreateFavoriteMutation } from "@/app/redux/rtk-query/favorite.api"
import { useState } from "react"
import classNames from "classnames"
import favorite from "@/pages/profile/favorite"
const Product = ({ product, favoriteCheck, favoriteLoading }: any) => {
  const dispatch = useAppDispatch()
  const { user } = useAuth()

  // const isFavoriteCheck =
  const [createFavorite] = useCreateFavoriteMutation()
  const [isFavorite, setIsFavorite] = useState(favoriteCheck)
  const saveToFavorite = (product: IProduct) => {
    createFavorite({ productId: product.id }).unwrap()
  }

  return (
    <div className={styles.product}>
      <Image
        className={styles.product__image}
        src={`http://localhost:8080/api/files/${product.productPath}`}
        width={331}
        height={270}
        alt='product'
      />
      <Link href={`/products/product/${product.id}`} className={styles.product__title}>
        {product.name}
      </Link>
      <p className={styles.product__weight}>Вес: {product.weight} г</p>
      <p className={styles.product__desc}>{product.description}</p>
      <div className={styles.product__footer}>
        <p className={styles.product__footer__price}>
          {product.price} <span>грн</span>
        </p>
        <div className={styles.product__footer__buttons}>
          <button
            onClick={() => {
              console.log("хз чо")
              user ? saveToFavorite(product) : dispatch(toggleFavorite(product))
              setIsFavorite(!favoriteCheck)
            }}
            className={classNames(
              isFavorite
                ? [styles.product__footer__buttons__favouriteaccept]
                : [styles.product__footer__buttons__favourite]
            )}
            // className={styles.product__footer__buttons__favourite}
          >
            {isFavorite ? (
              <Favourite fill={"#ffffff"} color={"#ffffff"} />
            ) : (
              <Favourite fill={"#FF6633"} color={"evenodd"} />
            )}
          </button>
          <button className={styles.product__footer__buttons__plus}>
            <PlusIco />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product

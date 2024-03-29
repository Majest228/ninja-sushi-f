import fish from "@/app/assets/fish.png"
import Navigation from "@/app/components/Navigation/Navigation"
import FavouriteIco from "@/app/components/ui/Favourite"
import Image from "next/image"
import { useState } from "react"
import arrow from "../../../assets/arrow-gray.png"
import cart from "../../../assets/cart.png"
import Switch from '../../ui/components/switch/Switch'
import styles from "./Single.module.scss"

const Single = ({ product }) => {
	const [switchState, setSwitchState] = useState(true)

	const products = [
		{
			id: 0,
			name: "Лосось",
			photo: fish,
		},
		{
			id: 1,
			name: "Угорь",
			photo: fish,
		},
		{
			id: 2,
			name: "Тунец",
			photo: fish,
		},
		{
			id: 3,
			name: "Куриное филе",
			photo: fish,
		},
	]
	return (
		<div className={styles.product}>
			<Navigation />
			<div className={styles.product__container}>
				<div className={styles.product__content}>
					<div className={styles.product__content__left}>
						<Image src={`http://localhost:8080/api/files/${product.productPath}`} width={645} height={416} alt={"item"} />
					</div>
					<div className={styles.product__content__right}>
						<div className={styles.product__content__right__tags}>
							<div className={styles.product__content__right__tags__hit}>
								<h3>Hit</h3>
							</div>
							<div className={styles.product__content__right__tags__new}>
								<h3>New</h3>
							</div>
						</div>
						<h3 className={styles.product__content__right__title}>
							{product.name}
						</h3>
						<p className={styles.product__content__right__price}>Вес: {product.weight}г</p>
						<span className={styles.product__content__right__list}>
							Состав:
						</span>
						<div className={styles.product__content__right__list__items}>
							{products.map((product) => (
								<div
									className={styles.product__content__right__list__items__item}
								>
									<Image src={product.photo} alt='product' />
									<p>{product.name}</p>
								</div>
							))}
							<button
								className={styles.product__content__right__list__items__arrow}
							>
								<Image src={arrow} alt={"arrow"} />
							</button>
						</div>
						<div className={styles.product__content__right__switch}>
							<Switch label='Notifications' />
							<p>Безлактозное</p>
						</div>
						<div className={styles.product__content__right__footer}>
							<h3>
								{product.price} <span>грн</span>
							</h3>
							<button
								className={styles.product__content__right__footer__basket}
							>
								<p>В корзину</p>
								<Image src={cart} alt={"cart"} />
							</button>
							<button
								className={styles.product__content__right__footer__favorite}
							>
								<FavouriteIco />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Single
import { useState } from "react"
import Profile from "../Profile"
import styles from "../Profile.module.scss"
import Image from "next/image"
import history from "../../../../assets/history.png"
import orderArrow from "../../../../assets/order-arrow.png"
import order from "../../../../assets/item.png"
import orderItem from "../../../../assets/orderitem.png"
import HistoryDate from "./HistoryDate"
import HistoryItem from "./HistoryItem"
const History = () => {
  const [active, setActive] = useState("histore-order")
  return (
    <Profile active={active}>
      <h3 className={styles.profile__content__right__text__title}>История заказов</h3>
      <div className={styles.profile__content__history}>
        <div className={styles.profile__content__history__block}>
          <Image src={history} alt='history' />
          <div className={styles.profile__content__history__block__right}>
            <h3>У вас нет заказов</h3>
            <p>Переходите в интересующую вас категорию и сделайте свой первый заказ</p>
          </div>
        </div>
        <h3 className={styles.profile__content__history__title}>Готовятся</h3>
        <div className={styles.profile__content__history__process}>
          <div className={styles.profile__content__history__process__header}>
            <div className={styles.profile__content__history__process__header__left}>
              <button className={styles.profile__content__history__process__header__arrow}>
                <Image src={orderArrow} alt='order-arrow' width={20} height={11} />
              </button>
              <div className={styles.profile__content__history__process__header__date}>
                <span>20 мая 2020</span>
                <p># 86352</p>
              </div>
              <div className={styles.profile__content__history__process__header__img}>
                <Image src={order} alt='order' width={54} height={54} />
              </div>
              <div className={styles.profile__content__history__process__header__img}>
                <Image src={order} alt='order' width={54} height={54} />
              </div>
              <div className={styles.profile__content__history__process__header__img}>
                <Image src={order} alt='order' width={54} height={54} />
              </div>
              <div className={styles.profile__content__history__process__header__img}>
                <Image src={order} alt='order' width={54} height={54} />
              </div>
            </div>
            <div className={styles.profile__content__history__process__header__right}>
              <div className={styles.profile__content__history__process__header__right__count}>
                <span>Кол-во</span>
                <p>7</p>
              </div>
              <div className={styles.profile__content__history__process__header__right__end}>
                <span
                  className={styles.profile__content__history__process__header__right__end__title}
                >
                  Итого
                </span>
                <p className={styles.profile__content__history__process__header__right__end__price}>
                  338 <span>грн</span>
                </p>
              </div>
            </div>
          </div>
          <HistoryDate />
          <div className={styles.profile__content__history__process__order}>
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
          </div>
        </div>
      </div>
    </Profile>
  )
}

export default History

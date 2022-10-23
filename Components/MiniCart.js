import React from "react";
import styles from "../styles/MiniCart.module.css";
import Image from "next/image";
import Delete from "/images/icon-delete.svg";
import imageThumbnail from "/images/image-product-1-thumbnail.jpg";
import { useDispatch } from "react-redux";
import { invertCart } from "../redux/cartOpenerSlice";
import { useSelector } from "react-redux";
import { incrementTo } from "../redux/cartCountSlice";

export default function MiniCart({ prevCost, totalCost }) {
  const cartCounter = useSelector((state) => state.cartCounter.count);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <h1 className={styles.head}>Cart</h1>
      <div className={styles.content}>
        {cartCounter > 0 ? (
          <div>
            <div className={styles.list}>
              <Image
                className={styles.thumbnails}
                src={imageThumbnail}
                alt="thumbnail"
                layout="fixed"
                width={60}
                height={60}
              />
              <div className={styles.column}>
                <span>Autumn Limited Edition</span>
                <span>
                  {`$${prevCost.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}`}{" "}
                  X {cartCounter}{" "}
                  <b>{`$${totalCost.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}`}</b>
                </span>
              </div>
              <Image
                className={styles.delete}
                src={Delete}
                alt="delete"
                onClick={() => {
                  dispatch(incrementTo(0));
                }}
              />
            </div>
            <button
              className={styles.checkout_btn}
              onClick={() => dispatch(invertCart())}
            >
              Checkout
            </button>
          </div>
        ) : (
          <div> your cart is empty</div>
        )}
      </div>
    </div>
  );
}

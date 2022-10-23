import React, { useState, Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useRef, useEffect } from "react";
import { invert } from "../redux/menuToggleSlice";
import { invertCart } from "../redux/cartOpenerSlice";
import Image from "next/image";
import IconMenu from "../images/icon-menu.svg";
import IconClosed from "../images/icon-close.svg";
import styles from "../styles/Header.module.css";
import Logo from "../images/logo.svg";
import Cart from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";

export default function Header({ body, actualBody }) {
  const menuToggle = useSelector((state) => state.menuToggle.value);
  const cartCounter = useSelector((state) => state.cartCounter.count);
  const dispatch = useDispatch();
  const ref = useRef();
  const cartToggler = useSelector((state) => state.cartInverter.count);
  const [isDesktop, setDesktop] = useState(false);

  // useEffect(() => {
  //   const onPageLoad = () => {
  //     if (menuToggle) {
  //       ref.current.style.backgroundColor = "white";
  //       // console.log(body);
  //       // // body.current.style.backgroundColor = "red";
  //     } else {
  //       ref.current.style.backgroundColor = "gray";
  //     }
  //   };
  //   if (document.readyState === "complete") {
  //     onPageLoad();
  //   } else {
  //     window.addEventListener("load", onPageLoad);
  //     return () => window.removeEventListener("load", onPageLoad);
  //   }
  // }, [menuToggle, body]);

  //check if in mobile or desktop
  useEffect(() => {
    if (window.innerWidth > 600) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 600) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  //alter background when sidebar is open
  useEffect(() => {
    let actualRef = ref.current;
    if (!menuToggle) {
      ref.current.style.backgroundColor = "transparent";
      document.body.style.backgroundColor = "gray";
    }
    return () => {
      // actualRef.style.backgroundColor = "white";
      document.body.style.backgroundColor = "white";
    };
  });

  return (
    <div className={styles.container} ref={ref}>
      {!isDesktop ? (
        <ul className={styles.list}>
          <li
            className={styles.menu}
            onClick={() => {
              dispatch(invert());
            }}
          >
            {menuToggle ? (
              <Image src={IconMenu} alt="icon-menu" height={10} width={15} />
            ) : (
              <Image src={IconClosed} alt="icon-close" height={15} width={15} />
            )}
          </li>
          <li className={styles.logo}>
            <Image src={Logo} alt="sneakers" height={15} width={120} />
          </li>

          <li
            className={styles.cart_list}
            onClick={() => {
              dispatch(invertCart());
            }}
          >
            <Image src={Cart} alt="cart" height={20} width={20} />
            {cartCounter < 1 ? null : (
              <span className={styles.count_no}>{cartCounter}</span>
            )}
          </li>

          <li className={styles.avatar}>
            <Image src={Avatar} alt="avatar" height={25} width={25} />
          </li>
        </ul>
      ) : (
        <>
          <span className={styles.logo}>
            <Image src={Logo} alt="sneakers" height={20} width={120} />
          </span>
          <ul className={styles.list}>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <span
            className={styles.cart_list}
            onClick={() => {
              dispatch(invertCart());
            }}
          >
            <Image
              src={Cart}
              alt="cart"
              height={isDesktop ? "30" : "20"}
              width={isDesktop ? "30" : "20"}
            />
            {cartCounter < 1 ? null : (
              <span className={styles.count_no}>{cartCounter}</span>
            )}
          </span>
          <span className={styles.avatar}>
            <Image
              src={Avatar}
              alt="avatar"
              height={isDesktop ? "50" : "30"}
              width={isDesktop ? "50" : "30"}
            />
          </span>
        </>
      )}
    </div>
  );
}

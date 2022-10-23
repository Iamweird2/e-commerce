import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import Modal from "../Components/Modal";
import Image from "next/image";
import Img1 from "../images/image-product-1.jpg";
import Img2 from "../images/image-product-2.jpg";
import Img3 from "../images/image-product-3.jpg";
import Img4 from "../images/image-product-4.jpg";
import left from "../images/icon-previous.svg";
import right from "../images/icon-next.svg";
import cart from "../images/icon-cart.svg";
import whitecart from "../images/icon-cart-white.svg";
import Counter from "../Components/Counter.js";
import { incrementTo } from "../redux/cartCountSlice";
import MiniCart from "../Components/MiniCart";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  //states
  const count = useSelector((state) => state.counter.count);
  const cartCounter = useSelector((state) => state.cartCounter.count);
  const dispatch = useDispatch();
  const cartToggler = useSelector((state) => state.cartInverter.count);
  const menuToggle = useSelector((state) => state.menuToggle.value);
  const ref = useRef();
  const images = useRef();
  const prevCost = 125.0;
  const actualCost = 375.0;
  const totalCost = prevCost * cartCounter;
  const [isDesktop, setDesktop] = useState(false);
  const [modal, setModal] = useState(false);
  const sick = `they'll`;

  //useEffect for background opacity
  useEffect(() => {
    const onPageLoad = () => {
      if (!menuToggle || modal) {
        document.body.style.backgroundColor = "gray";
        ref.current.style.overflowY = "clip";
        ref.current.style.height = "100%";
        ref.current.style.color = "black";
      } else {
        document.body.style.backgroundColor = "white";
        ref.current.style.overflowY = "auto";
        ref.current.style.height = "100%";
      }
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, [menuToggle, modal]);

  //useEffect for desktop display
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

  //images
  const [Images, setImages] = useState(Img1);
  const ImageArray = [
    { id: "1", src: Img1 },
    { id: "2", src: Img2 },
    { id: "3", src: Img3 },
    { id: "4", src: Img4 },
  ];

  //next and previous buttons
  const goToPrevious = () => {
    // const currentIndex = ImageArray.indexOf()
    if (Images == ImageArray[0].src) {
      setImages(ImageArray[ImageArray.length - 1].src);
    } else if (Images == ImageArray[1].src) {
      setImages(ImageArray[0].src);
    } else if (Images == ImageArray[2].src) {
      setImages(ImageArray[1].src);
    } else if (Images == ImageArray[3].src) {
      setImages(ImageArray[2].src);
    }
  };
  const goToNext = () => {
    // const currentIndex = ImageArray.indexOf()
    if (Images == ImageArray[0].src) {
      setImages(ImageArray[1].src);
    } else if (Images == ImageArray[1].src) {
      setImages(ImageArray[2].src);
    } else if (Images == ImageArray[2].src) {
      setImages(ImageArray[3].src);
    } else if (Images == ImageArray[3].src) {
      setImages(ImageArray[0].src);
    }
  };

  return (
    <div className={styles.container}>
      {cartToggler ? (
        <MiniCart prevCost={prevCost} totalCost={totalCost} />
      ) : null}
      {modal ? (
        <Modal
          setModal={setModal}
          Images={Images}
          setImages={setImages}
          ImageArray={ImageArray}
          left={left}
          right={right}
          priority
        />
      ) : (
        ""
      )}
      <div ref={ref} className={styles.image_content}>
        <div className={styles.image_container}>
          <div className={styles.actual_image_container}>
            <Image
              src={Images}
              alt="sneakers"
              className={styles.image}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              onClick={() => {
                isDesktop ? setModal(true) : "";
              }}
            />
            <span className={styles.previous}>
              <Image
                src={left}
                alt="previous"
                width={15}
                height={15}
                onClick={() => goToPrevious()}
              />
            </span>
            <span className={styles.next}>
              <Image
                src={right}
                alt="next"
                width={15}
                height={15}
                onClick={() => goToNext()}
              />
            </span>
          </div>
          {isDesktop ? (
            <div className={styles.slider_images}>
              {ImageArray.map((each) => {
                return (
                  <span
                    key={each.id}
                    className={
                      each.src === Images
                        ? styles.mini_slider_images_active
                        : styles.mini_slider_images
                    }
                  >
                    <Image
                      onClick={() => setImages(each.src)}
                      className={styles.actual_mini_slider_images}
                      src={each.src}
                      layout="responsive"
                      alt="slider images"
                      width={130}
                      height={130}
                    />
                  </span>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={styles.content}>
          <h3 className={styles.mini_name}> SNEAKERS COMPANY</h3>
          <h1 className={styles.name}> Fall Limited Edition Sneakers</h1>
          <p className={styles.note}>
            These low-profile sneakers are your perfect casual wear companion.
            featuring a durable rubber outer sole, {sick} withstand everything
            the weather can offer.
          </p>
          <div className={styles.price_range}>
            <span className={styles.now}>{`$${prevCost.toLocaleString("en-US", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}`}</span>
            <span className={styles.discount}>50%</span>
            <span className={styles.actual}>{`$${actualCost.toLocaleString(
              "en-US",
              { maximumFractionDigits: 2, minimumFractionDigits: 2 }
            )}`}</span>
          </div>
          <span
            className={styles.actual_desktop}
          >{`$${actualCost.toLocaleString("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}`}</span>
          <div className={styles.counter_btn}>
            <Counter />
            <button
              className={styles.btn}
              onClick={
                () => dispatch(incrementTo(count))
                // console.log({ cartCounter })
              }
            >
              <Image
                src={whitecart}
                width={30}
                height={30}
                alt="cart"
                className={cart}
              />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

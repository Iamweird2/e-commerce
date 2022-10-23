import React from "react";
import styles from "../styles/modal.module.css";
import Image from "next/image";
import close from "/images/icon-close-modal.svg";

export default function Modal({
  Images,
  setImages,
  ImageArray,
  left,
  right,
  setModal,
}) {
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
      <div className={styles.close} onClick={() => setModal(false)}>
        <Image src={close} alt="menu close" width={30} height={30} />
      </div>
      <div className={styles.content}>
        <div className={styles.main_image_container}>
          <Image
            src={Images}
            alt="modal"
            layout="responsive"
            className={styles.main_image}
          />
          <span className={styles.previous}>
            <Image
              src={left}
              alt="previous"
              width={30}
              height={30}
              onClick={() => goToPrevious()}
            />
          </span>
          <span className={styles.next}>
            <Image
              src={right}
              alt="next"
              width={30}
              height={30}
              onClick={() => goToNext()}
            />
          </span>
        </div>
        <div className={styles.slider_images}>
          {ImageArray.map((each) => {
            return (
              <span
                key={each.id}
                className={
                  each.src === Images
                    ? styles.each_slider_image_active
                    : styles.each_slider_image
                }
              >
                <Image
                  onClick={() => setImages(each.src)}
                  src={each.src}
                  alt="slider-images"
                  layout="responsive"
                />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

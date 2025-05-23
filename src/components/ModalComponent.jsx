import React, { useEffect, useRef, useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import { motion, AnimatePresence } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer"
import { ChevronLeft, ChevronRight } from "react-feather";

const ModalComponent = ({ project, closeModal, locale }) => {
  const divRef = useRef(null);
  const [margin, setMargin] = useState(0);
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);


  const openFullScreen = (index) => {
    setSelectedImageIndex(index);
    setOpenSecondModal(true);
  };

  useEffect(() => {
    if (divRef.current) {
      const height = divRef.current.offsetHeight;
      setMargin(height + 20);
    }
  }, [project, locale]);

  return (
    <AnimatePresence>
      {project != null && (
        <motion.div
          key={project ? project.title : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={"modal-wrapper"}
          onClick={() => {
            setTimeout(() => closeModal(), 100);
          }}
        >
          <RemoveScroll
            className="modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div ref={divRef}>
              <h2>{project.title}</h2>
              <span className="creationDate">{project.createdAt}</span>
              <span
                className="close"
                onClick={() => {
                  setTimeout(() => closeModal(), 500);
                }}
              >
                &times;
              </span>
            </div>
            <div
              style={{ marginTop: `${margin}px` }}
              className={`card-content ${project.styles.includes("desktopGallery")
                ? "desktopGallery-parent"
                : project.styles.includes("horizontalGallery")
                  ? "horizontalGallery-parent"
                  : project.styles.includes("ios") ||
                    project.styles.includes("phoneGallery")
                    ? "phoneGallery-parent"
                    : ""
                } 
               ${project.styles.includes("desktopGalleryNoScale")
                  ? "desktopGalleryNoScale-parent"
                  : ""
                }`}
            >
              <div className="content">
                <h3>{locale == "pl" ? "Opis" : "Description"}</h3>
                {project.description?.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
                {project.features && (
                  <>
                    <h3>{locale == "pl" ? "Właściwości" : "Features"}</h3>
                    {project.features?.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </>
                )}
                <div className="github-links-container">
                  {project.githubLinks?.map((link) => (
                    <a
                      key={link.title}
                      href={link.src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bxl-github"></i>
                      {link.title}
                    </a>
                  ))}
                </div>
                <div></div>
              </div>
              <div className={`gallery ${project.styles}`}>
                {project.mobile ? (
                  <div className="phone">
                    <div className="screen">
                      <ImageCarousel
                        autoSlide={true}
                        children={project.gallery}
                        inDiv={project.inDiv}
                        openFullScreen={openFullScreen}
                      />
                    </div>
                  </div>
                ) : (
                  <ImageCarousel
                    autoSlide={true}
                    children={project.gallery}
                    inDiv={project.inDiv}
                    openFullScreen={openFullScreen}
                  />
                )}
              </div>
            </div>
            {project.badges && (
              <div className="badgesRow">
                {project.badges?.map((badge, index) => (
                  <img key={index} src={badge.link} alt={badge.alt} />
                ))}
              </div>
            )}
          </RemoveScroll>
        </motion.div>
      )}
      {openSecondModal && (
        <motion.div
          key="secondModal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={"second-modal-wrapper"}
          onClick={() => setOpenSecondModal(false)}
        >
          <RemoveScroll
            className="second-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="gallery-modal">
                {
                  project.gallery[selectedImageIndex].type ==="image"?(
                    <Image
                    className="scroll-item"
                    src={project.gallery[selectedImageIndex].image}
                    alt={project.gallery[selectedImageIndex].name}
                    placeholder="blur"
                  />
                  ):(

                    <VideoPlayer
                    src={project.gallery[selectedImageIndex].src}
                  />
                  )
                }

              <div className="gallery-nav">
                <button
                  className="left"
                  onClick={() =>
                    setSelectedImageIndex(
                      (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
                    )
                  }
                >
                  <ChevronLeft size={60} />
                </button>
                <button
                  className="right"
                  onClick={() =>
                    setSelectedImageIndex(
                      (prev) => (prev + 1) % project.gallery.length
                    )
                  }
                >
                  <ChevronRight size={60} />
                </button>
              </div>
              <span
                className="close"
                onClick={() => setOpenSecondModal(false)}
              >
                &times;
              </span>
            </div>
          </RemoveScroll>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalComponent;

import React, { useState } from 'react';
import ImageCarousel from "../components/ImageCarousel";
import { motion, AnimatePresence } from 'framer-motion';

const ModalComponent = ({ project, closeModal }) => {

  const [animationCompleted, setAnimationCompleted] = useState(false);
  return (
    <AnimatePresence>
      {project != null && (
        <motion.div
          key={project ? project.title : ""}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0 }}
          onAnimationComplete={(definition) => {
            console.log(definition)
            if (definition.opacity == 1) {
              setAnimationCompleted(true);
            }
            if (definition.opacity == 0) {
              setAnimationCompleted(false);
            }
          }}
          transition={{ duration: 0.5 }}
          className={`modal-wrapper ${animationCompleted?"":""}`}
          onClick={()=>{setAnimationCompleted(false);   setTimeout(() => closeModal(), 100);}}
        >



          <div className="modal-content"
           onClick={(event) => event.stopPropagation()}>
            <div>
              <h2>{project.title}</h2>
              <span className='creationDate'>{project.createdAt}</span>
              <span className="close" onClick={()=>{setAnimationCompleted(false);  setTimeout(() => closeModal(), 500);}}>&times;</span>
            </div>
            <div className={`card-content ${project.styles.includes("desktopGallery") ? "desktopGallery-parent" :
               (project.styles.includes("horizontalGallery") ? "horizontalGallery-parent" : 
               ((project.styles.includes("ios") || project.styles.includes("phoneGallery")) ? "phoneGallery-parent" : "")
              )} 
               ${project.styles.includes("desktopGalleryNoScale") ? "desktopGalleryNoScale-parent":""}`}>
              <div className="content">
                <h3>Description</h3>
                {project.description?.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
                {project.features && (
                  <>
                    <h3>Features</h3>
                    {project.features?.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-github"></i>{project.title}
                  </a>
                )}
                <div></div>
              </div>
              <div className={`gallery ${project.styles}`}>
                {project.mobile ? (
                  <div className="phone">
                    <div className="screen">
                      <ImageCarousel autoSlide={true} children={project.gallery} inDiv={project.inDiv} />
                    </div>
                  </div>
                ) : (
                  <ImageCarousel autoSlide={true} children={project.gallery} inDiv={project.inDiv} />
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
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalComponent;
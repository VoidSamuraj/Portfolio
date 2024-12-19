
import Image from "next/image";
import { motion } from "framer-motion"

export default function Projects({ projects, onClick, isMobile, locale }) {

    return (
        <>
            {

                <motion.h2
                    initial={{ translateY: "10%", scale: 0.5 }}
                    whileInView={{ translateY: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="heading">
                    {
                        locale === 'pl' ? (<>
                                Moje <span>Projekty</span>
                            </>) : (<>
                                My <span>Projects</span>
                            </>)
                    }
                </motion.h2>

            }

            <div className="galleryContainer">
                {
                    projects?.map((page, index) => {
                        return (
                            page.github ? (
                                isMobile ? (
                                    <div className="gallery-item" key={index}
                                        onClick={() => { window.open(page.githubLink, '_blank', 'noopener,noreferrer') }}
                                        style={{ background: "black" }}>
                                        <i className='bx bxl-github'></i>
                                        <div className="overlay">
                                            <h3>{page.title}</h3>
                                            <p>{page.shortDescription}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <motion.div
                                        initial={{ translateX: index % 2 == 0 ? "-50%" : "50%", translateY: "10%", scale: 0.5 }}
                                        whileInView={{ translateX: 0, translateY: 0, scale: 1 }}
                                        transition={{ duration: 0.4, amount: 0.01 }}
                                        viewport={{ once: true }}
                                        className="gallery-item" key={index}
                                        onClick={() => { window.open(page.githubLink, '_blank', 'noopener,noreferrer') }}
                                        style={{ background: "black" }}>
                                        <i className='bx bxl-github'></i>
                                        <div className="overlay">
                                            <h3>{page.title}</h3>
                                            <p>{page.shortDescription}</p>
                                        </div>
                                    </motion.div>
                                )
                            ) : (
                                isMobile ? (
                                    <div className="gallery-item" key={index}
                                        onClick={() => { onClick(page.title) }}>
                                        <Image src={page.preview} alt={`${page.title} preview`} className="gallery-image"
                                            placeholder="blur" priority/>
                                        <div className="overlay">
                                            <h3>{page.title}</h3>
                                            <p>{page.shortDescription}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <motion.div
                                        initial={{ translateX: index % 2 == 0 ? "-50%" : "50%", translateY: "10%", scale: 0.5 }}
                                        whileInView={{ translateX: 0, translateY: 0, scale: 1 }}
                                        transition={{ duration: 0.4, amount: 0.01 }}
                                        viewport={{ once: true }}
                                        className="gallery-item" key={index}
                                        onClick={() => { onClick(page.title) }}>
                                        <Image src={page.preview} alt={`${page.title} preview`} className="gallery-image"
                                            placeholder="blur" priority/>
                                        <div className="overlay">
                                            <h3>{page.title}</h3>
                                            <p>{page.shortDescription}</p>
                                        </div>
                                    </motion.div>
                                )
                            )
                        );
                    })
                }
            </div>
        </>);
}

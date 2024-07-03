import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import ModalComponent from "../components/ModalComponent"
import { Link} from 'react-scroll';
import { Project } from "../data/projectsData";


import { scaraPage, lumbzePage, lotPage, vtsPage, seamPage, tetrisPage, iosPage, githubPage } from "../data/projectsData"
import { useEffect, useState } from "react";


export default function Home() {

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [scaraPage, iosPage, lumbzePage, vtsPage, seamPage, lotPage, tetrisPage, githubPage]
  const pages = ['Home', 'Projects', 'Education'];
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const openModal = (projectTittle: string) => {
    const project = projects.find((project) => project.title === projectTittle);
    if(project != undefined)
      setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };
  const toggleMenu = () => {
    console.log("xddd")
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setTimeout(() => setIsPageLoaded(true), 4000);
    window.scrollTo(0, 0); 
    const allImages = document.querySelectorAll('img');

  }, []);





  return (
    <>
            <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Karol Robak</title>
          <link
            rel="stylesheet"
            href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          />
        </Head>
        
      <div className={`loader-container ${isPageLoaded ? "hidden" : ""}`}>
        <div className="loader">
          <svg viewBox="0 0 400 160" className="mySvg">
            <text x="29%" y="50%" dy=".32rem" textAnchor="middle" className="text-body">
              Karol
            </text>
            <text x="61%" y="50%" dy=".32rem" dx="3rem" textAnchor="middle" className="text-body">
              Robak
            </text>
          </svg>
        </div>
      </div>

      <header className={`header ${isPageLoaded ? "visible" : ""}`}>
          <a href="#home" className="logo">
            Karol <span>Robak</span>
          </a>
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={toggleMenu} />

<nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
  {pages?.map((page, index) => (
    <Link
      key={index}
      to={page.toLowerCase()}
      spy={true}
      smooth={true}
      duration={300}
      onClick={() => setIsMenuOpen(false)} // Zamknij menu po kliknięciu na link
    >
      {page}
    </Link>
  ))}
</nav>
        </header>

        <section className={`home ${isPageLoaded ? "visible" : ""}`} id="home">
          <Hero />
        </section>

        <section className={`projects ${isPageLoaded ? "visible" : ""}`} id="projects">
          <Projects projects={projects} onClick={openModal} />
        </section>
        <section className={`education ${isPageLoaded ? "visible" : ""}`} id="education">
          <Courses />
        </section>

        <Footer />
        <ModalComponent project={modalProject} closeModal={closeModal} />

    </>
    
  );
}

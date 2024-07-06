import Head from "next/head";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import ModalComponent from "../components/ModalComponent"
import LanguageSwitcher from "../components/LanguageSwitcher"
import { Link } from 'react-scroll';

import {
  Project,
  scaraPageEn, lumbzePageEn, lotPageEn, vtsPageEn,
  seamPageEn, tetrisPageEn, iosPageEn, githubPageEn,
  scaraPagePl, lumbzePagePl, lotPagePl, vtsPagePl,
  seamPagePl, tetrisPagePl, iosPagePl, githubPagePl 
} from "../data/projectsData"
import { useEffect, useState } from "react";


export default function Home() {

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [locale,setLocale] = useState('en');
 
  const projects = locale === 'pl' ?[scaraPagePl, iosPagePl, lumbzePagePl, vtsPagePl, seamPagePl, lotPagePl, tetrisPagePl, githubPagePl]: [scaraPageEn, iosPageEn, lumbzePageEn, vtsPageEn, seamPageEn, lotPageEn, tetrisPageEn, githubPageEn]
  const pages = ['Home', 'Projects', 'Education'];
  const pagesPl = ['O mnie', 'Projekty', 'Kursy'];
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const openModal = (projectTittle: string) => {
    const project = projects.find((project) => project.title === projectTittle);
    if (project != undefined)
      setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };
  const toggleMenu = () => {
    console.log("xddd")
    setIsMenuOpen(!isMenuOpen);
  };
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    setTimeout(() => setIsPageLoaded(true), 4000);
    window.scrollTo(0, 0);

    handleResize();
    window.addEventListener('resize', handleResize);

    setLocale(localStorage.getItem('locale') || 'en');

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, orientation=portrait" />
        <title>Karol Robak</title>
        <link rel='shortcut icon' href='%PUBLIC_URL%/favicon.ico'/>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>

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
          K<span>R</span>
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
              {locale === 'pl'?pagesPl[index]:page}
            </Link>
          ))}
          <LanguageSwitcher/>
        </nav>
      </header>

      <section className={`home ${isPageLoaded ? "visible" : ""}`} id="home">
        <Hero locale={locale}/>
      </section>

      <section className={`projects ${isPageLoaded ? "visible" : ""}`} id="projects">
        <Projects projects={projects} onClick={openModal} isMobile={isMobile} locale={locale} />
      </section>
      <section className={`education ${isPageLoaded ? "visible" : ""}`} id="education">
        <Courses locale={locale} />
      </section>

      <Footer locale={locale} />
      <ModalComponent project={modalProject} closeModal={closeModal} />

    </>

  );
}

import Image from "next/image";
import avatar from "../assets/images/avatar/avatar.jpg"
import Script from "next/script";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileScreen, faCode, faDesktop, faDatabase } from "@fortawesome/free-solid-svg-icons"
export default function Hero({ locale }) {

  const dataPl = {
    hi: "Cześć, Tu ",
    im: "Specjalizuję się w ",
    p1: "Jestem studentem informatyki, uwielbiam pisać aplikacje na Android z użyciem Kotlin, Java i Jetpack Compose, ale na tym się nie ograniczam.",
    p2: "Mam doświadczenie w tworzeniu aplikacji z wykorzystaniem Firebase, i tworzeniu stron internetowych z użyciem HTML, JS, and CSS i React. Pracowałem również nad aplikacjami desktopowymi z użyciem Java, JavaFX, i C/C++.",
    skills: "Umiejętności",
    skillsContent: [
      "Aplikacje Android: Kotlin/Java, Jetpack Compose",
      "Aplikacje Webowe: HTML, JavaScript, CSS, React",
      "Aplikacje Desktopowe: Java, JavaFX, C/C++",
      "Inne Technologie: Firebase, Python"
    ],
    hobby: "Hobby",
    hobbyp: "W wolnym czasie trenuję, między innymi podnosząc ciężary i biegając. Lubię słuchać podcastów, muzyki. Interesuje minie technologia druku 3D i robotyka.Tworzę projekty na Androida i Arduino oraz lubię rysować i tworzyć modele 3D."
  }
  const dataEn = {
    hi: "Hi, It's ",
    im: "I specialize in  ",
    p1: "I'm a computer science student,I love writing Android applications using Kotlin, Java and Jetpack Compose, but I don't limit myself to that.",
    p2: "I have experience creating applications with Firebase and designing websites with HTML, JS, and CSS. I've also worked on desktop applications using Java, JavaFX, and C/C++.",
    skills: "Skills",
    skillsContent: [
      "Android Applications: Kotlin/Java, Jetpack Compose",
      "Web Applications: HTML, JavaScript, CSS, React",
      "Desktop Applications: Java, JavaFX, C/C++",
      "Other Technologies: Firebase, Python"
    ],
    hobby: "Hobbies",
    hobbyp: "In my free time, I enjoy training, including weightlifting and running. I'm also passionate about podcasts, music, and exploring 3D printing technology and robotics. I actively engage in Android and Arduino projects and enjoy drawing and creating 3D models."
  }
  const data = locale == 'pl' ? dataPl : dataEn;
  return (
      <>
        <div className="home-content">
          <h1>
           {data.hi}<span>Karol</span>
          </h1>
          <h3 className="text-animation">
          {data.im}<span id="auto-type"></span>
          </h3>
          <p>{data.p1}</p>
          <p>{data.p2}</p>

          <h2>{data.skills}</h2>

          <table className="skills-list">
            <tbody>
              <tr className="skills-item">
                <td><FontAwesomeIcon icon={faMobileScreen} /></td>
                <td><span>{data.skillsContent[0]}</span></td>
              </tr>
              <tr className="skills-item">
                <td><FontAwesomeIcon icon={faCode} /></td>
                <td><span>{data.skillsContent[1]}</span></td>
              </tr>
              <tr className="skills-item">
                <td>
                  <FontAwesomeIcon icon={faDesktop} />
                </td>
                <td><span>{data.skillsContent[2]}</span></td>
              </tr>
              <tr className="skills-item">
                <td><FontAwesomeIcon icon={faDatabase} /></td>
                <td><span>{data.skillsContent[3]}</span></td>
              </tr>
            </tbody>
          </table>

          <h2>{data.hobby}</h2>
          <p>
          {data.hobbyp}
          </p>

          <div className="social-icons">
            <a href="https://github.com/VoidSamuraj" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://twitter.com/VoidSamuraj" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/karol-robak" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a href="mailto:karol.robak124@gmail.com">
              <i className='bx bxs-envelope' ></i>
            </a>
          </div>

        </div>
        <div className="home-img">
          <Image
            src={avatar}
            alt="Avatar"
            width={450}
            height={450}
            placeholder="blur"
          />
        </div>
        <Script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js" strategy="beforeInteractive" />
        <Script
          id="typed-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            try {
              var typed = new Typed("#auto-type", {
                strings: ["Android^1000", "Kotlin^1000", "Java^1000"],
                typeSpeed: 100,
                backSpeed: 100,
                loop: true
              });
            } catch (e) {
              document.getElementById("auto-type").innerHTML = "Android/Kotlin/Java";
            }
          `,
          }}
        />
      </>
  );
}
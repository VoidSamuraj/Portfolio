import Image from "next/image";
import avatar from "../assets/images/avatar/avatar.jpg"
import Script from "next/script";

export default function Hero() {

  return (
    <>
      <div className="home-content">
        <h1>
          Hi, It's <span>Karol</span>
        </h1>
        <h3 className="text-animation">
          I'm a <span id="auto-type"></span>
        </h3>
        <p>I'm a computer science student focused on Android development using Kotlin/Java and Jetpack Compose.</p>
        <p>I have experience in creating applications with Firebase, and designing websites with HTML, JS, and CSS. I've also worked on desktop applications using Java, JavaFX, and C/C++.</p>

        <h2>Skills</h2>

        <table className="skills-list">
          <tbody>
          <tr className="skills-item">
            <td><i className="fas fa-mobile-alt"></i></td>
            <td><span>Android Development: Kotlin/Java, Jetpack Compose</span></td>
          </tr>
          <tr className="skills-item">
            <td><i className="fas fa-code"></i></td>
            <td><span>Web Development: HTML, JavaScript, CSS, React</span></td>
          </tr>
          <tr className="skills-item">
            <td><i className="fas fa-desktop"></i></td>
            <td><span>Desktop Applications: Java, JavaFX, C/C++</span></td>
          </tr>
          <tr className="skills-item">
            <td><i className="fas fa-database"></i></td>
            <td><span>Other Technologies: Firebase, Python</span></td>
          </tr>
          </tbody>
        </table>

        <h2>Hobbies</h2>
        <p>
          In my free time, I enjoy fitness, including weightlifting and running. I'm also passionate about podcasts, music, and exploring 3D printing technology.
          I actively engage in Android and Arduino projects and enjoy drawing and creating 3D models.
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
                strings: ["Android Developer^1000", "Kotlin Developer^1000", "Java Developer^1000"],
                typeSpeed: 100,
                backSpeed: 100,
                loop: true
              });
            } catch (e) {
              document.getElementById("auto-type").innerHTML = "Android/Kotlin/Java Developer";
            }
          `,
        }}
      />
    </>
  );
}
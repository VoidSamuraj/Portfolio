

export default function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="social">
                    <a href="https://github.com/VoidSamuraj">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://twitter.com/VoidSamuraj">
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/karol-robak/">
                        <i className="bx bxl-linkedin-square"></i>
                    </a>
                    <a href="mailto:karol.robak124@gmail.com">
                        <i class='bx bxs-envelope' ></i>
                    </a>
                </div>
                <ul className="list">
                    <li>
                        <a href="#home">About Me</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                </ul>
                <p className="copyright">© Karol Robak | All Rights Reserved</p>
            </footer>
        </>
    );
}


export default function Footer({ locale }) {

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
                        <i className='bx bxs-envelope' ></i>
                    </a>
                    <a href="https://www.youtube.com/@karolrobak9515" target="_blank" rel="noopener noreferrer">
                        <i class='bx bxl-youtube'></i>
                    </a>
                </div>
                <ul className="list">
                    <li>
                        <a href="#home">{locale == 'pl' ? 'O mnie' : 'About Me'}</a>
                    </li>
                    <li>
                        <a href="#projects">{locale == 'pl' ? 'Projekty' : 'Projects'}</a>
                    </li>
                    <li>
                        <a href="#education">{locale == 'pl' ? 'Kursy' : 'Education'}</a>
                    </li>
                </ul>
                <p className="copyright">© Karol Robak | {locale == 'pl' ? 'Wszelkie prawa zastrzeżone' : 'All Rights Reserved'}</p>
            </footer>
        </>
    );
}
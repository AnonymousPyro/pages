import React from "react"

import styles from "./stylesFooter.module.css"

const Footer = () => {

    return (
        <footer class={`page-footer ${styles.bgcolor}`}>
            <div className={` text-center pt-2 pr-5`}>
                <ul className={styles.socials}>
                    <li><a href="https://github.com/AnonymousPyro"><i class="fab fa-github"></i></a></li>
                    <li><a href="https://www.instagram.com/_fan_of_overwatch_/"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/AnonymousPyro"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.facebook.com/palanikumar.rhubanraj"><i class="fab fa-facebook"></i></a></li>
                </ul>
            </div>
            <div class="footer-copyright text-center pb-2">
                <span className="text-light">© 2020 Copyright : </span>
                <a href="https://github.com/AnonymousPyro/" className={styles.nodec}>  AnonymousPyro</a>
            </div>
        </footer>
    )

}

export default Footer
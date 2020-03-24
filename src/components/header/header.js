import React from "react"
import { Link } from "gatsby"

import styles from "./stylesHeader.module.css"

const header = () => {
  return (
    <nav class={`navbar navbar-expand-lg navbar-dark ${styles.bgcolor}`}>
      <Link to="/"><span class={`navbar-brand ${styles.fav}`}>Anonymous Pyro</span></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/projects"><span class={`nav-link ${styles.navbarcl}`} >Projects</span></Link>
          </li>
          <li class="nav-item">
            <Link to="/about"><span class={`nav-link ${styles.navbarcl}`}>About</span></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default header

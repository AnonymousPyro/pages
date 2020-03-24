import React from "react"
import { Link } from "gatsby"

import Wrapper from "../components/wrapper"

import styles from "../components/CSS_Pages/styles404.module.css"

const _404 = () => {

    return (
        <Wrapper>
            <div class="text-center bg-warning">
                <div className={`py-5 ${styles.fulldiv}`}>
                    <h1 className="text-dark"><i class="fas fa-exclamation-circle"></i> 404 Not Found</h1>
                    <p className="text-dark">
                        You are seeing this page because the entered url is not found!<br/>
                        Please check the url in the address bar <br />
                        Or<br />
                        <Link><button className="my-3 btn btn-primary">Home</button></Link>
                    </p>
                </div>
            </div>
        </ Wrapper>
    )

}

export default _404
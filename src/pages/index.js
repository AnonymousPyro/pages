import React from "react"

import Wrapper from "../components/wrapper"

import styles from "../components/CSS_Pages/stylesIndex.module.css"

const hello_world = () => {

    return (
        <Wrapper>
            <div className={`my-2 d-flex flex-row align-items-center ${styles.index} `}>
                <div className="col-6">
                    <h1 className={` pl-5 ${styles.himsg} my-5`}>
                        Hi! I am Rhubanraj <br /><span className="nick">A.k.a AnonymousPyro</span>
                    </h1>
                </div>
                <div className="col-6 my-5">
                    <h1 className="himsg">
                        <p>
                            Pluck an 🍎 and let it down,<br />
                        Don't wait for it to fall,<br />
                        Create Opportunities,<br />
                        Don't Wait for them....<br />
                        </p>
                    </h1>
                </div>
            </div>
            <div className={`my-2 d-flex flex-row align-items-center ${styles.index} `}>
                <div className="col-4 p-3 my-5">
                    <h1 className={`pl-5`}>
                        My<br/>Interests ...
                    </h1>
                </div>
                <div className="my-5">
                    <p>
                        <ul>
                            <li>
                                Want to Start a Career in Data Science
                            </li>
                            <li>
                                Love Programming
                            </li>
                            <li>
                                Love Mathematics
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </ Wrapper>
    )

}

export default hello_world

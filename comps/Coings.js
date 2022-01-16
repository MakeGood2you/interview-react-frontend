import styles from "../styles/Coing.module.css";
import Coing from '../comps/Coing'
import React from "react";

const Coings = ({data}) => {
    return (
        <div className={styles.grid}>
            {data.map(({url, title}, index) => (
                <div key={index}>
                    <Coing url={url} title={title} index={index}/>
                </div>
            ))}
        </div>
    )
}

export default Coings

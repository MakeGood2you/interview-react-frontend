import styles from "../styles/Coing.module.css";
import Link from "next/link";
import MyImage from "./MyImage"
import React from "react";

const Coing = ({index, url, title}) => {
    return (
        <Link href={'/coing/' + index} key={index + 1}>
            <div key={index + 1} className={styles.card}>
                <p>{index + 1}</p>
                <MyImage src={url}/>
                <p>{title}</p>
            </div>
        </Link>
    )
}

export default Coing

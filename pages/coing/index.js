import React, {useState} from "react";
import styles from "../../styles/Coing.module.css";
import Head from "next/head";
import Coings from "../../comps/Coings";
import {fetcher} from "../../middleware/api";

const Items = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async (e) => {
        if (data.length) return
        setLoading(true)
        const result = await fetcher('http://localhost:9090/v1/images')
        setData(result)
        setLoading(false)
    }

    return (
        <div >
            <Head>
                <title> Coing | NextJS</title>
            </Head>
            <main className='main'>
                <div className={styles.header}>
                    <h1 className={styles.title}>
                        Coing
                    </h1>

                </div>
                <div>
                    <button className='btn' onClick={getData}>
                        {loading ? 'Loading...' : 'Load Images'}
                    </button>
                </div>
                <Coings data={data}/>
            </main>
        </div>
    )
}
export default Items
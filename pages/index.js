import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Index = () => {
    return (
        <>
            <Head>
                <title>Interview | Home</title>
                <meta name="keywords" content="interview"/>
            </Head>
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
                <div >

                    <Head>
                        <title> Home | NextJS</title>
                        <meta name="keywords" content="ninjas"/>
                    </Head>

                    <main className='main'>
                        <div>
                            <h1 className={styles.title}>
                                Coing
                            </h1>
                            <Link href="/coing/">
                                <a className='btn'>See Coing</a>
                            </Link>
                        </div>
                        <div>
                        </div>
                    </main>

                </div>
            </div>
        </>
    )
}

export default Index

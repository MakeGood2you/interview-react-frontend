import {fetcher} from "../../middleware/api";
import {useRouter} from 'next/router'
import useSwr from 'swr'
import Coing from '../../comps/Coing'

function CoingDetails() {
    const router = useRouter()

    const goBack = async () => {
        await router.push('/coing')
    }

    const {data, error} = useSwr(`http://localhost:9090/v1/images/${router.query.id}`, fetcher)
    if (error) return <div>Failed to load coing</div>
    if (!data) return <div>Loading...</div>
    const {index, title, url} = data
    return <>
        <button onClick={goBack} className='btn'>
            go back
        </button>
        <Coing index={index} url={url} title={title}/>
    </>
}

export default CoingDetails
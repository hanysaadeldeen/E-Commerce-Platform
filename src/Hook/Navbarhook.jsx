
import { useSearchParams } from 'react-router-dom'

const Navbarhook = () => {


    const [searchParams, setSearchParams] = useSearchParams({
        q: ""
    })
    const searchq = searchParams.get("q")



    // `page=${page}&keyword=${word}&limit=${limit}&sort=${sort}&${querycat}${pricefromsting}${pricetosting}`
    return [setSearchParams, searchq]
}

export default Navbarhook
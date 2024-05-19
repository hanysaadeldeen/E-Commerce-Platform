import { useSearchParams } from "react-router-dom"

const Searchhook = () => {




    const [searchParams, setSearchParams] = useSearchParams({
        q: "", priceGte: "0", priceLte: "1500"
    })
    const searchq = searchParams.get("q")
    const searchpricegte = searchParams.get("priceGte")
    const searchpricelte = searchParams.get("priceLte")

    const clearAll = () => {
        setSearchParams({ q: "", priceGte: "0", priceLte: "1500" });
    }


    return [searchq, searchpricegte, searchpricelte, setSearchParams, clearAll]
}

export default Searchhook
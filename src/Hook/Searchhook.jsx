import { useSearchParams } from "react-router-dom"

const Searchhook = () => {




    const [searchParams, setSearchParams] = useSearchParams({
        q: "", priceGte: "0", priceLte: "15000"
    })
    const searchq = searchParams.get("q")
    const searchpricegte = searchParams.get("priceGte")
    const searchpricelte = searchParams.get("priceLte")

    const clearAll = () => {
        setSearchParams({ q: "", priceGte: "0", priceLte: "5000" });
    }


    return [searchq, searchpricegte, searchpricelte, setSearchParams, clearAll]
}

export default Searchhook
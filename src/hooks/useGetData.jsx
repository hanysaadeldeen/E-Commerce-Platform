
import basUrl from "../Api/baseUrl"



const UseGetData = async (url, params) => {
    const res = await basUrl.get(url, params)
    return res.data
}


const UseGetDataToken = async (url) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const res = await basUrl.get(url, config)
    return res.data
}

export { UseGetData, UseGetDataToken }



import basUrl from "../Api/baseUrl"




const useDeleteData = async (url) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };
    const res = await basUrl.delete(url, config);
    return res.data;
};

export default useDeleteData;

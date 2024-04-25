import basUrl from "../Api/baseUrl"



const useUpdateDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await basUrl.put(url, params, config);

  return res;
};

const useUpdateData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await basUrl.put(url, params, config);
  return res;
};
export { useUpdateDataWithImage, useUpdateData };
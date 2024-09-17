import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getArticles = async (query:string, currentPage:number) =>{
  const {data} = await axios.get("/search/photos", {
    params: {
      query: query,
      page: currentPage,
      per_page: 15,
      client_id: "3iBO2dYHv0gQdDrvyKrhPbz9j5Mp9OdxdZVMXDBTJak",
    },
  });
  return data.results; 
}
import { useEffect, useState } from "react";
import css from "./App.module.css"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import SearchBar from "./components/SearchBar/SearchBar"
import { getArticles } from "./api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";


function App() {

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const[error, setError] = useState(false)
  const[loader, setLoader] = useState(false)
  
  const [targetPhoto, setTargetPhoto] = useState({alt: "", url: ""})
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalContent, setModalContent] = useState(null);

useEffect(()=>{
  if(searchQuery.trim() === "") {
    return
  }

  async function fetchArticles() {
    try{
      setLoader(true)
      const fetchedArticles = await getArticles(searchQuery, page)
      setArticles((articles)=>[...articles, ...fetchedArticles])
    }
    catch{
      setArticles([])
      setError(true)
    }
    finally{
      setLoader(false)
    }
  }

  fetchArticles()
}, [searchQuery, page])

  const  handleSearch = async (query) =>{
    setSearchQuery(query)
    setPage(1)
    setArticles([])
  }

    const loadMore = async () =>{
      setPage(page+1)
    }

    const onImageClick = (alt, url) => {
      setTargetPhoto({alt, url});
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setTargetPhoto({alt: "", url: ""})
    };


  return (
    <div className={css.container}>
      {loader && <Loader/>}

      {error && <ErrorMessage/>}
      <SearchBar onSubmit={handleSearch}/>

      {articles !== null && <ImageGallery 
      items={articles} 
      onImageClick={onImageClick}
      />}
      {articles.length > 0 && <LoadMoreBtn loadMore={loadMore}/>}

      <ImageModal  
      isModalOpen={isModalOpen}
        closeModal={closeModal}
        targetPhoto={targetPhoto}
      />
    </div>
  )
}

export default App

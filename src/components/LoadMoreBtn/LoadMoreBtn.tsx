import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({loadMore}) => {
  return (
    <button className={css.btn} onClick={loadMore}>Load More</button>
  )
}

export default LoadMoreBtn
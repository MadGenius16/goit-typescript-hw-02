import { LoadMoreInterface } from '../../types'
import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({loadMore}: LoadMoreInterface) => {
  return (
    <button className={css.btn} onClick={loadMore}>Load More</button>
  )
}

export default LoadMoreBtn
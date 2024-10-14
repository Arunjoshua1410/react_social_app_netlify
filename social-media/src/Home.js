
import Feed from './Feed';
import { useContext } from 'react';
import DataContext from './context.js/DataContext';
const Home = ({posts}) => {
  const {searchResults,fetchError,isLoading}=useContext(DataContext)
  return (
    <main className='Home'>
      {
        isLoading && <p className='stausMsg'>Loading Posts</p>
      }
      {
        !isLoading && fetchError && <p className='statusMsg' style={{color:'red'}}>
            {fetchError} 
        </p>
      }
      {
        !isLoading  && !fetchError &&
        (searchResults.length?
           <Feed posts={searchResults} />
       :
            <p style={{marginTop:"2rem"}}>
              No posts to Display
            </p>
          )
       }
    </main>
  )
}

export default Home
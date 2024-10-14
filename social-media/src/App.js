import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
//import {format} from 'date-fns'
//import { useEffect } from "react";
import { Routes,Route, useNavigate } from "react-router-dom";
//import useAxiosFetch from "./hooks/useAxiosFetch";
//import { useState } from "react";
//import api from "./api/posts";
import EditPost from "./EditPost";
//import useWindowSize  from "./hooks/useWindowSize";
import { DataProvider } from "./context.js/DataContext";
function App() {
  
/* useEffect(()=>{
  const fetchPosts=async()=>{
    try{
          const response=await api.get('/posts');
          setPosts(response.data);
    }
    catch(err){
        if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }else{
          console.log(`Error:${err.message}`);
        }
    }
  }
  fetchPosts();
},[]) */
  return (
    <div className="App">
      <DataProvider>
                  <Header
                  title="Social Media App"/>
                  <Nav
                    
                  />
                  <Routes>
                      <Route path="/" 
                          element={<Home 
                         
                          />}/>
                      <Route path="post">
                            <Route  index
                                element={<NewPost/>}/>
                              
                                <Route path=":id" element={<PostPage  />}/>
                          </Route>
                          <Route path="edit/:id" element={  
                                  <EditPost/>
                              }
                              />
                          <Route path="about"
                          element={<About/>}/>
                          <Route path="*"
                          element={<Missing/>}/>
                  </Routes>
                  <Footer/>
        </DataProvider>
    </div>
  );
}

export default App;

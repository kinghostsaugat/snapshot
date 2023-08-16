import './App.css';
import React from 'react';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import PhotoContextProvider from './context/PhotoContext';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ErrorPage from './error-page';

function App() {
  const handleSubmit = (e, history, searchEntry) => {
    // console.log(window.history);
    e.preventDefault();
    e.currentTarget.reset();
    let url = `search/${searchEntry}`;
    window.location.href = url
  }
  return (
    <PhotoContextProvider>
      <div className='container'>
      <Routes>
        {/* {<Header history={window.history} handleSubmit={handleSubmit} />}
        <Gallery /> */}
        <Route path='/' element={<App />} errorElement={<ErrorPage />} >
          <Route errorElement={<ErrorPage />}>
            <Route index element={<App />} />
            <Route path={`/search/:searchInput`}></Route>
          </Route>
        </Route>
      </Routes>
      </div>

        {/* <ul className='image-list'>
           {fetchedphoto && fetchedphoto.photo.map((image, i) => {
             const { farm, server, id, secret, title } = image;
               let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
              return <Image url={url} i={i} title={title} />
             })}
          </ul>      */}
    </PhotoContextProvider>

    // <div className="App">
    //   <>
    //     <form onSubmit={e => afterSubmission(e)}>
    //       <input type="Text" placeholder='Search Anything' onChange={e => setSearchValue(e.target.value)} />
    //       <button className='btn-search' type='submit'>Search</button>
    //     </form>
    //     <br />
    //     <div>
    //       <ul className='image-list'>
    //         {fetchedphoto && fetchedphoto.photo.map((image, i) => {
    //           const { farm, server, id, secret, title } = image;
    //           let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
    //           return <Image url={url} i={i} title={title} />
    //         })}
    //       </ul>
    //     </div>
    //   </>
    // </div>
  );
}

export default App;

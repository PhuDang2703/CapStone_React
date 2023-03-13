import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import renderRoutes from './routes';
import { Suspense } from 'react';
import { createBrowserHistory } from 'history';
import Skeleton from './Loader/Skeleton';
import { Row, Col } from 'antd';
import { Loader } from './Loader/Skeleton';

export const history = createBrowserHistory();
// const arrSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {

//   const renderListProduct = () => {
//    return arrSkeleton.map((item) => { return <Loader key={item}/>})
// }

  return (
    <>
    <Suspense fallback={<div className='container'><Loader/></div>}>
      <BrowserRouter history={history}>
        <Routes>
          {renderRoutes()}
    
          {/* HomeTemplate */}
          {/* <Route path='' element={<HomeTemplate/>}>
            <Route path='' element={<HomePage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='listmovie' element={<ListMoviePage/>}/>
          </Route> */}

          {/* AdminTemplate  */}
          {/* <Route path='admin' element={<AdminTemplate/>}/>
        <Route path='dashboard' element={<DashboardPage/>}/>
        <Route path='add-user' element={<AddUserPage/>}/>
        <Route path='add-movie' element={<AddMoviePage/>}/> */}

        </Routes>
      </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;

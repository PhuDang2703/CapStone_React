import React, { useEffect } from 'react'
import HomeCarousel from '../Layout/HomeCarousel/HomeCarousel'
import HomeMenu from './HomeMenu/HomeMenu'
import { useSelector, useDispatch } from 'react-redux'
import MultipleRows from '../../../components/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../../store/Actions/QuanLyPhimAction';
import { layDanhSachHeThongRapAction } from '../../../store/Actions/QuanLyRapAction';

export default function HomePage(props) {
  const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
  const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);
  const dispatch = useDispatch();

  console.log(arrFilm)

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action); //dispatch function từ thunk
    //Khi trang Home load lên sẽ dispatch gọi cái action
    dispatch(layDanhSachHeThongRapAction());
  }, [])

  // const renderFilms = () => {
  //   return arrFilm.map((phim, index) => {
  //     return <Film />
  //   })
  // }

  return (
    <div>
      <HomeCarousel />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">

          <MultipleRows arrFilm={arrFilm} />
          {/* {renderFilms()} */}

        </div>
      </section>

      <div className='mx-36'>
        <HomeMenu heThongRapChieu={heThongRapChieu}/>
      </div>

    </div>
  )
}


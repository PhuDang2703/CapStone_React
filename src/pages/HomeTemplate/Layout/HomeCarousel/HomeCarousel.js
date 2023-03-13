import { Carousel } from 'antd';
// import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCarouselAction } from '../../../../store/Actions/CarouselAction';



export default function HomeCarousel(props) {
    //Lấy state từ reducer thông qua useSelector
    const { arrImg } = useSelector(state => state.CarouselReducer)
    const dispatch = useDispatch();

    //Sẽ tự kích hoạt khi component load ra  
    useEffect(() => {  
        //1: action = {type:'', payload: data}
        //2: (phải cài middleware của redux-thunk để callbackFunction)
        dispatch(getCarouselAction());
    }, [])


    const contentStyle = {
        height: '600px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        // background: '#364d79',
    };

    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                    <img src={item.hinhAnh} className='w-full opacity-0' alt={item.hinhAnh} />
                </div>
            </div>
        })
    }

    return (
        <Carousel effect="fade">
            {renderImg()}

            {/* <div>
                <div style={contentStyle}>
                    <img src='https://picsum.photos/1000' className='w-full' alt='123' />
                </div>
            </div> */}
        </Carousel>
    )
}

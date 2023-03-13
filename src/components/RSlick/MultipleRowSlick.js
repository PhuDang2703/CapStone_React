import React, { Component } from "react";
import Slider from "react-slick";
import Film from "../Film/Film";
import Film_Flip from "../Film/Film_Flip";
import styleSlick from "./MultipleRowSlick.module.css";
import { SET_FILM_SAP_CHIEU, SET_FILM_DANG_CHIEU } from "../../store/Actions/type/QuanLyPhimType";
import { useSelector, useDispatch } from "react-redux";

//Vô customArrow trong react slick
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
        </div>

    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}

            style={{ ...style, display: "block", left: '-50px' }}
            onClick={onClick}
        >
        </div>
    );
}



const MultipleRows = (props) => {
    const dispatch = useDispatch();
    const { dangChieu, sapChieu } = useSelector(state => state.QuanLyPhimReducer);

    const renderFilms = () => {
        return props.arrFilm.map((item, index) => {
            return <div className="mt-2" key={index}  >
                <Film_Flip item={item} />
            </div>
        })
    }

    let activeClassDC = dangChieu === true ? 'active_Film' : 'none_active_Film';

    let activeClassSC = sapChieu === true ? 'active_Film' : 'none_active_Film';

    console.log('activeSC', activeClassSC)


    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "30px",
        padding: "30px",
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div>
            {/* import css styleSlick dạng module nên phải đóng ngoặc activeClassDC vuông */}
            <button className={`${styleSlick[activeClassDC]} px-8 py-3 font-semibold rounded bg-gray-800 text-white mr-2`} onClick={() => {
                const action = { type: SET_FILM_DANG_CHIEU }
                dispatch(action);
            }}>PHIM ĐANG CHIẾU</button>

            <button className={`${styleSlick[activeClassSC]} px-8 py-3 font-semibold rounded bg-white text-gray-800 border-gray-800 border`} onClick={() => {
                const action = { type: SET_FILM_SAP_CHIEU }
                dispatch(action);
            }}>PHIM SẮP CHIẾU</button>

            {/* <h2>Multiple Rows</h2> */}

            <Slider {...settings}>
                {renderFilms()}
            </Slider>

        </div>
    );
}

export default MultipleRows;
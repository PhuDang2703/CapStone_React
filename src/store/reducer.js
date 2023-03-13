import { combineReducers } from "redux";
import { CarouselReducer } from "./Reducer/CarouselReducer";
import { QuanLyPhimReducer } from "./Reducer/QuanLyPhimReducer";
import { QuanLyRapReducer } from "./Reducer/QuanLyRapReducer";
import {QuanLyNguoiDungReducer} from "./Reducer/QuanLyNguoiDungReducer";
import { QuanLyDatVeReducer } from "./Reducer/QuanLyDatVeReducer";

const rootReducer = combineReducers({
    //state ứng dụng
    CarouselReducer, 
    QuanLyPhimReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer,
});

export default rootReducer;
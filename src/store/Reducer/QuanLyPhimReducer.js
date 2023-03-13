import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU, SET_THONG_TIN_PHIM } from "../Actions/type/QuanLyPhimType";
import { SET_HE_THONG_RAP_CHIEU, SET_CHI_TIET_PHIM } from "../Actions/type/QuanLyRapType";

const stateDefault = {
    arrFilm: [
        {
            "maPhim": 5864,
            "tenPhim": "Nhà Kho Quỷ Ám - The Shed",
            "biDanh": "nha-kho-quy-am-the-shed",
            "trailer": "https://youtu.be/I_zJHC9tteQ",
            "   ": "https://movienew.cybersoft.edu.vn/hinhanh/nha-kho-quy-am-the-shed_gp00.jpg",
            "moTa": "Cậu thiếu niên Stan 17 tuổi vô tình phát hiện ra một ma cà rồng khát máu, vì sợ ánh mặt trời mà trốn trong nhà kho. Vốn chịu nhiều tổn thương và là kẻ yếu thế ở, Stan và cậu bạn thân quyết định dùng thứ vũ khí này để bảo vệ mình và trả thù những kẻ đã bắt nạt mình tại trường học. ‘Nhà kho quỷ ám’ của cậu trở thành mồ chôn của không biết bao nhiêu nạn nhân. Đến khi sự việc vượt ngoài tầm kiểm soát thì đã quá muộn.",
            "maNhom": "GP00",
            "ngayKhoiChieu": "2022-11-20T17:16:01.807",
            "danhGia": 5,
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
        }
    ],
    dangChieu: true,
    sapChieu: true,
    arrFilmDefault: [],
    filmDetail:{},

    thongTinPhim:{}

}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_PHIM: {
            state.arrFilm = action.arrFilm;
            state.arrFilmDefault = state.arrFilm;
            return { ...state }
        }
        case SET_FILM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu;
            //film.dangChieu trên backend bằng với state.dangChieu(true)
            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu === state.dangChieu);
            return { ...state }
        }
        case SET_FILM_SAP_CHIEU: {
            state.sapChieu = !state.sapChieu;

            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu === state.sapChieu);
            return { ...state }
        }

        case SET_CHI_TIET_PHIM :{
            state.filmDetail = action.filmDetail;
            return {...state};
        }

        case SET_THONG_TIN_PHIM: {
            state.thongTinPhim = action.thongTinPhim;
            return {...state}
        }


        default: return { ...state }
    }
}
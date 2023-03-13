import { SET_HE_THONG_RAP_CHIEU, SET_CHI_TIET_PHIM } from "./type/QuanLyRapType";
import { quanLyRapSerVice } from "../../services/QuanLyRapService";

export const layDanhSachHeThongRapAction = () => {
    console.log('abc')
    return async (dispatch) => {
        try{
            const result = await quanLyRapSerVice.layDanhSachHeThongRap();
            // Dữ liệu trên api trả về có định dạng content (trên network)
            console.log('result',result.data.content);

            if(result.status === 200) {
                //Lấy được dữ liệu từ api về  => reducer
                dispatch({
                    type:SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu:result.data.content
                })
            }


        }catch(errors) {
            console.log('errors',errors.response?.data)
        }

    }
} 

export const layThongTinChiTietPhim = (id) => {
    return async dispatch => {
        try{
            const result = await quanLyRapSerVice.layThongTinLichChieuPhim(id); //id là cái mã phim

            console.log('result',result);
            //Lấy được dữ liệu từ api về  => reducer

            dispatch({
                type:SET_CHI_TIET_PHIM,
                filmDetail: result.data.content
            })


        }
        catch(errors) {
            console.log('errors',errors.response?.data)

        }
    }


}
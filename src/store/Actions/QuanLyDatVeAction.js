import { SET_CHI_TIET_PHONG_VE, DAT_VE, DAT_VE_HOAN_TAT, CHUYEN_TAB } from "./type/QuanLyDatVeType";
import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/ThongTinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./LoadingActions";
import { connection } from "../..";

export const layChiTietPhongVeAction = (maLichChieu) => {

    return async dispatch => {

        try {

            const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);

            // console.log('result',result);
            if (result.status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }

        } catch (error) {

            console.log('error', error);
            console.log('error', error.response?.data);
        }
    }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {

    return async (dispatch, getState) => {
        try {

            dispatch(displayLoadingAction)

            const result = await quanLyDatVeService.datVe(thongTinDatVe);
            console.log(result.data.content);
            //Đặt vé thành công gọi api load lại phòng vé
            await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
            //Hiển thị đã đặt vé lên trc rồi mới tắt loading xong mới chuyển tab
            await dispatch({ type: DAT_VE_HOAN_TAT })
            await dispatch(hideLoadingAction);

            let userLogin = getState().QuanLyNguoiDungReducer.userLogin;
            connection.invoke('datGheThanhCong', userLogin.taiKhoan, thongTinDatVe.maLichChieu);

            dispatch({ type: CHUYEN_TAB });


        } catch (error) {
            dispatch(hideLoadingAction)
            console.log(error.response.data);
        }
    }

}

export const datGheAction = (ghe, maLichChieu) => {
   

    return async (dispatch, getState) => {

        //Đưa thông tin ghế lên reducer
        await dispatch({
            type: DAT_VE,
            gheDuocChon: ghe
        });

        //Call api về backend 
        let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat;
        let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;

        console.log('danhSachGheDangDat', danhSachGheDangDat);
        console.log('taiKhoan',taiKhoan);
        console.log('maLichChieu', maLichChieu);
        //Biến mảng thành chuỗi
        danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);

        //Call api signalR
        connection.invoke('datGhe', taiKhoan, danhSachGheDangDat, maLichChieu);

    }
}
import * as ActionType from "./type/QuanLyNguoiDungType";
import api from "../../util/apiUtil";
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { SET_THONG_TIN_NGUOI_DUNG } from "./type/QuanLyNguoiDungType";


export const actAuthLogin = (user, navigate) => {
    return (dispatch) => {
        dispatch(actAuthLoginRequest());
        api
            .post("/api/QuanLyNguoiDung/DangNhap", user)
            .then((result) => {
                if (result.data.content.maLoaiNguoiDung === "KhachHang") {
                    return Promise.reject({
                        response: {
                            data: {
                                content: "Bạn không có quyền truy cập!",
                            },
                        },
                    });
                }

                dispatch(actAuthLoginSuccess(result.data.content));

                //ở trong đây ( then ) là phải đăng nhập thành công mới vô được
                //luu trang thai login
                localStorage.setItem("UserAdmin", JSON.stringify(result.data.content));

                //redirect to admin
                navigate("/admin/addnew", { replace: true });
            })
            .catch((error) => {
                dispatch(actAuthLoginFail(error));
            });
    };
};


export const layThongTinNguoiDungAction = (thongTinDangNhap) => {

    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung();

            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                });
            }

            console.log('result', result);

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}


export const actAuthLoginRequest = () => {
    return {
        type: ActionType.AUTH_REQUEST,
    };
};

export const actAuthLoginSuccess = (data) => {
    return {
        type: ActionType.AUTH_SUCCESS,
        payload: data,
    };
};

export const actAuthLoginFail = (error) => {
    return {
        type: ActionType.AUTH_FAIL,
        payload: error,
    };
};
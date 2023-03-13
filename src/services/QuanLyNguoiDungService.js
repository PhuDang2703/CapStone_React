import api from "../util/apiUtil";
import { baseService } from "./BaseService";

export class QuanLyNguoiDungService extends baseService{
constructor(){
super();
}

dangNhap = (thongTinDangNhap) => { //Tài khoản, mật khẩu
    return api.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
}

layThongTinNguoiDung = () => {
    return api.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan');
}

}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();

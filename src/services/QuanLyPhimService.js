import api from "../util/apiUtil";
import { GROUPID } from "../util/setting/config";
import { baseService } from "./BaseService";

export class QuanLyPhimSerVice extends baseService{
constructor(){
super();
}

layDanhSachBanner = () => {
    return api.get(`/api/QuanLyPhim/LayDanhSachBanner`);
}

layDanhSachPhim = (tenPhim='') => {
    if(tenPhim.trim()!=''){
        return api.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`)
    }
    return api.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
}

themPhimUploadHinh = (formData) => {
    return api.post(`/api/QuanLyPhim/ThemPhimUploadHinh`,formData);
} 

layThongTinPhim = (maPhim) => {
    return api.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
}

capNhatPhimUpload = (formData) => {
    return api.post(`/api/QuanLyPhim/CapNhatPhimUpload`,formData);
}

xoaPhim = (maPhim) => {
    return api.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
}
}

export const quanLyPhimService = new QuanLyPhimSerVice();

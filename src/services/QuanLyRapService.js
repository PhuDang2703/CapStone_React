import api from "../util/apiUtil";
import { GROUPID } from "../util/setting/config";
import { baseService } from "./BaseService";

export class QuanLyRapSerVice extends baseService{
constructor(){
super();
}

layDanhSachHeThongRap = () => {
    return api.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
}

layThongTinLichChieuPhim = (maPhim) => {
    return api.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`)
}

layThongTinHeThongRap = () => {
    return api.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
}
layThongTinCumRap = (maHeThongRap) => {
    return api.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`);
}
}

export const quanLyRapSerVice = new QuanLyRapSerVice();

import { baseService } from "./BaseService";
import { ThongTinDatVe } from "../_core/ThongTinDatVe";
import api from "../util/apiUtil";


export class QuanLyDatVeService  extends baseService{
    constructor() {
        super();
    }

    layChiTietPhongVe = (maLichChieu) => { // mã lịch chiếu lấy từ url 
        return api.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }
    /* thongTinDatVe =  {
        "maLichChieu": 0,
        "danhSachVe": [
          {
            "maGhe": 0,
            "giaVe": 0
          }
        ]
      }*/ 
    
    datVe = (thongTinDatVe = new ThongTinDatVe()) => { 
        return api.post(`/api/QuanLyDatVe/DatVe`,thongTinDatVe);
    }
    
    taoLichChieu = (thongTinLichChieu) => {
        return api.post(`/api/QuanLyDatVe/TaoLichChieu`,thongTinLichChieu);
    }

}



export const quanLyDatVeService = new QuanLyDatVeService();

// import axios from "axios"
// import { DOMAIN } from "../../util/setting/config"
import { SET_CAROUSEL } from "./type/CarouselType"
import { quanLyPhimService } from "../../services/QuanLyPhimService"

export const getCarouselAction = () => {

    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachBanner();

            // const result = await axios({
            //     url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
            //     method: 'GET',
            // })

            //Đưa lên reducer 
            dispatch({
                type: SET_CAROUSEL,
                arrImg: result.data.content
            })

        } catch (error) {
            console.log("error", error)
        }
    }
}

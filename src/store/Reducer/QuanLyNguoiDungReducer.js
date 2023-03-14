import * as ActionType from "../Actions/type/QuanLyNguoiDungType"

let user = {};
if(localStorage.getItem("UserAdmin")) {
    user = JSON.parse(localStorage.getItem("UserAdmin"));
}

const initialState = {
  loading: false,
  data: null,
  error: null,
  thongTinNguoiDung: {},
  userLogin: user,
};

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTH_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;

      return { ...state };
    }

    case ActionType.AUTH_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;

      return { ...state };
    }

    case ActionType.AUTH_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;

      return { ...state };
    }

    case ActionType.SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

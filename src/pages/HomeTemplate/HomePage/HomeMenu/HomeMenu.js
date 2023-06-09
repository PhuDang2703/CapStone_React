import React, { Fragment } from 'react'
import { Radio, Space, Tabs } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment/moment';

const { TabPane } = Tabs;

export default class Demo extends React.PureComponent {


    state = {
        tabPosition: 'left',
    };

    changeTabPosition = e => {
        this.setState({ tabPosition: e.target.value });
    };
    componentDidMount() {

    }

    renderHeThongRap = () => {
        return this.props.heThongRapChieu?.map((heThongRap, index) => {
            let { tabPosition } = this.state;
            return <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width="50" />} key={index}>
                <Tabs tabPosition={tabPosition}>

                    {heThongRap.lstCumRap?.map((cumRap, index) => {
                        return <TabPane tab={
                            <div style={{ width: '300px', display: 'flex' }} >
                                <img src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg" width="50" /> <br />
                                <div className="text-left ml-2">
                                    {cumRap.tenCumRap}
                                    <p className="text-red-500">Chi tiết</p>
                                </div>
                            </div>
                        }

                            key={index}>
                            {/*Load phim tương ứng */}
                            {cumRap.danhSachPhim.slice(0, 6).map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className="my-5" >
                                        <div style={{ display: 'flex' }}>
                                            <img style={{ height: 75, width: 75 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />

                                            <div className="ml-2">
                                                <h1 className="text-2xl text-blue-900" >{phim.tenPhim}</h1>
                                                <p>{cumRap.diaChi}</p>

                                                <div className="grid grid-cols-6 gap-6">
                                                    {/* slice lấy 12 thằng trong mảng vì quá nhiều */}
                                                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="text-xl text-green-600" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </NavLink>
                                                    })}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            })}
                        </TabPane>

                    })}
                </Tabs>
            </TabPane>
        })
    }

    render() {

        const { tabPosition } = this.state;
        return (
            <>

                <Tabs tabPosition={tabPosition}>
                    {this.renderHeThongRap()}
                </Tabs>
            </>
        );
    }
}

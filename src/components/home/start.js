import React from 'react';
// import {Button, DatePicker} from 'antd';
import "antd/dist/antd.css";

class start extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className="C start">
                <div className="head">
                    <div className="year">2<br/>0<br/>2<br/>0</div>
                    <div className="arrow"></div>
                    <div className="key">KEYWORDS</div>
                    {/* <div className="nav">
                        <div className="item">工作</div>
                        <div className="item">宠物</div>
                        <div className="item">兴趣</div>
                        <div className="item">健身</div>
                    </div> */}
                </div>
                <div className="keywords">
                    <div className="item i1 big">工作</div>
                    <div className="item i2 big">健身</div>
                    <div className="item i3 big">PMP</div>
                    <div className="item i4 big">烘焙</div>
                    <div className="item i5 big">宠物</div>

                    <div className="item i6 middle">VUE</div>
                    <div className="item i7 middle">REACT</div>
                    <div className="item i8 middle">微信小程序</div>
                    <div className="item i9 middle">丑丑</div>
                    <div className="item i10 middle">徒步</div>
                    <div className="item i11 middle">装修</div>
                    <div className="item i12 middle">千岛湖</div>
                    <div className="item i13 middle">广州与顺德</div>
                    <div className="item i14 middle">浙西大峡谷</div>

                    <div className="item i15 small">山沟沟</div>
                    <div className="item i16 small">大慈岩</div>
                    <div className="item i17 small">樱花园</div>
                    <div className="item i18 small">饼干</div>
                    <div className="item i19 small">蛋糕</div>
                    <div className="item i20 small">跑步</div>
                    <div className="item i21 small">画画</div>
                </div>
             </div>
        )
    }
}
export default start
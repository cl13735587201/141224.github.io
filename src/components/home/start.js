import React from 'react';
// import {Button, DatePicker} from 'antd';
import "antd/dist/antd.css";
import QueueAnim from 'rc-queue-anim';

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
                </div>
                <QueueAnim delay={300} className="keywords" type="scale">
                    <div className="item i1 big" key="demo1">工作</div>
                    <div className="item i2 big" key="demo2">健身</div>
                    <div className="item i3 big" key="demo3">PMP</div>
                    <div className="item i4 big" key="demo4">烘焙</div>
                    <div className="item i5 big" key="demo5">宠物</div>

                    <div className="item i6 middle" key="demo6">VUE</div>
                    <div className="item i7 middle" key="demo7">REACT</div>
                    <div className="item i8 middle" key="demo8">微信小程序</div>
                    <div className="item i9 middle" key="demo9">丑丑</div>
                    <div className="item i10 middle" key="demo10">徒步</div>
                    <div className="item i11 middle" key="demo11">装修</div>
                    <div className="item i12 middle" key="demo12">千岛湖</div>
                    <div className="item i13 middle" key="demo13">广州与顺德</div>
                    <div className="item i14 middle" key="demo14">浙西大峡谷</div>

                    <div className="item i15 small" key="demo15">山沟沟</div>
                    <div className="item i16 small" key="demo16">大慈岩</div>
                    <div className="item i17 small" key="demo17">樱花园</div>
                    <div className="item i18 small" key="demo18">饼干</div>
                    <div className="item i19 small" key="demo19">蛋糕</div>
                    <div className="item i20 small" key="demo20">跑步</div>
                    <div className="item i21 small" key="demo21">画画</div>
                </QueueAnim>
             </div>
        )
    }
}
export default start
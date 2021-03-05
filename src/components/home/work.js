import React from 'react';

class work extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="C work">
                <div className="content">
                    <div className="intro intro1">
                        <div className="key">VUE项目</div>
                        <div className="value">利用vue框架搭建项目结构和开发业务功能，vue-router实现路由管理，vuex进行数据状态管理；<br/>利用Axios实现http请求；<br/>采用阿里的web播放器以及相应的sdk实现直播点播业务</div>
                        <img alt="" src="https://wx4.sinaimg.cn/mw1024/6cdda468ly1go5u1mfyctj21400u010u.jpg" width="100%" height="100%"/>
                    </div>
                    <div className="intro intro2">
                        <div className="key">微信小程序</div>
                        <div className="value">采用taro.js框架，并结合原生小程序进行开发。并运用taro及原生的部分组件，让开发更高效。</div>
                        <img alt="" src="https://wx1.sinaimg.cn/mw1024/6cdda468ly1go5u1kz4n0j21400u0466.jpg" width="100%" height="100%"/>
                   </div>
                    <div className="intro intro3">
                        <div className="key">REACT项目</div>
                        <div className="value">JS运用React框架、UI运用ant框架来搭建项目，用react-router来搭建路由，静态样式用sass书写，书写了一些常用的组件，如日历、输入框、时间等，并将数据渲染到页面上。自行设计，并做了丰富的动画。</div>
                        <img alt="" src="https://wxt.sinaimg.cn/mw1024/6cdda468ly1go5u1ltauuj21420u0tdq.jpg?tags=%5B%5D" width="100%" height="100%"/>
                   </div>
                </div>
            </div>
        )
    }
}
export default work
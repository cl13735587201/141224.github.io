import React from "react"
// import { Link } from "react-router-dom"
import Start from "../components/home/start"
import Work from "../components/home/work"
import Kitty from "../components/home/kitty";
import Run from "../components/home/run"
import Hobby from "../components/home/hobby";
import {Steps} from 'antd';
import { SmileOutlined, CrownOutlined, BugOutlined, CoffeeOutlined } from '@ant-design/icons';

const {Step} = Steps;

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.bindScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindScroll)
    }
    changePage = current => {
        console.log('onchange', current);
        this.setState({current});
        
    }
    bindScroll = (event) => {
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) 
        || window.pageYOffset
        || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        
        if (scrollTop > 0 && scrollTop < 600) {
            this.setState({
                current: 0,
            });
        } else if (scrollTop > 600 && scrollTop < 1200) {
            this.setState({
                current: 1,
            });
        } else if (scrollTop > 1200 && scrollTop < 1800) {
            this.setState({
                current: 2,
            });
        } else if (scrollTop > 1800 && scrollTop < 2400) {
            this.setState({
                current: 3,
            });
        } else if (scrollTop > 2400 && scrollTop < 3000) {
            this.setState({
                current: 4,
            });
        }
    }
    render() {
        const {current} = this.state;
        return (
            <div className ="P home">
                <Steps current={current} onChange={this.onChange} direction="vertical">
                    <Step title="关键词" icon={<SmileOutlined twoToneColor="#eb2f96"/>}/>
                    <Step title="工作" icon={<CrownOutlined twoToneColor="#66CD00"/>} description=""/>
                    <Step title="宠物" icon={<BugOutlined twoToneColor="#FFA042"/>} description=""/>
                    <Step title="健身" icon={<CrownOutlined twoToneColor="#66CD00"/>} description=""/>
                    <Step title="兴趣" icon={<CoffeeOutlined twoToneColor="#FFA042"/>} description=""/>
                </Steps>
                <Start></Start>
                <Work></Work>
                <Kitty></Kitty>
                <Run></Run>
                <Hobby></Hobby>
            </div>
        )
    }
}

export default home;
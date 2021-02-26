import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import { CloseCircleTwoTone } from '@ant-design/icons';

const dataArray = [
    {
        image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
        title: '1',
        content: '1111',
    },
    {
        image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
        title: '2',
        content: '2222',
    },
    {
        image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
        title: '3',
        content: '3333',
    },
    {
        image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
        title: '1',
        content: '1111',
    },
    {
        image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
        title: '2',
        content: '2222',
    },
    {
        image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
        title: '3',
        content: '3333',
    },
    {
        image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
        title: '1',
        content: '1111',
    },
    {
        image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
        title: '2',
        content: '2222',
    },
    {
        image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png',
        title: '3',
        content: '3333',
    },
]
class hobby extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            picOpen: [],
        }
    }
    componentDidMount() {
    }
    imgClick = (e, i) => {
        const picOpen = this.state.picOpen;
        picOpen.forEach((item, index) => {
            if (item && i !== index) {
                picOpen[index] = false;
            }
        })
        picOpen[i] = true;
        this.setState({
            picOpen: picOpen
        })
    }
    imgClose = (e, i) => {
        const picOpen = this.state.picOpen;
        picOpen[i] = false;
        this.setState({
            picOpen: picOpen
        })
    }
    end = (e, i) => {
        const picOpen = this.state.picOpen;
        picOpen.splice(i);
        this.setState({
            picOpen: picOpen
        })
    }
    getDelay = (e) => {
        const i = e.index + dataArray.length % 4;
        return (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;
    };
    getLiChildren = () => {
        const imgWidth = 220;
        const imgHeight = 158;
        const imgBoxWidth = 260;
        const imgBoxHeight = 192;
        return dataArray.map((item, i) => {
            const {image, title, content} = item;
            const isEnter = typeof this.state.picOpen[i] === 'boolean';
            const isOpen = this.state.picOpen[i];

            const left = isEnter ? 0 : imgBoxWidth * (i % 4);
            const imgLeft = isEnter ? imgBoxWidth * (i % 4) : 0;
            const isRight = Math.floor((i % 4) / 2);
            const isTop = Math.floor(i / 4);
            let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
            top = isEnter ? top : imgBoxHeight * isTop;
            let imgTop = isTop ? imgBoxHeight : 0;
            imgTop = isEnter ? imgTop : 0;

            const liStyle = isEnter ? { width: '100%', height: 175, zIndex: 1 } : null;
            const liAnimation = isOpen ?
              ({ boxShadow: '0 2px 8px rgba(140, 140, 140, .35)' }) :
              ({ boxShadow: '0 0px 0px rgba(140, 140, 140, 0)' });
            let aAnimation = isEnter ?
              ({
                delay: 400,
                ease: 'easeInOutCubic',
                width: imgWidth,
                height: imgHeight,
                onComplete: this.end.bind(this, i),
                left: imgBoxWidth * (i % 4),
                top: isTop ? imgBoxHeight : 0,
              }) : null;
            aAnimation = isOpen ?
              ({
                ease: 'easeInOutCubic',
                left: isRight ? (imgBoxWidth * 2) - 10 : 0,
                width: '50%',
                height: 175,
                top: 0,
              }) : aAnimation;

            // 位置 js 控制；
            return (
                <TweenOne
                key={i}
                style={{
                    left,
                    top,
                    ...liStyle,
                }}
                component="li"
                className={isOpen ? 'open' : ''}
                animation={liAnimation}
                >
                <TweenOne
                    component="a"
                    onClick={e => this.imgClick(e, i)}
                    style={{
                    left: imgLeft,
                    top: imgTop,
                    }}
                    animation={aAnimation}
                >
                    <img src={image} width="100%" height="100%"/>
                </TweenOne>
                <TweenOneGroup
                    enter={[
                    {
                        opacity: 0, duration: 0, type: 'from', delay: 400,
                    },
                    { ease: 'easeOutCubic', type: 'from', left: isRight ? '50%' : '0%' },
                    ]}
                    leave={{ ease: 'easeInOutCubic', left: isRight ? '50%' : '0%' }}
                    component=""
                >
                    {isOpen && (
                    <div
                        className="picDetails-text-wrapper"
                        key="text"
                        style={{
                        left: isRight ? '0%' : '50%',
                        }}
                    >
                        <h1>{title}</h1>
                        <CloseCircleTwoTone  onClick={e => this.imgClose(e, i)}/>
                        <p>{content}</p>
                    </div>
                    )}
                </TweenOneGroup>
                </TweenOne>
            );
        })
    };
    render() {
        return (
            <div className="C picDetails-wrapper">
                <div className="picDetails">
                    <QueueAnim
                        delay={this.getDelay}
                        component="ul"
                        className="picDetails-image-wrapper"
                        interval={0}
                        type="bottom"
                        >
                        {this.getLiChildren()}
                    </QueueAnim>
                </div>
            </div>
        )
    }
}
export default hobby
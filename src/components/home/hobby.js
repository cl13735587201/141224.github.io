import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import { CloseCircleTwoTone } from '@ant-design/icons';

const dataArray = [
    {
        image: 'https://wx4.sinaimg.cn/mw1024/6cdda468ly1go4ngyvprej21400u0n5s.jpg',
        title: '余杭——山沟沟景区',
        content: '坐标余杭区鸬鸟镇，由“汤坑”、“茅塘”景点组成。沿着峡谷蜿蜒而上，一路上流水潺潺，鸟声轻鸣，更有清潭无数，奇石遍谷。可以在潭中划一支竹筏，徜徉在水波之上，今天我是山沟沟里的摆渡人。客官坐船不，五块一趟。',
    },
    {
        image: 'https://wx3.sinaimg.cn/mw1024/6cdda468ly1go4natv65ej21400u0wol.jpg',
        title: '余杭——樱花园',
        content: '从山沟沟回来，在高速上看到路边粉色的一片。遂下高速驱车寻找。终于在人烟稀少的路尽头看到这片樱花园。词穷到只能用美来描述这片粉色。枝头的花开得茂盛，微风一吹，落英缤纷。明年还去。',
    },
    {
        image: 'https://wx1.sinaimg.cn/mw1024/6cdda468ly1go4nat23b5j23402c0x6y.jpg',
        title: '建德——大慈岩、江南悬空寺',
        content: '五一安排一天去爬大慈岩，海拔很高，坐缆车上去也爬了很久。在悬空寺上一览众山小，还买了一根巨贵的巧乐滋，烈日炎炎在山顶吃着棒冰，有点舒服。寺庙有一棵巨大的银杏树，明年的银杏季再来。',
    },
    {
        image: 'https://wx4.sinaimg.cn/mw1024/6cdda468ly1go4naqeztgj22ip1w14qq.jpg',
        title: '建德——千岛湖',
        content: '千岛湖，我外婆外公的故乡。新安江水电站开通之前，我的外公外婆住在这里，后来为了让下游不再发洪水，所以建了水电站，新安江沿岸多个村移民，以前的茶园村，现在已在水底。如今这里已是风景秀丽的景区，水坝下游一段经常云雾缭绕，宛若仙境。',
    },
    {
        image: 'https://wx3.sinaimg.cn/mw1024/6cdda468ly1go4nap2ss9j23402c0npg.jpg',
        title: '广州——沙面岛',
        content: '十一假期来了广州。漫步人山人海的沙面岛，感受广州的风土人情。',
    },
    {
        image: 'https://wx2.sinaimg.cn/mw1024/6cdda468ly1go4nalymhnj23402c01ky.jpg',
        title: '广州——水上世界',
        content: '游乐园混世公主在这里经历了游乐生涯的滑铁卢，在坐游艇滑下去的时候磕到了尾巴骨，疼了两天。之后再也不敢玩刺激的项目了，瑟瑟发抖，在坐上摇滚巨轮的前一刻临阵脱逃了。',
    },
    {
        image: 'https://wx1.sinaimg.cn/mw1024/6cdda468ly1go4nagf7dsj23402c0hdt.jpg',
        title: '余杭——大禹谷',
        content: '余杭的大禹谷，长乐林场，娘娘山，甘岭水库，这一片是徒步宝地，每次身体一不得劲想放松放松就来这里。从日出到日暮，从水畔到林间，我们吹着风，不说话就很好。',
    },
    {
        image: 'https://wx4.sinaimg.cn/mw1024/6cdda468ly1go4nafp08sj213w0u0h4d.jpg',
        title: '临安——浙西大峡谷',
        content: '浙西大峡谷两日团建，看荒芜的瀑布，探秘吴越古道，路边捡山核桃，遇到竹叶青和五步蛇，还烤了很好吃的羊肉串和烤红薯。',
    },
    {
        image: 'https://wx2.sinaimg.cn/mw1024/6cdda468ly1go4n8cnzxsj20ov0inwix.jpg',
        title: '小花园',
        content: '用水溶性彩铅画的小花园，继续儿时就喜欢的事物。',
    },
    {
        image: 'https://wx2.sinaimg.cn/mw1024/6cdda468ly1go4n8cxs6dj211j0oyq8w.jpg',
        title: '面条和西瓜',
        content: '用水溶性彩铅画的面条和西瓜，我爱的食物，继续儿时未完成的梦想。',
    },
    {
        image: 'https://wx2.sinaimg.cn/mw1024/6cdda468ly1go4n8fv2d6j2149148kjn.jpg',
        title: '黄油曲奇',
        content: '烘焙的大门开了关，关了开。这次终于做出了酥酥脆脆的黄油曲奇，为老友寄去一份，她很开心。好久没见，我好想她呀。',
    },
    {
        image: 'https://wx1.sinaimg.cn/mw1024/6cdda468ly1go4n8c8mvjj21491484qr.jpg',
        title: '纸杯蛋糕和手指饼',
        content: '周末为妈妈做的纸杯蛋糕和手指饼，妈妈夸我呢，被爱的人夸奖的感觉真好。',
    },
]
class hobby extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            picOpen: {},
        }
    }
    imgClick = (e, i) => {
        const { picOpen } = this.state;
        Object.keys(picOpen).forEach((key) => {
          if (key !== i && picOpen[key]) {
            picOpen[key] = false;
          }
        });
        picOpen[i] = true;
        this.setState({
          picOpen,
        });
    }
    imgClose = (e, i) => {
        const { picOpen } = this.state;
        picOpen[i] = false;
        this.setState({
            picOpen,
        });
    }
    end = (i) => {
        const { picOpen } = this.state;
        delete picOpen[i];
        this.setState({
          picOpen,
        });
    }
    getDelay = (e) => {
        const i = e.index + dataArray.length % 4;
        return (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;
      };
    getLiChildren = () => {
        // 图片大小
        const imgWidth = 200;
        const imgHeight = 145;
        //图片加边框大小
        const imgBoxWidth = 260;
        const imgBoxHeight = 180;

        return dataArray.map((item, i) => {
            const {image, title, content} = item;
            const isEnter = typeof this.state.picOpen[i] === 'boolean'; // 页面初始化的时候
            const isOpen = this.state.picOpen[i]; // 打开图片的时候

            const left = isEnter ? 0 : imgBoxWidth * (i % 4); // 初始化的时候是0，后来绝对定位排列
            const imgLeft = isEnter ? imgBoxWidth * (i % 4) : 0;
            const isRight = Math.floor((i % 4) / 2); // 图片是在右侧吗
            const isTop = Math.floor(i / 4); // 图片是在顶部那一栏吗
            let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
            top = isEnter ? top : imgBoxHeight * isTop;
            let imgTop = isTop ? imgBoxHeight : 0;
            imgTop = isEnter ? imgTop : 0;

            const liStyle = isEnter ?{ width: '100%', height: 333, zIndex: 1 }: null; // 刚进入时li的style

            const liAnimation = isOpen ? // 打开时和关闭时的阴影
              ({ boxShadow: '0 2px 8px rgba(140, 140, 140, .35)' }) :
              ({ boxShadow: '0 0px 0px rgba(140, 140, 140, 0)'});

            let aAnimation = isEnter ? // 初始化时的image动画
              ({
                delay: 400,
                ease: 'easeInOutCubic',// 缓动参数
                width: imgWidth,
                height: imgHeight,
                onComplete: this.end.bind(this, i), //开始动画结束后删掉所有的初始化open参数
                left: imgBoxWidth * (i % 4), // 初始化定义left和top
                top: isTop ? imgBoxHeight : 0,
              }) : null;
            aAnimation = isOpen ? // 打开图片的image动画
              ({
                ease: 'easeInOutCubic',
                left: isRight ? (imgBoxWidth * 2) - 10 : 0, //打开时变动left定位
                width: '50%', // 宽度变大到一半
                height: 333,
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
                    <img alt="" src={image} width="100%" height="100%"/>
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
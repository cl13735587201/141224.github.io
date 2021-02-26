import React from 'react';
import { Calendar, Badge } from 'antd';

function getListData(value) {
    const dateList = [
        {
            time: '2021/2/8',
            type: 'success',
            content: '运动一小时',
        },
        {
            time: '2021/2/22',
            type: 'success',
            content: '瑜伽一小时',
        },
    ]
    const time = `${value.year()}/${value.month()+1}/${value.date()}`;
    let listData;
    dateList.forEach((item) => {
        if (item.time === time) {
            listData = [
                { type: item.type, content: item.content },
            ];
        }
    })
    return listData || [];
}

function getMonthData(value) {
    const monthList = [
        {
            time: '2020/6',
            content: '烈日炎炎',
        },
        {
            time: '2021/2',
            content: '新年快乐',
        },
    ]
    const time = `${value.year()}/${value.month()+1}`;
    let listData;
    monthList.forEach((item) => {
        if (item.time === time) {
            listData = item.content;
        }
    })
    return listData || [];
}
class run extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
    }
    dateCellRender(value) {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content}></Badge>
                    </li>
                ))}
            </ul>
        )
    }
    monthCellRender(value) {
        const monthData = getMonthData(value);
        return monthData ? (
          <div className="notes-month">
            <section>{monthData}</section>
          </div>
        ) : null;        
    }
    render() {
        return (
            <div className="C run">
                <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender}/>
            </div>
        )
    }
}
export default run
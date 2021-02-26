import './index.scss';
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'
// // class Square extends React.Component {
// //     render() {
// //       return (
// //         <button 
// //         className="square" 
// //         onClick={() => this.props.onClick()} // setState更新state中的数值
// //         >
// //           {this.props.value}
// //         </button>
// //       );
// //     }
// //   }
//   function Square(props) {
//     if (!props.warn) {
//       return null;
//     }
//       return (
//         <button 
//         className="square" 
//         onClick={props.onClick} // setState更新state中的数值
//         >
//           {props.value}
//         </button>
//       )
//   }
  
//   class Board extends React.Component {
//     // constructor(props) { // 定义构造函数，必须以super(props)开头
//     //     super(props);
//     //     this.state = {
//     //         squares: Array(9).fill(null), // 长度为9的空值数组
//     //         xIsNext: true,
//     //     };
//     // }
//     // handleClick (i) {
//     //     const squares = this.state.squares.slice();
//     //     if (calculateWinner(squares) || squares[i]) {
//     //         return;
//     //     }
//     //     squares[i] = this.state.xIsNext?'X':'O';
//     //     this.setState({
//     //         squares: squares,
//     //         xIsNext: !this.state.xIsNext
//     //     });
//     // }
//     renderSquare(i) {
//       return <Square value={this.props.squares[i]} warn={this.props.warn}
//       onClick={() => this.props.onClick(i)}/>;
//     }
  
//     render() {
//         // const winner = calculateWinner(this.state.squares);
//         // let status;
//         // if (winner) {
//         //     status = '获胜者: '+winner;
//         // } else {
//         //     status = '下一步: '+(this.state.xIsNext?'X':'O');
//         // }
  
//       return (
//         <div>
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }
  
//   class Game extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             history: [{
//                 squares: Array(9).fill(null),
//             }],
//             xIsNext: true,
//             stepNumber: 0,
//             warn: false,
//         }
//     }
//     handleClick (i) {
//         const history = this.state.history.slice(0, this.state.stepNumber + 1);
//         const current = history[history.length -1];
//         const squares = current.squares.slice();
//         if (calculateWinner(squares) || squares[i]) {
//             return;
//         }
//         squares[i] = this.state.xIsNext?'X':'O';
//         this.setState({
//             history: history.concat([{
//                 squares: squares,
//             }]),
//             stepNumber: history.length,
//             xIsNext: !this.state.xIsNext
//         });
//     }
//     jumpTo(step) {
//         this.setState({
//             stepNumber: step,
//             xIsNext: (step%2) === 0,
//         });
//     }
//     render() {
//         const history = this.state.history;
//         const current = history[this.state.stepNumber];

//         const winner = calculateWinner(current.squares);

//         const moves = history.map((step, move) => {
//             const desc = move ? '回到第' + move+'步' : '重新开始';
//             return (
//                 <li key={move}>
//                     <button onClick={() => this.jumpTo(move)}>{desc}</button>
//                 </li>
//             )
//         })
//         let status;
//         if (winner) {
//             status = '获胜者: '+winner;
//         } else {
//             status = '下一步: '+(this.state.xIsNext?'X':'O');
//         }

//       return (
//         <div className="game">
//           <div className="game-board">
//             <Board squares={current.squares}
//             warn={this.state.warn}
//             onClick={(i) => {
//                 this.handleClick(i)
//             }}/>
//           </div>
//           {isLogin?<h1>已登陆</h1>:<h1>未登录</h1>}
//           {moves.length>0&& // true&&dom=dom,false&&dom=false
//             <div className="game-info">
//               <div>{status}</div>
//               <ol>{moves}</ol>
//             </div>
//           }
//         </div>
//       );
//     }
//   }
  
//   // ========================================
  
//   ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
//   );
  
//   function calculateWinner(squares) {
//       const lines = [
//           [0, 1, 2],
//           [3, 4, 5],
//           [6, 7, 8],
//           [0, 3, 6],
//           [1, 4, 7],
//           [2, 5, 8],
//           [0, 4, 8],
//           [2, 4, 6],
//       ];
//       for(let i = 0; i< lines.length; i++) {
//           const [a, b, c] = lines[i];
//           if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//               return squares[a];
//           }
//       }
//       return null;

//   }
  
import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './router';

// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.handleChange = this.handleChange.bind(this);
//         this.handelSubmit = this.handelSubmit.bind(this);
//         this.state = {
//             nameInput: '',
//             phoneInput: '',
//             selectValue: 'j',
//         };
//     }
//     handleChange(event) {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;
//         this.setState({
//             [name]: value
//         })
//     }
//     handelSubmit(event) {
//         alert(this.state.value);
//         event.preventDefault();
//     }
//     handleSelectChange(event) {
//         this.setState({
//             value: event.target.value,
//         })
//     }
//     render() {
//         return (
//             <form>
//                 <label>name:
//                     <input name="nameInput" type="text" value={this.state.nameInput} onChange={this.handleChange}/>
//                 </label>
//                 <label>phone:
//                   <input name="phoneInput" type="text" value={this.state.phoneInput} onChange={this.handleChange}/>
//                 </label>
//                 <select value={this.state.selectValue} onChange={this.handleSelectChange}>
//                     <option value="g">葡萄柚</option>
//                     <option value="l">酸橙</option>
//                     <option selected value="j">椰子</option>
//                     <option value="m">芒果</option>
//                 </select>
//                 <select multiple={true} value={['B',"C"]}></select>
//                 <input type="submit" vlaue="submit" onClick={this.handelSubmit}/>
//             </form>
//         )
//     }
// }
import 'moment/locale/zh-cn';

class App extends React.Component{
    render() {
        return (
            <ConfigProvider locale={zhCN}>
                <AppRouter />
            </ConfigProvider>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
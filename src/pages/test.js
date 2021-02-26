// import React from 'react';
// import ReactDOM from 'react-dom';

// class clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: new Date(),
//         }
//     }
//     tick() {
//         this.setState({
//             date: new Date()
//         })

//     }
//     componentDidMount() {
//         this.timeId = setInterval(()=> {
//             this.tick();
//         }, 1000)
//         this.setState(function(state, props) {
//             return {
//                 counter: state.counter + props.increment
//             }
//         })
//     }
//     componentWillUnmount() {
//         clearInterval(this.timeId);
//     }
//     render () {
//         return (
//             <div>{this.state.date.toLocaleTimeString()}</div>
//         );
//     }
// }
// ReactDOM.render(
//     <clock />,
//     document.getElementById('root')
// )


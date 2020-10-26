import React, { Component } from 'react'
import { Button, View } from '@tarojs/components'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.styl'
import { render } from '@tarojs/taro'

// 组件向子组件通信：父组件通过props向子组件传递需要的信息
//子组件Child
// const Child = props => {
//   return <View> {props.name} </View>
// }
// //父组件Parent
// export default class Parent extends Component {
//   render(){
//     return <Child name="zhufeng"></Child>
//   }
// }

// 2.子组件向父组件通信：props+回调的方式
//子组件Child
const Child = props=>{
  const cb = msg=>{
    return ()=>{
      props.callback(msg)
    }
  }
  return (
    <Button onClick={cb("你好世界")}>sunny</Button>
  )
}
//父组件 Parent
export default class Parent extends Component{
  callback(msg){
    console.log(msg);
  }
  render(){
    return <Child callback={this.callback.bind(this)}></Child>
  }
}

// 3.context应用
//子组件的子组件
// const BatteryContext = React.createContext();
// class GrandChild extends Component{
//   render(){
//     return(
//       <BatteryContext.Consumer>
//         {
//           color => <View style={{"color":color}}>红色的：{color}</View>
//         }
//       </BatteryContext.Consumer>
//     )
//   }
// }
// // 子组件
// const Child = () => {
//   return (
//     <GrandChild></GrandChild>
//   )
// }
// // 父组件
// export default class Parent extends Component {
//   state = {
//     color: 'red'
//   }
 
//   render () {
//     const { color } = this.state;
//     return (
//       <BatteryContext.Provider value={color}>
//         <Child></Child>
//       </BatteryContext.Provider>
//     )
//   }
// }

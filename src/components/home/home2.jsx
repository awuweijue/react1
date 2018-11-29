import React from 'react'
class Xhome2 extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			name : '这是Xhome2组件'
		}
	}
	render(){
		return <div>{this.state.name}</div>
	}
}
export default Xhome2

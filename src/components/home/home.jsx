import React from 'react'
class Xhome extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			name : '这是Xhome组件'
		}
	}
	render(){
		return <div>{this.state.name}</div>
	}
}
export default Xhome

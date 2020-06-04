import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="header" style={headerStyle}>
                <img src="https://cdn.jsdelivr.net/emojione/assets/png/1f638.png" style ={imgStyle} alt=""/>
                <h1>Emoji Search</h1>
                <img src="https://cdn.jsdelivr.net/emojione/assets/png/1f63a.png" style ={imgStyle}alt=""/>
            </div>
        )
    }
}
const headerStyle={
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent : 'center'
}
const imgStyle={
    height: '30px',
    width: '30px',
    padding: '20px'
}

export default Header

import React from 'react';
import style from './Circle.module.scss';

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      pointTop: 0,
      pointLeft: 0,
      circleTop: Math.random() * 500,
      circleLeft: Math.random() * 1000
    }
  }

  onMouseDown = (e) => {
    this.setState({
      isActive: true,
      pointTop: e.clientY - e.target.offsetTop,
      pointLeft: e.clientX - e.target.offsetLeft
    });
    // this.props.parent.getChildrenMsg(this, 'hehe')
  }

  onMouseMove = () => {
    if (this.state.isActive) {
      document.onmousemove = (e) => {
        this.setState({
          circleTop: e.clientY - this.state.pointTop,
          circleLeft: e.clientX - this.state.pointLeft
        });
      }
      this.props.parent.computeRange([this.state.circleTop + 100, this.state.circleLeft + 100])
    }
  }

  onMouseUp = (e) => {
    document.onmouseup = () => {
      document.onmousemove = null
    }
    this.setState({
      isActive: false,
      circleTop: e.clientY - this.state.pointTop,
      circleLeft: e.clientX - this.state.pointLeft
    });
  }

  componentDidMount() {
    this.props.parent.getChildrenMsg([this.state.circleTop + 100, this.state.circleLeft + 100])
  }

  render() {
    return (
      <div
        style={{
          top: this.state.circleTop,
          left: this.state.circleLeft,
          backgroundColor: this.props.color,
          zIndex: this.state.isActive ? 2 : 1}}
        className={style.Circle}
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}
      >

      </div>
    );
  }
}

export default Circle;
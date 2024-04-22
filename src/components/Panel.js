import React, { Component } from "react";

class Panel extends Component {
  render() {
    const { id, label, value, onSelect } = this.props;
    function clickHandler(id) {
        onSelect(id);
    }
    return (
      <section
        className="dashboard__panel"
        onClick={clickHandler(id)}
      >
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-value">{value}</p>
      </section>
    );
  }
}

export default Panel;
import React from "react";

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
}

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        )
    }
}
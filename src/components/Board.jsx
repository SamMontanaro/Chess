import { useEffect, useState } from "react";
import Square from "./Square";

const Board = () => {
    let [display, setDisplay] = useState([]);

    useEffect(() => {
        let squares = [];
        let swapColor = 0;
        let squareNum = 0;
        for (let i = 0; i < 64; i++) {
            if (squareNum % 8 === 0)
                swapColor = !swapColor;
            squareNum++;
            squares.push(<Square dark={swapColor ? i % 2 : (i + 1) % 2} squareNum={squareNum}></Square>);
        }
        setDisplay(squares);
    }, []);

    return (
        <div className="container px-5">
            <div className="row col-md-8 col-lg-6 mx-auto">
                {
                    display.map((e, idx) => {
                        return (
                            <div className="box col-xs-8r p-0" key={idx}>
                                {e}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Board;

/*
                {
                    new Array(64).fill().map((e, idx) => {
                        if (squareNum % 8 === 0)
                            swapColor = !swapColor;
                        squareNum++;
                        return (
                            <div className="box col-xs-8r p-0" key={idx}>
                                <Square dark={swapColor ? idx % 2 : (idx + 1) % 2} squareNum={squareNum}></Square>
                            </div>
                        )
                    })
                }
*/
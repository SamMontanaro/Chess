import Square from "./Square";

const Board = () => {
    let swapColor = 0;
    let squareNum = 0;

    return (
        <div className="container px-5">
            <div className="row col-md-8 col-lg-6 mx-auto">
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
            </div>
        </div>
    )
}

export default Board;
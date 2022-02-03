import Square from "./Square";

const Board = () => {
    let swapColor = 0;
    let squareNum = 1;

    return (
        <div className="container px-5">
            <div className="row w-75 mx-auto px-5">
                <table className="mt-5">
                    <tbody>
                        {
                            new Array(8).fill().map((e, idx) => {
                                swapColor = !swapColor;
                                return (
                                    <tr key={idx}>
                                        {
                                            new Array(8).fill().map((e, idx) => {
                                                let piece = "";
                                                switch (squareNum) {
                                                    case 1:
                                                    case 8:
                                                        piece = "rdt";
                                                        break;
                                                    case 57:
                                                    case 64:
                                                        piece = "rlt";
                                                        break;
                                                    default:
                                                        break;
                                                }
                                                squareNum++;
                                                return <Square dark={swapColor ? idx % 2 : (idx + 1) % 2} content={piece} key={squareNum}></Square>
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Board;
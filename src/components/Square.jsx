import { Fragment } from "react";
import { ReactComponent as Blt } from "../images/blt.svg";
import { ReactComponent as Bdt } from "../images/bdt.svg";
import { ReactComponent as Klt } from "../images/klt.svg";
import { ReactComponent as Kdt } from "../images/kdt.svg";
import { ReactComponent as Nlt } from "../images/nlt.svg";
import { ReactComponent as Ndt } from "../images/ndt.svg";
import { ReactComponent as Plt } from "../images/plt.svg";
import { ReactComponent as Pdt } from "../images/pdt.svg";
import { ReactComponent as Qlt } from "../images/qlt.svg";
import { ReactComponent as Qdt } from "../images/qdt.svg";
import { ReactComponent as Rlt } from "../images/rlt.svg";
import { ReactComponent as Rdt } from "../images/rdt.svg";

const Square = (props) => {

    const getPiece = () => {
        switch (props.squareNum) {
            case 1:
            case 8:
                return <Rdt></Rdt>
            case 57:
            case 64:
                return <Rlt></Rlt>
            case 2:
            case 7:
                return <Ndt></Ndt>
            case 58:
            case 63:
                return <Nlt></Nlt>
            case 3:
            case 6:
                return <Bdt></Bdt>
            case 59:
            case 62:
                return <Blt></Blt>
            case 4:
                return <Qdt></Qdt>
            case 60:
                return <Qlt></Qlt>
            case 5:
                return <Kdt></Kdt>
            case 61:
                return <Klt></Klt>
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                return <Pdt></Pdt>
            case 56:
            case 55:
            case 54:
            case 53:
            case 52:
            case 51:
            case 50:
            case 49:
                return <Plt></Plt>
            default:
                return <Fragment></Fragment>
        }
    }

    return (
        <Fragment>
            {
                props.dark ? <div className="content w-100 h-100 bg-success text-light">{getPiece()}</div>
                           : <div className="content w-100 h-100 bg-light text-dark">{getPiece()}</div>
            }
        </Fragment>
    )
}

export default Square;
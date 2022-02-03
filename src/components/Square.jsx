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
    return (
        <Fragment>
            {
                props.dark ? <td><div className="content d-flex w-100 h-100 justify-content-center align-items-center bg-success text-light"><Rdt /></div></td>
                           : <td><div className="content d-flex w-100 h-100 justify-content-center align-items-center bg-light text-dark"><Rlt /></div></td>
            }
        </Fragment>
    )
}

export default Square;
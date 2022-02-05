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

    let selected = false;
    let node;
    let offset;
    let transform;
    let boardRect = document.querySelector(".row").getBoundingClientRect();

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
                return null
        }
    }

    const startDrag = (e) => {
        node = e.target.parentElement;
        if (node.nodeName !== "g" || !node.classList.contains("draggable")) {
            node = node.parentElement;
        }
        if (node.classList.contains("draggable") && !selected) {
            selected = true;
            document.querySelector(".row").onmousemove = drag;
            offset = getMousePosition(e);
            let transforms = node.parentElement.transform.baseVal;

            if (transforms.length === 0 || transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
                let translate = node.parentElement.createSVGTransform();
                translate.setTranslate(0, 0);
                node.parentElement.transform.baseVal.insertItemBefore(translate, 0);
            }

            transform = transforms.getItem(0);
            offset.x -= transform.matrix.e;
            offset.y -= transform.matrix.f;
        }
    }

    const drag = (e) => {
        if (selected) {
            e.preventDefault();
            let coord = getMousePosition(e);
            while (boardRect.height === 0) {
                boardRect = document.querySelector(".row").getBoundingClientRect();
            }
            
            if (coord.x < boardRect.left) { coord.x = boardRect.left; }
            if (coord.x > boardRect.right) { coord.x = boardRect.right; }
            if (coord.y < boardRect.top) { coord.y = boardRect.top; }
            if (coord.y > boardRect.bottom) { coord.y = boardRect.bottom; }

            transform.setTranslate(coord.x - offset.x, coord.y - offset.y);
        }
    }

    const endDrag = (e) => {
        if (selected) {
            selected = false;
            document.querySelector(".row").onmousemove = null;
        }
    }

    const getMousePosition = (e) => {
        if (e.touches) {
            e = e.touches[0];
        }
        return {
            x: e.clientX,
            y: e.clientY
        };
    }

    return (
        <Fragment>
            {
                props.dark ? <div className="content w-100 h-100 bg-success text-light">
                                {
                                    getPiece() !== null ? <svg className="onTop" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45" preserveAspectRatio="xMidYMin slice" onMouseDown={(e) => startDrag(e)} onMouseMove={(e) => drag(e)} onMouseUp={(e) => endDrag(e)} onTouchStart={(e) => startDrag(e)} onTouchMove={(e) => drag(e)} onTouchEnd={(e) => endDrag(e)} onTouchCancel={(e) => endDrag(e)}>{getPiece()}</svg> : <Fragment></Fragment>
                                }
                            </div>
                           : <div className="content w-100 h-100 bg-light text-dark">
                                {
                                    getPiece() !== null ? <svg className="onTop" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 45 45" preserveAspectRatio="xMidYMin slice" onMouseDown={(e) => startDrag(e)} onMouseMove={(e) => drag(e)} onMouseUp={(e) => endDrag(e)} onTouchStart={(e) => startDrag(e)} onTouchMove={(e) => drag(e)} onTouchEnd={(e) => endDrag(e)} onTouchCancel={(e) => endDrag(e)}>{getPiece()}</svg> : <Fragment></Fragment>
                                }
                            </div>
            }
        </Fragment>
    )
}

export default Square;
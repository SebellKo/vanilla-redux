import React from "react";
import { connect } from "react-redux"
import { actionCreators } from "../beForeToolKitStorestore";
import { remove } from "../store";


function ToDo({ text, onBtnClick, id }) {
    return (
        <li>
            <Link to={`/${id}`}>
                {text} <button onClick={onBtnClick}>DEL</button>
            </Link>
        </li>
    )
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onBtnClick: () => {
            dispatch(remove(ownProps.id));
        }
    }
}

export default connect(null, mapDispatchToProps)(ToDo);
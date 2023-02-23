import React from "react";
import PropTypes from "prop-types";
const BookMark = ({ status, ...rest }) => {
    return (
        <>
         <button {...rest}>
            {status ? "★" : "☆"}
         </button>
        </>
    );
};
BookMark.propTypes = {
    status: PropTypes.bool
};

export default BookMark;

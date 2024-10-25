import PropTypes from "prop-types"

function HamburgerButton ({click, active}){
    return (
        <button onClick={click} className={"navbarHamburgerButton " + active}>
            <span className="navbarHamburgerButtonBar"></span>
            <span className="navbarHamburgerButtonBar"></span>
            <span className="navbarHamburgerButtonBar"></span>
        </button>
    )
}

HamburgerButton.propTypes = {
    click: PropTypes.func.isRequired, // Specify that click is a required function
    active: PropTypes.string.isRequired, // Specify that click is a required function
};

export default HamburgerButton;
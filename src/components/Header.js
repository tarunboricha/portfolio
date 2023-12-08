import React from "react";

function Header(props) {
    
    return (
        <div className="header">
            <div className="header-item">
                <h5 onClick={() => props.setNav('About')}>About</h5>
                <h5 onClick={() => props.setNav('CV')}>CV</h5>
                <h5>Project</h5>
                <h5>Visuals</h5>
                <h5>Contact</h5>
            </div>
            <h2 onClick={() => props.setNav('About')}>TARUN BORICHA</h2>
        </div>
    );
}

export default Header;
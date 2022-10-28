import React, { useEffect } from 'react';
import SideNav from '../../SubComponents/SideBar/SideBar'
import '../../SubComponents/SideBar/Style.css'

function Header(props) {

    useEffect(() => {

    }, [])

    return (
        <div>
            <div className="container-fluid page-body-wrapper pad-0 mrg-0">
                <div className="row">
                    <div className="col-lg-2 col-md-12 col-sm-12 pr-0 "><SideNav></SideNav></div>
                    <div id="wrapper" class="active">
                        <div id="page-content-wrapper">
                            <div className="col-lg-10 col-md-12 col-sm-12 pad-0 mrg-0 main-div"><div className="main-panel">{props.children}</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

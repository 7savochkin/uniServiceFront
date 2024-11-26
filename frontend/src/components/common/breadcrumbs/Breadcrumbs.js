import {NavLink} from "react-router-dom";
import {Fragment} from "react";

import "./Breadcrumbs.css";

const Breadcrumbs = ({paths}) => {

    function renderLinks() {

        return paths.map((item, index) => {

            if (index === (paths.length - 1)) {
                return (
                    <Fragment key={index}>
                        <NavLink to={item.path}
                                 className="breadcrumbs__link breadcrumbs__link-active">
                            {item.name}
                        </NavLink>
                    </Fragment>
                )
            } else {
                return (
                    <Fragment key={index}>
                        <NavLink to={item.path}
                                 className="breadcrumbs__link">
                            {item.name}
                        </NavLink>
                        <span>/</span>
                    </Fragment>
                )
            }
        });
    }

    return (
        <nav className="breadcrumbs">
            <div className="container">
                <div className="breadcrumbs-wrapper">
                    {renderLinks()}
                </div>
            </div>
        </nav>
    )
}

export default Breadcrumbs;
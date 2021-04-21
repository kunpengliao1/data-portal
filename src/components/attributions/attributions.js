/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal attributions component.
 */

// Core dependencies
import React from "react";

// Styles
import compStyles from "./attributions.module.css";

// Images
import favicon from "../../../images/favicon/favicon.png";

function Attributions() {

    return (
        <div className={compStyles.trademark}>
            <img className={compStyles.trademark__image} src={favicon} alt="Mosaic"/>
            <p>The mosaic circle is a trademark of the Human Cell Atlas consortium, registered by Broad Institute and
                used with permission.</p>
        </div>
    );
}

export default Attributions;

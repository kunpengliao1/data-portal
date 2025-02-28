/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal analysis detail component.
 */

// Core dependencies
import React from "react";

// Styles
import compStyles from "./analysisDetail.module.css"
import fontStyles from "../../styles/fontsize.module.css";
import globalStyles from "../../styles/global.module.css";

const classNames = require("classnames");

function AnalysisDetail(props) {

    const {data} = props,
        {frontmatter, html} = data,
        {author, githubUrl, title} = frontmatter;
    const buttonClassNames = classNames(globalStyles.button, globalStyles.outline, globalStyles.primary);

    return (
        <div>
            <div className={compStyles.hcaAnalyzeDetail}>
                <div>
                    <h1>{title}</h1>
                    <p className={classNames(fontStyles.s, compStyles.author)}>{author}</p>
                </div>
                <a className={buttonClassNames}
                   href={githubUrl}
                   rel="noopener noreferrer"
                   target="_blank">View</a>
            </div>
            <div dangerouslySetInnerHTML={{__html: html}}/>
        </div>
    );
}

export default AnalysisDetail;

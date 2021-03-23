/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * Service coordinating footer links.
 */

// App dependencies
import {FooterQuery} from "../hooks/footer-query";

/**
 * Returns footer links from the footer hook query.
 *
 * @returns {boolean}
 */
export function getFooterLinks() {

    return filterFooterLinks(FooterQuery());
}

/**
 * Returns a filtered list of footer links.
 * All footer links are returned.
 *
 * @returns {boolean}
 */
function filterFooterLinks(links) {

    if ( !links ) {

        return [];
    }
    
    return links;
}

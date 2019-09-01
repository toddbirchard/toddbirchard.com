import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Menu, NavigationLinks } from '.'


/**
* Navigation component
*
* The Navigation component takes an array of your Ghost
* navigation property that is fetched from the settings.
* It differentiates between absolute (external) and relative link (internal).
* You can pass it a custom class for your own styles, but it will always fallback
* to a `site-nav-item` class.
*
*/

const Navigation = ({ data, navClass, logo }) => (
    <>
        <nav className="navigation">
            <Link to="/" className="nav-logo"><img src={logo} alt="logo" /></Link>
            <div className="navigation-links">
                {data.map((navItem, i) => {
                    if (navItem.url.match(/^\s?http(s?)/gi)) {
                        return <a className={navClass} href={navItem.url} key={i} target="_blank" rel="noopener noreferrer">{navItem.label}</a>
                    } else {
                        return <Link className={navClass} to={navItem.url} key={i}>{navItem.label}</Link>
                    }
                })}
            </div>

        </nav>
        <Menu right data={data} />
    </>
)

Navigation.defaultProps = {
    navClass: `site-nav-item`,
    navType: `home-nav`,
}

Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    navClass: PropTypes.string,
    navType: PropTypes.string,
}

export default Navigation

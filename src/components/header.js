import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import Headroom from "react-headroom"
import logo from "../images/device.png";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    
    <header className="fixed top-0 left-0 right-0 z-10">
      <Headroom>
      <div className="bg-transparent flex flex-wrap items-center justify-between p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-white font-display no-underline space-x-4">
            <img className="w-12" src={logo} alt={site.siteMetadata.title}/>
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <button
          className="items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-white text-xs no-underline uppercase md:inline-block md:mt-0 md:ml-6 font-display tracking-widest"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <nav
        className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-white text-xs no-underline uppercase md:inline-block md:mt-0 md:ml-6 font-display tracking-widest"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </Headroom>
      
    </header>
  );
}

export default Header;

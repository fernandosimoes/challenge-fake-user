import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
class Breadcrumbs extends Component {
    pages(pages) {
        const breadcrumb = pages.pathname.split('/');
        const lastposition = breadcrumb.length -1;
        const list = breadcrumb.map((crumb, k) => {
            if (k == 0 && crumb.length === 0) {
            return (<li key={k}>
                    <Link to='/' className="firstchild"><i className="fas fa-home"></i></Link>
                </li>)
            }
            if (k == 1 && crumb.length > 0) {
                return (
                    <li key={k}>
                    <div className="arrow">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <span><Link to={`/${crumb}`}>{crumb}</Link></span>
                </li>
                )
            }
            if ((k == lastposition-1) && lastposition > 3) { 
                return (
                    <li key={k}>
                    <div className="arrow">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <span>...</span>
                </li>
            )
            }
            if (k == lastposition && lastposition > 3) {
                return (
                    <li key={k}>
                    <div className="arrow">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <span><Link to={`/${crumb}`}>{crumb}</Link></span>
                </li>
                )
            }
        })
        return list;
    }

    render() {
        const pages = this.pages(this.props.urlinfo)
        // const lastPage = pages[pages.length-1];
        return (
            <div className="breadcrumbs">
                <ul className="breadcrumb--list">
                    {pages.map(page=>{
                        return page;
                    })}
                    
                </ul>
            </div>
        );
    }
}

export default Breadcrumbs;
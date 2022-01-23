import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
        return (
            <div className="my-4">
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex: '1'}}>
                        {source}
                    <span className="visually-hidden">unread messages</span></span>
                    <img src={imageUrl?imageUrl:"https://images.pexels.com/photos/3953481/pexels-photo-3953481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt="show news"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">Last updated by {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-secondary">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem

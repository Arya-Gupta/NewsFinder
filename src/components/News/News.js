import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps={
        country: 'in',
        pageSize: 9,
        category: 'general'
    }

    static propTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    
    constructor()
    {
        super();
        this.state={
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }

    async componentDidMount(){
        try {
            this.props.setProgress(10);
            this.setState({loading: true})
            this.props.setProgress(20);
            let result = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`);
            this.props.setProgress(50);
            let data = await result.json();
            this.props.setProgress(70);
            console.log(data);
            this.setState({
                articles: data.articles,
                totalResults: data.totalResults,
                loading: false
            });
            this.props.setProgress(100);
        } catch (e) {
            console.log("Error: ", e);
        }
    }

    fetchMoreData=async ()=>{
        try {
            this.setState({ 
                page: this.state.page+1
            })
            let result=await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`);
            let data = await result.json();
            this.setState({
                articles: this.state.articles.concat(data.articles),
                totalResults: data.totalResults
            })
        } catch (e) {
            console.log("Error: ", e);
        }
    }

    // handleNextClick= async ()=>{
    //     try {
    //         this.setState({loading: true})
    //         let result = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`);
    //         let data = await result.json();
    //         console.log(data);
    //         this.setState({
    //             page: this.state.page+1,
    //             articles: data.articles,
    //             loading: false
    //         });
    //     } catch (e) {
    //         console.log("Error: ", e);
    //     }
    //     console.log("Page no: ",this.state.page); 
    // }

    // handlePrevClick= async ()=>{
    //     console.log("prev");
    //     try {
    //         this.setState({loading: true})
    //         let result = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`);
    //         let data = await result.json();
    //         this.setState({
    //             page: this.state.page-1,
    //             articles: data.articles,
    //             loading: false
    //         });
    //     } catch (e) {
    //         console.log("Error: ", e);
    //     }
    //     console.log("Page no: ",this.state.page); 
    // }

    render() {
        return (
            <div style={{marginTop: "120px"}}>
                {this.state.loading && <Spinner/>}
                    <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length!==this.state.totalResults} loader={<Spinner/>}>
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element)=>{
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title?element.title.slice(0,80):""} description={element.description?element.description.slice(0,100):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                                </div>
                            })}
                        </div>
                    </div>
                    </InfiniteScroll>
                {/*{!this.state.loading && <div className="container d-flex justify-content-between my-5">
                <button disabled={this.state.page<=1} type="button" className="btn btn-light" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-light" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>}*/}
            </div>
        )
    }
}

export default News




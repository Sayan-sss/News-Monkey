import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello i am the constructor")
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
 
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydescription" imageUrl="" newsUrl="" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydescription" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydescription" />
            <h1>sayan</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

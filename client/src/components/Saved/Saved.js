import React, { Component } from "react";
import API from "../../utils/API";
import {Savedcard} from "../../components/Savedcard";

class Saved extends Component {

  state = {
    articles: [],
  };

  // componentDidMount() {
  //   this.loadArticles();
  // }
  //
  // loadArticles = () => {
  //   API.findAll()
  //     .then(res =>
  //       this.setState({ articles: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };


  render() {
    return (
      <div>

        <div className="container">

          <div className="row resultsWindow">
            <div className="col-md-12">
              <div className="card">
                <h5 className="card-header">Saved Articles</h5>
                <div className="card-body">
                  {this.state.articles.map(article => {
                    return (
                      <Savedcard
                        id={article.id}
                        title={article.title}
                        date={article.date}
                        url={article.url}
                        snippet={article.snippet}
                        // onClick={() => this.deleteArticle(id)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };
}


export default Saved;

import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import {Searchresult} from "../../components/Searchresult";

class Home extends Component {

  state = {
    q: "",
    startDate: "",
    endDate: "",
    articles: [],
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.q && this.state.startDate && this.state.endDate) {
      API.searchArticles({
        "api-key": "985ea6ce339c4406a9745e2267215aac",
        begin_date: this.state.startDate+"0101",
        end_date: this.state.endDate+"0101",
        sort: "newest",
        fl: "pub_date, web_url, headline, snippet"
      })
        .then(res =>
          this.setState({ articles: res.data.response.docs })
        )
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <div>

        <div className="container">

          <div className="row searchWindow">
            <div className="col-md-12">
              <div className="card">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                  <form>
                    <Input
                      value= {this.state.q}
                      onChange={this.handleInputChange}
                      label= "Search Topic"
                      id= "searchString"
                      name= "q"
                      placeholder= "Search Topic"
                      >
                    </Input>
                    <Input
                      value= {this.state.startDate}
                      onChange={this.handleInputChange}
                      label= "Start Year"
                      id= "startYear"
                      name= "startDate"
                      placeholder= "YYYY"
                      >
                    </Input>
                    <Input
                      value= {this.state.endDate}
                      onChange={this.handleInputChange}
                      label= "End Year"
                      id= "endYear"
                      name= "endDate"
                      placeholder= "YYYY"
                      >
                    </Input>
                    <FormBtn
                      disabled={!(this.state.q && this.state.startDate && this.state.endDate)}
                      onClick={this.handleFormSubmit}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row resultsWindow">
            <div className="col-md-12">
              <div className="card">
                <h5 className="card-header">Search Results</h5>
                <div className="card-body">
                    {this.state.articles.map(article => {
                      const date= article.pub_date.split("T")
                      return (
                        <Searchresult
                          key={article.headline.main}
                          title={article.headline.main}
                          date={date[0]}
                          url={article.web_url}
                          snippet={article.snippet}
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


export default Home;

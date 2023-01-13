import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Search from "./search/Search";
import Result from "./search/Result";
import Conversation from "./search/Conversation";
import Comment from "./search/Comment";

function SearchRoute(props) {
    return (
      <>
        <Search name={props.name} onChange={props.onChange} />
        <Result name={props.name} posts={props.posts} />
      </>
    )
  }

function  CommentRoute(props) {
    const params = useParams();
    const post = props.posts.find(item => item.id == params.id);
    const comment = props.comments.filter(item => item.postId == params.id);
    return (
      <>
        <Conversation title={post.title} body={post.body} />
        <Comment comment={comment} />
      </>
    )
  
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      comments: null,
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(new_var) {
    this.setState({ name: new_var });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => {
      this.setState({ posts: res })
    })
    .catch((err) => {
      console.log(err);
    });

    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((res) => {
      this.setState({ comments: res })
    })
    .catch((err) => {
      console.log(err);
    });

  }

  render() {
    let searchWord = this.state.posts;
    if (!this.state.posts || !this.state.comments) {
      return <div>取得中…</div>;
    } else {
      if (this.state.name !== "") {
        searchWord = this.state.posts.filter((post) =>
          post.title.includes(this.state.name)
        );
      }
      return (
        <Router>
          <main className="wrap">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <SearchRoute
                    name={this.state.name}
                    onChange={this.handleChange}
                    posts={searchWord}
                  />
                }
              />

              <Route path="/comment">
                <Route
                  path=":id"
                  element={
                    <CommentRoute
                      posts={this.state.posts}
                      comments={this.state.comments}
                    />
                  }
                />
              </Route>
              <Route path="*" element={<h2>Not Found</h2>} />
            </Routes>
          </main>
        </Router>
      );
    }
  }
}

export default App;

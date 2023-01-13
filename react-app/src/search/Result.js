import React from "react";
import { Link } from "react-router-dom";

class Article extends React.Component {
  bgYellow(title, name) {
    if (name == "") {
      return title;
    }
    const titleSplit = title.split(name);
    const ar = [];
    for (let i = 0; i < titleSplit.length; i++) {
      ar.push(titleSplit[i]);
      if (i != titleSplit.length - 1) {
        ar.push(React.createElement("span", { className: "bgYellow" }, name));
      }
    }
    return ar;
  }

  render() {
    const re = this.bgYellow(this.props.title, this.props.name);
    if (this.props.num <= 5) {
      return (
        <article className="post_data new">
          <Link
            to={"/comment/" + this.props.num}>
            <dl>
              <dt>Title</dt>
              <dd className="title" children={re} />
              <dt>Body</dt>
              <dd className="post">{this.props.body}</dd>
            </dl>
            <p className="ta_right">&gt;&gt;続きを読む</p>
          </Link>
        </article>
      );
    } else {
      return (
        <article className="post_data">
          <Link
            to={"/comment/" + this.props.num}>
            <dl>
              <dt>Title</dt>
              <dd className="title" children={re} />
              <dt>Body</dt>
              <dd className="post">{this.props.body}</dd>
            </dl>
            <p className="ta_right">&gt;&gt;続きを読む</p>
          </Link>
        </article>
      );
    }
  }
}
export default class Result extends React.Component {
  render() {
    const posts_data = this.props.posts.map((post, num) => (
      <Article
        title={post.title}
        body={post.body}
        key={post.id}
        name={this.props.name}
        num={post.id}
      />
    ));
    return (
      <>
        <h3>検索結果：{this.props.posts.length}件 (選択で記事へのコメント確認画面へ)</h3>
        <section className="result">{posts_data}</section>
      </>
    );
  }
}

import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <section className="search">
        <form action="#">
          <h2>掲示板：動作確認(情報取得-Title検索機能)</h2>
          <p>Titleで絞り込みたい文字を入力してください<br />
          <input
            type="text"
            name="article"
            value={this.props.name}
            onChange={this.handleChange}
          />
          </p>
        </form>
        <p>データ取得元：<a href="https://jsonplaceholder.typicode.com/posts/">https://jsonplaceholder.typicode.com/posts/</a></p>
      </section>
    );
  }
}

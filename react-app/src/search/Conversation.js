import React from "react";
import { Link } from "react-router-dom";

export default class Conversation extends React.Component {
    render() {
        return (

            <section className="conversation">
                <p><Link to={"/"}>&lt;&lt;一覧に戻る</Link></p>
                <h2><span className="conversation_title">Title：</span>
                    {this.props.title}</h2>
                <p>(選択した掲示板記事の詳細表示)</p>
                <p className="post_body">{this.props.body}</p>
                <p>データ取得元：<a
                    href="https://jsonplaceholder.typicode.com/comments/">https://jsonplaceholder.typicode.com/comments/</a>
                </p>
                <hr />
            </section>
        )
    }
}
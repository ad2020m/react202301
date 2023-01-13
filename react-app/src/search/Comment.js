import React from "react";

class Article extends React.Component {
    render() {
        return (
            <article className="comment_data">
                <div className="comment_person">
                    <p className="person dropcap">{ this.props.email }</p>
                </div>
                <div className="comment_body">
                    <p>{ this.props.name }</p>
                    <p>{ this.props.body }</p>
                </div>
            </article>
        )
    }
}
export default class Comment extends React.Component {
    render() {
        const posts_data = this.props.comment.map((post, num) => (
            <Article email={post.email} name={post.name} body={post.body} key={post.id} num={num} />
        ));
        return (
        <section className="comment">
            <p>コメント一覧：(掲示板記事へのコメント取得、表示一対多)</p>
            {posts_data}
            </section>
        )
    }
}
import React, { Component } from "react";
import PostItem from "./PostItem";

const data = [
  { title: "大家一起来讨论React吧", author: "张三", date: "2024-09-01" },
  { title: "前端框架", author: "李四", date: "2024-08-01" },
  { title: "Web APP的时代已经到来", author: "王五", date: "2024-07-01" },
];

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.timer = null;
    this.handleVote = this.handleVote.bind(this);
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: "大家一起来讨论React吧",
            author: "张三",
            date: "2024-09-01",
            vote: 0,
          },
          {
            id: 2,
            title: "前端框架",
            author: "李四",
            date: "2024-08-01",
            vote: 0,
          },
          {
            id: 3,
            title: "Web APP的时代已经到来",
            author: "王五",
            date: "2024-07-01",
            vote: 0,
          },
        ],
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  handleVote(id) {
    const posts = this.state.posts.map((item) => {
      const newItem = item.id === id ? { ...item, vote: ++item.vote } : item;
      return newItem;
    });
    this.setState({
      posts,
    });
  }
  render() {
    return (
      <div>
        帖子列表:
        <ul>
          {this.state.posts.map((item) => (
            <PostItem post={item} onVote={this.handleVote} key={item.id} />
          ))}
        </ul>
      </div>
    );
  }
}
export default PostList;

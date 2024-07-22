import React, {Component} from 'react';
import PostItem from "./PostItem";

const data = [
    {title: '大家一起来讨论React吧',author: '张三', date: '2024-09-01'},
    {title: '前端框架',author: '李四', date: '2024-08-01'},
    {title: 'Web APP的时代已经到来',author: '王五', date: '2024-07-01'},
]

class PostList extends Component {
    render(){
        return (
            <div>
                帖子列表:
                <ul>
                    {
                        data.map(item =>
                            <PostItem title={item.title} author={item.author} date={item.date} />
                        )
                    }
                </ul>
            </div>
        )
    }
}
export default PostList;
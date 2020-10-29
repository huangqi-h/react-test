import React, { Component } from 'react'
import { Button, View } from '@tarojs/components'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.styl'

const DataSource = { 
  getBlogPost: (id) => id,
  removeChangeListener: () => {},
  addChangeListener: () => {}
}
// 此函数接收一个组件...
function WithSubscription(WrappedComponent, selectData) {
  // ...并返回另一个组件...
  return class extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }
    componentDidMount() {
      // ...负责订阅相关的操作...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }
    render() {
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

class CommentList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.data.map((comment) => (
          <View>{comment.id}</View>
          // <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}
// 稍后，编写了一个用于订阅单个博客帖子的组件，该帖子遵循类似的模式：
export class BlogPost extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View>{this.props.data}</View>;
  }
}
const CommentListWithSubscription = WithSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = WithSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);
export default class A extends Component {
  render() {
    return <BlogPostWithSubscription id={1}></BlogPostWithSubscription>
  }
}


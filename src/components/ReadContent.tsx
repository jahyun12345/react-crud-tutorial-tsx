import * as React from 'react';

interface ReadProps {
  title: string;
  desc: string;
}

interface ReadState {
}

class CreateContent extends React.Component<ReadProps, ReadState> {
  render() {
    // console.log('ReadContent render');

    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

export default CreateContent;
import * as React from 'react';

interface CreateProps {
  onSubmit(title:string, desc:string): void;
}

interface CreateState {
}

class CreateContent extends React.Component<CreateProps, CreateState> {
  render() {
    // console.log('CreateContent render');

    return (
      <article>
        <h2>Create</h2>
        <form 
          action="/create_process" 
          method="post"
          onSubmit={(e:any) => {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }}
        >
          <p><input type="text" name="title" placeholder="title" /></p>
          <p><textarea name="desc" placeholder="description" /></p>
          <p><input type="submit" /></p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
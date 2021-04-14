import * as React from 'react';

interface UpdateProps {
  data: any;
  onSubmit(id:any, title:string, desc:string): void;
}

interface UpdateState {
  id: number;
  title: string;
  desc: string;
}

class UpdateContent extends React.Component<UpdateProps, UpdateState> {
  // constructor(props:UpdateProps) {
  //   super(props);
  //   this.state = {
  //     id:this.props.data.id,
  //     title:this.props.data.title,
  //     desc:this.props.data.desc
  //   }
  //   this.inputFormHandler = this.inputFormHandler.bind(this);
  // }
  state:UpdateState = {
    id:this.props.data.id,
    title:this.props.data.title,
    desc:this.props.data.desc
  }

  // inputFormHandler(e:any) {
  //   // console.log({[e.target.name]:e.target.value});
  //   this.setState({[e.target.name]:e.target.value});
  // }

  render() {
    // console.log(this.props.data);
    // console.log('UpdateContent render');

    return (
      <article>
        <h2>Update</h2>
        <form 
          action="/create_process" 
          method="post"
          onSubmit={(e:any) => {
            e.preventDefault();
            this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
          }}
        >
          <input type="hidden" name="id" value={this.state.id} />
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="title" 
              value={this.state.title} 
              // onChange={this.inputFormHandler}
              onChange={(e:any) => {
                this.setState({title:e.target.value});
              }}
            />
          </p>
          <p>
            <textarea 
              name="desc" 
              placeholder="description" 
              value={this.state.desc}
              // onChange={this.inputFormHandler}
              onChange={(e:any) => {
                this.setState({desc:e.target.value});
              }}
            />
          </p>
          <p><input type="submit" /></p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
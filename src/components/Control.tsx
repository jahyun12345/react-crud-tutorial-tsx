import * as React from 'react';

interface ControlProps {
  onChangeMode(mode:string): void;
}

interface ControlState {
}

class Control extends React.Component<ControlProps, ControlState> {
  render() {
    // console.log('Controll render');

    return (
      <ul>
        <li>
          <a 
            href="/create" 
            onClick={(e:any) => {
              e.preventDefault();
              this.props.onChangeMode('create');
            }}
          >
            create
          </a>
        </li>
        <li>
          <a 
            href="/update"
            onClick={(e:any) => {
              e.preventDefault();
              this.props.onChangeMode('update');
            }}
          >
            update
          </a>
        </li>
        <li>
          <input 
            type="button" 
            value="delete" 
            onClick={(e:any) => {
              e.preventDefault();
              this.props.onChangeMode('delete');
            }}
          />
        </li>
      </ul>
    );
  }
}

export default Control;
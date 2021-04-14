import * as React from 'react';

interface SubjectProps {
  onChangePage(): void;
  title: string;
  sub: string;
}

interface SubjectState {
}


class Subject extends React.Component<SubjectProps, SubjectState> {
  render() {
    // console.log('Subject render');

    return (
      <header>
        <h1>
          <a href="/" 
            onClick={(e:any) => {
              e.preventDefault();
              this.props.onChangePage();
            }}
          >
            {this.props.title}
          </a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
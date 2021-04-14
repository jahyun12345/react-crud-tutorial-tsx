import * as React from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Control from'./components/Control';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

interface MainProps {
}

interface MainState {
  mode: string;
  subject: any;
  welcome: any;
  contents: Array<object>;
  selected_content_id: number;
}

class App extends React.Component<MainProps, MainState> {
  max_content_id:number = 3;
  state:MainState = {
    mode:'welcome',
    subject:{title:'WEB', sub:'world wide web!'},
    welcome:{title:'Welcome', desc:'Hello, React!'},
    contents:[
      {id:1, title:'HTML', desc:'HTML is for information.'},
      {id:2, title:'CSS', desc:'CSS is for design.'},
      {id:3, title:'JavaScript', desc:'JavaScript is for interactive.'}
    ],
    selected_content_id:2
  }

  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data:any = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        // console.log(data);
        return data;
        break;
      }
      i = i + 1;
    }
  }

  getContent() {
    var _title:string, _desc:string, _article:any = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />
    } else if (this.state.mode === "create") {
      _article = <CreateContent onSubmit={(_title:string, _desc:string) => {
        this.max_content_id = this.max_content_id + 1;
        // 원본 데이터 수정
        // this.state.contents.push({id: this.max_content_id, title:_title, desc:_desc});
        // this.setState({contents:this.state.contents});
        // 복제 데이터 수정
        // * push
        // var _contents = Array.from(this.state.contents);
        // _contents.push({id: this.max_content_id, title:_title, desc:_desc});
        // * concat
        var _contents = this.state.contents.concat({id:this.max_content_id, title:_title, desc:_desc});
        this.setState({contents:_contents, mode:'read', selected_content_id:this.max_content_id});
      }} />
    } else if (this.state.mode === "update") {
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={(_id:any, _title:string, _desc:string) => {
        var _contents:any = Array.from(this.state.contents);
        var i = 0;
        while (i < _contents.length) {
          if (_contents[i].id === _id) {
            _contents[i] = {id:_id, title:_title, desc:_desc};
            break;
          }
          i = i + 1;
        }
        this.setState({contents:_contents, mode:'read'});
      }}/>
    }
    return _article;
  }

  render() {
    // console.log('App render');

    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub} 
          onChangePage={() => {
            this.setState({mode:'welcome'});
          }} 
        />
        <TOC 
          data={this.state.contents} 
          onChangePage={(id) => {
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }}
        />
        <Control onChangeMode={(changedMode:string) => {
          if (changedMode === 'delete') {
            if (window.confirm('sure?')) {
              var _contents:any = Array.from(this.state.contents);
              var i = 0;
              while (i < _contents.length) {
                if (_contents[i].id === this.state.selected_content_id) {
                  _contents.splice(i, 1);
                  break;
                }
                i = i + 1;
              }     
              this.setState({mode:'welcome', contents:_contents});
            }
          } else {
            this.setState({mode:changedMode});
          }
        }} />

        {/* <header>
          <h1>
            <a href="/" 
              onClick={(e:any) => {
                console.log(e);
                e.preventDefault();
                this.setState({
                  mode:'welcome'
                });
            }}>
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header> */}

        {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub} />
        <TOC data={this.state.contents} />
        <Content title={_title} desc={_desc} /> */}
        
        {/* <Subject title="WEB" sub="world wide web!" />
        <TOC />
        <Content title="HTML" desc="HTML is HyperText Markup Language." /> */}

        {/* Hello, React! */}
        
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {this.getContent()}
      </div>
    );
  }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
}

export default App;

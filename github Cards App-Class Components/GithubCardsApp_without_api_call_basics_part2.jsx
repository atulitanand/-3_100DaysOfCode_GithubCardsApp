
	const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


const CardList = (props) => {
return (props.profiles.map( profile => <Card {...profile}/> ));
}

class Card extends React.Component {
render() {
  return (
    <div className="github-profile">
      <img src={this.props.avatar_url} />
      <div className="info">
        <div className="name">{this.props.name}</div>
        <div className="company">{this.props.company}</div>
      </div>
    </div>
  );
}
}

class Form extends React.Component{
// userNameInput= React.createRef();
state = {userName: ''};
handleSubmit = (event) => {
  event.preventDefault();
  // console.log(this.userNameInput.current)
}
render(){
  return(
    <form onSubmit = {this.handleSubmit}>
      <input 
        type="text" 
        placeholder="Github Username" 
        required 
        // ref={this.userNameInput}
        value= {this.state.userName}
        onChange = {
         event => {
           this.setState({
             userName: event.target.value
           })
         }
        }
        />
      <button>Add Card</button>
    </form>
  )
}
}

class App extends React.Component { 
// constructor(props){
//   super(props);
//   this.state = {
//     profiles: testData,
//   };
// }
state = {
// this is new javascript way of doing things - this is called a class filed 
  profiles: testData,
}

render() {
  return (
    <div>
      <div className="header">{this.props.title}</div>
      <Form/>
      <CardList profiles={this.state.profiles}/>
    </div>
  );
}	
}

ReactDOM.render(
<App title="The GitHub Cards App" />,
mountNode,
);
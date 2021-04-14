// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


const CardList = (props) => {
// when you start adding cards like this react will give a warning that if any key id will not be given then their sequence will be considered as their key id which might cause problems while reordering stuff
return (props.profiles.map( profile => <Card key={profile.id} {...profile}/> ));
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
handleSubmit = async (event) => {
event.preventDefault();
// this playground has axios already installed so we will just fetch data directly (axios returns promises so async and await)
const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
this.props.onSubmit(resp.data)
this.setState({userName: ''})
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
state = { 
profiles: [],
};
addNewProfile = (profileData) => {
this.setState(
  prevState => ({
    profiles: [...prevState.profiles, profileData],
  })
)
};
render() {
return (
  <div>
    <div className="header">{this.props.title}</div>
    <Form onSubmit={this.addNewProfile}/>
    <CardList profiles={this.state.profiles}/>
  </div>
);
}	
}

ReactDOM.render(
<App title="The GitHub Cards App" />,
mountNode,
);
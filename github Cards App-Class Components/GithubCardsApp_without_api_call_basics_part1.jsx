
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
render(){
  return(
    <form action="">
      <input type="text" placeHolder="Github Username"/>
      <button>Add Card</button>
    </form>
  )
}
}

class App extends React.Component { 

/*we want to add new data to the testData array every timer user we add new card
since prop is immutable so we need to put data in special state variable
(remember this is a declaritive language so we don't have to tell react the should it reload the whole ClassList element or just add some html , it will make optimized code it self)
so to do that we need to use the constructor of the instance of the class (i.e. object) associated and 
that should be done everytime we create a new instance so 
what can we use?
yes constructor() 
now this constructor need to have a super method because it is using constructor of its super class i.e. React.Component and super method is there to honer the link between parent and child
this special method receives instance props as well
constructor(){
  super(props)
  // this property has to be an object in class components unlike function components
  this.state = {}
}
*/
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
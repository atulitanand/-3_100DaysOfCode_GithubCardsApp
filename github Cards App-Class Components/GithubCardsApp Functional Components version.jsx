const Card = (props) => {
  return (
    <div className="github-profile">
      <img src={props.profile.avatar_url} />
      <div className="info">
        <div className="name">{props.profile.name}</div>
        <div className="company">{props.profile.company}</div>
      </div>
    </div>
  );
};

const CardList = ({ profiles }) => {
  return profiles.map((profile) => <Card profile={profile} />);
};

const Form = (props) => {
  const fetchInput = (event) => {
    event.preventDefault();
    let inputData = document.getElementById("input_cardName");
    props.onSubmitHandler(inputData.value);
    inputData.value = "";
  };
  return (
    <form onSubmit={fetchInput}>
      <input type="text" id="input_cardName" />
      <button type="submit">Add Card</button>
    </form>
  );
};

const App = () => {
  const [currentProfiles, addProfile] = useState([]);
  const addCard = async (profileName) => {
    const resp = await axios.get(`https://api.github.com/users/${profileName}`);
    let profile = await resp.data;
    addProfile([...currentProfiles, profile]);
  };
  return (
    <div>
      <div>Github Cards Application</div>
      <Form onSubmitHandler={addCard} />
      <CardList profiles={currentProfiles} />
    </div>
  );
};

ReactDOM.render(<App />, mountNode);

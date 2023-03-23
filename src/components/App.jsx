import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function CreateCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
      profile={contact.profile}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">Kessoku Band</h1>
        <Avatar img="https://i.redd.it/cuwi2j28zs2a1.jpg" size="big"/>
        {contacts.map(CreateCard)}
    </div>
  );
}

export default App;

const Persons = (props) => {
  const [age, setAge] = useState(0);

  const incrementAge = () => {
    setAge((prevAge) => prevAge + 1);

    if (age === 18) {
      alert('Congrats, you have made it');
    }
  };

  return (
    <div>
      <button onClick={incrementAge}>my age is {age}</button>
    </div>
  );
};

/////////////////////////////////////////////////////////////////////

const Persons = (props) => {
  const [person, _setPerson] = useState(props);

  return (
    <div>
      <p>
        My name is {person.name} and my age is {person.age}
      </p>
    </div>
  );
};

/////////////////////////////////////////////////////////////////////
const Message = () => {
  const [messageObj, setMessage] = useState({ message: '' });

  return (
    <div>
      <input
        type='text'
        value={messageObj.message}
        placeholder='Enter a message'
        onChange={(e) => {
          messageObj.message = e.target.value;
          setMessage(messageObj);
        }}
      />
      <p>
        <strong>{messageObj.message}</strong>
      </p>
    </div>
  );
};

/////////////////////////////////////////////////////////////////////

const Message = () => {
  const [messageObj, setMessage] = useState({ message: '', id: 1 });

  return (
    <div>
      <input
        type='text'
        value={messageObj.message}
        placeholder='Enter a message'
        onChange={(e) => {
          const newMessageObj = { message: e.target.value };
          setMessage(newMessageObj);
        }}
      />
      <p>
        <strong>
          {messageObj.id}: {messageObj.message}
        </strong>
      </p>
    </div>
  );
};
///////////////////////////////////////////////////////////////////////

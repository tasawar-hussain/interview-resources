function Person(name, age) {
  this.name = {
    first,
    last
  };
  this.age = age;
}

function Student(name, age, rollNo) {
  Person.call(this, name, age);
  this.rollNo = rollNo;
}



const data = [];
const keys = [];




const TableHeader = props => {
  const { data } = props;
  return (
    <tr>
      {Object.keys(data).map(header => (
        <th key={header}>{header}</th>
      ))}
    </tr>
  );
};

const TableBody = props => {
  const { data } = props;
  return data.map(d => {
    return (
      <tr>
        {Object.keys(d).map(k => {
          if (typeof d[k] === "object") {
            return <DynamicTable data={[d[k]]} />
          } else {
            return <th key={k}>{d[k]}</th>;
          }
        })}
      </tr>
    );
  });
};

const DynamicTable = props => {
  const { data } = props;
  return (
    <table>
      <TableHeader data={data[0]} />
      <TableBody data={data} />
    </table>
  );
};

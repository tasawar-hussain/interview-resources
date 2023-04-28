class ParentComp extends React.Component {
  render() {
    // The new prop to the added.
    let newProp = 'red';
    // Looping over the parent's entire children,
    // cloning each child, adding a new prop.
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, { newProp }, null);
        })}
      </div>
    );
  }
}

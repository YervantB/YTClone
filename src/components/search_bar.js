import React, { Component } from 'react'; //create variable React and pull off Component property into variable Component

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '' }
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.text}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(text){
    this.setState({text : text});
    this.props.onSearchTextChange(text);
  }
}



export default SearchBar;



/* Functional Component
    const SearchBar = () => {
        return <input />
    };
*/
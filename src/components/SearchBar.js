import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = evt => {
    this.setState({ term: evt.target.value });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <label htmlFor="vidsearch">Video Search</label>
            <input
              type="text"
              value={this.state.term}
              name="vidsearch"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

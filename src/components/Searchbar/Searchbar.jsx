import PropTypes from "prop-types";
import { Component } from 'react';
import styles from './search-bar.module.scss';
class Searchbar extends Component {
  state = {
    search: '',
  };
static propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      return alert('Somthing goes wrong.');
    }
    const { onSubmit } = this.props;
    onSubmit(this.state.search);
  };
  reset() {
    this.setState({
      search: '',
    });
  }
  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form className={styles.Searchbar} onSubmit={handleSubmit}>
        <div className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchForInput}
            value={search}
            onChange={handleChange}
            name="search"
            placeholder="Search images"
            required
          />
        </div>
      </form>
    );
  }
}
export default Searchbar;

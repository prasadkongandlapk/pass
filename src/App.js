import './App.css'
import {Component} from 'react'
import {v4 as v4uuid} from 'uuid'

const Password = props => {
  const {passwordDetails, onDelete} = props
  const {username, password, website, id} = passwordDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <div className="password-bg">
      <div className="initial">
        <p>{username[0]}</p>
      </div>
      <div>
        <p>{username}</p>
        <p>{website}</p>
        <p>{password}</p>
      </div>
      <div>
        <button type="button" onClick={onDelete}>
          <img
            className="img-delete"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </div>
  )
}

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialPasswordsList = []

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    searchInput: '',
    passwordsList: initialPasswordsList,
    count: 0,
  }

  onSubmitPassword = event => {
    event.preventdefault()

    const {website, username, password, searchInput, passwordsList} = this.state

    const initialBgColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    if (username.length > 0 && website.length > 0 && password.length > 0) {
      const newPassword = {
        id: v4uuid(),
        website,
        username,
        password,
        passwordsList,
        bgColor: initialBgColorClassName,
      }

      this.setState(prevState => ({
        passwordsList: [...passwordsList, newPassword],
        count: prevState.count + 1,
        website: '',
        username: '',
        password: '',
      }))
    }
  }
  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  OnEmptyResult = () => {
    const {count} = this.state
    if (count === 0) {
      return (
        <div className="no-passwords-img-bg">
          <img
            className="no-passwords-img"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
            alt="no passwords"
          />
          <p className="h2">No Passwords</p>
        </div>
      )
    }
  }

  onDelete = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(each => each.id !== id),
      count: prevState.count - 1,
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {website, username, password, searchInput, passwordsList} = this.state

    const filteredPasswords = passwordsList.filter(eachPassword =>
      eachPassword.username.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
          alt="app logo"
        />
        <div className="form-bg">
          <form onSubmit={this.onSubmitPassword}>
            <div>
              <h1 className="h1">Add New Password</h1>
              <div className="input-bg">
                <img
                  className="input-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                  alt="website"
                />
                <hr />
                <input
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="input-bg">
                <img
                  className="input-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  alt="username"
                />
                <hr />
                <input
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="input-bg">
                <img
                  className="input-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  alt="password"
                />
                <hr />
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                />
              </div>
            </div>
            <div className="btn-card">
              <button data-testid="delete" type="submit" className="add-btn">
                Add
              </button>
            </div>
          </form>
          <div>
            <img
              className="form-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
            />
          </div>
        </div>
        <div className="result-bg">
          <div className="password-search-bg">
            <div className="passwords-count-bg">
              <h1 className="h2">Your Passwords</h1>
              <p className="count-bg">0</p>
            </div>
            <div className="input-bg">
              <img
                className="input-logo"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
              />
              <hr />
              <input
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearch}
              />
            </div>
          </div>
          <hr className="hr2" />
          <div className="checkbox-label">
            <input
              onClick={this.onClickCheckbox}
              className="checkbox-input"
              type="checkbox"
              name="show"
            />
            <label className="label-check" value="show" htmlFor="show">
              Show passwords
            </label>
          </div>

          {this.OnEmptyResult()}
          <ul>
            {filteredPasswords.map(eachPass => (
              <Password
                passwordDetails={eachPass}
                onDelete={this.onDelete}
                key={eachPass.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const App = () => <PasswordManager />

export default App

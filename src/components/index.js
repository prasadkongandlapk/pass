import './index.css'

const Password = props => {
  const {passwordDetails, checkbox, onDelete} = props
  const {username, password, website, id} = passwordDetails

  const onClickDelete = () => {
    onDelete(id)
  }

  const showPassword =
    checkbox === true ? (
      <p>{password}</p>
    ) : (
      <img
        className="stars"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
        alt="stars"
      />
    )

  return (
    <li>
      <div className="password-bg">
        <div className="initial">
          <p>{username[0]}</p>
        </div>
        <div>
          <p>{website}</p>
          <p>{username}</p>
          {showPassword}
        </div>
        <div>
          <button className="delete-btn" type="button" onClick={onDelete}>
            <img
              className="img-delete"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default Password

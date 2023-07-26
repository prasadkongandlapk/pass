import './index.css'

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

export default Password

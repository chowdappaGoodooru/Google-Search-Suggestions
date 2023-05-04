import './index.css'

const HistoryItem = props => {
  const {eachUserHistory, deleteEventCall} = props
  const {domainUrl, logoUrl, timeAccessed, title, id} = eachUserHistory
  const onClickEvent = () => {
    deleteEventCall(id)
  }
  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <div className="list-data-container">
        <div className="logo-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={onClickEvent}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem

import './index.css'

const Country = props => {
  const {countryDetails, onChangeCountryState} = props

  const {imageUrl, name, isVisited, id} = countryDetails

  const onClickRemoveBtn = () => {
    onChangeCountryState(id)
  }

  return (
    <>
      {isVisited ? (
        <li className="visited-country-card">
          <img src={imageUrl} alt="thumbnail" className="country-flag" />
          <div className="container">
            <p className="country-name">{name}</p>
            <button
              className="remove-btn"
              type="button"
              onClick={onClickRemoveBtn}
              data-testid="remove"
            >
              Remove
            </button>
          </div>
        </li>
      ) : null}
    </>
  )
}

export default Country

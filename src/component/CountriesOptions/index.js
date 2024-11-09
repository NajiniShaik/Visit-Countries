import './index.css'

const CountryOptions = props => {
  const {optionDetails, onChangeCountryState} = props

  const {name, isVisited, id} = optionDetails

  const onClickVisitBtn = () => {
    onChangeCountryState(id)
  }

  return (
    <li className="card">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="text">Visited</p>
      ) : (
        <button className="visit-btn" type="button" onClick={onClickVisitBtn}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryOptions

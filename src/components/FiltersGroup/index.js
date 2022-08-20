import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    activeId,
    selectedCategory,
    collectInput,
    ratingsList,
    ratingOption,
    clearQueries,
    searchInput,
    processBegin,
  } = props

  const activeIdOption = id => {
    selectedCategory(id)
  }

  const selectedRating = rating => {
    ratingOption(rating)
  }

  const onChangeInput = event => {
    collectInput(event.target.value)
  }

  const updateQueries = () => {
    clearQueries()
  }

  const enterKey = event => {
    if (event.key === 'Enter') {
      processBegin()
    }
  }

  const selectOption = () => (
    <ul className="unList">
      {categoryOptions.map(eachOption => {
        const className =
          eachOption.categoryId === activeId ? 'selectedBtn' : 'normalBtn'
        const activeOption = () => activeIdOption(eachOption.categoryId)
        return (
          <li className="list" key={eachOption.id}>
            <button className={className} type="button" onClick={activeOption}>
              <p>{eachOption.name}</p>
            </button>
          </li>
        )
      })}
    </ul>
  )

  const rating = () => (
    <ul className="unList">
      {ratingsList.map(eachRating => {
        const selectedStar = () => selectedRating(eachRating.ratingId)

        return (
          <li className="list" key={eachRating.ratingId}>
            <button
              className="normalBtn ratingBtn"
              type="button"
              onClick={selectedStar}
            >
              <img
                src={eachRating.imageUrl}
                className="ratingStar"
                alt={`rating ${eachRating.ratingId}`}
              />
              <p>& up</p>
            </button>
          </li>
        )
      })}
    </ul>
  )

  return (
    <div className="filters-group-container">
      <div className="searchInput">
        <input
          type="search"
          className="search"
          onChange={onChangeInput}
          placeholder="search"
          value={searchInput}
          onKeyDown={enterKey}
        />
        <BsSearch className="searchLogo" />
      </div>
      <h1>Category</h1>
      {selectOption()}
      <h1>Rating</h1>
      {rating()}

      <button type="button" className="clearBtn" onClick={updateQueries}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

const SearchForm = ({ onSubmit, onChange }) => {
    return (
        <div className="container">
            <hr></hr>
            <h2> Search Song</h2>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} />
                <br></br>
                <button type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchForm;
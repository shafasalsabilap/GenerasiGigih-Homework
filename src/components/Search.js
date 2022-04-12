const SearchForm = ({ onSubmit, onChange }) => {
    return (
        <div >
            <h2> Search Song</h2>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} />
                <br></br>
                <button type="submit"> Search </button>
            </form>
        </div>
    )
}
// shafasalsabilapribadi kmg2fe4040
export default SearchForm;
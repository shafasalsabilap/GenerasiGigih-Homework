import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { FormEvent, ChangeEvent } from "react";

export type SearchFormProps = {
    onSubmit: (e: FormEvent) => void,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchForm = ({ onSubmit, onChange }: SearchFormProps) => {
    return (
        <div >
            <h2> Search Song</h2>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} />
                <br></br> <br></br>
                <Button type="submit" value="Submit" variant="contained" color="success" startIcon={<SearchIcon />}> SEARCH </Button> {/* ADD NEW UI BUTTON FROM MUI */}
                {/* <button type="submit"> Search </button> */}
            </form>
        </div>
    )
}
// shafasalsabilapribadi kmg2fe4040
export default SearchForm;
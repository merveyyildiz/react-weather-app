import { useState } from "react";
import "./search.css";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoAPIOptions, GEO_API_URL } from "../../api";
const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState("");

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`, geoAPIOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={1000}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            className="searchbar"
        />
    )
}

export default Search;
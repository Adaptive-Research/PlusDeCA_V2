import React, { useEffect, useState } from 'react';

const SearchBar = ({list, setList, filterField = item => item, ...props }) => {

    useEffect(() => {
        if(value) {
            setList(filterField());
        }
    }, [value]) 

    const [ value, setValue ] = useState("");

    const filterList = () => {
        return list.filter(item => filterField(item).toLowerCase().includes(value.toLowerCase()));
    }

    const handleChange = event =>  {
        setValue(event.target.value);
        setList (filterList());
    }

    return (
        <input
              name="search"
              className="form-control"
              placeholder="Rechercher..."
              type="search"
              onChange={handleChange}
              value={value}
              { ...props }
            />
    );
}

export { SearchBar };
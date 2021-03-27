import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div>
            <div className='SearchBox'>
                <input className="pa2 ba b--green bg-lightest-blue"
                type='search'
                placeholder='Enter GitHub Username'
                onChange={searchChange}/>
                <button type="button">Submit</button>
            </div>
        </div>
    );
}

export default SearchBox;
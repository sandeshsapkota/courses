const SearchBar = (props:any) => {

    const {handleSearch} = props


    return (
        <div className="filter__section">
            <div className="search">
                <div className="search__icon-wrap">
                    <svg className={'search__icon'} width="14" height="14" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.635 17.8725L15.7637 13.9996C18.6604 10.1286 17.8706 4.64234 13.9996 1.74566C10.1286 -1.15102 4.64234 -0.361187 1.74566 3.50978C-1.15102 7.38076 -0.361187 12.8671 3.50978 15.7637C6.61927 18.0906 10.8901 18.0906 13.9996 15.7637L17.8725 19.6366C18.3592 20.1233 19.1483 20.1233 19.635 19.6366C20.1217 19.1499 20.1217 18.3609 19.635 17.8742L19.635 17.8725ZM8.78697 15.0162C5.34663 15.0162 2.55772 12.2273 2.55772 8.78697C2.55772 5.34663 5.34663 2.55772 8.78697 2.55772C12.2273 2.55772 15.0162 5.34663 15.0162 8.78697C15.0126 12.2257 12.2258 15.0126 8.78697 15.0162Z" fill="currentColor"/>
                    </svg>
                </div>
                <input className={'form-control search__input'} onChange={e => handleSearch(e.target.value)} type="search" placeholder={'Search'}/>
            </div>
        </div>
    )
}

export default SearchBar

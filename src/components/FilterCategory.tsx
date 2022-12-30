import {FC} from "react";
import {useState, useEffect} from "react"

import CheckBox from "@/components/CheckBox";
import SearchBar from "@/components/SearchBar";

interface FilterCategoryProps {
    title: string
    list: string[]
    handleFilter: () => void
    filterType: string
    filter: any
    isSearcable?: boolean
}

const FilterCategory: FC<FilterCategoryProps> = (props) => {
    const {title, list, handleFilter, filterType, filter, isSearcable} = props

    const [searchItems, setSearchItems] = useState(list)

    useEffect(() => {
        if (list.length) {
            setSearchItems(list)
        }
    }, [list])

    const handleSearch = (query: string) => {
        if (query) {
            const searchResults = list.filter((item: string) => item.toLowerCase().includes(query.toLowerCase()));
            setSearchItems(searchResults)
        } else {
            setSearchItems(list)
        }
    }

    return (
        <div className={'filter__category-wrap  grid gap-5'}>
            {/* Category Title and Toggle Button*/}
            <div className={'flex items-center justify-between'}>
                <h5 className={'filter__category-title'}>{title}</h5>
                <button className={'filter__category-toggle'}>
                    <svg fill={'currentColor'} width="12" height="6" viewBox="0 0 12 6"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 0L12 6H0L6 0Z" fill="currentColor"/>
                    </svg>
                </button>
            </div>
            {/* Search Bar*/}
            {isSearcable ? <SearchBar className={'filter__section--search'} handleSearch={handleSearch}/> : ''}
            {/* Category List*/}
            <div className="filter__list-wrapper">
                {searchItems.length ?
                    searchItems.map((item: string) => <CheckBox filter={filter} item={item} filterType={filterType}
                                                                handleFilter={handleFilter} key={item}/>)
                    :
                    <span className={'no-items'}>No items found !</span>
                }
            </div>
        </div>
    )
}

export default FilterCategory

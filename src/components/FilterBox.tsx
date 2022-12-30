import SearchBar from "@/components/SearchBar";
import FilterHead from "@/components/FilterHead";
import FilterCategory from "@/components/FilterCategory";

interface FilterBoxProps{
    handleFilter: () => void
    handleResetFilter: () => void
    handleSearch: () => void
    handleFilterOnMobile: () => void
    filter:any
}

const FilterBox = (props:any) => {
    const {handleFilter, handleResetFilter,handleSearch, filter} = props

    return (
        <div className={'filter__container'}>
            <SearchBar handleSearch={handleSearch}/>
            <div>
               {/*  FILTER BY TITLE AND RESET BUTTON*/}
               <FilterHead handleResetFilter={handleResetFilter}/>
                {/*  Filter Box */}
                <div className="filter__section">
                    <FilterCategory filter={filter} handleFilter={handleFilter} title={'Category'} filterType={'category'} filterByArray={['Leadership', 'IT', 'Management',]}/>
                    <FilterCategory filter={filter}  handleFilter={handleFilter} title={'Type'} filterType={'type'} filterByArray={['Course', 'Stream']}/>
                    <FilterCategory filter={filter}  handleFilter={handleFilter} title={'Instructor'} filterType={'instructor'} filterByArray={['Oron Shvartz', 'Aden George', 'Natalie Wasdez']}/>
                </div>
            </div>
        </div>
    )
}

export default FilterBox

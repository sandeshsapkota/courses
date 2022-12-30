import {CourseType} from "@/@types";

import SearchBar from "@/components/SearchBar";
import FilterHead from "@/components/FilterHead";
import FilterCategory from "@/components/FilterCategory";

interface FilterBoxProps {
    handleFilter: () => void
    handleResetFilter: () => void
    handleSearch: () => void
    handleFilterOnMobile: () => void
    filter: any
    courses: CourseType[]
}

const FilterBox = (props: any) => {
    const {handleFilter, handleResetFilter, handleSearch, filter, courses} = props

    function getValuesFromCourse(category: string) {
        const values = courses.map((item: any) => item[category])
        // eslint-disable-next-line
        // @ts-ignore
        return [...new Set(values)]
    }

    const cateGoryList = getValuesFromCourse('category')
    const typeList = getValuesFromCourse('type')
    const instructorList = getValuesFromCourse('instructor')

    return (
        <div className={'filter__container'}>
            <div className={'filter__container-content'}>
                <SearchBar handleSearch={handleSearch}/>
                <div>
                    {/*  FILTER BY TITLE AND RESET BUTTON*/}
                    <FilterHead handleResetFilter={handleResetFilter}/>
                    {/*  Filter Box */}
                    <div className="filter__section filter__section-list">
                        <FilterCategory filter={filter}
                                        handleFilter={handleFilter}
                                        title={'Category'}
                                        filterType={'category'}
                                        list={cateGoryList}
                                        isSearcable={true}/>
                        <FilterCategory filter={filter}
                                        handleFilter={handleFilter}
                                        title={'Type'}
                                        filterType={'type'}
                                        list={typeList}/>
                        <FilterCategory filter={filter}
                                        handleFilter={handleFilter}
                                        title={'Instructor'}
                                        filterType={'instructor'}
                                        list={instructorList}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterBox

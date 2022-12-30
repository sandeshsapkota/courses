import {FC} from "react";
import CheckBox from "@/components/CheckBox";

interface FilterCategoryProps {
    title: string
    filterByArray: string[]
    handleFilter: () => void
    filterType:string
    filter: any
}

const FilterCategory:FC<FilterCategoryProps> = (props: any) => {
    const {title, filterByArray ,handleFilter, filterType, filter} = props

    return (
        <div className={'filter__category-wrap  grid gap-5'}>
            <div className={'flex items-center justify-between'}>
                <h5 className={'filter__category-title'}>{title}</h5>
                <button className={'filter__category-toggle'}>
                    <svg fill={'currentColor'} width="12" height="6" viewBox="0 0 12 6"  xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 0L12 6H0L6 0Z" fill="currentColor"/>
                    </svg>
                </button>
            </div>
            {filterByArray.map((item:string) => <CheckBox filter={filter} item={item} filterType={filterType} handleFilter={handleFilter} key={item}/>)}
        </div>
    )
}

export default FilterCategory

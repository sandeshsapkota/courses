import {FC} from "react";

interface FilterHeadProps {
    handleResetFilter: () => void
}

const FilterHead:FC<FilterHeadProps> = (props) => {

    const {handleResetFilter} = props

    return (
        <div className={'filter__title-wrap'}>
            {/* Title*/}
            <div className={'flex items-center'}>
                <svg className={'filter__icon'} width="24" height="26" version="1.1" viewBox="0 0 700 700"
                     xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path
                        d="m310.24 503.44 85.68-32.48c2.8008-0.55859 4.4805-3.9219 4.4805-6.7188v-152.88c0-11.762 3.9219-22.961 10.641-32.48l150.64-211.12c3.9219-5.6016 0-12.32-6.1602-12.32l-411.04 0.003906c-6.1602 0-10.078 6.7188-6.1602 12.32l150.64 211.12c6.7188 8.9609 10.641 20.719 10.641 32.48v184.24c0.55859 6.1602 5.5977 10.078 10.637 7.8398z"/>
                </svg>
                <h4 className={'filter__by-title'}>Filter By:</h4>
            </div>
            {/* Reset Button*/}
            <button className={'filter__reset'} onClick={() => handleResetFilter()}>Reset</button>
        </div>
    )
}

export default FilterHead

import { FC } from "react";

interface HeaderProps {
    handleFilterOnMobile: (type:boolean) => void
    showFilter: boolean
}

const Header:FC<HeaderProps> = (props) => {
    const {handleFilterOnMobile, showFilter} = props

    return (
        <header className={'header flex gap-3 justify-between items-center'}>
            {/* Title and Close Button*/}
            <div className="flex items-center gap-3">
                <button>
                    <svg className={'block'} width="18" height="18" viewBox="0 0 18 18" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.00096 7.11489L15.601 0.514893L17.4863 2.40023L10.8863 9.00023L17.4863 15.6002L15.601 17.4856L9.00096 10.8856L2.40096 17.4856L0.515625 15.6002L7.11563 9.00023L0.515625 2.40023L2.40096 0.514893L9.00096 7.11489Z"
                            fill="white"/>
                    </svg>
                </button>
                <h4 className={'header-title'}>Course Catalog</h4>
            </div>
            {/* Mobile Filter*/}
            <button className={'mobile-filter'} onClick={() => handleFilterOnMobile(true)}>
                {showFilter ?
                    <>
                        <svg className={'block'} width="12" height="12" viewBox="0 0 18 18" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.00096 7.11489L15.601 0.514893L17.4863 2.40023L10.8863 9.00023L17.4863 15.6002L15.601 17.4856L9.00096 10.8856L2.40096 17.4856L0.515625 15.6002L7.11563 9.00023L0.515625 2.40023L2.40096 0.514893L9.00096 7.11489Z"
                                fill="white"/>
                        </svg>
                        Close Filter
                    </>
                    :
                    <>
                        <svg className={'filter__icon'} width="19" height="19" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <path d="m310.24 503.44 85.68-32.48c2.8008-0.55859 4.4805-3.9219 4.4805-6.7188v-152.88c0-11.762 3.9219-22.961 10.641-32.48l150.64-211.12c3.9219-5.6016 0-12.32-6.1602-12.32l-411.04 0.003906c-6.1602 0-10.078 6.7188-6.1602 12.32l150.64 211.12c6.7188 8.9609 10.641 20.719 10.641 32.48v184.24c0.55859 6.1602 5.5977 10.078 10.637 7.8398z"/>
                        </svg>
                        Filter
                    </>}
            </button>
        </header>
    )
}

export default Header


const Header = (props:any) => {
    return (
        <header className={'header flex gap-3 items-center'}>
                <button>
                    <svg className={'block'} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00096 7.11489L15.601 0.514893L17.4863 2.40023L10.8863 9.00023L17.4863 15.6002L15.601 17.4856L9.00096 10.8856L2.40096 17.4856L0.515625 15.6002L7.11563 9.00023L0.515625 2.40023L2.40096 0.514893L9.00096 7.11489Z" fill="white"/>
                    </svg>
                </button>
                <h4 className={'header-title'}>Course Catalog</h4>
        </header>
    )
}

export default Header

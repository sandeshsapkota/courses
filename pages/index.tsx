import {CourseType} from "@/@types";

import ListItem from "@/components/ListItem";
import FilterBox from "@/components/FilterBox";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import {useEffect, useState} from "react";
import ReactPaginate from 'react-paginate';
import classNames from "classnames";


const Home = () => {
    const [courses, setCourses] = useState([])
    const [filteredData, setFilterData] = useState([])
    const [currentItems, setCurrentItems] = useState<CourseType[]>([])

    const [filter, setFilter] = useState<any>({})
    const [searching, setSearching] = useState(false)

    const [itemsPerPage, setItemsPerPage] = useState(5)
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        async function fetchCourse() {
            try {
                const res = await fetch(`https://63abf7dccf281dba8c2f3085.mockapi.io/courses`)
                const {data} = await res.json()
                setCourses(data)
                setFilterData(data)

                const endOffset = itemOffset + itemsPerPage;
                setCurrentItems([...data].slice(itemOffset, endOffset));
            } catch (e: any) {
                console.log(e)
            }
        }

        fetchCourse()
    }, [])


    const updateFilteredItems = () => {
        const filteringArr = courses
        const newFilterList = filteringArr.filter((course: any) => {
            let isFiltered = true
            let shouldBreak = false
            Object.entries(filter).forEach((item:any) => {
                const [type, arr] = item
                if (arr.length > 0 && !arr.includes(course[type].toLowerCase()) && !shouldBreak) {
                    isFiltered = false
                    shouldBreak = true
                }
            })
            return isFiltered
        })

        setFilterData(newFilterList)
        setCurrentItems(newFilterList)
    }


    useEffect(() => {
        updateFilteredItems()
    }, [filter])

    const handleFilter = (e: any, param: {
        type: string,
        query: string
    }) => {
        const checked = e.target.checked
        const {type, query} = param

        if (checked) {
            const obj = {
                ...filter,
                [type]: filter[type] ? [...filter[type], query] : [query]
            }
            setFilter(obj)
        } else {
            const updatedArr = filter[type].filter((item: string) => item !== query)
            const obj = {
                ...filter,
                [type]: updatedArr,
            }

            setFilter(obj)
        }
    }

    const handleSearch = (query: string) => {
        if (query) {
            setSearching(true)
            const searchResults = courses.filter((item: CourseType) => item.title.toLowerCase().includes(query.toLowerCase()))
            setFilterData(searchResults)
        } else {
            setSearching(false)
            setFilterData(courses)
        }
    }

    const handleResetFilter = () => {
        setFilter({})
    }


    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(filteredData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filteredData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, filteredData.length]);

    const handlePageClick = (event: any) => {
        const newOffset = event.selected * itemsPerPage % filteredData.length;
        setItemOffset(newOffset);
    };

    const [showFilter, setShowFilter] = useState(false)

    const handleFilterOnMobile = (action: boolean) => setShowFilter(action)

    return (
        <Layout title={'Courses Catalog'}>
            <Header/>
            <main className={classNames('main', {'filter--show': showFilter})}>
                <FilterBox handleFilterOnMobile={handleFilterOnMobile} data={filteredData} handleSearch={handleSearch}
                           filter={filter} handleResetFilter={handleResetFilter} handleFilter={handleFilter}/>
                <section className={'content-wrap'}>
                    <div className={'content'}>
                        <div className="flex justify-between items-center">
                            <h4 className="content__title">Content and Streams</h4>
                            <button className={'mobile-filter'} onClick={() => handleFilterOnMobile(true)}>Filter
                            </button>
                        </div>

                        <div className="grid gap-6">
                            {currentItems.map((course: any) => <ListItem key={course.id} course={course}/>)}
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="Next"
                                previousLabel="Prev"
                                onPageChange={handlePageClick}
                                pageCount={pageCount}
                                className={'pagination flex'}/>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default Home

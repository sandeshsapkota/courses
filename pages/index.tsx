import {CourseType} from "@/@types";

import {useEffect, useState} from "react";
import ReactPaginate from 'react-paginate';
import classNames from "classnames";

import ListItem from "@/components/ListItem";
import FilterBox from "@/components/FilterBox";
import Header from "@/components/Header";
import Layout from "@/components/Layout";

const Home = () => {
    const [courses, setCourses] = useState([])
    const [filteredData, setFilterData] = useState([])
    const [currentItems, setCurrentItems] = useState<CourseType[]>([])

    const [filter, setFilter] = useState<any>({})
    const [searchQuery, setSearchQuery] = useState('')

    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const [showFilter, setShowFilter] = useState(false)

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


    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(filteredData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filteredData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, filteredData]);

    const updateFilteredItems = (query:string) => {

        let searchFilterList:any = []

        if(query) {
            // Case 1 - Only Search
            searchFilterList = courses.filter((item: CourseType) => item.title.toLowerCase().includes(query.toLowerCase()))
        }else{
            // Case 2 -  without Search
            searchFilterList = courses
        }

        const newFilterList = searchFilterList.filter((course: any) => {
            let isFiltered = true
            let shouldBreak = false
            Object.entries(filter).forEach((item: any) => {
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

        if (Object.keys(filter).length) {
            updateFilteredItems(searchQuery)
        } else {
            if(searchQuery){
                updateFilteredItems(searchQuery)
                return
            }
            setFilterData(courses)
        }

    }, [filter])


    const handleFilter = (e: any, param: {
        type: string,
        query: string
    }) => {
        const checked = e.target.checked
        const {type, query} = param

        if (checked) {
            // 1. Add a new item to the filter obj if checked
            const obj = {
                ...filter,
                [type]: filter[type] ? [...filter[type], query] : [query]
            }
            setFilter(obj)
        } else {
            // 2 . Delete that item if unchecked
            const updatedArr = filter[type].filter((item: string) => item !== query)
            let obj = {
                ...filter
            }

            if (updatedArr.length) {
                obj = {
                    ...obj,
                    [type]: updatedArr,
                }
            } else {
                // delete the item if it is last item uncheked
                delete obj[type]
            }
            setFilter(obj)
        }
    }

    const handleSearch = (query: string) => {
        if (query) {
            setSearchQuery(query)
            // const searchResults = courses.filter((item: CourseType) => item.title.toLowerCase().includes(query.toLowerCase()))
            // setFilterData(searchResults)
            updateFilteredItems(query)
        } else {
            setSearchQuery('')
            updateFilteredItems('')
        }
    }


    const handlePageClick = (event: any) => {
        const newOffset = event.selected * itemsPerPage % filteredData.length;
        setItemOffset(newOffset);
    };

    const handleResetFilter = () => setFilter({})

    const handleFilterOnMobile = () => setShowFilter(!showFilter)

    return (
        <Layout title={'Courses Catalog'}>
            <Header handleFilterOnMobile={handleFilterOnMobile} showFilter={showFilter}/>
            <main className={classNames('main', {'filter--show': showFilter})}>
                <FilterBox
                    courses={courses}
                    data={filteredData}
                    filter={filter}
                    handleFilterOnMobile={handleFilterOnMobile}
                    handleSearch={handleSearch}
                    handleResetFilter={handleResetFilter}
                    handleFilter={handleFilter}/>

                <section className={'content-wrap'}>
                    <div className={'content'}>
                        <div className="flex justify-between items-center">
                            <h4 className="content__title">Content and Streams</h4>
                        </div>
                        <div className="grid gap-6">
                            {currentItems.length ?
                                currentItems.map((course: CourseType) => <ListItem key={course.id} course={course}/>)
                                :
                                <div className={'content__empty'}>
                                    Sorry ! No Data Found.
                                </div>
                            }
                            {
                                currentItems.length ?
                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel="Next"
                                        previousLabel="Prev"
                                        onPageChange={handlePageClick}
                                        pageCount={pageCount}
                                        className={'pagination flex'}/>
                                    : ''
                            }
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default Home

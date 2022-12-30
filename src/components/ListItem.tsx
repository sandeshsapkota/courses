import Link from "next/link";
import {CourseType} from "@/@types";
import {FC} from "react";
import classNames from "classnames";

interface ListItemProps {
    course: CourseType
}

const ListItem: FC<ListItemProps> = (props) => {
    const {course} = props
    const {type, title, active, imgUrl, start_date, end_date,id, enroll_status} = course

    return (
        <div className={'card content__item'}>
            <img className={'content__item-img'} src={'images/'+imgUrl} alt={title}/>
            <div className="content__item-body">
                <div>
                    <div className="flex gap-1 items-center">
                        <h3 className={'content__item-title'}>{id}{title}</h3>
                    </div>
                    <div>
                        {
                            type === "course" ?
                                <span className={classNames('content__item-status badge', active ? 'badge--active': 'badge--ended')}>
                                    {active ? 'Active' : 'Course Ended'}
                                </span> :
                                ""
                        }
                        {
                            type === "stream" ?
                                <div className="content__item-status-stream">
                                    {active ? 'Ongoing Stream' : 'Stream Ended'}
                                </div> :
                                ""
                        }

                        {(type === 'course' && !active) ?
                            <span className={'content__item-date'}>
                                From <b>{start_date}</b> To <b>{end_date}</b>
                            </span>
                            : ''}

                    </div>
                </div>
                <Link href={'/'} className={'btn content__item-btn'}>
                    Join
                </Link>
            </div>
        </div>
    )
}

export default ListItem

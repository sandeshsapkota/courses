import {FC} from "react";

interface CheckBoxProps {
    item: string
    handleFilter: (e:any, item: ParamProps) => void
    filterType: string
    filter:any
}

interface ParamProps {
    type: string,
    query: string
}

const CheckBox: FC<CheckBoxProps> = (props) => {
    const {item, handleFilter, filterType, filter} = props

    const param = {
        type: filterType,
        query: item.toLowerCase()
    }

    const ifFilterSelected = filter[param.type]?.includes(param.query)

    return (
        <div className="custom-input">
            <input type="checkbox" id={item} name={item} checked={ifFilterSelected || ''} onChange={(e) => handleFilter(e, param)}/>
            <label htmlFor={item}>{item}</label>
        </div>
    )
}

export default CheckBox

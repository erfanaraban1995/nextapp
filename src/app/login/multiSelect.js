import {useState} from "react";

export default function MultiSelect(props) {
  const {items, value} = props
  const [array, setArray] = useState([])
  const emitEvent = (item) => {
    setArray(arr => [...arr, item])
    props.addvalue(item)
  }
  return <div>
    <div className='w-full flex flex-wrap gap-1 bg-white border border-gray-300 outline-0 rounded-lg p-2'>
      {array.map(item => (
        <div className='px-2 rounded border border-red-300' key={item.text}>{item.text}</div>
      ))}
    </div>
    {items.map(item => (
      <div key={item.value} onClick={() => emitEvent(item)}>{item.text}</div>
    ))}
  </div>
}

export default function MultiSelect(props) {
  const {items, value} = props
  const emitEvent = (item) => {
    const findSameData = value.find(i => i.value === item.value)
    if (!findSameData) {
      props.addvalue(item)
    }
  }
  return <div>
    <div className='w-full flex flex-wrap gap-1 bg-white border border-gray-300 outline-0 rounded-lg p-2'>
      {value.map(item => (
        <div className='px-2 rounded border border-red-300' key={item.text}>{item.text}</div>
      ))}
    </div>
    {items.map(item => (
      <div className='cursor-pointer' key={item.value} onClick={() => emitEvent(item)}>{item.text}</div>
    ))}
  </div>
}

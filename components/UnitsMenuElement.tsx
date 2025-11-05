"use client" 

interface UnitsMenuElementProps {
    category: string,
    items: string[],
    activeIndex: number
    categoryIndex: number,
    onClick: (categoryIndex: number, newItemIndex: number) => void,
}

const UnitsMenuElement = ({category, items, onClick, activeIndex, categoryIndex}: UnitsMenuElementProps) => {
  return (
    <div className="flex flex-col  gap-2 w-full">
        <p className="text-neutral-300 text-sm px-2 pt-1.5 ">{category}</p>

       <div className="flex flex-col items-start gap-1">
            {items.map((item, index) => (
            <button onClick={() => {onClick(categoryIndex, index)}} key={index} className={`${activeIndex === index ? "bg-neutral-700  border-neutral-600" : "hover:bg-neutral-700 border-transparent"} border rounded-lg px-2.5 py-2.5 w-full text-start cursor-pointer transition`}>
                {item}
            </button>
            ))}
       </div>

        <hr className="text-neutral-600"/>
    </div>
  )
}

export default UnitsMenuElement;
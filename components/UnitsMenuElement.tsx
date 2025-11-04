"use client" 

interface UnitsMenuElementProps {
    category: string,
    elements: string[],
    activeElement: number,
    onClick: () => void,
}

const UnitsMenuElement = ({category, elements, onClick, activeElement}: UnitsMenuElementProps) => {
  return (
    <div className="flex flex-col  gap-2 w-full">
        <p className="text-neutral-300 text-sm px-2 pt-1.5 ">{category}</p>

       <div className="flex flex-col items-start gap-1">
            {elements.map((el, index) => (
            <button onClick={onClick} key={index} className={`${activeElement === index ? "bg-neutral-700 border border-neutral-600" : "hover:bg-neutral-700"}  rounded-lg px-2.5 py-2.5 w-full text-start cursor-pointer transition`}>
                {el}
            </button>
            ))}
       </div>

        <hr className="text-neutral-600"/>
    </div>
  )
}

export default UnitsMenuElement;
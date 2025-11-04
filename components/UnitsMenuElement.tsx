"use client" 

interface UnitsMenuElementProps {
    category: string,
    elements: string[],
    activeElement: number,
    onClick: () => void,
}

const UnitsMenuElement = ({category, elements, onClick}: UnitsMenuElementProps) => {
  return (
    <div className="flex flex-col  gap-2 w-full">
        <p className="text-neutral-300 text-sm px-2 pt-1.5 ">{category}</p>

       <div className="flex flex-col  items-start">
            {elements.map((el, index) => (
            <button onClick={onClick} key={index} className="px-2 py-2.5">
                {el}
            </button>
            ))}
       </div>

        <hr className="text-neutral-600"/>
    </div>
  )
}

export default UnitsMenuElement;

interface WeatherStatsTileProps {
    label: string,
    statistic: string
}

const WeatherStatsTile = ({label, statistic}: WeatherStatsTileProps) => {
  return (
    <div className='flex flex-col bg-neutral-800 border border-neutral-600 items-stretch p-5 rounded-xl w-45 gap-4'>
        <h4 className='text-neutral-200 '>{label}</h4>

        <h2 className="text-3xl font-thin">{statistic}</h2>
    </div>
  )
}

export default WeatherStatsTile
const HomeCard = ({heading, content, symbol, width, onClick}) => {
  return (
    <div className={`text-xl w-full md:${width} p-6 bg-white hover:bg-gray-50 hover:shadow-lg hover:cursor-pointer dark:bg-card-dark dark:hover:bg-accent-dark rounded-lg tracking-wide`} onClick={onClick}>
      <div className="flex items-center gap-2 font-semibold">
        <span>{symbol}</span>
        <h1>{heading}</h1>
        </div>
      <div className="text-lg">
        <p>{content}</p>
        </div>
    </div>
  )
}

export default HomeCard
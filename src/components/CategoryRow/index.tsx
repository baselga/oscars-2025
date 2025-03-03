import { Category, PLAYERS } from "../../data"

export const CategoryRow = ({ category  } : {category: Category}) => {

  const photoWinner = category.nominees.find(nominee => nominee.winner)?.photo
  const photoDefault = "/sin-imagen.bmp"

  return (
    <div className=" py-2 px-4 w-full max-w-5xl bg-amber-950 rounded-lg">
      <h2 className="text-4xl font-bold text-amber-400 text-center pb-2">
        {category.name}
      </h2>
      <div className="flex flex-wrap gap-4 py-2 items-center justify-center">
        <img src={photoWinner || photoDefault} className="h-80 w-80 object-contain  rounded-sm" />
        <div className="flex flex-col gap-3 flex-auto">
          {category.nominees.map((nominee) => (
            <div key={nominee.name} className={
              `
                flex text-xl gap-2 items-center
                ${nominee.winner ? 'text-amber-400' : 'text-white'}
              `
            }>
              {nominee?.photo && (
                <img src={nominee.photo} className="w-10 h-10 object-contain" />
              )}
              {nominee.name}
              {nominee.votes.map((key) => (
                <img
                  key={key}
                  className="w-10 h-10 rounded-full"
                  src={`${PLAYERS[key].photo}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

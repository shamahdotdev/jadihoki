import differenceInDays from 'date-fns/differenceInDays/index.js'
import { useState } from 'react'
export const Timer = () => {
  const [day, setDay] = useState(differenceInDays(new Date(2022, 11, 6), new Date(Date.now())))

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <h4 className="text-4xl text-tertiary font-bold">{day > 0 ? day + ' Hari Lagi' : day == 0 ? 'Hari ini' : 'Telah Berakhir'}</h4>
      <div className="flex flex-col">
        <p className="text-lg font-semibold">Pendaftaran akan segera berakhir</p>
        <p>Jangan Lewatkan kesempatan berharga ini</p>
      </div>
    </div>
  )
}

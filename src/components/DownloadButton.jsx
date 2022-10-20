import { saveAs } from 'file-saver'

export const DownloadButton = () => {
  const handleClickButton = (e) => {
    e.preventDefault()
    // console.log('Clicked')
    saveAs('../assets/HoKi Session 2 Guidebook.pdf', 'HoKi Session 2 Guidebook.pdf')
  }
  return (
    <a href="#" className="py-4 px-8 rounded-xl bg-white border-primary border-2 text-tertiary w-fit font-semibold">
      Guidebook
    </a>
  )
}

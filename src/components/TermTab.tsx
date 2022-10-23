import { useState } from 'react'

export const TermTab = () => {
  const [showDeck, setShowDeck] = useState(false)
  return (
    <>
      <div className="text-neutral-600 flex gap-6">
        <button onClick={() => setShowDeck(false)} className={`text-neutral-500 text-lg font-bold pb-2 border-b-2 border-white ${!showDeck && '!text-primary !border-primary'} `}>
          Proposal Bisnis
        </button>
        <button onClick={() => setShowDeck(true)} className={`text-neutral-400 text-lg font-bold pb-2 border-b-2 border-white ${showDeck && '!text-primary !border-primary'}`}>
          Pitch Deck
        </button>
      </div>
      {showDeck ? (
        <div className="flex gap-3 w-full flex-col text-neutral-700">
          <div className="flex gap-5 items-center">
            <div className="inline-flex items-center justify-center overflow-hidden rounded-full relative flex-shrink-0">
              <svg className="w-20 h-20">
                <circle className="text-gray-300" stroke-width="5" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40"></circle>
                <circle
                  className="text-primary"
                  stroke-width="5"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={30 * 2 * Math.PI - (20 / 100) * (30 * 2 * Math.PI)}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                ></circle>
              </svg>
              <span className="absolute text-xl text-primar font-bold">20%</span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg">Analisis Masalah dan Solusi</h4>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="inline-flex items-center justify-center overflow-hidden rounded-full relative flex-shrink-0">
              <svg className="w-20 h-20">
                <circle className="text-gray-300" stroke-width="5" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40"></circle>
                <circle
                  className="text-primary"
                  stroke-width="5"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={30 * 2 * Math.PI - (30 / 100) * (30 * 2 * Math.PI)}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                ></circle>
              </svg>
              <span className="absolute text-xl text-primar font-bold">30%</span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg">Kemampuan Presentasi (Kelancaran, Sistematika, Sikap, dan Penampilan)</h4>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="inline-flex items-center justify-center overflow-hidden rounded-full relative flex-shrink-0">
              <svg className="w-20 h-20">
                <circle className="text-gray-300" stroke-width="5" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40"></circle>
                <circle
                  className="text-primary"
                  stroke-width="5"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={30 * 2 * Math.PI - (15 / 100) * (30 * 2 * Math.PI)}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                ></circle>
              </svg>
              <span className="absolute text-xl text-primar font-bold">15%</span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg">Teknik visualisasi data dan konten</h4>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="inline-flex items-center justify-center overflow-hidden rounded-full relative flex-shrink-0">
              <svg className="w-20 h-20">
                <circle className="text-gray-300" stroke-width="5" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40"></circle>
                <circle
                  className="text-primary"
                  stroke-width="5"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={30 * 2 * Math.PI - (5 / 100) * (30 * 2 * Math.PI)}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                ></circle>
              </svg>
              <span className="absolute text-xl text-primar font-bold">5%</span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg">Manajemen waktu presentasi</h4>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="inline-flex items-center justify-center overflow-hidden rounded-full relative flex-shrink-0">
              <svg className="w-20 h-20">
                <circle className="text-gray-300" stroke-width="5" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40"></circle>
                <circle
                  className="text-primary"
                  stroke-width="5"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={30 * 2 * Math.PI - (30 / 100) * (30 * 2 * Math.PI)}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                ></circle>
              </svg>
              <span className="absolute text-xl text-primar font-bold">30%</span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg">Kemampuan menjawab dan mempertahankan argumentasi</h4>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-3 w-full flex-col text-neutral-700">
          <div className="flex gap-5 items-center">
            <div className="inline-flex items-center justify-center overflow-hidden rounded-full relative flex-shrink-0 flex-shrink-0">
              <svg className="w-20 h-20">
                <circle className="text-gray-300" stroke-width="5" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40"></circle>
                <circle
                  className="text-primary"
                  stroke-width="5"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={30 * 2 * Math.PI - (25 / 100) * (30 * 2 * Math.PI)}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                ></circle>
              </svg>
              <span className="absolute text-xl text-primar font-bold">25%</span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg">Kreativitas</h4>
              <p>a. Gagasan (keunikan dan kebermanfaatan)</p>
              <p>b. Keunggulan Produk/Jasa</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="inline-flex items-center justify-center overflow-hidden rounded-full relative flex-shrink-0">
              <svg className="w-20 h-20">
                <circle className="text-gray-300" stroke-width="5" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40"></circle>
                <circle
                  className="text-primary"
                  stroke-width="5"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={30 * 2 * Math.PI - (25 / 100) * (30 * 2 * Math.PI)}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                ></circle>
              </svg>
              <span className="absolute text-xl text-primar font-bold">25%</span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg">Peluang Pasar</h4>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="inline-flex items-center justify-center overflow-hidden rounded-full relative flex-shrink-0">
              <svg className="w-20 h-20">
                <circle className="text-gray-300" stroke-width="5" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40"></circle>
                <circle
                  className="text-primary"
                  stroke-width="5"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={30 * 2 * Math.PI - (25 / 100) * (30 * 2 * Math.PI)}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                ></circle>
              </svg>
              <span className="absolute text-xl text-primar font-bold">25%</span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg">Potensi Program</h4>
              <p>a. Potensi perolehan profit</p>
              <p>b. Potensi keberlanjutan usaha</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="inline-flex items-center justify-center overflow-hidden rounded-full relative flex-shrink-0">
              <svg className="w-20 h-20">
                <circle className="text-gray-300" stroke-width="5" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40"></circle>
                <circle
                  className="text-primary"
                  stroke-width="5"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={30 * 2 * Math.PI - (15 / 100) * (30 * 2 * Math.PI)}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                ></circle>
              </svg>
              <span className="absolute text-xl text-primar font-bold">15%</span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg">Timeline Bisnis</h4>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="inline-flex items-center justify-center overflow-hidden rounded-full relative flex-shrink-0">
              <svg className="w-20 h-20">
                <circle className="text-gray-300" stroke-width="5" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40"></circle>
                <circle
                  className="text-primary"
                  stroke-width="5"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={30 * 2 * Math.PI - (10 / 100) * (30 * 2 * Math.PI)}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                ></circle>
              </svg>
              <span className="absolute text-xl text-primar font-bold">10%</span>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg">Penyusunan Anggaran Biaya</h4>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

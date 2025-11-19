'use client'

import { Eye, Calendar } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const newsItems = [
  {
    id: 1,
    image: '/government-meeting-room-with-officials.jpg',
    title: 'МОНГОЛ УЛСЫН ҮНДЭСНИЙ АЮУЛГҮЙ БАЙДЛЫН ЗӨВЛӨЛИЙН НАРИЙН БИЧГИЙН ДАРГА А.БЯМБАЖАРГАЛ ОРСЫН ХОЛБООН УЛСЫН АЮУЛГҮЙ БАЙДЛЫН ЗӨВЛӨЛИЙН НАРИЙН БИЧГИЙН ДАРГА С.К.ШОЙГУ-ТЭЙИ УУЛЗАЙТ ХИЙВ.',
    date: '2025.05.08',
    views: 1974,
    content: [
      { type: 'text', value: 'Монгол Улсын Үндэсний аюулгүй байдлын зөвлөлийн нарийн бичгийн дарга А.Бямбажаргал 2025 оны 05 дугаар сарын 08-ны өдөр Орсын Холбооны Улсын Аюулгүй Байдлын Зөвлөлийн нарийн бичгийн дарга С.К.Шойгу-тэйгээр албан ёсны уулзалтыг хийлээ.' },
      { type: 'image', value: '/government-meeting-room-with-officials.jpg' },
      { type: 'text', value: 'Энэхүү уулзалтын үеэр хоёр орны аюулгүй байдлын хамтын ажиллагааны өнөөгийн байдал, цаашдын хамтын ажиллагааны чиглэлүүдийн талаар санал солилцлоо. Тал бүр аюулгүй байдлын чухал асуудлаар санал бодлоо хуваалцаж, цаашдын хамтын ажиллагааг өргөжүүлэх талаар тохиролцов.' },
      { type: 'text', value: 'Улс орнуудын хоорондын аюулгүй байдлын хамтын ажиллагаа нь олон улсын хамтын нийгэмлэгийн тогтвортой байдлыг хангахад чухал үүрэг гүйцэтгэдэг билээ. Монгол Улс болон Орсын Холбооны Улс нь урт удаан жилийн турш найрсаг харилцаа, түншлэлийг хөгжүүлж ирсэн.' },
      { type: 'image', value: '/diplomatic-meeting.png' },
      { type: 'text', value: 'Уг уулзалт нь хоёр орны аюулгүй байдлын салбарын харилцаа хамтын ажиллагааг улам бүр гүнзгийрүүлэх боломжийг олгож байна. Цаашид энэхүү түншлэл нь бүс нутгийн болон дэлхийн хэмжээний аюулгүй байдлын асуудлыг шийдвэрлэхэд чухал хувь нэмэр оруулах юм.' }
    ]
  },
  {
    id: 2,
    image: '/national-security-council-emblem-with-blue-backgro.jpg',
    title: 'ҮНДЭСНИЙ АЮУЛГҮЙ БАЙДЛЫН ҮЗЭЛ БАРИМТЛАЛ',
    date: '2024.05.21',
    views: 6815,
    content: [
      { type: 'text', value: 'Монгол Улсын Үндэсний аюулгүй байдлын үзэл баримтлал нь улс орны аюулгүй байдлыг хангах үндсэн баримт бичиг юм. Энэхүү баримт бичиг нь Монгол Улсын тусгаар тогтнол, бүрэн эрхт байдал, нутаг дэвсгэрийн бүрэн бүтэн байдлыг хамгаалах, хүн амын аюулгүй орчинд амьдрах эрхийг хангахад чиглэгдсэн.' },
      { type: 'image', value: '/national-security-council-emblem-with-blue-backgro.jpg' },
      { type: 'text', value: 'Үзэл баримтлал нь улс орны аюулгүй байдалд учирч болзошгүй дотоод болон гадаад аюул заналхийллийг тодорхойлж, эдгээрийг таслан зогсоох, урьдчилан сэргийлэх бодлого, арга хэмжээг тодорхойлсон байна. Үүнд улс төрийн, эдийн засгийн, нийгмийн, хүмүүнлэгийн, байгаль орчны, мэдээллийн, цахим орчны аюулгүй байдлын асуудлууд багтсан.' },
      { type: 'data', value: { title: 'Аюулгүй байдлын үндсэн чиглэлүүд', items: [
        { label: 'Улс төрийн аюулгүй байдал', value: '95%', description: 'Төрийн тусгаар тогтнол, бүрэн эрх' },
        { label: 'Эдийн засгийн аюулгүй байдал', value: '88%', description: 'Эдийн засгийн тогтвортой байдал' },
        { label: 'Нийгмийн аюулгүй байдал', value: '92%', description: 'Хүн амын амьжиргаа, нийгмийн тогтвортой байдал' },
        { label: 'Цахим аюулгүй байдал', value: '78%', description: 'Мэдээллийн технологийн хамгаалалт' }
      ]}},
      { type: 'text', value: 'Үндэсний аюулгүй байдлын үзэл баримтлал нь 10 жил тутамд шинэчлэгдэж, цаг үеийн шаардлагад нийцүүлэн боловсруулагддаг. Энэхүү баримт бичиг нь улс орны урт хугацааны хөгжлийн стратеги, бодлоготой уялдаатай байхаар боловсруулсан байна.' }
    ]
  },
  {
    id: 3,
    image: '/international-diplomatic-meeting-with-flags.jpg',
    title: 'МОНГОЛ УЛС ШХАБ-Д ЦААШИД АЖИГЛАГЧИЙН БАЙР СУУРИНААС ОРОЛЦОХО',
    date: '2024.04.05',
    views: 18268,
    content: [
      { type: 'text', value: 'Монгол Улс Шанхайн хамтын ажиллагааны байгууллагад (ШХАБ) ажиглагчийн статустай 2004 оноос хойш оролцож байна. ШХАБ нь Ази тивийн аюулгүй байдлын, эдийн засгийн хамтын ажиллагааг хөгжүүлэхэд чухал үүрэг гүйцэтгэдэг олон улсын байгууллага юм.' },
      { type: 'image', value: '/international-diplomatic-meeting-with-flags.jpg' },
      { type: 'text', value: 'Монгол Улс ШХАБ-ын гишүүн орнуудтай эдийн засаг, соёл, хүмүүнлэгийн салбарт өргөн хүрээтэй хамтын ажиллагаа явуулж байна. Ялангуяа терроризм, хар тамхины эсрэг тэмцэл, хил хязгаарын аюулгүй байдлын асуудлаар идэвхтэй оролцож байна.' },
      { type: 'data', value: { title: 'ШХАБ-тай хамтын ажиллагааны статистик', items: [
        { label: 'Оролцсон хурал, уулзалт', value: '156', description: '2020-2024 оны хооронд' },
        { label: 'Гэрээ, хэлэлцээр', value: '23', description: 'Байгуулсан баримт бичгийн тоо' },
        { label: 'Хамтарсан төсөл', value: '47', description: 'Хэрэгжүүлсэн төслийн тоо' }
      ]}},
      { type: 'text', value: 'Цаашид Монгол Улс ШХАБ-ын хүрээнд бүс нутгийн аюулгүй байдал, эдийн засгийн хөгжлийн асуудлаар идэвхтэй оролцож, олон талт хамтын ажиллагааг улам бүр өргөжүүлэх юм.' }
    ]
  },
  {
    id: 4,
    image: '/mongolian-official-portrait-formal.jpg',
    title: 'Монгол Улсын Ерөнхийлөгчид зарлигаар А.Бямбажаргал Үндэсний аюулгүй байдлын зөвлөлийн нарийн бичгийн дарга томилов',
    date: '2023.12.28',
    views: 13062,
    content: [
      { type: 'text', value: 'Монгол Улсын Ерөнхийлөгч 2023 оны 12 дугаар сарын 28-ны өдөр зарлиг гаргаж, А.Бямбажаргалыг Үндэсний аюулгүй байдлын зөвлөлийн нарийн бичгийн даргаар томилов.' },
      { type: 'image', value: '/mongolian-official-portrait-formal.jpg' },
      { type: 'text', value: 'А.Бямбажаргал нь олон жилийн туршлагатай, аюулгүй байдлын салбарт өргөн мэдлэг, ур чадвартай мэргэжилтэн юм. Тэрээр энэхүү албан тушаалд томилогдохоосоо өмнө төрийн захиргааны янз бүрийн албан тушаалд ажиллаж, олон улсын харилцааны салбарт өргөн туршлага хуримтлуулсан.' },
      { type: 'text', value: 'Нарийн бичгийн дарга нь Үндэсний аюулгүй байдлын зөвлөлийн үйл ажиллагааг зохион байгуулах, холбогдох бодлогыг боловсруулах, хэрэгжүүлэх үүрэгтэй. Мөн гадаад орнуудын ижил төстэй байгууллагуудтай хамтын ажиллагаа явуулах, олон улсын аюулгүй байдлын асуудлаар Монгол Улсыг төлөөлөх чухал үүрэгтэй.' }
    ]
  },
  {
    id: 5,
    image: '/two-leaders-shaking-hands-with-flags-turkey-mongol.jpg',
    title: 'ҮНДЭСНИЙ АЮУЛГҮЙ БАЙДЛЫН ЗӨВЛӨЛИЙН НАРИЙН БИЧГИЙН ДАРГА Ж.ЭНХБАЯР БҮГД НАЙРАМДАХ ТҮРК УЛСАД АЙЛЧЛЖ БАЙНА.',
    date: '2023.12.13',
    views: 11838
  },
  {
    id: 6,
    image: '/diplomatic-meeting-with-japan-mongolia-flags.jpg',
    title: 'МОНГОЛ УЛСЫН ҮНДЭСНИЙ АЮУЛГҮЙ БАЙДЛЫН ЗӨВЛӨЛИЙН ДАРГА Ж.ЭНХБАЯР ЯПОН УЛСАД АЙЛЧИЛЖ БАЙНА.',
    date: '2023.11.22',
    views: 10722
  },
  {
    id: 7,
    image: '/government-meeting-china-mongolia-flags.jpg',
    title: 'Ж.ЭНХБАЯР ВАН И НАР МОСКВА ХОТОД ХОЁР ОРСОНЫ ХОЛБООНЫ УЛСЫН',
    date: '2023.11.15',
    views: 12456
  },
  {
    id: 8,
    image: '/three-diplomats-meeting-handshake.jpg',
    title: 'АЮУЛГҮЙ БАЙДЛЫН АСУУДЛААРХ МОНГОЛ, ОРОС, ХЯТАДЫН',
    date: '2023.11.08',
    views: 9834
  },
  {
    id: 9,
    image: '/government-conference-room-meeting.jpg',
    title: 'МОНГОЛ УЛС, ОРОСЫН ХОЛБООНЫ УЛСЫН',
    date: '2023.10.25',
    views: 11245
  },
  {
    id: 10,
    image: '/mongolian-government-official-speaking-at-press-co.jpg',
    title: 'ҮНДЭСНИЙ АЮУЛГҮЙ БАЙДЛЫН АСУУДЛААР САНАЛ СОЛИЛЦЛОО',
    date: '2023.10.18',
    views: 8923
  },
  {
    id: 11,
    image: '/government-meeting-with-flags.jpg',
    title: 'ОЛОН УЛСЫН ХАМТЫН АЖИЛЛАГААНЫ ТАЛААР',
    date: '2023.10.12',
    views: 9456
  },
  {
    id: 12,
    image: '/diplomatic-meeting.png',
    title: 'СТРАТЕГИЙН ТҮНШЛЭЛИЙН ХҮРЭЭНД',
    date: '2023.10.05',
    views: 7834
  }
]

export function NewsGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  
  const totalPages = Math.ceil(newsItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = newsItems.slice(startIndex, endIndex)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-[#d4af37] pl-4">
          МЭДЭЭ МЭДЭЭЛЭЛ
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          <Link href={`/news/${item.id}`} key={item.id}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-3 leading-tight">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{item.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-10 h-10 rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`flex items-center justify-center w-10 h-10 rounded border transition-colors ${
              currentPage === page
                ? 'bg-[#003d7a] text-white border-[#003d7a]'
                : 'border-gray-300 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-10 h-10 rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}

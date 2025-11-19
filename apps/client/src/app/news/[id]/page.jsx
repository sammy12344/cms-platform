import { Header } from '@/components/header'
import { Eye, Calendar, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Footer } from '@/components/footer'

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

export default async function NewsDetailPage({
  params,
}) {
  const { id } = await params
  const newsItem = newsItems.find((item) => item.id === parseInt(id))

  if (!newsItem) {
    notFound()
  }

  const relatedNews = newsItems.filter((item) => item.id !== parseInt(id)).slice(0, 6)

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6 -ml-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Буцах
          </Button>
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <img
              src={newsItem.image || "/placeholder.svg"}
              alt={newsItem.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-8">
            <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{newsItem.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                <span>{newsItem.views.toLocaleString()}</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
              {newsItem.title}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {newsItem.content ? (
                newsItem.content.map((block, index) => {
                  if (block.type === 'text') {
                    return (
                      <p key={index} className="mb-4">
                        {block.value}
                      </p>
                    )
                  } else if (block.type === 'image') {
                    return (
                      <div key={index} className="my-8">
                        <img
                          src={block.value || "/placeholder.svg"}
                          alt="Content image"
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
                    )
                  } else if (block.type === 'data') {
                    return (
                      <div key={index} className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{block.value.title}</h3>
                        <div className="space-y-4">
                          {block.value.items.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 bg-white rounded shadow-sm">
                              <div className="flex-1">
                                <div className="font-semibold text-gray-900">{item.label}</div>
                                <div className="text-sm text-gray-600">{item.description}</div>
                              </div>
                              <div className="text-2xl font-bold text-blue-600">{item.value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  }
                  return null
                })
              ) : (
                <>
                  <p className="mb-4">
                    Монгол Улсын Үндэсний аюулгүй байдлын зөвлөлийн нарийн бичгийн дарга 
                    албан тушаалд томилогдсон нь манай улсын аюулгүй байдлын бодлогын 
                    хэрэгжилтийг хангах чухал алхам болж байна.
                  </p>
                  <p className="mb-4">
                    Энэхүү уулзалтын үеэр хоёр орны аюулгүй байдлын хамтын ажиллагааны 
                    өнөөгийн байдал, цаашдын хамтын ажиллагааны чиглэлүүдийн талаар 
                    санал солилцлоо. Тал бүр аюулгүй байдлын чухал асуудлаар санал бодлоо 
                    хуваалцаж, цаашдын хамтын ажиллагааг өргөжүүлэх талаар тохиролцов.
                  </p>
                  <p className="mb-4">
                    Улс орнуудын хоорондын аюулгүй байдлын хамтын ажиллагаа нь 
                    олон улсын хамтын нийгэмлэгийн тогтвортой байдлыг хангахад 
                    чухал үүрэг гүйцэтгэдэг билээ.
                  </p>
                  <p>
                    Уг уулзалт нь хоёр орны аюулгүй байдлын салбарын харилцаа 
                    хамтын ажиллагааг улам бүр гүнзгийрүүлэх боломжийг олгож байна.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/">
            <Button variant="outline" size="lg">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Бүх мэдээ үзэх
            </Button>
          </Link>
        </div>
      </article>

      <section className="bg-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Холбоотой мэдээ</h2>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {relatedNews.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="flex-none w-80 snap-start group"
              >
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 w-full">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{item.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            <button className="w-2 h-2 rounded-full bg-blue-600"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

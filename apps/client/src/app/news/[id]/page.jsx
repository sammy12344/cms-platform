import { Header } from '@/components/header'
import { newsItems } from '@/components/news-grid'
import { Eye, Calendar, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Footer } from '@/components/footer'

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

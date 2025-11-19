import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#003d7a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-white/30 pb-2">
              ҮНДЭСНИЙ АЮУЛГҮЙ БАЙДЛЫН ЗӨВЛӨЛ
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Зөвлөлийн тухай
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Зөвлөлийн бүрэлдэхүүн
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Зөвлөлийн нарийн бичгийн дарга
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Зөвлөлийн ажлын алба
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-white/30 pb-2">
              ХУУЛЬ, ЭРХ ЗҮЙН БАРИМТ БИЧГҮҮД
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Монгол Улсын Үндсэн хууль
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Монгол Улсын үндэсний аюулгүй байдлын тухай
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Монгол Улсын Үндэсний аюулгүй байдлын зөвлөлийн тухай
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Монгол Улсын Ерөнхийлөгчийн тухай хууль
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Монгол Улсын үндэсний аюулгүй байдлын үзэл баримтлал
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-white/30 pb-2">
              ЗӨВЛӨМЖ, САНАЛ ДҮГНЭЛТ
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Үндэсний аюулгүй байдлын зөвлөлийн зөвлөмж
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Үндэсний аюулгүй байдлын зөвлөлийн шийдвэрийн хэрэгжилт
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  Үндэсний аюулгүй байдлын зөвлөлийн ажлын албаны санал, дүгнэлт
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-white/30 pb-2">
              ХАЯГ
            </h3>
            <div className="text-sm space-y-2">
              <p className="font-semibold">Монгол Улсын Үндэсний аюулгүй байдлын зөвлөл</p>
              <p>Төрийн ордон, Улаанбаатар-14201</p>
              <p>Монгол Улс</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 mt-8 pt-6 text-center text-sm">
          <p>© 1993 - 2025 | Монгол Улсын Үндэсний аюулгүй байдлын зөвлөл</p>
        </div>
      </div>
    </footer>
  )
}

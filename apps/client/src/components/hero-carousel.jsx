'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const slides = [
  {
    image: '/mongolian-government-official-speaking-at-press-co.jpg',
    title: 'Монгол Улсын Ерөнхийлөгч УХурлслүх ШХАБ-ын дээд түвшний уулзалтад ажиглагчаар оролцож, үг хэллээ'
  },
  {
    image: '/government-meeting-with-flags.jpg',
    title: 'Үндэсний аюулгүй байдлын зөвлөлийн нарийн бичгийн дарга томилогдлоо'
  },
  {
    image: '/diplomatic-meeting.png',
    title: 'Монгол Улс ШХАБ-д цаашид ажиглагчаар оролцохо байр сууриаас өөрийн нөхцөл байдалд үндэслэн шийдвэрлэнэ'
  }
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative bg-[#003d7a] overflow-hidden">
      <div className="relative h-[500px] w-full">
        <img
          src={slides[currentSlide].image || "/placeholder.svg"}
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
          <h2 className="text-white text-2xl md:text-3xl font-bold max-w-3xl">
            {slides[currentSlide].title}
          </h2>
        </div>

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12"
          onClick={nextSlide}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

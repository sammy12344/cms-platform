"use client";

import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [language, setLanguage] = useState("mn");

  const toggleLanguage = () => {
    setLanguage(language === "mn" ? "en" : "mn");
  };

  const menuItems =
    language === "mn"
      ? [
          {
            label: "Зөвлөлийн тухай",
            items: [
              { label: "Танилцуулга", href: "/about/introduction" },
              { label: "Бүтэц зохион байгуулалт", href: "/about/structure" },
              { label: "Түүх", href: "/about/history" },
              { label: "Дарга нар", href: "/about/leadership" },
            ],
          },
          {
            label: "Мэдээ мэдээлэл",
            items: [
              { label: "Мэдээ", href: "/news" },
              { label: "Мэдэгдэл", href: "/announcements" },
              { label: "Нийтлэл", href: "/articles" },
              { label: "Зураг цомог", href: "/gallery" },
            ],
          },
          {
            label: "Хууль эрх зүй",
            items: [
              { label: "Хууль", href: "/legal/laws" },
              { label: "Тогтоол", href: "/legal/resolutions" },
              { label: "Шийдвэр", href: "/legal/decisions" },
              { label: "Үндсэн баримт бичиг", href: "/legal/documents" },
            ],
          },
          {
            label: "Үйл ажиллагаа",
            items: [
              { label: "Хамтын ажиллагаа", href: "/activities/cooperation" },
              { label: "Төсөл хөтөлбөр", href: "/activities/programs" },
              { label: "Судалгаа", href: "/activities/research" },
            ],
          },
          {
            label: "Ил тод байдал",
            items: [
              { label: "Мэдээллийн ил тод байдал", href: "/transparency/information" },
              { label: "Төсвийн ил тод байдал", href: "/transparency/budget" },
            ],
          },
          {
            label: "Холбоо барих",
            items: [
              { label: "Байршил", href: "/contact/location" },
              { label: "Санал хүсэлт", href: "/contact/feedback" },
            ],
          },
        ]
      : [
          {
            label: "About Council",
            items: [
              { label: "Introduction", href: "/about/introduction" },
              { label: "Structure", href: "/about/structure" },
              { label: "History", href: "/about/history" },
              { label: "Leadership", href: "/about/leadership" },
            ],
          },
          {
            label: "News & Info",
            items: [
              { label: "News", href: "/news" },
              { label: "Announcements", href: "/announcements" },
              { label: "Articles", href: "/articles" },
              { label: "Gallery", href: "/gallery" },
            ],
          },
          {
            label: "Legal",
            items: [
              { label: "Laws", href: "/legal/laws" },
              { label: "Resolutions", href: "/legal/resolutions" },
              { label: "Decisions", href: "/legal/decisions" },
              { label: "Documents", href: "/legal/documents" },
            ],
          },
          {
            label: "Activities",
            items: [
              { label: "Cooperation", href: "/activities/cooperation" },
              { label: "Programs", href: "/activities/programs" },
              { label: "Research", href: "/activities/research" },
            ],
          },
          {
            label: "Transparency",
            items: [
              { label: "Information", href: "/transparency/information" },
              { label: "Budget", href: "/transparency/budget" },
            ],
          },
          {
            label: "Contact",
            items: [
              { label: "Location", href: "/contact/location" },
              { label: "Feedback", href: "/contact/feedback" },
            ],
          },
        ];

  return (
    <header className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-new.png"
          alt=""
          fill
          className="object-contain object-center opacity-95"
          priority
          quality={100}
          sizes="100vw"
          style={{ backgroundColor: '#031939' }}
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-black/10 to-transparent" />

      <div className="relative z-10">
        {/* Top Bar */}
        <div className="px-4 py-2 bg-[#003d7a]/90 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <span>📅</span>
              <time dateTime="2025-11-01">2025.11.01</time>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="text-white text-sm px-3 py-1 rounded hover:bg-white/10 transition-all duration-200 font-medium"
                aria-label={`Switch to ${language === "mn" ? "English" : "Mongolian"}`}
              >
                {language === "mn" ? "EN" : "MN"}
              </button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Logo/Title Section */}
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-block group">
            <h1 className="text-white font-bold text-3xl leading-tight uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] transition-transform duration-200 group-hover:scale-[1.02]">
              {language === "mn" ? (
                <>
                  монгол улсын
                  <br />
                  үндсний аюулгүй байдлын зөвлөл
                </>
              ) : (
                <>
                  National Security
                  <br />
                  Council of Mongolia
                </>
              )}
            </h1>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#003d7a]/90 backdrop-blur-md relative z-20 border-t border-white/10 shadow-lg">
        <div className="container mx-auto">
          <ul className="flex items-center justify-center gap-1">
            {menuItems.map((menu, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => setOpenDropdown(menu.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button 
                  className="flex items-center gap-1 px-5 py-4 text-white hover:bg-white/15 transition-all duration-200 text-sm font-medium whitespace-nowrap"
                  aria-expanded={openDropdown === menu.label}
                  aria-haspopup="true"
                >
                  {menu.label}
                  <ChevronDown 
                    className={`h-4 w-4 transition-transform duration-200 ${
                      openDropdown === menu.label ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {openDropdown === menu.label && (
                  <div className="absolute top-full left-0 bg-white shadow-xl min-w-[240px] py-2 z-50 rounded-b-lg border-t-2 border-[#003d7a] animate-in fade-in slide-in-from-top-2 duration-200">
                    {menu.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className="block px-5 py-2.5 text-gray-700 hover:bg-[#003d7a]/10 hover:text-[#003d7a] transition-all duration-150 text-sm font-medium"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
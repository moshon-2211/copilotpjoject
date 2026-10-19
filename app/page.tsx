"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Heart,
  Menu,
  MessageCircle,
  Mountain,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import { useState } from "react";

const products = [
  {
    name: "Yosemite — Moss",
    color: "Trail-worn olive",
    price: "$29.95",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    tone: "bg-[#e9e5d4]",
    label: "BEST SELLER",
  },
  {
    name: "Seasonal National Park",
    color: "Canyon red",
    price: "$29.95",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
    tone: "bg-[#eee0d3]",
    label: "LOW STOCK",
  },
  {
    name: "Tahoe National Forest",
    color: "Forest green",
    price: "$29.95",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85",
    tone: "bg-[#e2e5da]",
    label: "BEST SELLER",
  },
  {
    name: "Redwood — Moss",
    color: "Weathered sage",
    price: "$29.95",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85",
    tone: "bg-[#e8e6d9]",
    label: "NEW COLOR",
  },
];

const featured = [
  {
    eyebrow: "A FRESH TAKE ON A CLASSIC",
    name: "Adventure Bravely 7 Panel Hat",
    description:
      "A solid twist on a classic, this stylish 7-panel cap is perfect for relaxing around a campfire or wandering through your favorite mountain town.",
    detail: "Mesh back · Snapback · One size fits all",
    price: "$29.00",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1000&q=90",
    background: "bg-[#e8e4d4]",
  },
  {
    eyebrow: "MADE FOR THE MILES",
    name: "High Country Trail Cap",
    description:
      "A lightweight, easygoing favorite for early starts and late sunsets. Built to go wherever the trail takes you.",
    detail: "Recycled nylon · Adjustable strap · One size fits all",
    price: "$32.00",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1000&q=90",
    background: "bg-[#e5e5d7]",
  },
  {
    eyebrow: "THE EVERYDAY EXPLORER",
    name: "Roam Free Canvas Hat",
    description:
      "An everyday cap with a well-loved feel, made for coffee runs, trailheads, and everything in between.",
    detail: "Soft cotton canvas · Buckle closure · One size fits all",
    price: "$30.00",
    image:
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1000&q=90",
    background: "bg-[#ece3d4]",
  },
];

const moments = [
  {
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85",
    alt: "Morning light falling through a pine forest",
    likes: 143,
    comments: 18,
  },
  {
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85",
    alt: "A hiker exploring a mountain wilderness",
    likes: 98,
    comments: 12,
  },
  {
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85",
    alt: "A sunlit forest trail",
    likes: 216,
    comments: 23,
  },
  {
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",
    alt: "Mountain lake beneath a dramatic sky",
    likes: 184,
    comments: 16,
  },
];

const navigation = ["T-Shirts", "Hats & Beanies", "Sales", "About Us", "Blog"];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-xl text-center">
      {eyebrow && (
        <p className="mb-3 font-sans text-[10px] font-bold uppercase tracking-[0.24em] text-ember">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl uppercase leading-[0.98] tracking-[-0.035em] text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-ink/55">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [cartCount, setCartCount] = useState(2);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const slide = featured[activeSlide];

  function changeSlide(direction: number) {
    setActiveSlide((current) => (current + direction + featured.length) % featured.length);
  }

  return (
    <main className="overflow-hidden bg-cream">
      <header className="absolute inset-x-0 top-0 z-30 text-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-10 lg:px-16 lg:py-7">
          <button
            className="inline-flex items-center gap-2 lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.slice(0, 3).map((item) => (
              <a
                key={item}
                href={item === "T-Shirts" ? "#best-sellers" : "#featured"}
                className="font-display text-[11px] uppercase tracking-[0.12em] text-white/90 transition-colors hover:text-[#e8a36f]"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#top"
            className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center leading-none"
            aria-label="Wilderness Mountains home"
          >
            <Mountain size={28} strokeWidth={1.5} />
            <span className="mt-1 font-display text-[13px] uppercase tracking-[0.04em]">
              Wilderness
            </span>
            <span className="font-display text-[9px] uppercase tracking-[0.33em]">
              Mountains
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.slice(3).map((item) => (
              <a
                key={item}
                href={item === "About Us" ? "#team" : "#social"}
                className="font-display text-[11px] uppercase tracking-[0.12em] text-white/90 transition-colors hover:text-[#e8a36f]"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-4 lg:ml-0">
            <button
              aria-label="Search products"
              className="transition-transform hover:scale-110"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search size={19} strokeWidth={1.7} />
            </button>
            <button
              aria-label={`Shopping bag with ${cartCount} items`}
              className="relative transition-transform hover:scale-110"
              onClick={() => setCartCount((count) => count + 1)}
            >
              <ShoppingBag size={19} strokeWidth={1.7} />
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-ember px-1 text-[9px] font-bold text-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mx-auto max-w-xl px-5"
            >
              <label className="flex items-center gap-3 border border-white/30 bg-forest/90 px-4 py-3 backdrop-blur">
                <Search size={16} />
                <input
                  autoFocus
                  aria-label="Search the shop"
                  placeholder="What are you looking for?"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/55"
                />
                <button aria-label="Close search" onClick={() => setSearchOpen(false)}>
                  <X size={17} />
                </button>
              </label>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden bg-forest/95 px-7 backdrop-blur lg:hidden"
            >
              <div className="flex flex-col py-3">
                {navigation.map((item) => (
                  <a
                    key={item}
                    href={item === "T-Shirts" ? "#best-sellers" : "#featured"}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-white/10 py-3 font-display text-sm uppercase tracking-wider"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <section id="top" className="relative min-h-[690px] h-[92svh] max-h-[940px] text-white">
        <div
          className="absolute inset-0 bg-cover bg-[center_43%]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=90')",
          }}
          role="img"
          aria-label="Deep green pine forest in the Sierra Nevada"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-6 pb-12 pt-24 sm:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[640px]"
          >
            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.31em] text-[#e9b68c] sm:text-xs">
              Built for the long way around
            </p>
            <h1 className="font-display text-[clamp(4.5rem,11vw,9.7rem)] uppercase leading-[0.78] tracking-[-0.06em]">
              Yosemite
              <br />
              <span className="text-[#f3efe1]">Collection</span>
            </h1>
            <p className="mt-7 max-w-[395px] text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
              Our tried-and-true trail-running essentials are full of gear that
              can keep you going mile after mile.
            </p>
            <a
              href="#best-sellers"
              className="group mt-8 inline-flex items-center gap-4 bg-ember px-6 py-4 font-display text-xs uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#a94b20]"
            >
              Shop collection
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
          <a
            href="#best-sellers"
            aria-label="Scroll to best sellers"
            className="absolute bottom-16 right-8 hidden items-center gap-2 font-display text-[10px] uppercase tracking-[0.2em] text-white/70 md:flex"
          >
            Find your trail <ArrowDown size={14} />
          </a>
        </div>
        <div className="paper-edge absolute -bottom-1 left-0 z-10 h-[64px] w-full bg-cream sm:h-[82px]" />
      </section>

      <section id="best-sellers" className="relative z-10 px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16">
        <SectionHeading
          eyebrow="Good things go a long way"
          title="Best sellers"
          description="The tried-and-true trail companions our community keeps coming back to."
        />
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-x-4 gap-y-8 sm:mt-14 sm:gap-x-6 lg:grid-cols-4 lg:gap-7">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="product-card group"
            >
              <div className={`relative aspect-[0.88] overflow-hidden ${product.tone}`}>
                <span className="absolute left-3 top-3 z-10 bg-paper/90 px-2 py-1 font-sans text-[8px] font-bold uppercase tracking-[0.14em] text-forest sm:left-4 sm:top-4 sm:text-[9px]">
                  {product.label}
                </span>
                <img
                  src={product.image}
                  alt={`${product.name} graphic t-shirt`}
                  className="product-image h-full w-full object-cover mix-blend-multiply"
                />
                <button
                  onClick={() => setCartCount((count) => count + 1)}
                  className="absolute bottom-3 left-3 right-3 translate-y-3 bg-forest px-3 py-3 font-display text-[10px] uppercase tracking-[0.14em] text-white opacity-0 transition-all duration-300 hover:bg-ember group-hover:translate-y-0 group-hover:opacity-100 max-sm:hidden"
                >
                  Add to bag
                </button>
              </div>
              <div className="flex items-start justify-between gap-2 pt-4">
                <div>
                  <h3 className="font-display text-[15px] uppercase leading-tight sm:text-lg">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs text-ink/50">{product.color}</p>
                </div>
                <p className="shrink-0 pt-0.5 text-xs font-semibold sm:text-sm">
                  {product.price}
                </p>
              </div>
              <button
                onClick={() => setCartCount((count) => count + 1)}
                className="mt-3 w-full border border-forest/20 py-2 font-display text-[10px] uppercase tracking-[0.12em] transition-colors hover:bg-forest hover:text-white sm:hidden"
              >
                Add to bag
              </button>
            </motion.article>
          ))}
        </div>
        <a
          href="#featured"
          className="mx-auto mt-12 flex w-fit items-center gap-3 border-b border-ember pb-2 font-display text-xs uppercase tracking-[0.15em] text-ember transition-colors hover:text-forest"
        >
          Explore all trail goods <ArrowRight size={15} />
        </a>
      </section>

      <section id="featured" className="relative px-5 py-16 sm:px-8 sm:py-24">
        <div className="contour-bg absolute inset-0 bg-forest" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between text-white sm:mb-10">
            <div>
              <p className="mb-2 font-sans text-[10px] font-bold uppercase tracking-[0.23em] text-[#e49a66]">
                Trail-tested favorites
              </p>
              <h2 className="font-display text-3xl uppercase tracking-[-0.03em] sm:text-4xl">
                The gear we live in
              </h2>
            </div>
            <div className="hidden gap-2 sm:flex">
              <button
                onClick={() => changeSlide(-1)}
                aria-label="Previous featured product"
                className="flex h-11 w-11 items-center justify-center border border-white/30 transition-colors hover:bg-white hover:text-forest"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                onClick={() => changeSlide(1)}
                aria-label="Next featured product"
                className="flex h-11 w-11 items-center justify-center border border-white/30 transition-colors hover:bg-white hover:text-forest"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
          <div className="grid overflow-hidden bg-paper md:grid-cols-[1.08fr_0.92fr]">
            <div className={`relative flex min-h-[290px] items-center justify-center p-8 sm:min-h-[390px] sm:p-14 ${slide.background}`}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="h-full max-h-[360px] w-full object-contain mix-blend-multiply"
                />
              </AnimatePresence>
              <button
                onClick={() => changeSlide(-1)}
                aria-label="Previous featured product"
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-paper/75 text-forest shadow-sm transition hover:bg-white md:hidden"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                onClick={() => changeSlide(1)}
                aria-label="Next featured product"
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-paper/75 text-forest shadow-sm transition hover:bg-white md:hidden"
              >
                <ArrowRight size={17} />
              </button>
            </div>
            <div className="flex flex-col justify-center px-7 py-9 sm:px-12 sm:py-14 lg:px-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.24 }}
                >
                  <p className="font-sans text-[9px] font-bold uppercase tracking-[0.22em] text-ember sm:text-[10px]">
                    {slide.eyebrow}
                  </p>
                  <h3 className="mt-4 max-w-sm font-display text-4xl uppercase leading-[0.98] tracking-[-0.035em] text-ink sm:text-5xl">
                    {slide.name}
                  </h3>
                  <p className="mt-5 max-w-sm text-sm leading-6 text-ink/60">
                    {slide.description}
                  </p>
                  <p className="mt-3 text-xs text-ink/45">{slide.detail}</p>
                  <div className="mt-7 flex items-center justify-between">
                    <p className="font-display text-2xl text-ember">{slide.price}</p>
                    <button
                      onClick={() => setCartCount((count) => count + 1)}
                      className="bg-ember px-5 py-3 font-display text-[10px] uppercase tracking-[0.15em] text-white transition hover:bg-forest sm:px-7 sm:text-xs"
                    >
                      Add to bag
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2" aria-label="Featured products">
            {featured.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${item.name}`}
                aria-current={activeSlide === index}
                className={`h-2 rounded-full transition-all ${activeSlide === index ? "w-7 bg-[#e49a66]" : "w-2 bg-white/40 hover:bg-white/75"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="social" className="px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
        <SectionHeading
          eyebrow="Out there, together"
          title="Tag us with #wilderness-mountains"
          description="Our tried-and-true trail-running collection in its natural habitat. Tag us to share your next adventure."
        />
        <div className="mx-auto mt-9 grid max-w-6xl grid-cols-2 gap-2 sm:mt-12 sm:grid-cols-4 sm:gap-3">
          {moments.map((moment, index) => (
            <motion.a
              key={moment.alt}
              href="#team"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="group relative aspect-[0.82] overflow-hidden bg-moss"
            >
              <img
                src={moment.image}
                alt={moment.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-5 bg-forest/0 text-white opacity-0 transition-all duration-300 group-hover:bg-forest/60 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 font-display text-sm">
                  <Heart size={17} /> {moment.likes}
                </span>
                <span className="flex items-center gap-1.5 font-display text-sm">
                  <MessageCircle size={17} /> {moment.comments}
                </span>
              </div>
              <span className="absolute bottom-3 left-3 font-sans text-[9px] font-medium uppercase tracking-[0.16em] text-white/85 opacity-0 transition-opacity group-hover:opacity-100">
                @wildernessmountains
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="team" className="relative bg-forest px-6 py-20 text-center text-white sm:py-28">
        <div className="contour-bg absolute inset-0 opacity-80" />
        <div className="relative mx-auto max-w-2xl">
          <Mountain className="mx-auto mb-5 text-[#d98a55]" size={31} strokeWidth={1.3} />
          <p className="mb-3 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#e49a66]">
            Good people. Good places.
          </p>
          <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-[-0.03em] sm:text-6xl">
            We&apos;re a brand of
            <br />
            30+ team members
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/65">
            A small crew with a big love for the outdoors. We make gear with
            purpose and give back to the places that inspire us.
          </p>
          <a
            href="mailto:hello@wildernessmountains.com"
            className="mt-8 inline-flex items-center gap-3 border border-[#e49a66] px-6 py-3.5 font-display text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#e49a66]"
          >
            Get to know us <ArrowRight size={15} />
          </a>
        </div>
        <div className="absolute bottom-0 left-0 h-14 w-full bg-[linear-gradient(transparent,rgba(18,28,19,.4))]" />
      </section>

      <footer className="bg-[#22251f] px-6 pb-7 pt-12 text-white sm:px-10 sm:pt-16">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#top" className="inline-flex flex-col leading-none">
              <span className="flex items-center gap-2 font-display text-xl uppercase tracking-wide">
                <Mountain size={23} strokeWidth={1.5} /> Wilderness
              </span>
              <span className="ml-8 mt-1 font-display text-[10px] uppercase tracking-[0.34em] text-white/65">
                Mountains
              </span>
            </a>
            <p className="mt-5 max-w-xs text-xs leading-5 text-white/55">
              Thoughtful gear for wandering far, staying curious, and leaving
              the trail a little better than you found it.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-display text-xs uppercase tracking-[0.18em] text-[#e49a66]">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs text-white/65">
              <li><a href="#best-sellers" className="hover:text-white">Shop all</a></li>
              <li><a href="#featured" className="hover:text-white">Hats &amp; beanies</a></li>
              <li><a href="#best-sellers" className="hover:text-white">T-shirts</a></li>
              <li><a href="#team" className="hover:text-white">Our story</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-display text-xs uppercase tracking-[0.18em] text-[#e49a66]">
              The details
            </h3>
            <ul className="space-y-2.5 text-xs text-white/65">
              <li><a href="#footer" className="hover:text-white">Shipping &amp; returns</a></li>
              <li><a href="#footer" className="hover:text-white">FAQs</a></li>
              <li><a href="#footer" className="hover:text-white">Privacy policy</a></li>
              <li><a href="#footer" className="hover:text-white">Terms of service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-display text-xs uppercase tracking-[0.18em] text-[#e49a66]">
              Say hello
            </h3>
            <p className="text-xs leading-6 text-white/65">
              Questions about your order or just want to talk trails?
              <br />
              <a
                href="mailto:hello@wildernessmountains.com"
                className="text-white underline decoration-white/35 underline-offset-4 hover:decoration-white"
              >
                hello@wildernessmountains.com
              </a>
            </p>
          </div>
        </div>
        <div id="footer" className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-white/15 pt-5 text-[10px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Wilderness Mountains. Made for the long way around.</p>
          <p>Leave it better than you found it.</p>
        </div>
      </footer>
    </main>
  );
}

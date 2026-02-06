import { ChevronDown } from "lucide-react"
import { BlurText } from "./blur-text"

export const HeroSection = () => {
  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Centered Main Name - Always Perfectly Centered */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <div className="relative text-center">
          <div>
            <BlurText
              text="Jerome"
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-bold text-[80px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap text-brand"
            // style={{ color: "#d1a505", fontFamily: "'Fira Code', monospace" }}
            />
          </div>
          <div>
            <BlurText
              text="Clarito"
              delay={120}
              animateBy="letters"
              direction="bottom"
              className="font-bold text-[80px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap text-brand"

            />
          </div>

          {/* Profile Picture */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-[65px] h-[110px] sm:w-[90px] sm:h-[152px] md:w-[110px] md:h-[185px] lg:w-[129px] lg:h-[218px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer">
                <img
                  src="https://i.postimg.cc/y8DnKLyK/albert-dera-ILip77-Sbm-OE-unsplash.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}
        </div>
      </div>

      {/* Tagline - Proper Distance Below Hero */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-32 xl:bottom-36 left-1/2 -translate-x-1/2 w-full px-6">
        <div className="flex justify-center">
          <BlurText
            text="Coding for clarity, accessibility, and performance."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center transition-colors duration-300 text-neutral-500 hover:text-black dark:hover:text-white font-fira-code"
          // style={{ fontFamily: "'Antic', sans-serif" }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <button
        type="button"
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 transition-colors duration-300"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5 md:w-8 md:h-8 text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-300" />
      </button> */}
    </main>
  )
}

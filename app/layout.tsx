import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Searchbar from "@/components/Searchbar";
import HourlyForecast from "@/components/HourlyForecast";
import WeatherStatsTile from "@/components/WeatherStatsTile";
import DailyForecastElement from "@/components/DailyForecastElement";

export const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '500', '600', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-dmsans'
})

export const bricolageGrotesque = Bricolage_Grotesque({
    subsets: ['latin'],
    weight: ['700'],
    display: 'swap',
    variable: '--font-bricolage'
})

export const metadata: Metadata = {
  title: "Weather App",
  description: "Challenge from FrontendMentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${bricolageGrotesque.variable} ${dmSans.variable} antialiased 
        w-screen
        p-4
        lg:px-28
        lg:py-12
        flex
        flex-col 
        gap-16
        items-center
        `}
      >
        <Navbar />

        <h1 className="text-6xl font-bricolage text-center">
          How's the sky looking today?
        </h1>

        <Searchbar />

        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-8">
            <Hero />

            <div className="flex justify-between">
              <WeatherStatsTile 
                label="Feels Like"
                statistic="18°"
              />

              <WeatherStatsTile 
                label="Humidity"
                statistic="46%"
              />

              <WeatherStatsTile 
                label="Wind"
                statistic="14 km/h"
              />

              <WeatherStatsTile 
                label="Precipitation"
                statistic="0 mm"
              />
            </div>

            <div className="flex flex-col space-y-3">
              <h1 className="text-xl">Daily forecast</h1>
              <div className="flex justify-between w-full">
              
              <DailyForecastElement 
                day="monday"
                tempDay={20}
                tempNight={12}
                iconName="sunny"
              />

              <DailyForecastElement 
                day="monday"
                tempDay={20}
                tempNight={12}
                iconName="sunny"
              />

              <DailyForecastElement 
                day="monday"
                tempDay={20}
                tempNight={12}
                iconName="sunny"
              />

              <DailyForecastElement 
                day="monday"
                tempDay={20}
                tempNight={12}
                iconName="sunny"
              />

              <DailyForecastElement 
                day="monday"
                tempDay={20}
                tempNight={12}
                iconName="sunny"
              />

              <DailyForecastElement 
                day="monday"
                tempDay={20}
                tempNight={12}
                iconName="sunny"
              />

              <DailyForecastElement 
                day="monday"
                tempDay={20}
                tempNight={12}
                iconName="sunny"
              />
            </div>
            </div>
          </div>

          <HourlyForecast />
        </div>
        {children}
      </body>
    </html>
  );
}
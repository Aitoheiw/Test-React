import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";

export default function Cards() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then((response) => response.json())
      .then((data) => setFilms(data)) // ← mise à jour du state
      .catch((error) => console.error("Erreur fetch :", error));
  }, []);

  function AffichageFilm() {
    return films.map((film) => (
      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        key={film.id}
        className="flex flex-col items-center gap-1 p-4 bg-zinc-300 sm:w-full  rounded-lg md:w-[200px] md:h-[400px] md:justify-center md:items-center "
      >
        <h2 className="text-lg text-zinc-800 selection:bg-zinc-200 selection:text-zinc-800 md:h-[60px]">
          {film.title}
        </h2>
        <img
          src={film.image}
          alt="Image du film"
          className=" w-full rounded-2xl md:h-86 object-fit"
        />
      </Motion.div>
    ));
  }

  return (
    <div className="relative text-zinc-100 p-4 selection:bg-zinc-200 selection:text-zinc-800 after:content-[''] after:w-full after:border-1 after:absolute after:border-zinc-100 after:bottom-0 after:left-0 after:bg-zinc-100 pb-6 md:max-w-6xl">
      <h1 className="text-3xl text-zinc-100  text-center relative w-full selection:bg-zinc-200 selection:text-zinc-800 after:content-[''] after:w-full after:border-1 after:absolute after:border-zinc-100 after:bottom-0 after:left-0 after:bg-zinc-100 pb-4">
        Films Ghibli
      </h1>
      <div className="w-full flex flex-col items-center justify-center pt-4 gap-6 md:flex-row md:flex-wrap">
        <AffichageFilm />
      </div>
    </div>
  );
}

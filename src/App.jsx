import Images from "./components/Images.jsx";
import Article from "./components/Article.jsx";
import Cards from "./components/Cards.jsx";
import "./App.css";

function App() {
  const title = "Apprendre React";

  return (
    <div className="w-full flex flex-col  items-center gap-2 bg-zinc-800 min-h-screen">
      <h1 className="text-3xl  text-zinc-100 p-2 text-center rounded-lg select-none absolute z-1 bg-zinc-800 mt-4">
        {title}
      </h1>
      <Images />
      <section className="w-full flex flex-col items-center pt-4">
        <h2 className="text-2xl text-zinc-100 relative text-center w-full selection:bg-zinc-200 selection:text-zinc-800 after:content-[''] after:w-full after:border-1 after:absolute after:border-zinc-100 after:bottom-0 after:left-0 after:bg-zinc-100 pb-4">
          Articles
        </h2>
        <Article
          title="Caroussel"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          fugiat velit non, necessitatibus eaque itaque architecto eius, illo
          omnis molestias sed eveniet dolorum esse ea odio iusto voluptates!
          Ipsam earum, molestias enim provident suscipit explicabo, modi maxime
          velit repellat rerum accusantium quis nulla voluptatibus quasi vel
          sunt tempora excepturi. Quasi vero, dolorem, ipsum quod beatae impedit
          soluta quibusdam quae laboriosam consectetur itaque quidem sint alias
          cupiditate sit magnam, recusandae magni? Repudiandae sed eos facere
          labore unde inventore natus reprehenderit? Amet consequuntur molestiae
          odit corrupti at repudiandae culpa doloremque porro esse. Officia
          nihil excepturi minus ullam? Molestiae aperiam eveniet ipsa modi. article"
        />
        <Cards />
        <Article
          title="Article 2"
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
          fugiat velit non, necessitatibus eaque itaque architecto eius, illo
          omnis molestias sed eveniet dolorum esse ea odio iusto voluptates!
          Ipsam earum, molestias enim provident suscipit explicabo, modi maxime 
          velit repellat rerum accusantium quis nulla voluptatibus quasi vel
          sunt tempora excepturi. Quasi vero, dolorem, ipsum quod beatae impedit
          soluta quibusdam quae laboriosam consectetur itaque quidem sint alias
          cupiditate sit magnam, recusandae magni? Repudiandae sed eos facere"
        />
      </section>
    </div>
  );
}

export default App;

import { useState } from "react";
import Header from "@/components/feactures/home/Header";
import Search from "@/components/feactures/home/Search";
import EmojiGrid from "@/components/feactures/home/EmojiGrid";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <main>
      <Header />
      <Search setSearch={setSearch} />
      <section className="max-w-7xl mx-auto px-8 py-6 sm:px-6 lg:px-8 flex flex-col gap-5">
        {search && (
          <h1 className="text-2xl">
            <span className="text-slate-500">Finding:</span> {search}
          </h1>
        )}
        <EmojiGrid search={search} />
      </section>
    </main>
  );
};

export default Home;

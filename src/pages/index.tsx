import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <section className="bg-black text-primary-50">
          <div className="layout flex min-h-screen flex-col items-center justify-center text-center">
            <h1>Next + TypeScript + Tailwind CSS template</h1>

            <footer className="absolute bottom-2">
              © Ahmadhi Prananta Hastiputra {new Date().getFullYear()}
            </footer>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

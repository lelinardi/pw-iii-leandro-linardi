// app/page.tsx
import Head from "next/head";
import Navbar from "./components/Navbar";

export default function Home() {
    return (
        <>
            <Head>
                <title>Meu Portifolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <Navbar />
                <main className="p-8 text-center">
                    <section id="sobre" className="mb-10">
                        <h1 className="text-2xl font-bold">Hi!!! My name is Leandro Linardi</h1>
                        <p className="mt-4 text-gray-600">I am a System Development Tecnichian</p>
                    </section>
                    <section id="/about" className="mb-10">
                        <h1 className="text-2xl font-bold">There goes some of my Projects into GitHub Platform:</h1>
                        <p className="mt-4 text-gray-600">lelinardi/pw-iii-leandro-linardi</p>
                        <p className="mt-4 text-gray-600">lelinardi/pam-ii-leandro-linardi</p>
                    </section>
                    <section id="/contact" className="mb-10">
                        <h1 className="text-2xl font-bold">Contact me</h1>
                        <p className="mt-4 text-gray-600">lelinardi@hotmail.com</p>
                    </section>
                </main>
            </div>
        </>

    );
}

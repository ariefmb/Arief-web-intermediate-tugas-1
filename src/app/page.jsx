import MovieCard from "@/components/movieCard";
import Link from "next/link";

const Home = () => {
    return (
        <div>
            <h1 className="font-bold">SELAMAT DATANG DI WEBSITE MOVIE</h1>
            <MovieCard />
            <h1 className="font-bold">KENAL LEBIH JAUH DENGAN AUTHOR</h1>
            <Link href='/profile'>
                <button className="bg-blue-500 p-2 rounded-lg hover:bg-blue-700 text-white">Profile Author</button>
            </Link>
        </div>
    );
};

export default Home;

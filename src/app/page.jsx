import MovieCard from "@/app/components/movieCard";
import Link from "next/link";

const Home = () => {
    return (
        <div>
            <h1 className="font-bold">SELAMAT DATANG DI WEBSITE MOVIE</h1>
            <MovieCard />
            <h1 className="font-bold">KENAL LEBIH JAUH DENGAN AUTHOR</h1>
            <Link href='/profile'>
                <button className="bg-blue-500 p-2 border-rounded-5">Profile Author</button>
            </Link>
        </div>
    );
};

export default Home;
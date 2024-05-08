import HomeBtn from "@/components/HomeBtn";

export default function SubPagesLayout({ children }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-20 px:8 xs:px-16 lg:px-32">
            <HomeBtn />
            {children}
            <p className="fixed bottom-0 text-custom mb-2 font-semibold text-md">&copy; Guillermo 2024 | Tous droits réservés</p>
        </main>
    );
}

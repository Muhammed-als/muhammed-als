export default function Footer () {
    return (
        <footer className="py-8 border-t border-gray-800">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <p>© {new Date().getFullYear()} Muhammed Alsabban. All rights reserved.</p>
            </div>
        </footer>
    );
}
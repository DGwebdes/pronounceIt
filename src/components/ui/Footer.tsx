const Footer = () => {
    return (
        <footer className="text-center text-sm p-4 bg-gray-600 dark:bg-gray-800 dark:text-gray-300">
            Made with ❤️ for Mom; Developer{" "}
            <a href="https://dielanwebdev.pt/" target="_blank">
                Dielan Garve
            </a>{" "}
            {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;

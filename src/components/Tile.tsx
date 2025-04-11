const Tile: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
            {children}
        </div>
    );
};

export default Tile;

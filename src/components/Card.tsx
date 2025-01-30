interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div
            className={`
                bg-zinc-900/50 
                backdrop-blur-lg 
                rounded-xl 
                border
                border-zinc-800/50
                p-4 
                hover:bg-zinc-800/50 
                hover:border-zinc-700/50
                transition-all 
                duration-300 
                ease-in-out
                shadow-lg
                shadow-black/5
                ${className}
            `}
        >
            {children}
        </div>
    )
}

export default Card;
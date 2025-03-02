
import React from "react";

interface CardProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
    return (
        <div className="bg-white shadow-md rounded-2xl p-6 max-w-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            {children && <div className="mt-4">{children}</div>}
        </div>
    );
};

export default Card;

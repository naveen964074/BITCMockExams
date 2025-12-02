import React from "react";
import "./Card.css";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverable?: boolean;
    className?: string;
    onClick?: () => void;
    image?: string;         // image URL
    imageAlt?: string;      // alt text
}

const Card: React.FC<CardProps> = ({
    children,
    hoverable = true,
    className = "",
    onClick,
    image,
    imageAlt = "",
    ...props
}) => {
    const classNames = [
        "card",
        hoverable ? "card-hoverable" : "",
        className
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classNames} onClick={onClick} {...props}>
            {image && (
                <div className="card-image">
                    <img src={image} alt={imageAlt} loading="lazy" />
                </div>
            )}

            <div className="card-content">
                {children}
            </div>
        </div>
    );
};

export default Card;

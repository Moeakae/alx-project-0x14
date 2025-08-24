import React from 'react';

type MovieCardProps = {
    title: string;
    posterUrl: string;
    releaseDate?: string;
    overview?: string;
};

const MovieCard: React.FC<MovieCardProps> = ({
    title,
    posterUrl,
    releaseDate,
    overview,
}) => (
    <div style={{
        border: '1px solid #ddd',
        borderRadius: 8,
        overflow: 'hidden',
        width: 250,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        background: '#fff',
    }}>
        <img
            src={posterUrl}
            alt={title}
            style={{ width: '100%', height: 350, objectFit: 'cover' }}
        />
        <div style={{ padding: 16 }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: 20 }}>{title}</h3>
            {releaseDate && (
                <p style={{ margin: '0 0 8px 0', color: '#888', fontSize: 14 }}>
                    {releaseDate}
                </p>
            )}
            {overview && (
                <p style={{ margin: 0, fontSize: 14, color: '#444' }}>
                    {overview.length > 100 ? overview.slice(0, 100) + '...' : overview}
                </p>
            )}
        </div>
    </div>
);

export default MovieCard;
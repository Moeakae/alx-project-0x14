import React from 'react';

const Footer: React.FC = () => (
    <footer style={{
        width: '100%',
        padding: '1rem 0',
        textAlign: 'center',
        background: '#222',
        color: '#fff',
        position: 'fixed',
        left: 0,
        bottom: 0,
        zIndex: 100,
    }}>
        <span>&copy; {new Date().getFullYear()} ALX Movie App. All rights reserved.</span>
    </footer>
);

export default Footer;
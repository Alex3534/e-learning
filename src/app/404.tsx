import Link from 'next/link';
import React from 'react';

const NotFoundPage: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link href="/">Go to Home</Link>
        </div>
    );
};

export default NotFoundPage;
import React, { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout-container">
            {/* You can add a header or navigation here */}
            <main>{children}</main>
            {/* You can add a footer here */}
        </div>
    );
};

export default Layout;
import React, { createContext, useState } from 'react';

export const sidebarContext = createContext();

const SidebarContext = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeHandler = () => {
        setIsOpen(false);
    };

    return (
        <sidebarContext.Provider value={{ isOpen, setIsOpen, closeHandler }}>
            {children}
        </sidebarContext.Provider>
    );
};

export default SidebarContext;

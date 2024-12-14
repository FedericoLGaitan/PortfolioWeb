

import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props) => {
    const { children } = props;
    return (
        <div className='flex flex-col gap-4 md:flex-row md:items-start lg:gap-6 w-full max-w-7xl px-4 pv-40
        mx-auto md:pb-0 md:px-6 mt-40'>
            {children}
        </div>
    );
}

export default Container
import {useEffect, useRef} from 'react';

function useOutsideClick(callback: () => void) {
    const ref = useRef<any>();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [callback]);

    return ref;
}

export default useOutsideClick;

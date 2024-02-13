import { useEffect, useState } from "react";

export function useLocalStorage(initial, key) {
    const [value, setValue] = useState(() => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : initial;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}
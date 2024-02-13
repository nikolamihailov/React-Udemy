import { useEffect } from "react";

export function useKey(key, func) {
    useEffect(() => {
        const callback = (e) => {
            if (e.code.toLowerCase() === key.toLowerCase()) {
                func();
            }
        };

        document.addEventListener("keydown", callback);

        return () => {
            document.removeEventListener("keydown", callback);
        };
    }, []);
}
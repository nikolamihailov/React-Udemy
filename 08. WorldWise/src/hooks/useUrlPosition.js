import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
    const [searchParams] = useSearchParams();
    const lng = searchParams.get("lng");
    const lat = searchParams.get("lat");

    return [lat, lng];
}
import { useReducer } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "loadCities":
      return {
        ...state,
        cities: action.payload,
        isLoading: false,
      };
    case "loadCityDetails":
      return {
        ...state,
        currentCity: action.payload,
        isLoading: false,
      };
    case "createNewCity":
      return {
        ...state,
        cities: [...state.cities, action.payload],
        isLoading: false,
        currentCity: action.payload,
      };
    case "deleteCity":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
        isLoading: false,
        currentCity: {},
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Not correct action type!");
  }
};

export default function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    dispatch({ type: "loading" });

    async function fetchCities() {
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "loadCities", payload: data });
      } catch (error) {
        dispatch({ type: "rejected", payload: "Error fetching cities" });
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(
    async function (id) {
      console.log(typeof currentCity.id, typeof id);
      if (currentCity.id === id) return;
      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: "loadCityDetails", payload: data });
      } catch (error) {
        dispatch({ type: "rejected", payload: "Error getting city" });
      }
    },
    [currentCity.id]
  );

  async function createNewCity(newCity) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "createNewCity", payload: data });
    } catch (error) {
      dispatch({ type: "rejected", payload: "Error creating city" });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });

    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "deleteCity", payload: id });
    } catch (error) {
      dispatch({ type: "rejected", payload: "Error deleting city" });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createNewCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("out of scope usage detected");
  return context;
}

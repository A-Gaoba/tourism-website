"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";

interface Booking {
  startDate: string;
  endDate: string;
  adults: number;
  children: {
    count: number;
    ages: number[];
  };
}

interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface Accommodation {
  id: number;
  name: string;
  type: "hotel" | "cottage";
  room: Room;
  booking: Booking;
}

interface Activity {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  city: string;
  tickets: number;
  date: string;
}

interface Transportation {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface Selection {
  hotels: Accommodation[];
  cottages: Accommodation[];
  activities: Activity[];
  transportation: Transportation[];
}

interface SelectionsContextType {
  selections: Selection;
  addSelection: (category: keyof Selection, item: any) => void;
  removeSelection: (category: keyof Selection, itemId: number) => void;
  clearSelections: () => void;
  getNotificationCount: () => number;
}

const SelectionsContext = createContext<SelectionsContextType | undefined>(undefined);

export const useSelections = () => {
  const context = useContext(SelectionsContext);
  if (!context) {
    throw new Error("useSelections must be used within a SelectionsProvider");
  }
  return context;
};

const SelectionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selections, setSelections] = useState<Selection>({
    hotels: [],
    cottages: [],
    activities: [],
    transportation: [],
  });

  useEffect(() => {
    const savedSelections = localStorage.getItem("tourPackage");
    if (savedSelections) {
      setSelections(JSON.parse(savedSelections).selections);
    }
  }, []);

  const saveToLocalStorage = useCallback((newSelections: Selection) => {
    localStorage.setItem("tourPackage", JSON.stringify({ selections: newSelections }));
  }, []);

  const addSelection = useCallback(
    (category: keyof Selection, item: any) => {
      setSelections((prev) => {
        const updatedSelections = { ...prev };
        updatedSelections[category] = [...prev[category], item];
        saveToLocalStorage(updatedSelections);
        return updatedSelections;
      });
    },
    [saveToLocalStorage]
  );

  const removeSelection = useCallback(
    (category: keyof Selection, itemId: number) => {
      setSelections((prev) => {
        const updatedSelections = {
          ...prev,
          [category]: prev[category].filter((item: any) => item.id !== itemId),
        };
        saveToLocalStorage(updatedSelections);
        return updatedSelections;
      });
    },
    [saveToLocalStorage]
  );

  const clearSelections = useCallback(() => {
    setSelections({
      hotels: [],
      cottages: [],
      activities: [],
      transportation: [],
    });
    localStorage.removeItem("tourPackage");
  }, []);

  const getNotificationCount = useCallback(() => {
    return (
      selections.hotels.length +
      selections.cottages.length +
      selections.activities.length +
      selections.transportation.length
    );
  }, [selections]);

  return (
    <SelectionsContext.Provider
      value={{ selections, addSelection, removeSelection, clearSelections, getNotificationCount }}
    >
      {children}
    </SelectionsContext.Provider>
  );
};

export { SelectionsProvider }; // Single export here

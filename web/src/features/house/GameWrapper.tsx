"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import GameControls from "./GameControls";
import GameField from "./GameField";
import GameModal from "./GameModal";

const OBJECTS = [
  "KeyRound",
  "Ghost",
  "BookOpen",
  "Soup",
  "Lamp",
  "Clock",
  "Coffee",
  "Headphones",
  "Glasses",
];

export default function GameWrapper() {
  const [started, setStarted] = useState(false);
  const [foundObjects, setFoundObjects] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  function startSearch() {
    setFoundObjects([]);
    setShowModal(false);
    setStarted(true);
  }

  function stopSearch() {
    setStarted(false);
    setShowModal(false);
    setFoundObjects([]);
  }

  function findObject(object: string) {
    if (foundObjects.includes(object)) return;

    const updatedObjects = [...foundObjects, object];
    setFoundObjects(updatedObjects);

    if (updatedObjects.length === OBJECTS.length) {
      setShowModal(true);
    }
  }

  return (
    <div className="w-full space-y-6">
      {!started ? (
        <>
          <GameControls
            foundCount={foundObjects.length}
            onStart={startSearch}
          />

          <GameField
            foundObjects={foundObjects}
            onFind={findObject}
            isSearching={started}
          />
        </>
      ) : (
        <>
          <section className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex-1 flex items-center justify-between gap-4 w-full">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-primary" />
                <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  The Room
                </span>
              </div>
              <span className="font-mono text-sm uppercase text-primary">
                {foundObjects.length} / {OBJECTS.length} Clues
              </span>
            </div>

            <div className="w-full md:w-fit">
              <Button
                variant="outline"
                className="w-full md:w-fit"
                onClick={stopSearch}
              >
                <X className="mr-2 h-4 w-4" />
                Exit Search
              </Button>
            </div>
          </section>

          <GameField
            foundObjects={foundObjects}
            onFind={findObject}
            isSearching={started}
          />

          {showModal && (
            <GameModal
              onClose={() => {
                setShowModal(false);
                stopSearch();
              }}
            />
          )}
        </>
      )}
    </div>
  );
}

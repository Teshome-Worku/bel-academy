"use client";

import { useState } from "react";
import { ProgramCard } from "./ProgramCard";
import { ProgramModal } from "./ProgramModal";
import type { Program } from "@/types/program";

export function ProgramsGrid({ programs }: { programs: Program[] }) {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program, i) => (
          <ProgramCard
            key={program.id}
            program={program}
            index={i}
            onViewDetails={() => {
              setSelectedProgram(program);
              setSelectedIndex(i);
            }}
          />
        ))}
      </div>

      <ProgramModal
        program={selectedProgram}
        accentIndex={selectedIndex}
        onClose={() => {
          setSelectedProgram(null);
          setSelectedIndex(null);
        }}
      />
    </>
  );
}

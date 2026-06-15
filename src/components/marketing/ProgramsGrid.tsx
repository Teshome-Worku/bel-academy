"use client";

import { useState } from "react";
import { ProgramCard } from "./ProgramCard";
import { ProgramModal } from "./ProgramModal";
import type { Program } from "@/types/program";

export function ProgramsGrid({ programs }: { programs: Program[] }) {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <ProgramCard
            key={program.id}
            program={program}
            onViewDetails={() => setSelectedProgram(program)}
          />
        ))}
      </div>

      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </>
  );
}

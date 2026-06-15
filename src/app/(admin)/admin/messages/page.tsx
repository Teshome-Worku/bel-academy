"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { conversations } from "@/data/messages";
import { PageHeader } from "@/components/admin/shell/PageHeader";

export default function AdminMessagesPage() {
  const [selectedId, setSelectedId] = useState(conversations[0]?.id);
  const selected = conversations.find((c) => c.id === selectedId);

  return (
    <div className="space-y-6">
      <PageHeader title="Messages" description="Student and inquiry conversations" />
      <div className="flex min-h-[480px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="w-full border-r border-slate-100 md:w-80 lg:w-96">
          <div className="border-b border-slate-100 p-4">
            <p className="text-sm font-medium text-brand-navy">Conversations</p>
          </div>
          <ul className="divide-y divide-slate-100">
            {conversations.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedId(c.id)}
                className={cn(
                  "w-full px-4 py-3 text-left transition hover:bg-slate-50",
                  selectedId === c.id && "bg-brand-blue/5",
                )}
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium text-brand-navy">{c.name}</p>
                  {c.unread ? (
                    <span className="h-2 w-2 rounded-full bg-brand-blue" />
                  ) : null}
                </div>
                <p className="mt-1 text-xs text-brand-gray line-clamp-1">{c.preview}</p>
                <p className="mt-1 text-xs text-brand-gray">{c.time}</p>
              </button>
            ))}
          </ul>
        </div>
        <div className="hidden flex-1 flex-col md:flex">
          {selected ? (
            <>
              <div className="border-b border-slate-100 px-6 py-4">
                <p className="font-heading font-semibold text-brand-navy">{selected.name}</p>
              </div>
              <div className="flex-1 space-y-3 overflow-y-auto p-6">
                {selected.messages.map((m, i) => (
                  <div
                    key={i}
                    className={cn(
                      "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                      m.from === "admin"
                        ? "ml-auto bg-brand-blue text-white"
                        : "bg-slate-100 text-brand-navy",
                    )}
                  >
                    {m.text}
                    <p className="mt-1 text-xs opacity-70">{m.time}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-100 p-4">
                <input
                  type="text"
                  placeholder="Type a message... (demo)"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                  readOnly
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

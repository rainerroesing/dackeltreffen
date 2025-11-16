"use client";

import { useState } from "react";
import { MessageSquare, Trash2, Send } from "lucide-react";

type MessageBubble = {
  id: string;
  fromMe: boolean;
  text: string;
  createdAt: string; // einfache ISO-Strings für die Demo
};

type Thread = {
  id: string;
  counterpartName: string;
  counterpartDogName?: string;
  lastMessagePreview: string;
  updatedAt: string;
  unreadCount: number;
  messages: MessageBubble[];
};

const initialThreads: Thread[] = [
  {
    id: "t1",
    counterpartName: "Laura",
    counterpartDogName: "Wurstl",
    lastMessagePreview: "Magst du dich am Samstag zum Spaziergang treffen?",
    updatedAt: "2025-11-15T14:32:00Z",
    unreadCount: 2,
    messages: [
      {
        id: "m1",
        fromMe: false,
        text: "Hey, ich habe gesehen, dass Wurstl auch Rauhhaar-Zwerg ist 😄",
        createdAt: "2025-11-15T14:10:00Z",
      },
      {
        id: "m2",
        fromMe: false,
        text: "Magst du dich am Samstag zum Spaziergang treffen?",
        createdAt: "2025-11-15T14:32:00Z",
      },
    ],
  },
  {
    id: "t2",
    counterpartName: "Paul",
    counterpartDogName: "Fritz",
    lastMessagePreview: "Cool, dann bis nächste Woche im Stadtpark!",
    updatedAt: "2025-11-14T09:15:00Z",
    unreadCount: 0,
    messages: [
      {
        id: "m3",
        fromMe: true,
        text: "Passt dir eher Nachmittag oder Abend?",
        createdAt: "2025-11-14T09:10:00Z",
      },
      {
        id: "m4",
        fromMe: false,
        text: "Nachmittag wäre perfekt. Cool, dann bis nächste Woche im Stadtpark!",
        createdAt: "2025-11-14T09:15:00Z",
      },
    ],
  },
];

function formatTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function MessagesPage() {
  const [threads, setThreads] = useState<Thread[]>(initialThreads);
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(
    initialThreads[0]?.id ?? null
  );
  const [replyText, setReplyText] = useState("");

  const selectedThread = threads.find((t) => t.id === selectedThreadId) || null;

  function handleSelectThread(id: string) {
    setThreads((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              unreadCount: 0,
            }
          : t
      )
    );
    setSelectedThreadId(id);
  }

  function handleDeleteThread(id: string) {
    setThreads((prev) => prev.filter((t) => t.id !== id));

    if (selectedThreadId === id) {
      const remaining = threads.filter((t) => t.id !== id);
      setSelectedThreadId(remaining[0]?.id ?? null);
    }
  }

  function handleSendReply() {
    if (!selectedThread || !replyText.trim()) return;

    const text = replyText.trim();
    const nowIso = new Date().toISOString();

    setThreads((prev) =>
      prev.map((t) =>
        t.id === selectedThread.id
          ? {
              ...t,
              lastMessagePreview: text,
              updatedAt: nowIso,
              messages: [
                ...t.messages,
                {
                  id: `m-${Date.now()}`,
                  fromMe: true,
                  text,
                  createdAt: nowIso,
                },
              ],
            }
          : t
      )
    );

    setReplyText("");
  }

  return (
    <div className="bg-[#F1EADA] w-full min-h-[calc(100vh-64px)]">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col gap-4">
        <header className="flex items-center justify-between">
          
        </header>

        {/* Hauptbereich: Liste links, Chat rechts */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] gap-4 md:h-[70vh]">
          {/* INBOX LISTE */}
          <aside className="rounded-3xl border border-[#E3D9C8] bg-[#FFFDF8] overflow-hidden flex flex-col">
            <div className="px-4 py-3 border-b border-[#EEE1CC] flex items-center gap-2 text-sm text-[#3C1775]">
              <MessageSquare className="w-4 h-4" />
              <span>Inbox</span>
            </div>

            {threads.length === 0 ? (
              <div className="flex-1 flex items-center justify-center p-4 text-xs text-[#7A6A4F]">
                Noch keine Nachrichten.
              </div>
            ) : (
              <ul className="flex-1 overflow-y-auto">
                {threads.map((thread) => {
                  const isActive = thread.id === selectedThreadId;
                  return (
                    <li key={thread.id}>
                      <button
                        type="button"
                        onClick={() => handleSelectThread(thread.id)}
                        className={`w-full text-left px-4 py-3 flex flex-col gap-1 border-b border-[#F0E4D3] transition ${
                          isActive
                            ? "bg-[#F7F0E1]"
                            : "hover:bg-[#FAF4E8]"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex flex-col">
                            <span className="text-sm text-[#3C1775]">
                              <span className="font-semibold">
                                {thread.counterpartName}
                              </span>
                              {thread.counterDogName && (
                                <span className="font-normal">
                                  {" "}
                                  mit {thread.counterDogName}
                                </span>
                              )}
                            </span>
                          </div>
                          <span className="text-[10px] text-[#A18C64]">
                            {formatTime(thread.updatedAt)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs text-[#7A6A4F] line-clamp-1">
                            {thread.lastMessagePreview}
                          </p>
                          {/* Badge entfernt wie gewünscht */}
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </aside>

          {/* CHAT-BEREICH */}
          <section className="rounded-3xl border border-[#E3D9C8] bg-[#FFFDF8] flex flex-col">
            {selectedThread ? (
              <>
                {/* Header der Konversation */}
                <div className="px-4 py-3 border-b border-[#EEE1CC] flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-sm text-[#3C1775]">
                      <span className="font-semibold">
                        {selectedThread.counterpartName}
                      </span>
                      {selectedThread.counterDogName && (
                        <span className="font-normal">
                          {" "}
                          mit {selectedThread.counterDogName}
                        </span>
                      )}
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteThread(selectedThread.id)}
                    className="inline-flex items-center gap-1 rounded-full border border-[#E3D9C8] px-3 py-1 text-[11px] text-[#A14A4A] hover:bg-[#FFE7E7] transition"
                  >
                    <Trash2 className="w-3 h-3" />
                    Löschen
                  </button>
                </div>

                {/* Nachrichtenverlauf */}
                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm">
                  {selectedThread.messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex ${
                        m.fromMe ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[75%] rounded-2xl px-3 py-2 text-xs md:text-sm ${
                          m.fromMe
                            ? "bg-[#FF785A] text-white rounded-br-sm"
                            : "bg-[#F5EEFF] text-[#3C1775] rounded-bl-sm"
                        }`}
                      >
                        <p>{m.text}</p>
                        <span className="mt-1 block text-[10px] opacity-70">
                          {formatTime(m.createdAt)}
                        </span>
                      </div>
                    </div>
                  ))}

                  {selectedThread.messages.length === 0 && (
                    <p className="text-xs text-[#7A6A4F]">
                      Noch keine Nachrichten in diesem Chat.
                    </p>
                  )}
                </div>

                {/* Antwortbereich */}
                <form
                  className="border-t border-[#EEE1CC] px-3 py-2 flex items-end gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendReply();
                  }}
                >
                  <textarea
                    rows={2}
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Antwort schreiben..."
                    className="flex-1 resize-none rounded-2xl border border-[#E3D9C8] bg-white px-3 py-2 text-sm text-[#3C1775] placeholder:text-[#B8A48A] focus:outline-none focus:ring-2 focus:ring-[#B9A2FF]"
                  />
                  <button
                    type="submit"
                    disabled={!replyText.trim()}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF785A] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#ff8b70] transition self-center"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center p-4 text-xs text-[#7A6A4F]">
                Wähle eine Konversation auf der linken Seite aus.
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

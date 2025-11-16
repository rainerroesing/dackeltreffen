"use client";

import { MessageSquare } from "lucide-react";
import Link from "next/link";

export default function HeaderInboxButton({ unreadCount = 0 }: { unreadCount?: number }) {
  const hasUnread = unreadCount > 0;

  return (
    <Link href="/messages" className="relative">
      {/* Icon Button */}
      <div
        className="h-9 w-9 flex items-center justify-center rounded-md 
                   bg-[#FF785A] hover:bg-[#ff8b70] transition cursor-pointer"
      >
        <MessageSquare className="h-5 w-5 text-white" strokeWidth={2.5} />
      </div>

      {/* Badge */}
      {hasUnread && (
        <span
          className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1
                     bg-[#3C1775] text-white text-[10px] font-bold
                     rounded-full flex items-center justify-center pointer-events-none"
        >
          {unreadCount}
        </span>
      )}
    </Link>
  );
}

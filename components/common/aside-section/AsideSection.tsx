"use client";

import { Button, SearchBar } from "@/components/ui";

function AsideSection() {
    return (
        <aside className="page__aside">
            {/* 검색창 UI */}
            <SearchBar placeholder="검색어를 입력하세요." />
            {/* Add New Page 버튼 UI */}
            <Button className="text-[#E79057] bg-white border border-[#E79057] hover:bg-[#FFF9F5]">
                Add New Page
            </Button>
            {/* TODO 목록 UI 하나 */}
            <div>
                <li className="min-h-9 flex items-center gap-2 py-2 px-[10px] rounded-sm text-sm cursor-pointer">
                    <div className="h-[6px] w-[6px] rounded-full bg-black"></div>
                </li>
            </div>
        </aside>
    );
}

export { AsideSection };

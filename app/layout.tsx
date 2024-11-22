import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toast/toaster";
import { AsideSection } from "@/components/common";
/** 폰트 */
import { FONT_NOTOSANSKR } from "@/public/assets/fonts";
/** 스타일 */
import "@/public/styles/globals.css";
import "@/public/styles/main.scss";

export const metadata: Metadata = {
    title: "TODO-BOARD 만들기",
    description: "Shadcn UI 및 Supabase를 활용한 나만의 TODO-BOARD 만들기",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={FONT_NOTOSANSKR.className}>
                <div className="page">
                    <AsideSection />
                    <main className="page__main">{children}</main>
                </div>
                <Toaster />
            </body>
        </html>
    );
}

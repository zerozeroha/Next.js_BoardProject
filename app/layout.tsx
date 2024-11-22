import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toast/toaster";
/** 스타일 */
import "@/public/styles/globals.css";
/** 폰트 */
import { FONT_NOTOSANSKR } from "@/public/assets/fonts";
import "@/public/styles/main.scss";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={FONT_NOTOSANSKR.className}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}

"use client";

import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

function useDeleteTask() {
    const router = useRouter();

    const deleteTask = async (taskId: number) => {
        try {
            const { status, error } = await supabase
                .from("todos")
                .delete()
                .eq("id", taskId);

            if (status === 204) {
                toast({
                    title: "해당 task delete completed",
                    description: " 언제든 새로운 task 만들어라",
                });
                router.push("/");
            }
            if (error) {
                toast({
                    variant: "destructive",
                    title: "에러가 발생했습니다.",
                    description: `Supabase 오류: ${
                        error.message || "알 수 없는 오류"
                    }`,
                });
            }
        } catch (error) {
            console.error(error);
            toast({
                variant: "destructive",
                title: "네트워크 오류",
                description: "서버와 연결할 수 없음. 다시 시도 ㄱㄱ",
            });
        }
    };
    return deleteTask;
}

export { useDeleteTask };

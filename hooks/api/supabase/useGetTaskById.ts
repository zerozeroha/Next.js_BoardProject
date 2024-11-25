import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { taskAtom } from "@/stores/atoms";
import { Task } from "@/types";
import { useAtom } from "jotai";
import { useEffect } from "react";

function useGetTaskById(taskId: number) {
    // taskId는 ID 값이므로 number 타입으로 수정
    const { toast } = useToast();
    const [task, setTask] = useAtom(taskAtom);

    const getTaskById = async () => {
        try {
            const { data, error, status } = await supabase
                .from("todos")
                .select("*")
                .eq("id", taskId)
                .single(); // 단일 row 가져오도록 변경

            if (status === 200 && data) {
                setTask(data);
            } else if (error) {
                toast({
                    variant: "destructive",
                    title: "에러가 발생했습니다.",
                    description: `Supabase 오류: ${
                        error.message || "알 수 없는 오류"
                    }`,
                });
            }
        } catch (error: any) {
            // catch 블록의 error를 명시적으로 선언
            console.error(error); // 실제 오류를 콘솔에 출력
            toast({
                variant: "destructive",
                title: "네트워크 오류",
                description: "서버와 연결할 수 없습니다. 다시 시도해주세요!",
            });
        }
    };

    useEffect(() => {
        if (taskId) {
            getTaskById();
        }
    }, [taskId]);

    return { task, getTaskById };
}
export { useGetTaskById };

"use client";

/** UI 컴포넌트 */
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { Description } from "@radix-ui/react-dialog";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { handleClientScriptLoad } from "next/script";

interface Props {
    children: React.ReactNode;
}

function AlertPopup({ children }: Props) {
    const { id } = useParams();
    const router = useRouter();

    const handleDeleteTask = async () => {
        const { status, error } = await supabase
            .from("todos")
            .delete()
            .eq("id", id);

        if (status === 204) {
            toast({
                title: "해당 task delete completed",
                description: " 언제든 새로우 task 만들어라",
            });
            router.push("/board/1");
        }
        if (error) {
            console.error(error);
            toast({
                variant: "destructive",
                title: "에러발생",
                description: "예상못한 에러",
            });
        }
        console.log(status, error);
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        해당 TASK를 정말로 삭제하시겠습니까?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        이 작업이 실행되면 다시 취소할 수 없습니다.
                        <br /> 삭제가 진행되면 귀하의 게시물은 영구적으로
                        삭제됩니다.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>취소</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleDeleteTask}
                        className="bg-red-600 hover:bg-rose-600"
                    >
                        삭제
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export { AlertPopup };

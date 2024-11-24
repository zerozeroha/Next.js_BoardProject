"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { nanoid } from "nanoid";
/** UI 컴포넌트 */
import { AlertPopup, BoardCard } from "@/components/common";
import { Button, Progress, LabelDatePicker } from "@/components/ui";
import { ChevronLeft } from "lucide-react";
/** 스타일 */
import styles from "./page.module.scss";
/** 타입 */
import { Board, Task } from "@/types";

function BoardPage() {
    const { id } = useParams();
    const { toast } = useToast();
    const [task, setTask] = useState<Task>();
    const [boards, setBoards] = useState<Board[]>(task?.boards || []);

    /** 특정 id 값에 따른 TASK 데이터 */
    const getTask = async () => {
        try {
            const { data, status } = await supabase
                .from("todos")
                .select("*")
                .eq("id", id);

            if (data !== null && status === 200) setTask(data[0]);
        } catch (error) {
            console.log(error);
        }
    };

    /** Board Card 생성 및 데이터베이스에 저장 */
    const handleAddBoard = () => {
        const newBoard: Board = {
            id: nanoid(),
            title: "",
            startDate: null,
            endDate: null,
            content: "",
            isCompleted: false,
        };
        setBoards((prevBoards) => [...prevBoards, newBoard]);
        updateTaskOneColumnById(Number(id), "boards", boards);
    };

    const updateTaskOneColumnById = async (
        uid: number,
        column: string,
        newValue: any
    ) => {
        try {
            const { data, status } = await supabase
                .from("todos")
                .update({ [column]: newValue })
                .eq("id", uid)
                .select();

            if (data !== null && status === 204) {
                toast({
                    title: "새로운 TODO-BOARD를 생성했습니다.",
                    description: "생성한 TODO-BOARD를 예쁘게 꾸며주세요!",
                });
            }
        } catch (error) {
            console.error(error);
            toast({
                variant: "destructive",
                title: "에러가 발생했습니다.",
                description: "예상치 못한 에러가 발생했습니다. 문의해주세요.",
            });
        }
    };

    useEffect(() => {
        getTask();
    }, []);

    return (
        <>
            <div className={styles.header}>
                <div className={styles[`header__btn-box`]}>
                    <Button variant={"outline"} size={"icon"}>
                        <ChevronLeft />
                    </Button>
                    <div className="flex items-center gap-2">
                        <Button variant={"secondary"}>저장</Button>
                        <AlertPopup>
                            <Button className="text-rose-600 bg-red-50 hover:bg-rose-50">
                                삭제
                            </Button>
                        </AlertPopup>
                    </div>
                </div>
                <div className={styles.header__top}>
                    {/* 제목 입력 Input 섹션 */}
                    <input
                        type="text"
                        placeholder="Enter Title Here!"
                        className={styles.header__top__input}
                    />
                    {/* 진행상황 척도 그래프 섹션 */}
                    <div className="flex items-center justify-start gap-4">
                        <small className="text-sm font-medium leading-none text-[#6D6D6D]">
                            1/10 Completed
                        </small>
                        <Progress className="w-60 h-[10px]" value={33} />
                    </div>
                </div>
                {/* 캘린더 + Add New Board 버튼 섹션 */}
                <div className={styles.header__bottom}>
                    <div className="flex items-center gap-5">
                        <LabelDatePicker label={"From"} />
                        <LabelDatePicker label={"To"} />
                    </div>
                    <Button
                        className="text-white bg-[#E79057] hover:bg-[#E26F24] hover:ring-1 hover:ring-[#E26F24] hover:ring-offset-1 active:bg-[#D5753D] hover:shadow-lg"
                        onClick={handleAddBoard}
                    >
                        Add New Board
                    </Button>
                </div>
            </div>
            <div className={styles.body}>
                {boards.length !== 0 ? (
                    <div className={styles.body__isData}>
                        {/* Add New Board 버튼 클릭으로 인한 Board 데이터가 있을 경우 */}
                        {boards.map((board: Board) => {
                            return <BoardCard key={board.id} />;
                        })}
                    </div>
                ) : (
                    <div className={styles.body__noData}>
                        {/* Add New Board 버튼 클릭으로 인한 Board 데이터가 없을 경우 */}
                        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                            There is no board yet.
                        </h3>
                        <small className="text-sm font-medium leading-none text-[#6D6D6D] mt-3 mb-7">
                            Click the button and start flashing!
                        </small>
                        <button onClick={handleAddBoard}>
                            <Image
                                src="/assets/images/button.svg"
                                width={74}
                                height={74}
                                alt="rounded-button"
                            />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default BoardPage;

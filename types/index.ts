export interface Task {
    id: number;
    title: string;
    start_date: Date;
    end_date: Date;
    boards: Board[];
}

export interface Board {
    id: string; // 추후에 수파베이스 보드 컬럼을 다른 테이블로 분리할 경우, 타입변경가능
    title: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
    content: string;
    isCompleted: boolean;
}

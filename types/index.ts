export interface Task {
    id: number;
    title: string;
    startDate: Date;
    endDate: Date;
    boards: Board[];
}

export interface Board {
    id: string; // 추후에 수파베이스 보드 컬럼을 다른 테이블로 분리할 경우, 타입변경가능
    title: string;
    startDate: Date | null;
    endDate: Date | null;
    content: string;
    isCompleted: boolean;
}

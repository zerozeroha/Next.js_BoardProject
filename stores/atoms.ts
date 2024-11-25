import { atom } from "jotai";
import { Task } from "@/types";

/** Supabase에 저장되어 있는 'todos' 테이블 내에 있는 모든 데이터 조회 */
/** 전체 todos 목록 조회 */
/** tasksAtom (s 붙임)*/
export const tasksAtom = atom<Task[]>([]);

/** 단일 (개발) task 상태 */
/** taskAtom */
export const taskAtom = atom<Task | null>(null);

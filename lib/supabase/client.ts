import { createClient } from "@supabase/supabase-js";

// Supabase 프로젝트 설정 (URL과 Key를 대시보드에서 확인)
const supabaseUrl = "https://your-project-id.supabase.co";
const supabaseKey = "your-api-key";

// Supabase 클라이언트 생성
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase }; // supabase를 내보냄

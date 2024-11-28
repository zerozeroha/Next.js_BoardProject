// import { createClient } from "@supabase/supabase-js";

// // Supabase 프로젝트 설정 (URL과 Key를 대시보드에서 확인)
// const supabaseUrl = "https://your-project-id.supabase.co";
// const supabaseKey = "your-api-key";

// // Supabase 클라이언트 생성
// const supabase = createClient(supabaseUrl, supabaseKey);

// export { supabase }; // supabase를 내보냄

import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
    createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

export const supabase = createClient();

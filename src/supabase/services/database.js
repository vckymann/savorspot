import { supabase } from "../supabaseinit";

export const databaseService = {
     async getMenuItems () {
        const { data, error } = await supabase
            .from("menu_items")
            .select("*")
            .order("id", { ascending: true });
                        
        return { data, error };
    }
} 
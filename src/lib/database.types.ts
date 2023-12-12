export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      archived_timesheets: {
        Row: {
          date_memo: string
          description: string
          id: number
          inserted_at: string
          is_complete: boolean | null
          project_id: number
          user_id: string
        }
        Insert: {
          date_memo: string
          description: string
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          project_id: number
          user_id: string
        }
        Update: {
          date_memo?: string
          description?: string
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          project_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "archived_timesheets_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "archived_timesheets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      ots: {
        Row: {
          description: string
          finish_time: string
          id: number
          inserted_at: string
          is_complete: boolean | null
          product: string
          project_id: number
          service_date: string
          start_time: string
          subject: string
          user_id: string
        }
        Insert: {
          description: string
          finish_time: string
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          product: string
          project_id: number
          service_date: string
          start_time: string
          subject: string
          user_id: string
        }
        Update: {
          description?: string
          finish_time?: string
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          product?: string
          project_id?: number
          service_date?: string
          start_time?: string
          subject?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ots_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ots_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      projects: {
        Row: {
          id: number
          inserted_at: string
          is_active: boolean | null
          project_name: string
          project_no: string
        }
        Insert: {
          id?: number
          inserted_at?: string
          is_active?: boolean | null
          project_name: string
          project_no: string
        }
        Update: {
          id?: number
          inserted_at?: string
          is_active?: boolean | null
          project_name?: string
          project_no?: string
        }
        Relationships: []
      }
      timesheets: {
        Row: {
          date_memo: string
          description: string
          id: number
          inserted_at: string
          is_complete: boolean | null
          project_id: number
          user_id: string
        }
        Insert: {
          date_memo: string
          description: string
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          project_id: number
          user_id: string
        }
        Update: {
          date_memo?: string
          description?: string
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          project_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "timesheets_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "timesheets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      continents:
      | "Africa"
      | "Antarctica"
      | "Asia"
      | "Europe"
      | "Oceania"
      | "North America"
      | "South America"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])
  : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
    Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
    Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof Database["public"]["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof Database["public"]["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof Database["public"]["Enums"]
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
  : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

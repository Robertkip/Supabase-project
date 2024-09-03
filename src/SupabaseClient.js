import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ziikvchdqgufunahvxuh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppaWt2Y2hkcWd1ZnVuYWh2eHVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE3Njg4NjUsImV4cCI6MTk3NzM0NDg2NX0.3wJujhorAu1JCuExDoJJ-o_QsO69U7SlGyO0enR_NSI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
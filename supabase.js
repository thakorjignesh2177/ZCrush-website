import { createClient } from
'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = https://guvjlethwmwzfiaqjkhv.supabase.co;

const SUPABASE_PUBLISHABLE_KEY =https://guvjlethwmwzfiaqjkhv.supabase.co;

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
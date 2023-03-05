const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrcnl3YnBvZ2F5ZHZncm9obGplIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczOTYxMTcsImV4cCI6MTk5Mjk3MjExN30.c4CdhOgUpswYjL6VLzIkYhzvssO4xkS4jPDQN61vvZw";

const url = "https://lkrywbpogaydvgrohlje.supabase.co";

const supabase = supabase.createClient(url, key);

const Container = (props) => {
  const { user } = Auth.useUser();
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    );
  return props.children;
};

export default function AuthBasic() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Container supabaseClient={supabase}>
        <Auth supabaseClient={supabase} />
      </Container>
    </Auth.UserContextProvider>
  );
}

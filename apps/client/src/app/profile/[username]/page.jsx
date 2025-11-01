import { Header } from "@/components/header";
import { ProfileHeader } from "@/components/profile-header";
import { ProfileTabs } from "@/components/profile-tabs";
import { articles } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function ProfilePage({ params }) {
  const { username } = await params;

  // Find user by username
  const userArticles = articles.filter(
    (article) => article.author.username === username
  );

  if (userArticles.length === 0) {
    notFound();
  }

  const user = userArticles[0].author;

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <ProfileHeader user={user} articleCount={userArticles.length} />
        <ProfileTabs user={user} articles={userArticles} />
      </div>
    </div>
  );
}

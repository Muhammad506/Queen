// app/contactus/page.js

import ExploreMore from "@/components/ExploreMore";
import ClubActivities from "@/components/Home/ClubActivities";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <ExploreMore />
      <ClubActivities />
    </div>
  );
}

import UI from "@/components/Home/UI";
import VoicesOfExperience from "@/components/Home/VoiceofExperience";
import Hero from "@/components/Home/Hero";
import LearnMore from "@/components/Home/LearnMore";
import ClubActivities from "@/components/Home/ClubActivities";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <ClubActivities />
      <VoicesOfExperience />
      <UI />
      <LearnMore />
    </div>
  );
};

export default Home;

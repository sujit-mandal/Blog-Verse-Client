import Videosection from "../Components/Videosection/Videosection";
import Trending from "../Components/Trending/Trending";
import Banner from "../Components/Header/Banner";
import Featured from "../Components/Featured/Featured";
import TopStories from "../Components/TopStories/TopStories";
import TopPosts from "../Components/TopPosts/TopPosts";
import RecentPosts from "../Components/RecentPosts/RecentPosts";
const Home = () => {
  return (
    <>
      <Banner/>
      <Featured />
      <TopStories />
      <Videosection/>
      <TopPosts />
      <RecentPosts/>
      <Trending/>
    </>
  );
};

export default Home;

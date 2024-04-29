import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideBar from "@/components/ui/SideBar.js/SideBar";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>Latest News</h1>
          <LatestNews/>

        </Grid>
        <Grid item xs={4}>
          <h2>Side bar</h2>
          <SideBar/>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;

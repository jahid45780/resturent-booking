import Banner from "../../component/Banner";
import Mobile from "../../component/Mobile";
import Multiple from "../../component/Multiple";
import Recipe from "../../component/Recipe";

export default function Home() {
  return (
    <div className=" max-w-6xl mx-auto" >
      <Banner/>
      <Recipe/>
      <Multiple/>
      <Mobile/>
    </div>
  )
}


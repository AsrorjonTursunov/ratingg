import React from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
// import ProductsCard from "./components/ProductsCard";

console.log(Section1);

function App() {
  return (
    <>
      <Section1 />
      <div className="container cards">
        <Section2
          user="@nathanf"
          number="11241"
          follower="FOLLOWERS"
          rating="12 Today"
        />
        <Section2
          user="@nathanf"
          number="11241"
          follower="FOLLOWERS"
          rating="12 Today"
        />
        <Section2
          user="@nathanf"
          number="11241"
          follower="FOLLOWERS"
          rating="12 Today"
        />
        <Section2
          user="@nathanf"
          number="11241"
          follower="FOLLOWERS"
          rating="12 Today"
        />

        <section className="container overview">
          <h2>Overview - Today</h2>

          <div className="overview-grid">
            <Section3
              title="Page Views"
              number="87"
              rating="▲ 3%"
              platform="facebook"
              color="green"
            />

            <Section3
              title="Likes"
              number="52"
              rating="▼ 2%"
              platform="facebook"
              color="red"
            />

            <Section3
              title="Likes"
              number="5462"
              rating="▲ 2257%"
              platform="instagram"
              color="green"
            />

            <Section3
              title="Profile Views"
              number="52k"
              rating="▲ 1375%"
              platform="instagram"
              color="green"
            />

            <Section3
              title="Retweets"
              number="117"
              rating="▲ 303%"
              platform="twitter"
              color="green"
            />

            <Section3
              title="Likes"
              number="507"
              rating="▲ 553%"
              platform="twitter"
              color="green"
            />

            <Section3
              title="Likes"
              number="107"
              rating="▼ 19%"
              platform="youtube"
              color="red"
            />

            <Section3
              title="Total Views"
              number="1407"
              rating="▼ 12%"
              platform="youtube"
              color="red"
            />
          </div>
        </section>
      </div>
    </>
  );
}
console.log(App);

export default App;

// function App() {
//   return (
//     <>
//       <div className="wrapper">
//         <ProductsCard
//           name="Iphone 17 pro max"
//           price="1.200 usd"
//           category="phone"
//           isaviable={true}
//         />
//         <ProductsCard
//           name="REdmi note 15 pro"
//           price="720 usd"
//           category="phone"
//           isaviable={false}
//         />
//         <ProductsCard
//           name="Samsung S 22 ultra "
//           price="1.320 usd"
//           category="phone"
//           isaviable={true}
//         />
//         <ProductsCard
//           name="Iphone 18 pro max"
//           price="1.600 usd"
//           category="phone"
//           isaviable={1555}
//         />
//       </div>
//     </>
//   );
// }

// export default App;

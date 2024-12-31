import React from "react";

import HeaderBox from "@/components/ui/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedIn = { firstName: "John" , lastName: "Doe" , email: "yvN1o@example.com"};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn.firstName || "Guest"}
            subtext='Access and manage your account and transactions efficiently'
          />
          <TotalBalanceBox 
            account={[]}
            totalBanks ={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        Recent Transactions
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 1250.30},{currentBalance:2530.50}]}
      />
    </section>
  );
};

export default Home;

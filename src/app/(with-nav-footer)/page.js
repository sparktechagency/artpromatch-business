'use client';

import AfterLogin from "@/components/WithNavFooterComponents/HomeComponents/AfterLogin/AfterLogin";
import BeforeLogin from "@/components/WithNavFooterComponents/HomeComponents/BeforeLogin/BeforeLogin";




const Homepage = () => {
    const user = false;
  
    return (
        <div>

            {
                user ? <AfterLogin /> : <BeforeLogin />
            }

        </div>
    );
};

export default Homepage;
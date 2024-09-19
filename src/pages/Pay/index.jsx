import React, { useState } from "react";
import { Helmet, Container, Header, Plans } from "../../components";
import { useParams } from "react-router-dom";
import { plans } from "../../constants";

const Pay = () => {
  const { course } = useParams();
  const [selectedPlan, setSelectedPlan] = useState(plans[0].title); // default to first plan

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value); // Set the selected plan when user clicks
  };

  console.log(selectedPlan);

  return (
    <Helmet title="Payment">
      <Header bgImage="bg-paybg" title={`Enrolling in ${course}`} />
      <section className="w-full py-10 md:py-32">
        <Container>
          <form>
            <h1 className="font-bold text-[40px] leading-[30px] mb-12">
              Select a plan :
            </h1>
            <div className="flex items-stretch justify-start gap-14 mb-20 md:flex-row flex-col">
              {plans.map((plan, index) => (
                <label key={index} className="cursor-pointer flex-grow">
                  <input
                    type="radio"
                    name="plan"
                    value={plan.title}
                    checked={selectedPlan === plan.title}
                    onChange={handlePlanChange}
                    className="hidden" // Hide the radio input
                  />
                  <Plans {...plan} selected={selectedPlan === plan.title} />
                </label>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-alternate text-white py-3 px-6 md:py-5 md:px-8 text-[14px] sm:text-[16px] md:text-[18px] hover:bg-hover hover:text-primary uppercase inline-block transition-colors duration-300"
              >
                Proceed to payment
              </button>
            </div>
          </form>
        </Container>
      </section>
    </Helmet>
  );
};

export default Pay;

import React from "react";

const privacy = () => {
  return (
    <div className=" py-36 ">
      <div className=" md:px-20 px-5  ">
        <div className="flex ">
          <div className="px-10 w-2/12 hidden md:block ">
            <a href="/privacy" className="block font-medium">
              Privacy policy
            </a>
            <a href="/tandc">Terms & conditions</a>
          </div>
          <div className="absolute hidden md:block -translate-y-20 translate-x-[150px]  border-r-[2px] border-dashed border-[#F1EBE3] h-[1500px]"></div>
          <div className="md:w-10/12 w-full">
            <h1 className="text-[40px] font-medium mb-7">Privacy Policy</h1>

            <p className="text-[#2F2D37] text-xl my-4">
              <span className="font-bold">Unify</span> is a platform that
              replicates the physical organization, infrastructure and business
              operating model of tertiary schools in a digital application
              format (the “app” or “Platform”). These infrastructure and
              services include finance, operation, education delivery,
              administration, student/alumni affairs and extra curricula
              activities. Unify is developed by
              <span className="font-bold mx-1">
                C-ONE VENTURES PLATFORM LIMITED (“C-One”).
              </span>
            </p>

            <p className="my-4">
              Personal information is essential to the provision of exceptional
              and personalized products and services, but more important is the
              protection and security of your personal information. C-One
              respects individuals’ rights to privacy and the protection of
              personal information. Therefore, we want to transparently explain
              how and why we collect, store, share and use your personal
              information – as well as outline the controls and choices you have
              around when you choose to share your personal data
            </p>

            <p className="mt-4">
              This Privacy Policy (“Policy”) outlines our objectives in detail.
            </p>
            <p className="mt-4">
              The Policy applies to all Unify services and any associated
              services (“Unify Service”). The terms governing your use of the
              Unify Service are defined in our Terms and Conditions.
            </p>
            <ol className="list-decimal ml-10 mb-4">
              <li>
                Ensure that you understand what personal data we collect about
                you, our reasons for collection and use, and who we share it
                with;
              </li>
              <li>
                Explain the way we use the personal data you share with us in
                order to give you a great experience when you are using the
                Unify Service; and
              </li>
              <li>
                Explain your rights and choices in relation to the personal data
                we collect and process about you and how we will protect your
                privacy.
              </li>
            </ol>
            <div className="space-y-4">
              <p>
                From time to time, we may develop new or offer additional
                services. If the introduction of these new or additional
                services results in any material change to the way we collect or
                process your personal data, we will provide you with more
                information or additional terms or policies. Unless stated
                otherwise, new or additional services, will be subject to this
                Privacy Policy.
              </p>
              <p>
                We hope this helps you to understand our privacy commitments to
                you. For further clarifications of the terms used in this
                Policy, please email us at
                <a
                  href="mailto:support@unifyedu.ng"
                  className="text-blue-300 mx-1"
                >
                  support@unifyedu.ng
                </a>
                or leave a message for our support officer on the Unify app.
              </p>
              <p>
                For information on how to contact us if you ever have any
                questions or concerns, please see the “ Contact Us” section
                below. Alternatively, if you do not agree with the content of
                this Policy, you may voluntarily opt out of this service and
                discontinue its use. Our Principal address is
                <strong>
                  Block 10, Plot 2, The Lennox Mall, 3, Admiralty Way, Lekki
                  Phase 1, Lagos.
                </strong>
              </p>
            </div>
            <h6 className=" font-bold my-4">Your Privacy Rights </h6>
            <p className="mb-4">
              You have certain rights in relation to the personal information we
              collect as provided by the Nigeria Data Protection Regulation 2019
              (NDPR) and other applicable data protection laws/regulations.
              These include the right to:
            </p>

            <ul className="list-disc ml-10">
              <li>
              access your personal data;
              </li>
              <li>
              rectify/update your information in our possession;
              </li>
              <li>
              ithdraw your consent to processing of personal information. This will however not affect the
              legality of processing carried out prior to any such withdrawal;
              </li>
              <li> object to processing of personal information (ways in which we are using your personal
                information, including direct marketing). This will only be applicable where there are no legal or
                operational reasons;</li>
                <li>equest that your personal information be made available to you in a common electronic format
                and/or request that such data be sent to a third party;</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default privacy;

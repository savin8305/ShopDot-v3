import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-400 text-gray-800 font-sans min-h-screen">
      <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-semibold mb-8 text-center text-gray-900">
          Multivendor Ecommerce Platform
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard title="Vendor Management">
            Multiple sellers/vendors can register and manage their own
            product listings, inventory, and orders.
          </FeatureCard>

          <FeatureCard title="Product Listings">
            Vendors can create and customize their product listings,
            including images, descriptions, and prices.
          </FeatureCard>

          <FeatureCard title="Order Processing">
            The platform facilitates smooth order processing, allowing
            customers to purchase products from different vendors in a
            single transaction.
          </FeatureCard>

          <FeatureCard title="Payment Integration">
            Integrated payment gateways for secure transactions, supporting
            multiple payment options.
          </FeatureCard>

          <FeatureCard title="Commission Management">
            The platform charges a commission on each sale made by vendors.
            A system is in place to track and manage these commissions.
          </FeatureCard>

          <FeatureCard title="Rating and Review System">
            A feedback system allows customers to rate and review both
            products and vendors, enhancing transparency and trust.
          </FeatureCard>

          <FeatureCard title="Shipping and Logistics">
            Integration with shipping carriers and logistics partners to
            manage product deliveries efficiently.
          </FeatureCard>

          <FeatureCard title="Responsive Design">
            A user-friendly and responsive design that works well on various
            devices, including desktops, tablets, and mobile phones.
          </FeatureCard>

          <FeatureCard title="Security Features">
            Robust security measures to protect customer data and ensure
            safe transactions.
          </FeatureCard>

          <FeatureCard title="Analytics and Reporting">
            Tools for vendors to track their sales, monitor inventory, and
            analyze customer behavior. Administrators may also benefit from
            overall platform analytics.
          </FeatureCard>

          <FeatureCard title="Customization Options">
            Vendors may have the ability to customize their storefronts
            within the platform to reflect their brand identity.
          </FeatureCard>

          <FeatureCard title="Scalability">
            The platform is scalable to accommodate the growth of
            both the number of vendors and the volume of transactions.
          </FeatureCard>
        </div>
      </div>
    </div>
  );
}

// Reusable component for each feature card
const FeatureCard = ({ title, children }) => (
  <div className="bg-white rounded-lg p-6">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <p className="text-gray-700">{children}</p>
  </div>
);

export default About;

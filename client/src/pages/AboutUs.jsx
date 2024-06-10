import React from 'react';

export default function AboutUs() {
  return (
    <div className="about-us container mx-auto px-4 py-12 max-w-2xl">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-3xl font-bold text-center text-slate-800">About RestoLink</h1>
        {/* Add an optional logo or image here */}
      </div>
      <p className="text-xl font-bold text-center text-slate-700">Your One-Stop Restaurant Solution</p>
      <div className="content px-8 py-12 rounded-lg shadow-md bg-white mx-auto max-w-2xl">
        <p className="text-slate-700 leading-relaxed mb-8">
          Struggling to find the perfect ingredients or equipment for your restaurant? RestoLink is your one-stop shop for all your restaurant needs! This app connects restaurant owners and suppliers, making it easier than ever to find the products you need and the talent to run your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='rounded-lg shadow-md px-4 py-4'>
            <h3 className="text-xl font-bold text-slate-800 mb-4 underline">Restaurant Owners</h3>
            <ul className=" space-y-2 text-slate-700">
              <li>Browse a wide variety of restaurant supplies from trusted vendors.</li>
            </ul>
          </div>
          <div className='rounded-lg shadow-md px-4 py-4'>
            <h3 className="text-xl font-bold text-slate-800 mb-4 underline">Restaurant Suppliers</h3>
            <ul className="space-y-2 text-slate-700">
              <li>Showcase your products to a wider audience of restaurant owners.</li>
            </ul>
          </div>
        </div>
        <p className="text-slate-700 leading-relaxed mt-8">
          RestoLink offers a user-friendly platform with a focus on efficient connections.
        </p>
      </div>
    </div>
  );
}